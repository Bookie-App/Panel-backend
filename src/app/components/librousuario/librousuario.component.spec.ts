import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrousuarioComponent } from './librousuario.component';

describe('LibrousuarioComponent', () => {
  let component: LibrousuarioComponent;
  let fixture: ComponentFixture<LibrousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrousuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
