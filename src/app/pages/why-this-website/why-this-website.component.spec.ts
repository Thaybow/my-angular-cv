import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThisWebsiteComponent } from './why-this-website.component';

describe('WhyThisWebsiteComponent', () => {
  let component: WhyThisWebsiteComponent;
  let fixture: ComponentFixture<WhyThisWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyThisWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyThisWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
