import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestiondetailsComponent } from './suggestiondetails.component';

describe('SuggestiondetailsComponent', () => {
  let component: SuggestiondetailsComponent;
  let fixture: ComponentFixture<SuggestiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestiondetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
