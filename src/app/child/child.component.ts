import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() childMassage!: string;
  @Input() size!: number;
  phoneNumber?: string;
  number2?: string;
  @Output() receiver = new EventEmitter<string>();
  @Output() sizeChange = new EventEmitter<number>();
  getPhoneNum = (value: string) => {
    this.phoneNumber = value;
  };
  massageFromChild: string = 'name me';
  increment = () => {
    this.resize(1);
  };
  decrement = () => {
    this.resize(-1);
  };
  resize = (value: number) => {
    this.size = this.size - value;
    this.sizeChange.emit(this.size);
  };
  // constructor() {}
  sendMassage = () => {
    this.receiver.emit('namesthe');
  };
  ngOnInit(): void {}
}
