import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModal1Content } from 'src/app/header/header.component';

@Component({
  // 1modal
  selector: 'app-project-page',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class NgbdModalProjectContent {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent {
  modalsNumber = 0;

  constructor(private modalService: NgbModal) {
    this.modalService.activeInstances.subscribe((list) => {
      this.modalsNumber = list.length;
    });
  }

  open() {
    this.modalService.open(NgbdModalProjectContent, {
      windowClass: 'my-class',
    });
  }
}
