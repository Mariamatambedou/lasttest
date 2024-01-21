import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // Fournissez les arguments nécessaires lors de l'instanciation de Employee
  employee: Employee = new Employee('Prénom', 'Nom', 'email@example.com');

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    // Vous pouvez ajouter ici toute logique d'initialisation nécessaire
  }
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);

  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
