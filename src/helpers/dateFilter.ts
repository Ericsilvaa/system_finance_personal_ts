import { Item } from "../types/Item";
// lista de funções irá fazer filtragens baseada na DATA



// CurrentMonth
export const getCurrentMonth = () => {
  let today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}`
}

// filtered List
export const FilterListByMonth = (list: Item[], date: string): Item[] => {
  // let newList: Item[] = []
  const [year, month] = date.split('-')

  const newList = list.filter(item => item.date.getFullYear() === parseInt(year) && item.date.getMonth() + 1 === parseInt(month))

  return newList
}


// formatDate
export const formatDate = (date: Date): string => {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())

  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return `${months[parseInt(month) - 1]} de ${year}`;

}

export const newDateAdjusted = (dateField: string) => {
  let [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}
