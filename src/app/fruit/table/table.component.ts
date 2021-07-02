import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  // set fruits array
  public dataList: Array<Fruit> = [
    {
      id: 1,
      name: 'Apple', 
      price: 1.00,
      weight: 300,
      color: 'yellow',
    },
    {
      id: 2,
      name: 'Grapes', 
      price: 0.50,
      weight: 250,
      color: 'purple',
    },
    {
      id: 3,
      name: 'Orange', 
      price: 2.00,
      weight: 200,
      color: 'orange',
    },
    {
      id: 4,
      name: 'Watermelon', 
      price: 5.00,
      weight: 1000,
      color: 'green',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }  
}

// define Fruit type
export interface Fruit {
  id: number;
  name: string;
  price: number;
  weight: number;
  color: string;
}
