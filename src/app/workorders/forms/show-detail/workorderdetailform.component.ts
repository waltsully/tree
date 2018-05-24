import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.scss']
})
export class DetailFormComponent implements OnInit {
public isInputMode = true;
public workOrderNumber = '999999';
public userList: Array<string> = ['Joe Smith', 'Walter Sully', 'Harry Potter'];


  constructor() { }

  ngOnInit() {
  }

}
