import {Pipe} from '@angular/core';
import {KeyValuePipe} from '@angular/common';

const keepOrder = (a, b) => a;

@Pipe({
  name: 'defaultOrderKeyvalue'
})
export class DefaultOrderKeyvaluePipe extends KeyValuePipe {

  public transform(value, compareFn = keepOrder) {
    return super.transform(value, compareFn);
  }

}
