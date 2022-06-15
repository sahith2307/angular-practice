import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) myChild: any;
  names = [
    { name: 'sureyt', age: 24 },
    { name: 'guryt', age: 24 },
    { name: 'pureShut', age: 24 },
    { name: 'ghuty', age: 24 },
    { name: 'orptiom', age: 24 },
  ];
  switchObject = { age: 10 };
  currentClasses: any;
  currentStyles: any;
  massageFromChild: string = '';
  dateToday: any = new Date();
  fontsize: number = 18;
  massage!: string;
  showMessage: boolean = false;
  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true,
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      color: 'red',
      'background-color': 'black',
    };
  }
  constructor(private cdr: ChangeDetectorRef) {}
  receiveMassage = (msg: any) => {
    this.massage = msg;
  };
  onClickBoolean = (event: any) => {
    console.log(this.showMessage);
    this.showMessage = !this.showMessage;
  };
  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.massageFromChild = this.myChild.massageFromChild;
    this.cdr.detectChanges();
  }
}
