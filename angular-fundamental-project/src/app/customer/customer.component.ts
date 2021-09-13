import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { ICustomer } from '../models/customer.interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  title: string = "Customer Management System";

  // Working with Customer Object
  // customerObj: any = {
  //   CustomerCode: 1001,
  //   CustomerName: "King Kochhar",
  //   CustomerAmount: 12000
  // };

  // Working with Customer Class
  // custObj: Customer = {
  //   CustomerCode: 1002,
  //   CustomerName: "Gautam Bhalla",
  //   CustomerAmount: 12000
  // };

  // Working with Customer Class
  // customer: Customer = new Customer();

  // Working with ICustomer Interface
  // customerData: ICustomer = {
  //   CustomerCode: 1004,
  //   CustomerName: 'Shreya Ghoshal',
  //   CustomerAmount: 40000
  // }

  customerObj: any = {
    CustomerCode: 1001,
    CustomerName: "King Kochhar",
    CustomerAmount: 12000
  };

}
