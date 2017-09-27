import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerComponent, Customer } from './customer/customer.component';
import { TableComponent } from './table/table.component';
import { BackendClientService } from './service/backend-client-service';
import { Element } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data : Element[] = [];
  
  @ViewChild(TableComponent)
  private tableComponent: TableComponent;

  ngOnInit() {
    this.renderTable();
  }

  constructor(private backendclient: BackendClientService) {
  }
  
  renderTable() {
    this.backendclient.get("http://localhost:8080/app/booking/current_bookings").subscribe(details => {
      this.data = details['bookingDetails'];
    });;
    this.tableComponent.refreshTable(this.data);
  }

  onBooking(customer: Customer) {
    this.backendclient.post("http://localhost:8080/app/booking/book",JSON.stringify(customer));
    this.renderTable();
  }
}
