import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSuppliersComponent } from './pages/search-suppliers/search-suppliers.component';
import { SuppliersMaintenanceComponent } from './pages/suppliers-maintenance/suppliers-maintenance.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SuppliersService } from "./services/suppliers.servics";
import { FilterPipe } from "./pipes/filter-pipe";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchSuppliersComponent,
    SuppliersMaintenanceComponent,
    HeaderComponent,
    SideMenuComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SuppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
