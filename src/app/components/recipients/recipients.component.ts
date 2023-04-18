import { Component, OnInit } from '@angular/core';
import { RECIPIENTS } from 'src/app/mock-recipients'; // mock-data
import { Recipient } from 'src/app/Recipient'; // interface

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css'],
})
export class RecipientsComponent implements OnInit {
  recipients: Recipient[] = RECIPIENTS;

  constructor() {}

  ngOnInit(): void {}
}
