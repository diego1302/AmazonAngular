import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users2CardsComponent } from './users2-cards.component';

describe('Users2CardsComponent', () => {
  let component: Users2CardsComponent;
  let fixture: ComponentFixture<Users2CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Users2CardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Users2CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
