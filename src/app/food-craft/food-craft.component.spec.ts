import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCraftComponent } from './food-craft.component';

describe('FoodCraftComponent', () => {
  let component: FoodCraftComponent;
  let fixture: ComponentFixture<FoodCraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
