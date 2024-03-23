import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeMe]',
  standalone: true
})
export class ChangeMeDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor ='red'
    this.el.nativeElement.style.color='green'
    this.el.nativeElement.innerText = 'I am changed'
  }

}
