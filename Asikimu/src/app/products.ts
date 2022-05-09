export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Harry Potter and the Chamber of Secrets.',
      price: 799,
      description: 'Harry and friends return to Hogwarts with a bang — the bang of a flying Ford Anglia as it crashes into the Whomping Willow, that is.'
    },
    {
      id: 2,
      name: 'Harry Potter and the Prisoner of Azkaban',
      price: 699,
      description: 'As a result, swarms of Dementors — dark, faceless beings that “suck the soul” out of their victims and serve as the guards of Azkaban — infiltrate'
    },
    {
      id: 3,
      name: 'Harry Potter and the Goblet of Fire',
      price: 299,
      description: 'Harry returns to Hogwarts for his fourth year of school'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */