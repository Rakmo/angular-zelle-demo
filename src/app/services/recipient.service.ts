import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { RECIPIENTS } from 'src/app/mock-recipients'; // mock-data
import { Recipient } from 'src/app/Recipient'; // interface

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  private apiURL = 'http://localhost:5000/recipients';

  constructor(private http: HttpClient) {}

  getRecipients(): Observable<Recipient[]> {
    return this.http.get<Recipient[]>(this.apiURL);
  }

  addRecipient(recipient: Recipient): Observable<Recipient> {
    return this.http.post<Recipient>(this.apiURL, recipient, httpOptions);
  }

  toggleFriendFamilyFlag(recipient: Recipient): Observable<Recipient> {
    const putUrl = `${this.apiURL}/${recipient.id}`;
    return this.http.put<Recipient>(putUrl, recipient, httpOptions);
  }

  deleteRecipient(recipient: Recipient): Observable<Recipient> {
    const deleteUrl = `${this.apiURL}/${recipient.id}`;
    return this.http.delete<Recipient>(deleteUrl);
  }
}
