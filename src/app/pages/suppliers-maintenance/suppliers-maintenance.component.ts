import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { first } from 'node_modules/rxjs/operators'
import { ISupplier } from "../../models/ISupplier";
import { SuppliersService } from "../../services/suppliers.servics";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-suppliers-maintenance',
  templateUrl: './suppliers-maintenance.component.html',
  styleUrls: ['./suppliers-maintenance.component.css']
})
export class SuppliersMaintenanceComponent {

  public maintenanceState: any = maintenanceState;
  state: maintenanceState;  
  selectedSupplier: ISupplier;
  maitenanceForm : FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, public svc: SuppliersService) {
    this.route.params.pipe(
      first()
    ).subscribe((params: Params) => {
      var id = params['id'];
      if (id) {
        this.state = maintenanceState.edit;
        this.selectedSupplier = this.svc.suppliersList.filter(s => s.id == id)[0];   
        if(!this.selectedSupplier)
        this.state = maintenanceState.add;
      }
      else {
        this.state = maintenanceState.add;     
      }      
    });
    this.setForm();
  }


  setForm(){
   this.maitenanceForm = new FormGroup({
    id: new FormControl(
     this.state == maintenanceState.add ? (this.svc.suppliersList.length + 1).toString() : this.getDefaultValue('id')
    ),
    name: new FormControl(this.getDefaultValue('name')),
    address: new FormControl(this.getDefaultValue('address')),
    phoneNumber: new FormControl(this.getDefaultValue('phoneNumber')),
    emailAddress: new FormControl(this.getDefaultValue('emailAddress')),
    services: new FormControl(this.getDefaultValue('services')),
  });
  }
  getDefaultValue(filedName) : string {             
   if(this.state == maintenanceState.add)
     return '';
   else
    return this.selectedSupplier[filedName];
  }
  
  addOrUpdate(){
    if(this.state == maintenanceState.add){
       this.svc.suppliersList.push(this.maitenanceForm.value);
       this.setForm();
    }
    
    else if(this.state == maintenanceState.edit){
       let itemIndex = this.svc.suppliersList.findIndex(item => item.id == this.selectedSupplier.id);
       this.svc.suppliersList[itemIndex] = this.selectedSupplier = this.maitenanceForm.value;
    }
    alert("הפעולה בוצעה בהצלחה!");  

  }
  

}
export enum maintenanceState {
  view, edit, add
}
