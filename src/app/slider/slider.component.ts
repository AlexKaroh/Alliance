import {
  Component,
  Input,
  HostListener,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInterface } from 'src/types/slide.interface';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', '../../styles.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('sliderLine', { static: true }) sliderLine: ElementRef;
  @Input() slides: SlideInterface[] = [];

  isDragging = false;
  startX = 0;
  currentX = 0;
  defaultTouch = { x: 0, y: 0, time: 0 };
  offset = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.goToPrevious();
    }, 1000);
    setTimeout(() => {
      this.goToNext();
    }, 2000);
  }

  goToNext() {
    this.offset += 80;
    if (this.offset > 320) {
      this.offset = 0;
    }
    this.sliderLine.nativeElement.style.left = -this.offset + 'em';
  }

  goToPrevious() {
    this.offset -= 80;
    if (this.offset < 0) {
      this.offset = 320;
    }
    this.sliderLine.nativeElement.style.left = -this.offset + 'em';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            this.goToPrevious();
          } else {
            this.goToNext();
          }
        }
      }
    }
  }
}
