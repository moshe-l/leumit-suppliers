import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSuppliersComponent } from "./pages/search-suppliers/search-suppliers.component";
import { SuppliersMaintenanceComponent } from "./pages/suppliers-maintenance/suppliers-maintenance.component";

const routes: Routes = [
   { path: 'search-suppliers', component: SearchSuppliersComponent },
   { path: 'supplier-maintanence',  component: SuppliersMaintenanceComponent },
   { path: 'supplier-maintanence/:id',  component: SuppliersMaintenanceComponent },
   { path: '' , redirectTo: 'search-suppliers', pathMatch: 'full'},
   { path: '**', redirectTo: 'search-suppliers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
