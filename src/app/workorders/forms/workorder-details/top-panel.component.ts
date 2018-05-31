import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-toppanel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
public isInputMode = true;
public workOrderNumber = '999999';
public userList: Array<string> = ['Joe Smith', 'Walter Sully', 'Harry Potter'];


  constructor() { }

  ngOnInit() {
  }

}
