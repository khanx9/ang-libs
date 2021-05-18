import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLibsComponent } from './demo-libs.component';

describe('DemoLibsComponent', () => {
  let component: DemoLibsComponent;
  let fixture: ComponentFixture<DemoLibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
