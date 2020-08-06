import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop-down-item',
  templateUrl: './drop-down-item.component.html',
  styleUrls: ['./drop-down-item.component.scss'],
})
export class DropDownItemComponent {
  @Input('expanded') expanded : boolean = false;
  @Input('size') size : string = '';
  @Input('fill') fill : string;
  @Input('color') color : string = 'primary';
  @ViewChild('holder') div:any;
  @ViewChild('arrow') arrow:any;

  constructor() { }

  ngAfterViewInit() {
    if(!this.expanded){
      this.div.nativeElement.parentElement.style.maxHeight='0px'
      this.arrow.nativeElement.style.transform='rotate(180deg)';
    }
  }
  
  expand(){
    if(!this.expanded){
      this.div.nativeElement.parentElement.style.maxHeight=`${this.div.nativeElement.offsetHeight}px`;
      this.arrow.nativeElement.style.transform='rotate(0)';
      this.expanded=true;
    }else{
      this.div.nativeElement.parentElement.style.maxHeight='0px'
      this.arrow.nativeElement.style.transform='rotate(180deg)';
      this.expanded=false;
    }
  }

}
