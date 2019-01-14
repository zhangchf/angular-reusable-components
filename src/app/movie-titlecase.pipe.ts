import { PipeTransform, Pipe } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Pipe({
    name: "movietitlecase"
})
export class MovieTitleCasePipe implements PipeTransform {

    transform(value: string, exceptions: string[]) {
        if (exceptions === undefined) {
            exceptions = [];
        }
        return value.split(" ").map((cur, index) => {
            cur = cur.toLowerCase();
            if (!exceptions.includes(cur) || index == 0) {
                return cur.slice(0,1).toUpperCase() + cur.slice(1);
            } else {
                return cur;
            }
        }).join(" ");
    }

}