import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-model',
  templateUrl: './success-model.component.html',
  styleUrls: ['./success-model.component.css','../modal-shared.component.css']
})
export class SuccessModelComponent implements OnInit {

  @Input() public modalHeaderText: string;
  @Input() public modalBodyText: string;
  @Input() public okButtonText: string;
  @Output() public redirectOnOK = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emmitEvent(){
    this.redirectOnOK.emit();
  }

}
