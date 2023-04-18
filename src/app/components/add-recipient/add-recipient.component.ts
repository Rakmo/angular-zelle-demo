import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipient } from 'src/app/Recipient';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css'],
})
export class AddRecipientComponent implements OnInit {
  firstName?: string;
  lastName?: string;
  token?: string;
  isFriendOrFamily: boolean = false;
  showAddRecipientForm: boolean = false;
  subscription?: Subscription;

  @Output() onAddRecipient: EventEmitter<Recipient> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecipientForm = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstName || !this.lastName || !this.token) {
      alert('Please enter values for mandatory field(s)');
      return;
    }

    const newRecipient: Recipient = {
      firstName: this.firstName,
      lastName: this.lastName,
      token: this.token,
      isFriendOrFamily: this.isFriendOrFamily,
    };

    this.onAddRecipient.emit(newRecipient);

    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecipientForm = value));

    this.firstName = '';
    this.lastName = '';
    this.token = '';
    this.isFriendOrFamily = false;
  }
}
