import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: number): string {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (value === 0) {
      return 'zero';
    }
  
    if (value < 0) {
      return 'minus ' + this.transform(Math.abs(value));
    }
  
    let words = '';
  
    if (Math.floor(value / 1000)) {
      words += this.transform(Math.floor(value / 1000)) + ' thousand ';
      value %= 1000;
    }
  
    if (Math.floor(value / 100)) {
      words += ones[Math.floor(value / 100)] + ' hundred ';
      value %= 100;
    }
  
    if (value >= 20) {
      words += tens[Math.floor(value / 10)] + ' ';
      value %= 10;
    } else if (value >= 10) {
      words += teens[value - 10] + ' ';
      value = 0;
    }
  
    if (value > 0) {
      words += ones[value] + ' ';
    }
  
    return words.trim();
  }

}
