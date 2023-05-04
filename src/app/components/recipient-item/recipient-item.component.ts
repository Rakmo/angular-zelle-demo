import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipient } from 'src/app/Recipient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipient-item',
  templateUrl: './recipient-item.component.html',
  styleUrls: ['./recipient-item.component.css'],
})
export class RecipientItemComponent implements OnInit {
  @Input() recipient: Recipient | undefined;
  @Output() onDeleteRecipient: EventEmitter<Recipient> = new EventEmitter();
  @Output() onToggleFriendFamilyMember: EventEmitter<Recipient> =
    new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(recipient: Recipient | undefined): void {
    this.onDeleteRecipient.emit(recipient);
  }

  onToggleFriendFamilyFlag(recipient: Recipient | undefined): void {
    console.log('recipient-item.comp.ts toggle');
    this.onToggleFriendFamilyMember.emit(recipient);
  }
}
