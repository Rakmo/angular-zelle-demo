import { Component, OnInit } from '@angular/core';

import { Recipient } from 'src/app/Recipient'; // interface
import { RecipientService } from 'src/app/services/recipient.service'; // mock service

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css'],
})
export class RecipientsComponent implements OnInit {
  recipients: Recipient[] = [];

  constructor(private recipientService: RecipientService) {}

  // read / get operation
  ngOnInit(): void {
    this.recipientService
      .getRecipients()
      .subscribe((recipients) => (this.recipients = recipients));
  }

  // create operation
  addRecipient(recipient: Recipient) {
    this.recipientService
      .addRecipient(recipient)
      .subscribe((recipient) => this.recipients.push(recipient));
  }

  // update operation
  toggleFriendFamilyFlag(recipient: Recipient) {
    console.log('recipient.comp.ts toggle');
    recipient.isFriendOrFamily = !recipient.isFriendOrFamily;
    this.recipientService.toggleFriendFamilyFlag(recipient).subscribe();
  }

  // delete operation
  deleteRecipient(recipient: Recipient) {
    this.recipientService
      .deleteRecipient(recipient)
      .subscribe(
        () =>
          (this.recipients = this.recipients.filter(
            (r) => r.id !== recipient.id
          ))
      );
  }
}
