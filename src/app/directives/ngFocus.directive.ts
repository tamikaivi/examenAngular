import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {

  @Output() appNgFocus = new EventEmitter();

  @HostListener('document:click', ['$event','$event.target'])
  
  clickOutside(event, eventTarget){
    console.log('CLICKCLICK',this.el.nativeElement.contains(eventTarget))

    const aux = this.el.nativeElement.contains(eventTarget);

    if(!aux){
      this.appNgFocus.emit('se hizo click')
    }
  }
  
  constructor(private el: ElementRef) { }

}
