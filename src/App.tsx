import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";

import "./App.css";
import { FilterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

function App() {
  // lista geral!
  const [list, setList] = useState(items);
  // lista filtrada
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  // others
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  // REFATORAR ESSA FUNÇÃO
  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);






  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financeiro Pessoal</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* AREA 1 = GENERAL INFO */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* AREA 2 = AREA PUT INFORMATIONO */}

        {/* AREA 3 =  TABLE LIST  */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
