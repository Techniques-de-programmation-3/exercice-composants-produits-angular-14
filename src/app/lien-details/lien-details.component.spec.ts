import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienDetailsComponent } from './lien-details.component';

describe('LienDetailsComponent', () => {
  let component: LienDetailsComponent;
  let fixture: ComponentFixture<LienDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
