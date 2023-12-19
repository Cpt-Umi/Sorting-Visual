import { Dispatch, SetStateAction } from "react";

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 5));
};

type Props = {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
  setActive: Dispatch<SetStateAction<boolean>>;
};

async function SelectionSort({ array, setArray, setActive }: Props) {
  let auxArr = array;
  const size: number = array.length;
  setActive(true);

  for (let step = 0; step < size - 1; step++) {
    let min_index = step;

    for (let i = step + 1; i < size; i++) {
      if (auxArr[i] < auxArr[min_index]) {
        let temp = auxArr[min_index];
        auxArr[min_index] = auxArr[i];
        auxArr[i] = temp;

        await sleep();
      }
      setArray([...auxArr]);
    }
  }
  setActive(false);
}

export default SelectionSort;
