# How can I setting a slideshow using React hooks and without using CSS? 
Creating a slideshow using React and creating a dropdown menu without using CSS  Ability to connect to the server

in this project we want to write dropdown menu of slideshow with React hooks as useRef and UseEffect 

![Screenshot from 2024-07-13 18-41-53](https://github.com/user-attachments/assets/3934a72c-58c8-4a4c-993b-d86af8b71d29)


first of all , we Create our component and after that create a simple Slideshow.
when we set a Usestate for clicking on menu icon , we can set a slideshow height with css but if we want to write an optimize codes with react , it's better to pay attention to reacts hook , 
react hooks make component development easier while also improving readability and organization
In this project, I will teach you step by step how to use React hooks to create an optimized and widely used slideshow.

1. import UseEffect and useRef from react package:

```
import React, { useEffect, useRef, useState } from 'react'
```

2. set a two variable for compatibility with JSX elements: 

```
const linksContainerRef = useRef(null)
const linksRef = useRef(null)
```

3. The useEffect hook is used to manage side effects in React. The useEffect hook in React takes 2 arguments from us. The first argument is a callback function in which we must write our side effect. The second argument is our Dependencies, which we must give to useEffect in the form of an array.

```
useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(showLink){
            linksContainerRef.current.style.height = `${linkHeight}px`
        }
        else {
            linksContainerRef.current.style.height = `0px`
        }
    } , [showLink])
```
4. Finally, we write our variables in JSX elements‌.

```
<div className='nav-links' ref={linksContainerRef}>
                <ul className='list' ref={linksRef}>
                         ...
                </ul>
</div>
```
![Screenshot from 2024-07-13 18-14-27 (1)](https://github.com/user-attachments/assets/9fe99bdc-5f25-4af3-b7ed-4b2644927ef1)



The [source](https://github.com/aiaaee/SlideShow_React/tree/main/Slideshow/src) codes are all available in files. 
I hope it was useful for you.
