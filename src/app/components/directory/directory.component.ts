import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Employees} from '../../../assets/data/employees';
import { Employee } from 'src/app/models/Employee';
declare var $: any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  public employees: Employee[] = Employees;
  public currentEmployee: Employee;

  constructor() {
    console.log(this.employees);
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    $('.ui.modal').modal();
  }

  openModal(employee: Employee) {
    this.currentEmployee  = employee;
    console.log('here');
    $('.ui.modal').modal('setting', 'transition', 'fade up').modal('show');
  }


}
