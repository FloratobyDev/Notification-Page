# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

A simple notification component that accomplished the challenge below with a few small additions: 
 - clickable notifications that toggles between read/unread states.
 - 'Mark all as read' changes to 'Mark all as unread' when clicked. The behavior of the button also affects the notification state. 
 - notification 'unread' state counter updates when the user clicks on a **notification** or the **Mark** button. 
### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [**SOLUTION**](https://github.com/FloratobyDev/Notification-Page)
- Live Site URL: [**LIVE**](https://chipper-rolypoly-91c1bb.netlify.app/)

## My process

  Read and understood the Challenge.
  Looked at the design and got an idea of the structure.
  Analyzed the design and checked for structures that are similar. 
  Implemented the header section -- notification, counter, and the mark-- text.
  Implemented the notification base structure and extended it depending upon the type of notification -- text-based, message-based, and picture-based. **OOP** type of thang. 
  Implemented all behaviors according to the challenge and some with **JQuery**.
  Setup global styles. 
  Styled the header section. 
  Styled the notification container, base nofitications, and extended notifications, in that order. 
  
  All styles were implemented through the following process: 
   1. Positioned parent elements and its children.
   2. Setup the layout based upon the design.
   3. Setup the alignment based upon the design.
   4. Established hierarchy by defining colors and sizes for each element.
   5. Added the white spaces for a final touch up. 

  
### Built with

- Semantic HTML5 markup
- Flexbox
- Desktop-first workflow
- Live SASS Compiler
- [SASS](https://sass-lang.com/) - CSS Extension
- [JQuery](https://jquery.com/) - JS Library

### What I learned

 - SASS Live Extension is a lifesaver.
 - Implementing the **red circle** took more time than expected. At first I tried using the *::after* pseudo-element with a `content: "•"` but that wasn't right because it doesn't vertically center. So my next solution was to program it and add a **DIV element** next to the post description and use CSS to make a red circle. To insert the element, I used JQuery's **after**. It worked, but it sure took some time to figure out. Maybe there's a better idea to implement this but that's what I came up with. 
 - Trying to find the children of a parent in Jquery also took some time to figure out. This problem occurred when I tried to implement a behavior where the user can click on a notification and the state changes to 'read.' This was not a part of the challenge but it felt like a fun addition, so I did it. Anyways, going back to the topic, I was thinking maybe I could just use **recursion** to find the element that contains my **dot** class but that felt like too much so I tried looking for ways to do it. Then I stumbled upon ` event.target.querySelector('.dot').remove()` and it worked! Basically what this does is query the target's children to see if one of it's descendants contains the `.dot` class. So now, whenever the user clicks on an 'unread' notification, the red disappears with the grayish background.
 - It was tedious doing the repetitive structure in Pure HTML. React could definitely do it better because components are reusable.

### Continued development

I may implement this using ReactJS. We'll see.
### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - QA website
- [SASS](https://sass-lang.com/) - CSS Extension
- [JQuery](https://jquery.com/) - JS Library

## Author

- Website - [Michael Mushrush](https://michaelmushrush.tech/)
## Acknowledgments

Thank you Frontend Mentor.