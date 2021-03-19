import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormatsVideoComponent } from './file-formats-video.component';

describe('FileFormatsVideoComponent', () => {
  let component: FileFormatsVideoComponent;
  let fixture: ComponentFixture<FileFormatsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileFormatsVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormatsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
