export const generateRandomNumbers = async amount => {
  let numberArray = [...Array(amount).keys()];

  numberArray.forEach((key, value) => {
    const j = Math.floor(Math.random() * key);
    numberArray[key] = numberArray[j];
    numberArray[j] = value;
  });

  let tempNumbers = {};

  numberArray.forEach((key, value) => {
    tempNumbers = {
      ...tempNumbers,
      [key]: { value: value, selected: false, found: false }
    };
  });

  return tempNumbers;
};
