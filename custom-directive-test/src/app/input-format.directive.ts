import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  @HostListener('focus') onFocus()
  {
    console.log("FOCUSED");
  }

  @HostListener('blur') onBlur()
  {
    let value:string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
    console.log("BLURRED");
  }

  constructor(private el:ElementRef) { 

  }

}
