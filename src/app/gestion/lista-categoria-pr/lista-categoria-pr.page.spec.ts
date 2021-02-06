import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCategoriaPrPage } from './lista-categoria-pr.page';

describe('ListaCategoriaPrPage', () => {
  let component: ListaCategoriaPrPage;
  let fixture: ComponentFixture<ListaCategoriaPrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCategoriaPrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCategoriaPrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
