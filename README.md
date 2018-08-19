<p align="center" id="top">
	<a href="https://www.npmjs.com/package/bubble-srt"><img src="https://cdn.abraham.gq/projects/bubble-srt/bubble-sort.gif"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/bubble-srt"><b>bubble-srt</b></a>
	: Bubble Sort Algorithm Implementation
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/bubble-srt"><img src="https://img.shields.io/travis/abranhe/bubble-srt.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/bubble-srt/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/bubble-srt.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/bubble-srt"><img src="https://img.shields.io/npm/v/bubble-srt.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Overview

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position

# Install

```
npm install bubble-srt
```

# Usage

```js
const bubbleSort = require('bubble-srt');

let numsArr = [46, 24, 33, 10, 2, 81, 50];
console.log(bubbleSort(numsArr));
// => [ 2, 10, 24, 33, 46, 50, 81 ]

let lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
console.log(bubbleSort(lettersArr));
// => [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]

let wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
console.log(bubbleSort(wordsArr));
// => [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ]
```

# Related

- [bubble-srt-cli](https://github.com/abranhe/bubble-srt-cli): CLI for this module
# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/bubble-srt/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
