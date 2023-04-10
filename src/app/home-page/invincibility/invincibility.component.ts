import { Component } from '@angular/core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invincibility',
  templateUrl: './invincibility.component.html',
  styleUrls: ['./invincibility.component.css'],
})
export class InvincibilityComponent {
  faFacebookF = faFacebookF;
  faPaperPlane = faPaperPlane;
  faInstagram = faInstagram;
}
