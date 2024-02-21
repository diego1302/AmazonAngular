import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users2detailsComponent } from './users2details.component';

describe('Users2detailsComponent', () => {
  let component: Users2detailsComponent;
  let fixture: ComponentFixture<Users2detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Users2detailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Users2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
