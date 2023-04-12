import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModal1Content } from 'src/app/header/header.component';

@Component({
  // car-modal
  selector: 'app-project-page',
  templateUrl: './dialog-car.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class NgbdModalProjectContentCar {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
@Component({
  // thermal-imager-modal
  selector: 'app-project-page',
  templateUrl: './dialog-thermal-imager.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class NgbdModalProjectContentThermalImager {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
@Component({
  // humanitarian-aid-modal
  selector: 'app-project-page',
  templateUrl: './dialog-humanitarian-aid.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class NgbdModalProjectContentHumanitarianAid {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
@Component({
  // drone-modal
  selector: 'app-project-page',
  templateUrl: './dialog-drone.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class NgbdModalProjectContentDrone {
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

  openCar() {
    this.modalService.open(NgbdModalProjectContentCar, {
      windowClass: 'my-class',
    });
  }
  openThermalImager() {
    this.modalService.open(NgbdModalProjectContentThermalImager, {
      windowClass: 'my-class',
    });
  }
  openHumanitarianAid() {
    this.modalService.open(NgbdModalProjectContentHumanitarianAid, {
      windowClass: 'my-class',
    });
  }
  openDrone() {
    this.modalService.open(NgbdModalProjectContentDrone, {
      windowClass: 'my-class',
    });
  }
}
