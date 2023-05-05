import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Recipient } from 'src/app/Recipient';
import { UiService } from 'src/app/services/ui.service';
import { formatPhoneNumber } from 'src/app/utilities/format-utils';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css'],
})
export class AddRecipientComponent implements OnInit {
  addRecipientForm!: FormGroup;
  newRecipient: Recipient = { firstName: '', lastName: '', token: '' };
  showAddRecipientForm: boolean = false;
  subscription?: Subscription;
  showLoading: boolean = false;
  showChild: boolean = false;
  fullName?: string = '';
  tokenToBeSent?: string = '';

  @Output() onAddRecipient: EventEmitter<Recipient> = new EventEmitter();

  constructor(private uiService: UiService, private formBuilder: FormBuilder) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecipientForm = value));
  }

  ngOnInit(): void {
    this.addRecipientForm = this.formBuilder.group({
      firstName: ['', [Validators.pattern(/^[a-zA-Z ]+$/)]],
      lastName: ['', [Validators.pattern(/^[a-zA-Z ]+$/)]],
      token: [
        '',
        [
          Validators.pattern(
            /^(\d{10}|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

            // |\d{3}-\d{3}-\d{4} for 111-555-6666
          ),
        ],
      ],
    });
  }

  onSubmit() {
    this.newRecipient = {
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      token: this.token?.value,
    };

    this.toggleAddRecipient();

    this.showLoading = true;

    this.fullName = `${this.firstName?.value} ${this.lastName?.value}`;
    this.tokenToBeSent = `${formatPhoneNumber(this.token?.value)}`;

    this.setFlagTrueWithDelay();

    // Reset form group fields
    this.addRecipientForm.reset();
  }

  toggleAddRecipient() {
    this.uiService.toggleAddRecipient();
  }

  setFlagTrueWithDelay(): void {
    setTimeout(() => {
      this.showChild = true;
      this.showLoading = false;

      // trigger add recipient service
      this.onAddRecipient.emit(this.newRecipient);
    }, 3000);
  }

  get firstName() {
    return this.addRecipientForm.get('firstName');
  }

  get lastName() {
    return this.addRecipientForm.get('lastName');
  }

  get token() {
    return this.addRecipientForm.get('token');
  }
}
