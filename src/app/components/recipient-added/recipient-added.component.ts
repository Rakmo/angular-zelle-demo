import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipient-added',
  templateUrl: './recipient-added.component.html',
  styleUrls: ['./recipient-added.component.css'],
})
export class RecipientAddedComponent implements OnInit {
  @Input() fullName?: string = '';
  @Input() token?: string = '';

  faTimes = faTimes;

  showAlert: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const recipientAdded = document.querySelector('.recipient-added');
      if (recipientAdded) {
        recipientAdded.classList.add('fade');
      }
      this.showAlert = false;
    }, 4000);
  }

  onDismiss(): void {
    this.showAlert = false;
  }
}
