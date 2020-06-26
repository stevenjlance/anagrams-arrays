// As you may know, an anagram is a new word created by reorganizing all the letters in a word.
// This array of anagrams are all based on the word "Stop"
let anagrams = ["plots", "post", "stop", "puts", "tops"]

// Run this program after you try each step and see if it worked.
// At the very bottom of this file is a line of code that prints out the array after your code as run.
// You're welcome to print additional debugging statements if you need.

// 1. Print out the third word in the array using bracket notation. This shoud print the word "stop".

console.log(anagrams[2]);




// 2. Print out the length of the list
console.log(anagrams.length)




// 3. The word "opts" is also an anagram of the word "stop". Find a way to add "opts" to the end of the array. HINT: Use this documentation - https://www.w3schools.com/jsref/jsref_push.asp.
anagrams.push('opts');


// 4. The word "puts", on the other hand, is not an anagram of the word "stop". Find a way to replace it with the word "pots".
anagrams[3] = 'pots';




// 5. Use the documentation to figure out what the methods ".pop()" and ".shift()" do.
//   Now use one of them to remove the word "plots" (which isn't a correct anagram of "stop") from our array.
console.log(anagrams);
// Removes the last item
// anagrams.pop()
// Removes the first item
anagrams.shift();
console.log(anagrams);


// 6. Put the final array of anagrams in alphabetical order.
anagrams.sort();
console.log(anagrams);


// This code prints the array after you've manipulated it above.
console.log(anagrams)

// Before moving on to level 2, you will probably want to comment it out. 

//// LEVEL 2 ////
/* global fortunes */

// At this point, the tasks will get more challenging, because you'll work with datasets too large to handle by just looking at it and reading them.
// They're stored in a variable called fortunes in another file called otherarrays.js, which is loaded before this one in the HTML.
// Pro-tip: to make this easier, scroll down and comment out the line "console.log(anagrams)" so that you aren't printing extra information.

// 7. The first array is called "fortunes" and contains fortune-cookie style fortunes. Print out the third fortune from the array.
console.log(fortunes[2])



// 8. This array is huge, so it'd be helpful to know how many fortunes are listed. Find a way to print out the number of fortunes in the array.
console.log(fortunes.length)



// 9. Print out a random fortune from the array.
console.log(fortunes[Math.floor(Math.random()*fortunes.length)])





// 10. Challenge: Out of all the fotunes that are there, it'd mess up the program if some were listed twice, but with a array that big, it could happen.
// Find a way to check and see whether any of the fortunes are duplicates. If so, find a way to delete those duplicates.
