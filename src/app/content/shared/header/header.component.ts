import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() optionSelectedEmitter = new EventEmitter<string>();
  @Input() optionSelected: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(option: string) {
    this.optionSelectedEmitter.emit(option);
  }

}
