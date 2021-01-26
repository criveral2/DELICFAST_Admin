import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifAdminPage } from './modif-admin.page';

describe('ModifAdminPage', () => {
  let component: ModifAdminPage;
  let fixture: ComponentFixture<ModifAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
