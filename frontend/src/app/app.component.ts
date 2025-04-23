import { Component, OnInit } from '@angular/core';
import { DataService, TempEntry } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entries: TempEntry[] = [];
  title = 'Health Tracker';
  newEntry: TempEntry = { name: '', temperature: null as any };  // default normal temp

  constructor(private dataService: DataService) { }

  sortEntries(entries: any[]): any[] {
    return entries.sort((a, b) => b.temperature - a.temperature);
  }


  getTempStatus(temp: number): string {
    if (temp < 35.5) return '🧊 Low';
    if (temp <= 37.5) return 'Normal';
    if (temp <= 38.9) return '🔥 Fever';
    return '🚨 High Fever';
  }

  getTempClass(temp: number): string {
    if (temp < 35.5) return 'low-temp';
    if (temp <= 37.5) return 'normal-temp';
    if (temp <= 38.9) return 'fever-temp';
    return 'high-fever-temp';
  }


  ngOnInit(): void {
    // Fetch existing entries on load
    this.dataService.getEntries().subscribe({
      next: data => this.entries = this.sortEntries(data),
      error: err => console.error('Error fetching entries', err)
    });
  }

  submitEntry(): void {
    if (!this.newEntry.name || this.newEntry.temperature == null) return;
    // Call the service to add a new entry
    this.dataService.addEntry(this.newEntry).subscribe({
      next: (res) => {
        // On success, push the new entry into our list (or refetch list)
        this.entries.push({ ...this.newEntry });
        this.entries = this.sortEntries(this.entries);
        // Clear the form for next input
        this.newEntry = { name: '', temperature: null as any };
      },
      error: err => {
        console.error('Error adding entry', err);
        // In a real app, show an error message to user
      }
    });
  }
}
