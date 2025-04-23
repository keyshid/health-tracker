import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TempEntry {
  name: string;
  temperature: number;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private API_URL = '/api';
  // private API_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
  getEntries(): Observable<TempEntry[]> {
    return this.http.get<TempEntry[]>(`${this.API_URL}/entries`);
  }

  addEntry(entry: TempEntry): Observable<any> {
    return this.http.post(`${this.API_URL}/entries`, entry);
  }
}
