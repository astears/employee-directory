import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectoryComponent implements OnInit {
  public employees: Employee[];
  public showError = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(values) {
    if (values.username.toLowerCase() === 'rcampos' && values.password.toLowerCase() === 'rcampos' ) {
      this.router.navigate(['/directory']);
    }
    else {
      this.showError = true;
      setTimeout(
        () => {
          this.showError = false;
        }, 3000
      )
    }
  }

}
