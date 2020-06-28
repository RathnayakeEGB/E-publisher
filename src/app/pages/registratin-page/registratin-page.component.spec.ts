import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratinPageComponent } from './registratin-page.component';

describe('RegistratinPageComponent', () => {
  let component: RegistratinPageComponent;
  let fixture: ComponentFixture<RegistratinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
