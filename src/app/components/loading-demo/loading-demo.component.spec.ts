import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDemoComponent } from './loading-demo.component';

describe('LoadingDemoComponent', () => {
  let component: LoadingDemoComponent;
  let fixture: ComponentFixture<LoadingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
