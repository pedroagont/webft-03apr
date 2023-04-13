const getRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10);

      if (randomNum < 5) {
        reject(new Error('Number less than 5'));
      } else {
        resolve(randomNum);
      }
    }, 2000);
  });
};

// console.log(getRandomNumber());

getRandomNumberPromise()
  .then((randomNum) => randomNum * 2)
  .then((randomNumTimesTwo) => {
    if (randomNumTimesTwo < 15) {
      throw new Error('RandomNumTimesTwo is less than 10');
    }
    return randomNumTimesTwo + 5;
  })
  .then((randomNumTimesTwoPlus5) => randomNumTimesTwoPlus5)
  .catch((err) => console.log(err));
