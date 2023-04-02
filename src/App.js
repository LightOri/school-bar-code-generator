import "./App.css";
import { useState } from "react";
import { Box, FormControlLabel, Switch, TextField } from "@mui/material";

import BarcodeItems from "./components/BarcodeItems/BarcodeItems";

function App() {
  const [rowsCount, setRowsCount] = useState(1);
  const [elementsInRow, setElementsInRow] = useState(1);
  const [columnsCount, setColumnsCount] = useState(1);
  const [displayLabel, setDisplayLabel] = useState(true);
  const [displayValue, setDisplayValue] = useState(true);

  return (
    <div className="App">
      <Box my={3} width="100%">
        <TextField
          label="Кількість рядків"
          value={rowsCount}
          type="number"
          inputProps={{ min: 1, max: 100000 }}
          onChange={(event) => {
            setRowsCount(event.target.value);
          }}
          sx={{ minWidth: 200 }}
        />
        <TextField
          label="Кількість елементів в рядку"
          value={elementsInRow}
          type="number"
          inputProps={{ min: 1, max: 100000 }}
          onChange={(event) => {
            setElementsInRow(event.target.value);
          }}
          sx={{ ml: 3, minWidth: 200 }}
        />
        <TextField
          label="Кількість стовпців"
          value={columnsCount}
          type="number"
          inputProps={{ min: 1, max: 4 }}
          onChange={(event) => {
            setColumnsCount(event.target.value);
          }}
          sx={{ ml: 3, minWidth: 200 }}
        />
        <FormControlLabel
          label="Показати текст"
          labelPlacement="top"
          control={<Switch defaultChecked color="primary" />}
          value={displayLabel}
          onChange={(e) => {
            setDisplayLabel(!displayLabel);
          }}
        />
        <FormControlLabel
          label="Показати цифри"
          labelPlacement="top"
          control={<Switch defaultChecked color="warning" />}
          value={displayValue}
          onChange={(e) => {
            setDisplayValue(!displayValue);
          }}
        />
      </Box>
      <BarcodeItems
        rowsCount={rowsCount}
        elementsInRow={elementsInRow}
        columnsCount={columnsCount}
        displayLabel={displayLabel}
        displayValue={displayValue}
      />
    </div>
  );
}

export default App;
