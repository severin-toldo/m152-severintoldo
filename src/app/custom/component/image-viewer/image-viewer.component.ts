import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalService} from "ngx-bootstrap/modal";
import {ImageViewerModalComponent} from "./image-viewer-modal/image-viewer-modal.component";
import {ImageViewerImage} from "../../../model/image-viewer-image.model";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() public images: ImageViewerImage[];

  constructor(private bsModalService: BsModalService) {
  }

  public ngOnInit(): void {
  }

  public openImageViewerModal(image: ImageViewerImage) {
    const modalRef = this.bsModalService.show(ImageViewerModalComponent, {class: 'modal-lg'});
    modalRef.content.title = image.title;
    modalRef.content.src = image.src;
  }
}
