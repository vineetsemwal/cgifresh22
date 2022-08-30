import { Pipe, PipeTransform } from "@angular/core";


@Pipe(
  {name:"length"}
  )
export class LengthPipe implements PipeTransform{
  transform(value: any):number {
   const text:string=""+value;
   const result=text.length;
   return result;
  }

}
