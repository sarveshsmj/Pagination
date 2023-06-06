import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnadicompoComponent } from './cnadicompo.component';

describe('CnadicompoComponent', () => {
  let component: CnadicompoComponent;
  let fixture: ComponentFixture<CnadicompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnadicompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnadicompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
