import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormatsImageComponent } from './file-formats-image.component';

describe('FileFormatsImageComponent', () => {
  let component: FileFormatsImageComponent;
  let fixture: ComponentFixture<FileFormatsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileFormatsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormatsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
