import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibroComponent } from './addlibro.component';

describe('AddlibroComponent', () => {
  let component: AddlibroComponent;
  let fixture: ComponentFixture<AddlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddlibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
