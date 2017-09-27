import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { BackendClientService } from './service/backend-client-service';
import { CustomerComponent } from './customer/customer.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BackendClientService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
