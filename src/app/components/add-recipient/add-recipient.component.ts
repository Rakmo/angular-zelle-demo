import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipient } from 'src/app/Recipient';
import { UiService } from 'src/app/services/ui.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css'],
})
export class AddRecipientComponent implements OnInit {
  addRecipientForm!: FormGroup;
  showAddRecipientForm: boolean = false;
  subscription?: Subscription;

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
            /^(\d{10}|\d{3}-\d{3}-\d{4}|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
          ),
        ],
      ],
    });
  }

  onSubmit() {
    const newRecipient: Recipient = {
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      token: this.token?.value,
    };

    // trigger add recipient service
    this.onAddRecipient.emit(newRecipient);

    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRecipientForm = value));

    // Reset form group fields
    this.addRecipientForm.reset();
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
