import { Directive, Input, ElementRef, HostListener } from '@angular/core';

import { Sort } from '../util/sort';


@Directive({
  selector: '[fruitSort]'
})
export class SortDirective {

  @Input() fruitSort!: Array<any>;


  constructor(private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const sort = new Sort();

    // get <th> DOM element
    const elem = this.targetElement.nativeElement;

    // get column order value
    const order = elem.getAttribute("data-order");

    // get column name
    const columnName = elem.getAttribute("data-name");

    // sort array based on column name and order
    if (order === "desc") {
      this.fruitSort.sort(sort.startSort(columnName, order));
      elem.setAttribute("data-order", "asc");
    } else {
      this.fruitSort.sort(sort.startSort(columnName, order));
      elem.setAttribute("data-order", "desc");
    }

  }

}