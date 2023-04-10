import { Component } from '@angular/core';
import { NgbdModal1Content } from 'src/app/header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-goal',
  templateUrl: './our-goal.component.html',
  styleUrls: ['./our-goal.component.css'],
})
export class OurGoalComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
}
