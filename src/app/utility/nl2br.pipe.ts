import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'nl2br'
})
export class NewLineToHtmlBreak implements PipeTransform {
    transform(value: string) {
    return value.replace(/\n/g, '<br>');
    }
}
