Table of contents
=================

  * [Rotate 2D Array](#rotate-2d-array)
  * [Fizz Buzz](#fizz-buzz)
  * [First Non-Repeating Character](#first-non-repeating-character)
  * [Sort Me](#sort-me)
  * [Word Crush](#word-crush)
  * [First Factorial](#first-factorial)
  * [Sum of All Numbers](#sum-of-all-numbers)


Rotate 2D Array
============

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

###### Example

For

``` bash
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
```     
###### the output should be

``` bash
rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
```

Fizz-Buzz
============
Fizz buzz is a group word game for children to teach them about division.[1] Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".


First Non-Repeating Character
============

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

###### Example

For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.


Sort Me
============

sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).


Word Crush
============

Given a sentence, the following functions:
* Find the longest word (longestWord) - the last one in the sentence.
* Find the shortest word (shortestWord) - the last one in the sentence.
* Find the sum of all the word lengths, in a sentence. (wordLengths).


First Factorial
============

The function `FirstFactorial(number)` take the number parameter being passed and return the factorial of it.

* e.g. if number = 4, return (4 * 3 * 2 * 1)
* Output: `24`


Sum Of All Numbers
============

Given two integers `a` and `b`, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return `a` or `b`.

**Note**: `a` and `b` are not ordered!

##### Examples
```js
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```