import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { DirectoryComponent } from './components/directory/directory.component';

const appRoutes: Routes = [
  {path: '', component: EmployeeDirectoryComponent, pathMatch: 'full'},
  {path: 'directory', component: DirectoryComponent, pathMatch: 'full'},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDirectoryComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
