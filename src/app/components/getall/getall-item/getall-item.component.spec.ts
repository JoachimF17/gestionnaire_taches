import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallItemComponent } from './getall-item.component';

describe('GetallItemComponent', () => {
  let component: GetallItemComponent;
  let fixture: ComponentFixture<GetallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
