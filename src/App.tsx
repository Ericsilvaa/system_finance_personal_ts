import { useEffect, useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';

import './App.css'
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';

function App() {
  // lista geral!
  const [list, setList] = useState(items)
  // lista filtrada
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  // others
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


useEffect(() => {
  setFilteredList(FilterListByMonth(list, currentMonth))



},[list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financeiro Pessoal</C.HeaderText>
      </C.Header>
        <C.Body>
          {/* AREA 1 = GENERAL INFO */}

          {/* AREA 2 = AREA PUT INFORMATIONO */}

          {/* AREA 3 =  TABLE LIST  */}
          <TableArea list={filteredList} />

        </C.Body>
    </C.Container>
  )
}

export default App
