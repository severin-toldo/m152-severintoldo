import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormatsSoundComponent } from './file-formats-sound.component';

describe('FileFormatsSoundComponent', () => {
  let component: FileFormatsSoundComponent;
  let fixture: ComponentFixture<FileFormatsSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileFormatsSoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormatsSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
