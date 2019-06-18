import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ISupplier } from "../models/ISupplier";

@Pipe({
 name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
 transform(items: ISupplier[], text: string): any[] {
   if (!items) return [];
   if(!text) return items;
   
   return items.filter(it => it.name.includes(text) || it.id.toString() == text );
 }
}