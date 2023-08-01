/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]',
  standalone: true,
})
export class PhoneFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmedValue = input.value.replace(/-/g, '');

    if (trimmedValue.length > 4) {
      trimmedValue =
        trimmedValue.substring(0, 4) + '-' + trimmedValue.substring(4);
    }
    if (trimmedValue.length > 7) {
      trimmedValue =
        trimmedValue.substring(0, 7) + '-' + trimmedValue.substring(7);
    }
    if (trimmedValue.length > 11) {
      trimmedValue =
        trimmedValue.substring(0, 11) + '-' + trimmedValue.substring(11);
    }
    if (trimmedValue.length > 14) {
      trimmedValue =
        trimmedValue.substring(0, 14) + '-' + trimmedValue.substring(14);
    }

    input.value = trimmedValue;
  }
}
