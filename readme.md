1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Ans:

- getElementById: to get element of an id.
- getELementByClassName: to get an array of array element by using class
- querySelector: to get 1st element of an Array element.
- querySelectorAll: to get all element of an Array element.

2. How do you **create and insert a new element into the DOM**?

   Ans: 1st using document.createElement() method to create an new HTML node, Secondly for add the new element as a child to the specific parent element we using appendChild() method.

3. What is **Event Bubbling** and how does it work?

   Ans: Event Bubbling is a concept in the DOM. It happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Ans: Event delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
1.preventDefault() Method: It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. For example, there are some events that cannot be prevented, such as the scroll and wheel event.

2. StopPropagation() Method: This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. For eg, we have a button element inside a div tag and there is an onclick event on both of them, then whenever we try to activate the event attached to the button element, then the event attached to the div element also gets executed because div is the parent of the button element.
