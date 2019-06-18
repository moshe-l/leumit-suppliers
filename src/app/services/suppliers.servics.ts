import { Injectable } from '@angular/core';
import { ISupplier } from "../models/ISupplier";
import { FormGroup } from "@angular/forms";

@Injectable()
export class SuppliersService {

    public suppliersList: ISupplier[] = [
        {
            id: '1',
            name: 'אבי',
            address: 'תל אביב',
            phoneNumber: '123',
            emailAddress: 'm@m',
            services: 'הובלה'
        },
        {
            id: '2',
            name: 'בני',
            address: 'תל אביב',
            phoneNumber: '123',
            emailAddress: 'm@m',
            services: 'הובלה'
        },
         {
            id: '3',
            name: 'גדי',
            address: 'תל אביב',
            phoneNumber: '123',
            emailAddress: 'm@m',
            services: 'הובלה'
        },
                {
            id: '4',
            name: 'דוד',
            address: 'תל אביב',
            phoneNumber: '123',
            emailAddress: 'm@m',
            services: 'הובלה'
        },
         {
            id: '5',
            name: 'יוני',
            address: 'תל אביב',
            phoneNumber: '123',
            emailAddress: 'm@m',
            services: 'הובלה'
        }
    ];


    constructor() {
    }



}