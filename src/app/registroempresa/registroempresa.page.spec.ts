import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroempresaPage } from './registroempresa.page';

describe('RegistroempresaPage', () => {
  let component: RegistroempresaPage;
  let fixture: ComponentFixture<RegistroempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
