import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddRecipient: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddRecipient(): void {
    this.showAddRecipient = !this.showAddRecipient;
    this.subject.next(this.showAddRecipient);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
