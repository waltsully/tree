import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-formworkorder',
  templateUrl: './formworkorder.component.html',
  styleUrls: ['./formworkorder.component.scss']
})
export class FormWorkOrderComponent implements OnInit {
public isInputMode = true;
public workOrderNumber = '999999';
public userList: Array<string> = ['Joe Smith', 'Walter Sully', 'Harry Potter'];

// Model
public WorkOrderNumber: number;
public EnteredBy: string;
public DateEntered: Date;
public TimeEntered: Time;
public Category: string;
public KeyWords: string;


  constructor() { }

  ngOnInit() {
  }

}
