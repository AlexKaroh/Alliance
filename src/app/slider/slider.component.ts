/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInterface } from 'src/types/slide.interface';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', '../../styles.scss'],
})
export class SliderComponent {
  @Input() slides: SlideInterface[] = [];
  currentIndex = 0;
  isDragging = false;
  startX = 0;
  currentX = 0;
  defaultTouch = { x: 0, y: 0, time: 0 };

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentX = event.clientX;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.currentX = event.clientX;
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    if (this.isDragging) {
      const deltaX = this.currentX - this.startX;
      if (deltaX > 0) {
        this.goToPrevious();
      } else if (deltaX < 0) {
        this.goToNext();
      }
      this.isDragging = false;
    }
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: any) {
    const touch = event.touches[0] || event.changedTouches[0];

    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      const deltaX = touch.pageX - this.defaultTouch.x;
      const deltaTime = event.timeStamp - this.defaultTouch.time;

      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.goToNext();
          } else {
            this.goToPrevious();
          }
        }
      }
    }
  }
}
