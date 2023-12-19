import { Box, Button } from "@mui/material";
import { useState } from "react";
import BubbleSort from "./algorithms/bubbleSort";
import SelectionSort from "./algorithms/selectionSort";
import InsertionSort from "./algorithms/insertionSort";

function Visualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [active, setActive] = useState(false);
  const ARRAY_LENGTH = 100;

  const generateArray = () => {
    const auxArray = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
      // Pushing random integers in the auxilary array to set main array
      auxArray.push(Math.floor(Math.random() * (500 - 5 + 1) + 5));
    }
    setArray(auxArray);
  };

  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        bgcolor={"black"}
      >
        <Button
          variant="outlined"
          color="success"
          onClick={generateArray}
          disabled={active}
          sx={{ margin: "10px", height: "100%", fontWeight: "bold" }}
        >
          Generate Array
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => window.location.reload()}
          // disabled={active}
          sx={{ margin: "10px", height: "100%", fontWeight: "bold" }}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            BubbleSort({ array, setArray, setActive });
          }}
          sx={{ margin: "10px", height: "100%", fontWeight: "bold" }}
        >
          Bubble Sort
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            SelectionSort({ array, setArray, setActive });
          }}
          sx={{ margin: "10px", height: "100%", fontWeight: "bold" }}
        >
          Selection Sort
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            InsertionSort({ array, setArray, setActive });
          }}
          sx={{ margin: "10px", height: "100%", fontWeight: "bold" }}
        >
          Insertion Sort
        </Button>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {array &&
          array.map((val, index: any) => (
            <div id={index} className="bar" style={{ height: val }}></div>
          ))}
      </Box>
    </Box>
  );
}

export default Visualizer;
