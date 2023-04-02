import { useEffect } from "react";
import JsBarcode from "jsbarcode";
import { Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function BarcodeItems({
  rowsCount,
  elementsInRow,
  columnsCount,
  displayLabel,
  displayValue,
}) {
  const rowsCountInt = rowsCount ? Number.parseInt(rowsCount) : 0;
  const elementsInRowInt = elementsInRow ? Number.parseInt(elementsInRow) : 1;
  const columnsCountInt = columnsCount ? Number.parseInt(columnsCount) : 1;

  const rowsCountArr = new Array(rowsCountInt).fill(null);
  const elementsInRowArr = new Array(elementsInRowInt).fill(null);

  useEffect(() => {
    rowsCountArr.forEach((item, i) => {
      JsBarcode(`#barcode${i}`, i + 1, { displayValue });
    });
  }, [rowsCountInt, rowsCountArr, displayValue]);

  return (
    <Grid2 container spacing={2}>
      {rowsCountArr.map((item, i) => {
        return (
          <Grid2
            key={i}
            xs={12 / columnsCountInt}
            sx={{ borderRight: "1px solid grey" }}
          >
            {displayLabel && (
              <Typography variant="caption" display="block">
                Група елементів: {i + 1}
              </Typography>
            )}
            {elementsInRowArr.map((ite, j) => {
              return <svg key={j} id={"barcode" + i} />;
            })}
            <Divider />
          </Grid2>
        );
      })}
    </Grid2>
  );
}

export default BarcodeItems;
