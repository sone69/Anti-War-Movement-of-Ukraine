import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: () => [
          {
            size: 0.2857,
            spacing: 0,
          },
          {
            size: 0.2857,
            spacing: 0,
          },
          {
            size: 0.2857,
            spacing: 0,
          },
          {
            size: 0.2857,
            spacing: 0,
          },
          {
            size: 0.2857,
            spacing: 0,
          },
        ],
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
