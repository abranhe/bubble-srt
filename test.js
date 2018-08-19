import test from 'ava';
import bubbleSort from './';

const numsArr = [46, 24, 33, 10, 2, 81, 50];
const expectedNumsArr = [2, 10, 24, 33, 46, 50, 81];

test('Bubble sort test array of numbers', t => {
	t.truthy(bubbleSort(numsArr), expectedNumsArr);
});

const lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
const expectedlettersArr = [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ];

test('Bubble sort test array of letters', t => {
	t.truthy(bubbleSort(lettersArr), expectedlettersArr);
});

const wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
const expectedWordsArr = [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ];

test('Bubble sort test array of words', t => {
	t.truthy(bubbleSort(wordsArr), expectedWordsArr);
});
