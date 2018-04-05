import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsIllustrationComponent } from './comics-illustration.component';

describe('ComicsIllustrationComponent', () => {
  let component: ComicsIllustrationComponent;
  let fixture: ComponentFixture<ComicsIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
