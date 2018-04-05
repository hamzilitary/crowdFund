import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceTechComponent } from './science-tech.component';

describe('ScienceTechComponent', () => {
  let component: ScienceTechComponent;
  let fixture: ComponentFixture<ScienceTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
