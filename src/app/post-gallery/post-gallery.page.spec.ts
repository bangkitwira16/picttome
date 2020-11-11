import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostGalleryPage } from './post-gallery.page';

describe('PostGalleryPage', () => {
  let component: PostGalleryPage;
  let fixture: ComponentFixture<PostGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
