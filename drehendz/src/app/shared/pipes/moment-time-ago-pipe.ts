import {Pipe, PipeTransform} from "@angular/core";
import { pipe } from 'rxjs';

declare var moment: any;


@Pipe ({
    name: "momentTimeAgo"
})

export class MomentTimeAgoPipe implements PipeTransform{
    transform(value: any, args?: any): any {
        return (
            moment (value)
            .from(new Date())
        );
    }
}