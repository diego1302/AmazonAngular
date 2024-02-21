import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users2screenComponent } from './users2screen.component';

describe('Users2screenComponent', () => {
  let component: Users2screenComponent;
  let fixture: ComponentFixture<Users2screenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Users2screenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Users2screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
