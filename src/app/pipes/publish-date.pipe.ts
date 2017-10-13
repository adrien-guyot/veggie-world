import { Pipe, PipeTransform } from '@angular/core';
import * as format from 'date-fns/format';
import * as frLocale from 'date-fns/locale/fr';

@Pipe({
  name: 'publishDate'
})

export class PublishDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return format(new Date(value), 'DD/MM/YYYY', { locale: frLocale });
  }
}