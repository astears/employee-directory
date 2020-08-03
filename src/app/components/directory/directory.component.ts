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
  public displayedEmployees: Employee[] = Employees;
  public departments = departments;
  public lobs = lobs;
  public regions = regions;
  public titles = titles;
  public currentEmployee: Employee;

  constructor() {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].imgUrl === undefined) {
        this.employees[i].imgUrl = '../../../assets/avatars/avatar (' + this.getNumber() + ').png';
      }
    }
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown({
      onRemove: function (value, text, choice) {
        console.log(value, text, choice);
    }
    });
    $('.ui.modal').modal();
  }

  openModal(employee: Employee) {
    this.currentEmployee  = employee;
    $('.ui.modal').modal('setting', 'transition', 'fade up').modal('show');
  }

  getNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  filterEmployees(name: string, departments: string, businesses: string, regions: string, positions: string) {

    this.displayedEmployees = this.employees.filter(
      (currEmployee: Employee) => {
        if (name !== "") {
          let fullName = currEmployee.firstName + currEmployee.lastName;
          let found = fullName.toLowerCase().indexOf(name.toLowerCase());
          if (found === -1) {
            return false;
          }
        }
        if (departments !== "") {
          let departmentArr = departments.split(",");
          let bool = false;

          for (let i = 0; i < departmentArr.length; i++) {
            if (departmentArr[i] === currEmployee.department) {
              bool = true;
            }
          }
          if (bool === false) {return false}
        }

        if (businesses !== "") {
          let businessesArr = businesses.split(",");
          let bool = false;

          for (let i = 0; i < businessesArr.length; i++) {
            if (businessesArr[i] === currEmployee.lineOfBusiness) {
              bool = true;
            }
          }
          if (bool === false) {return false}
        }

        if (regions !== "") {
          let regionsArr = regions.split(",");
          let bool = false;

          for (let i = 0; i < regionsArr.length; i++) {
            if (regionsArr[i] === currEmployee.region) {
              bool = true;
            }
          }
          if (bool === false) {return false}
        }

        if (positions !== "") {
          let positionsArr = positions.split(",");
          let bool = false;

          for (let i = 0; i < positionsArr.length; i++) {
            if (positionsArr[i] === currEmployee.title) {
              bool = true;
            }
          }
          if (bool === false) {return false}
        }

        return true;
      })
  }

}
