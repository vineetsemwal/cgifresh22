import { Pipe, PipeTransform } from "@angular/core";
import { TestBed } from "@angular/core/testing";

/**
 *  finds a substring in a string based on index
 */

@Pipe({name:"substring"})
export class SubstringPipe implements PipeTransform{

  transform(input: any, ...args:number[] ) {
    const text:string=""+input;
    const startIndex=args[0]
    const endIndex=args[1];
    if(endIndex==undefined){
    const substr=text.substring(startIndex);
     return substr;
    }

    const substr=text.substring(startIndex,endIndex);
     return substr;


  }




}
