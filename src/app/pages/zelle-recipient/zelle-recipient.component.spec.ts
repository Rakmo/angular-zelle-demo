import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZelleRecipientComponent } from './zelle-recipient.component';

describe('ZelleRecipientComponent', () => {
  let component: ZelleRecipientComponent;
  let fixture: ComponentFixture<ZelleRecipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZelleRecipientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZelleRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
