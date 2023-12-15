import { Dispatch, SetStateAction } from "react";

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 5));
};

type Props = {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
  setActive: Dispatch<SetStateAction<boolean>>;
};

async function Bubblesort({ array, setArray, setActive }: Props) {
  let auxArr = array;
  let flag = false;
  setActive(true);
  while (!flag) {
    flag = true;
    for (let i = 0; i < auxArr.length - 1; i++) {
      if (auxArr[i] > auxArr[i + 1]) {
        let temp = auxArr[i];
        let temp1 = auxArr[i + 1];

        auxArr[i] = temp1;
        auxArr[i + 1] = temp;
        setArray([...auxArr]);

        await sleep();

        flag = false;
      }
    }
  }
  setActive(false);
  // console.log(array);
}

export default Bubblesort;
