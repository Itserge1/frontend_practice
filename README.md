# Overview

This project is a collection of commonly used frontend components for web applications, implemented using my personal
design and development approach.

# Summary 
* [1 - "Circular Buffer" or "Infinite Carousel" Pattern]()
  * [Part 1: Set Up Tracking]()
  * [Part 2: Duplicate Your Data]()
  * [Part 3: Implement the Loop Logic]()
  * [Alternative Approaches]()
* [2 - Navbar]()

## 1 - "Circular Buffer" or "Infinite Carousel" Pattern

I use this method to build the `InfinityMenu` component. The concept is quite simple and requires 3 main components to
pull it off:

### Part 1: Set Up Tracking

First, you need to track the specific component (HTMLDivElement) you want to allow infinite scrolling on by using a
reference (`useRef`). Then you need to track the horizontal scrolling, whether it's to the left or the right. The
easiest way to track it is with the `scrollLeft` and `scrollWidth` attributes from the ref element.

### Part 2: Duplicate Your Data

The items on the scrollable bar should come from an array. You need to create a new array which will contain duplicates
of the first one, make at least **three** copies:

```javascript
const duplicateItems = [...items, ...items, ...items]
```

### Part 3: Implement the Loop Logic

1. **Set Initial Position**: Start the scroll position at `scrollWidth / 3` (or any fraction based on how many copies
   you made). This places you in the middle batch.

```javascript
scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
```

2. **Track Scroll Movement**:
    - When `scrollLeft` reaches the end batch (e.g., `scrollLeft >= scrollWidth * 2/3`), reset it back to the initial
      position
    - When `scrollLeft` is close to 0, reset it forward to the initial position

This creates the infinite loop effect since all batches contain identical content.

### Alternative Approaches

Note: You can always use libraries like Swiper or Framer Motion instead, just like in the `FramerInfinityMenu` or
`SwiperInfinityMenu` components.