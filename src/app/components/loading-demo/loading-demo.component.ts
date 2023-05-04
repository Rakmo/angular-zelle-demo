import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const loadingAnimation = trigger('loadingAnimation', [
  state(
    'hidden',
    style({
      opacity: 0,
      display: 'none',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      display: 'block',
    })
  ),
  transition('hidden => visible', animate('500ms ease-in')),
  transition('visible => hidden', animate('500ms ease-out')),
]);

@Component({
  selector: 'app-loading-demo',
  templateUrl: './loading-demo.component.html',
  styleUrls: ['./loading-demo.component.css'],
  animations: [loadingAnimation],
})
export class LoadingDemoComponent implements OnInit {
  private isLoading: boolean = true;
  buttonLabel1 = 'Submit Order';
  buttonLabel2 = 'Submit Order';
  loadingText1 =
    '<i class="fa fa-circle-o-notch fa-spin"></i> Processing Order';
  loadingText2 = '<i class="fa fa-spinner fa-spin"></i> Processing Order';
  isLoading1 = false;
  isLoading2 = false;
  faCircleNotch = faCircleNotch;

  submitOrder(id: number) {
    if (id === 1) {
      this.isLoading1 = true;
      setTimeout(() => {
        this.isLoading1 = false;
      }, 8000);
    } else if (id === 2) {
      this.isLoading2 = true;
      setTimeout(() => {
        this.isLoading2 = false;
      }, 8000);
    }
  }
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
