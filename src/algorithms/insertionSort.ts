import { Dispatch, SetStateAction } from "react";

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 5));
};

type Props = {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
  setActive: Dispatch<SetStateAction<boolean>>;
};

async function InsertionSort({ array, setArray, setActive }: Props) {
  let auxArr = array;
  const size: number = array.length;
  setActive(true);

  for (let step = 1; step < size; step++) {
    let key = auxArr[step];
    let i = step - 1;

    while (i >= 0 && key < auxArr[i]) {
      auxArr[i + 1] = auxArr[i];
      --i;
    }
    auxArr[i + 1] = key;
    await sleep();
    setArray([...auxArr]);
  }
  setActive(false);
}

export default InsertionSort;
