import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListapedidosPage } from './listapedidos.page';

describe('ListapedidosPage', () => {
  let component: ListapedidosPage;
  let fixture: ComponentFixture<ListapedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListapedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
