import { Component, OnInit, Input } from '@angular/core';
import { Recipient } from 'src/app/Recipient';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipient-item',
  templateUrl: './recipient-item.component.html',
  styleUrls: ['./recipient-item.component.css'],
})
export class RecipientItemComponent implements OnInit {
  @Input() recipient: Recipient | undefined;

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
