import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendClientService } from '../service/backend-client-service';

export interface Customer {
  name: string;
  longitude: string;
  lattitude: string;
}

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent {
    model: any = {};
    @Output() onBooking: EventEmitter<any> = new EventEmitter();

    constructor() {
        
    }

    book() {
        this.onBooking.emit(this.model);
        this.model = {};
    }
}
