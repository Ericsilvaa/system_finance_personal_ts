import * as C from "./styles";
import React, { useState } from "react";

import { Item } from "../../types/Item";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={dateField}
          onChange={({ target }) => setDateField(target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select>
          <>
            <option></option>
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Titulo</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          onChange={({ target }) => setTitleField(target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueField}
          onChange={({ target }) => setValueField(parseFloat(target.value))}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};

export default InputArea;
