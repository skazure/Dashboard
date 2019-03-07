import { Directive, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import * as $ from "jquery";
 
@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Output() public change = new EventEmitter();
 
  constructor(private elementRef: ElementRef) { }
 
  public ngOnInit() {
    (<any>$('.datepicker') ).datepicker({
      dateFormat: 'mm/dd/yy',
      changeYear: true,
      yearRange: "-100:+0",
      onSelect: (dateText: {}) => {
        this.change.emit(dateText);
      }
    });
  }
}