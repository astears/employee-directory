import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Employees} from '../../../assets/data/employees';
import { Employee } from 'src/app/models/Employee';
import {departments, lobs, regions, titles} from '../../../assets/data/dropdown-data'

declare var $: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  public employees: Employee[] = Employees;
  public departments = departments;
  public lobs = lobs;
  public regions = regions;
  public titles = titles;
  public currentEmployee: Employee;

  constructor() {
    console.log(this.employees);
    for (let i = 0; i < this.employees.length; i++) {
      this.employees[i].imgUrl = '../../../assets/avatars/avatar (' + this.getNumber() + ').png';
    }
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    $('.ui.modal').modal();
  }

  openModal(employee: Employee) {
    this.currentEmployee  = employee;
    $('.ui.modal').modal('setting', 'transition', 'fade up').modal('show');
  }

  getNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }


}
