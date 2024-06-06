First Round:
<!-- Questions on CSS specificity, position -->
Questions on JS concepts like inheritance, arrow functions, variable hoisting, variable declaration and memory allocation etc.

Second Round:
Write an algorithm to merge overlapping ranges, given two sets of ranges.
Discussion on implementation of infinite scroll

Third Round:
Program to efficiently deal with hierarchical data where the data itself is stored in a flat format

Technical Round ( 1 hour ):
Explain JavaScript Scoping, Closure, Curry functions. Implement a function which covers Currying and Bind method. Then few CSS trivia questions regading position property and centering techniques.

Technical Round ( 1 hour ):
Question about previous work experience, JS basics, React basics and about Context and Hooks. Then was asked to model and implement a Generic React component for something similar to Tab or Accordian i forgot. But focus was mostly on how would components look like and what are the props will like.

Hiring Manager Round ( 1 hour ):
Started with as usual intro. Asked to solve a coding problem which has a array of objects which are linked between each other in hierachial relation. Started with brute force solution and was moving towards fixing the edge cases. Realized it could be solved using Topo sort as its a graph problem, but time up. Rest was behaviour questions and expectation in next roles.

Overall experience: I felt the interviews were closely aligned to day to day work without any LC type questions. But i could have done the coding problem in hiring manager round better. All the interivewers were very friendly and helpful.

CSS coding question about box-sizing, you won’t be able to answer it if you haven’t come across it. (It’s set to content box as default and you need to set it to border box)

JS Question about order of execution, of log line, a log in a settimeout callback, and a resolved promise callback. Log > promise resolve log > settimeout log

JS Question on variable scoping. You’ll need to guess output and then fix it with apply/bind/call

React JS Question on HoC, refs and usage of imperativeLayout

If you are creating a modal and you want to be able to close it by clicking anywhere on the screen, how would you implement this?
Memoize function to track number of function calls and return the first result every time the function is called.
Can you describe immutability to me and its importance? Give an example.
What are the two ways to implement function currying? Can you code out examples?
What are some real life examples of when you would use closure?
What are some different things we could do to optimize Javascript performance?


1st round - Technical round: Interview with an engineer. Questions were related to JavaScript Prototypes, Inheritance, Closures. Implement currying function. Also a question in CSS.

2nd round - Technical round: About React.js hooks, How would you design an API, what is though process when doing code review. Design a Tab bar component, how will the API look like. No code required. (API Design for a component. Eg: Autocomplete, Tab bar)

3rd round - Technical + Behavioural : One question regarding Topo sort where the data is in array of objects type. Then typical behaviour based questions, challenges faced in past work.

How to center a div element inside another div element using pure css. Follow up question is what if the child element size is dynamic.(Using CSS Flex, Absolute positioning , CSS Transforms.)

PUB SUB pattern in Javascript, Promise.all implementation

Started with simple questions like hoisting and virtual DOM, then progressed to event loop microtask queue and other concepts.
Asked about debouncing and throttle (I mentioned them in projects). Then told me to write polyfill for those. What is reconciliation in React and how is it working after React 16 and how was it working earlier? (Hint - Read about Diffing algorithm and React fiber and also the priority scheduler in react fiber how does this selects the priority.)

Polyfill for bind Closures Call apply bind JS promise let const var lexical environment scope output questions

Create a pagination

Given a JSON data of employees find average salary of every department and can be generalize on any field later. Design schema first and then find average
Given Alien DIctionary words, find it's lexicographical order

Rippling Interview Questions from leetcode

<!-- Flatten an array in this way -
Input - [1,2,[3,[4],5],6,[7]]
Output - [1,2,6,7,3,5,4]

I solved this but took some time. -->

<!-- Output based question

var obj = {
value: 6,
print: function(){
console.log(this.value);
}
}
What is the output of calling print function from the object?

Follow up question - how to set context as the object and call this function later?
Answer - by using bind -->

<!-- After this I was asked to write polyfill of bind

I wrote it instantly -->

Write a program for something like redux useselector and dispatch, something like pubsub.

I was not aware of this at that point so I couldn't solve this.

Explain all css position types (static, sticky, absolute, relative, fixed)

I explained all the positions but messed up absolute position definitation a little bit

How to set different width for each flex item

Gave the answer for this as well