import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpFieldsPage } from './sign-up-fields.page';

describe('SignUpFieldsPage', () => {
  let component: SignUpFieldsPage;
  let fixture: ComponentFixture<SignUpFieldsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpFieldsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFieldsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
