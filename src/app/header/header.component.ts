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
    <h4 class="modal-title" i18n="modal1|title">
      На що ви б хотіли зробити внесок ?
    </h4>
    <div class="modal-body">
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal1|button|car"
      >
        Автомобіль для ЗСУ
      </button>
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal1|button|thermal-imager"
      >
        Тепловізор
      </button>
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal1|button|humanitarian-aid"
      >
        Гуманітарна допомога
      </button>
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal1|button|drone"
      >
        Дрон
      </button>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn-next"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal1|button-next"
      >
        Далі
      </button>
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
      <button
        class="btn btn-how"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal2|button1"
      >
        Кредитна карта
      </button>
      <button
        class="btn btn-how"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal2|button2"
      >
        Банківський переказ
      </button>
      <button
        class="btn btn-how"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal2|button3"
      >
        PayPal
      </button>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn-next"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal2|button-next"
      >
        Далі
      </button>
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
    <h4 class="modal-title" i18n="modal3|title">Виберіть валюту переказу</h4>
    <div class="modal-body">
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal3|button1"
      >
        (UAH) UKRAINIAN HRYVNA
      </button>
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal3|button2"
      >
        (USD) US DOLLAR
      </button>
      <button
        class="btn btn-lg"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal3|button3"
      >
        (EU) EURO
      </button>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn-next"
        (click)="open()"
        (click)="activeModal.dismiss('Cross click')"
        i18n="modal3|button-next"
      >
        Далі
      </button>
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
          <div class="modal-card__title" i18n="modal4|card-title1">
            Номер карти
          </div>
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
            <div class="modal-card__title" i18n="modal4|card-title2">
              Термін дії
            </div>
            <input
              class="modal-card__number"
              placeholder="MM / YY"
              value="MM / YY"
            />
          </div>
          <div class="modal-card__item">
            <div class="modal-card__title" i18n="modal4|card-title3">CVV</div>
            <input class="modal-card__number" placeholder="000" value="000" />
          </div>
        </div>
      </div>
      <div class="modal-body__card">
        <div class="modal-body__title" i18n="modal4|body-title">
          Вкажіть суму пожертви
        </div>
        <div class="modal-body__input">
          <input class="modal-body__number" placeholder="0.00" value="0.00" />
          <input class="modal-body__text" placeholder="UAN" value="UAN" />
        </div>
        <div class="modal-body__footer">
          <button
            type="button"
            class="btn-next"
            (click)="open()"
            (click)="activeModal.dismiss('Cross click')"
            i18n="modal4|button-next"
          >
            Далі
          </button>
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
    <div class="check" (click)="activeModal.dismiss('Cross click')">
      <img src="assets/img/check.png" alt="" />
    </div>
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
  localesListUA = [{ code: 'ua', label: 'UA' }];
  localesListENG = [{ code: 'en', label: 'ENG' }];
}
