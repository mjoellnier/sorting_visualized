import { useGlobal } from "reactn";

export const LinearSearch = numbers => {
  const [global, setGlobal] = useGlobal();

  console.log(global);

  let newNumbers = {
    ...numbers,
    10: {
      value: numbers[10].value,
      selected: true
    }
  };
  return null;
};
