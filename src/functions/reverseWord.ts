// desafio 5

export default (word: string) => {
  const wordArray = [...word.split('')];
  console.log(wordArray);

  const reversedWord = [];

  for (let i = wordArray.length; i >= 0; i--) {
    reversedWord.push(wordArray[i]);
  }

  return reversedWord.join('');
};
