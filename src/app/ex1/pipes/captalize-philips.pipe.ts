import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhilips'
})
export class CaptalizePhilipsPipe implements PipeTransform {

  transform(value: string): string {
    let newValue = value.slice(0,1).toUpperCase() + value.slice(- value.length +1)
    return newValue;
  }

}
