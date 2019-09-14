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
      [key + 1]: { value: value + 1, selected: false, found: false }
    };
  });

  return tempNumbers;
};

export const generateSortedNumbers = async amount => {
  let numberArray = [...Array(amount).keys()];
  let tempNumbers = {};

  numberArray.forEach((key, value) => {
    tempNumbers = {
      ...tempNumbers,
      [key + 1]: { value: value + 1, selected: false, found: false }
    };
  });

  return tempNumbers;
};
