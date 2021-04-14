import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalService} from "ngx-bootstrap/modal";
import {ImageViewerModalComponent} from "./image-viewer-modal/image-viewer-modal.component";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() public title: string;
  @Input() public src: string;
  @Input() public thumbnail: string;

  @Output() public onImageLoaded = new EventEmitter<void>();


  constructor(private bsModalService: BsModalService) {
  }

  public ngOnInit(): void {
  }

  public openImageViewerModal() {
    const modalRef = this.bsModalService.show(ImageViewerModalComponent, {class: 'modal-lg'});
    modalRef.content.title = this.title;
    modalRef.content.src = this.src;
  }

  public onDataLoaded() {
    this.onImageLoaded.emit();
  }

}
