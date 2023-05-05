import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAddedComponent } from './recipient-added.component';

describe('RecipientAddedComponent', () => {
  let component: RecipientAddedComponent;
  let fixture: ComponentFixture<RecipientAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
