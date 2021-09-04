import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLostComponent } from './todo-lost.component';

describe('TodoLostComponent', () => {
  let component: TodoLostComponent;
  let fixture: ComponentFixture<TodoLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
