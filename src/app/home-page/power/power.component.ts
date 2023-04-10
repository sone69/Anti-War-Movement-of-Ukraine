import { Component } from '@angular/core';
import { NgbdModal1Content } from 'src/app/header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
})
export class PowerComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
