import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyVideoComponent } from './photography-video.component';

describe('PhotographyVideoComponent', () => {
  let component: PhotographyVideoComponent;
  let fixture: ComponentFixture<PhotographyVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
