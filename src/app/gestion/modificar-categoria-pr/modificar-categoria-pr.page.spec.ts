import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarCategoriaPrPage } from './modificar-categoria-pr.page';

describe('ModificarCategoriaPrPage', () => {
  let component: ModificarCategoriaPrPage;
  let fixture: ComponentFixture<ModificarCategoriaPrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCategoriaPrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarCategoriaPrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
