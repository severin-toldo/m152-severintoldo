import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-image-viewer-modal',
  templateUrl: './image-viewer-modal.component.html',
  styleUrls: ['./image-viewer-modal.component.scss']
})
export class ImageViewerModalComponent implements OnInit {

  @Input() public title: string;
  @Input() public src: string;


  constructor(private bsModalRef: BsModalRef) {
  }

  public ngOnInit(): void {
  }

  public onClose(): void {
    this.bsModalRef.hide();
  }

}
