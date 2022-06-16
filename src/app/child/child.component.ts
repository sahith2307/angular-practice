import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  id = this.route.snapshot.paramMap.get('id') || 0;
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
  constructor(private route: ActivatedRoute) {}
  sendMassage = () => {
    this.receiver.emit('namesthe');
  };
  ngOnInit(): void {}
}
