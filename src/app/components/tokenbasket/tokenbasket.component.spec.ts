import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenbasketComponent } from './tokenbasket.component';

describe('TokenbasketComponent', () => {
  let component: TokenbasketComponent;
  let fixture: ComponentFixture<TokenbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenbasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
