import { Pipe, PipeTransform } from "@angular/core";

/**
 * finds smallest number in array
 */

@Pipe(
  {name: "smallest"}
)
export class SmallestPipe implements PipeTransform{

  transform(numbers: number[])  :number{
    let smallest:number=numbers[0];

    for(let num of numbers ){
      if(num<smallest){
        smallest=num;
      }
    }

    return smallest;
  }



}
