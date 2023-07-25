import { Item } from "../types/Item";

export const items: Item[] = [
  // new Date(year, month, day)
  { date: new Date(2023, 6, 6), category: 'food', title: 'McDonalds', value: 32.12 },
  { date: new Date(2023, 6, 15), category: 'food', title: 'Burger King', value: 28 },
  { date: new Date(2023, 6, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
  { date: new Date(2023, 7, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
]