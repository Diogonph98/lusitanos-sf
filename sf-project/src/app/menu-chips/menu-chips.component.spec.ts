import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChipsComponent } from './menu-chips.component';

describe('MenuChipsComponent', () => {
  let component: MenuChipsComponent;
  let fixture: ComponentFixture<MenuChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuChipsComponent]
    });
    fixture = TestBed.createComponent(MenuChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
