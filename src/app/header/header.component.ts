import { Component } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPlay, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // 1modal
  selector: 'app-header',
  template: `
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      (click)="activeModal.dismiss('Cross click')"
    ></button>
    <h4 class="modal-title">На що ви б хотіли зробити внесок ?</h4>
    <div class="modal-body">
      <button class="btn btn-lg" (click)="open()">Лікарня в Бахмуті</button>
      <button class="btn btn-lg" (click)="open()">Лікарня в Бахмуті</button>
      <button class="btn btn-lg" (click)="open()">Лікарня в Бахмуті</button>
      <button class="btn btn-lg" (click)="open()">Лікарня в Бахмуті</button>
      <button class="btn btn-lg" (click)="open()">Лікарня в Бахмуті</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-next" (click)="open()">Далі</button>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class NgbdModal1Content {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  open() {
    this.modalService.open(NgbdModal2Content, { size: 'lg' });
  }
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
  faPlay = faPlay;
}
@Component({
  // 2modal
  selector: 'app-header',
  template: `
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      (click)="activeModal.dismiss('Cross click')"
    ></button>
    <div class="modal-body how">
      <button class="btn btn-how" (click)="open()">Кредитна карта</button>
      <button class="btn btn-how" (click)="open()">Банківський переказ</button>
      <button class="btn btn-how" (click)="open()">PayPal</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-next" (click)="open()">Далі</button>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class NgbdModal2Content {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  open() {
    this.modalService.open(NgbdModal3Content, { size: 'lg' });
  }
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
  faPlay = faPlay;
}
@Component({
  // 3modal
  selector: 'app-header',
  template: `
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      (click)="activeModal.dismiss('Cross click')"
    ></button>
    <h4 class="modal-title">Виберіть валюту переказу</h4>
    <div class="modal-body">
      <button class="btn btn-lg" (click)="open()">
        (UAH) UKRAINIAN HRYVNA
      </button>
      <button class="btn btn-lg" (click)="open()">(USD) US DOLLAR</button>
      <button class="btn btn-lg" (click)="open()">(EU) EURO</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-next" (click)="open()">Далі</button>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class NgbdModal3Content {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  open() {
    this.modalService.open(NgbdModal4Content, { size: 'lg' });
  }
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
  faPlay = faPlay;
}
@Component({
  // 4modal
  selector: 'app-header',
  template: `
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      (click)="activeModal.dismiss('Cross click')"
    ></button>
    <div class="modal-content">
      <div class="modal-card">
        <div
          class="modal-card__item"
          style="flex-grow:1; margin-top:13px;margin-left:38px;"
        >
          <div class="modal-card__title">Номер карти</div>
          <input
            class="modal-card__number"
            placeholder="7654 - 7896 - 0987 - 1234"
            value="7654 - 7896 - 0987 - 1234"
            style="width: 225px;"
          />
        </div>
        <div
          class="modal-card__footer"
          style="flex-grow:1;margin:45px 38px 35px;"
        >
          <div class="modal-card__item">
            <div class="modal-card__title">Термін дії</div>
            <input
              class="modal-card__number"
              placeholder="MM / YY"
              value="MM / YY"
            />
          </div>
          <div class="modal-card__item">
            <div class="modal-card__title">CVV</div>
            <input class="modal-card__number" placeholder="000" value="000" />
          </div>
        </div>
      </div>
      <div class="modal-body__card">
        <div class="modal-body__title">Вкажіть суму пожертви</div>
        <div class="modal-body__input">
          <input class="modal-body__number" placeholder="0.00" value="0.00" />
          <input class="modal-body__text" placeholder="UAN" value="UAN" />
        </div>
        <div class="modal-body__footer">
          <button type="button" class="btn-next" (click)="open()">Далі</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class NgbdModal4Content {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  open() {
    this.modalService.open(NgbdModal5Content, { size: 'lg' });
  }
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
  faPlay = faPlay;
}
@Component({
  // 5modal
  template: `
    <div class="check"><img src="../../../assets/img/check.png" alt="" /></div>
  `,
  styleUrls: ['./header.component.css'],
})
export class NgbdModal5Content {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  modalsNumber = 0;

  constructor(private modalService: NgbModal) {
    this.modalService.activeInstances.subscribe((list) => {
      this.modalsNumber = list.length;
    });
  }

  open() {
    this.modalService.open(NgbdModal1Content, { size: 'lg' });
  }
  menuIconVariable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
  ngOnInit(): void {}
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
  faPlay = faPlay;
}
