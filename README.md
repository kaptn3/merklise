# Merklize

## Usage

### Installation

Install the bundle dependencies:

```bundle install```

Start Jekyll server:

```bundle exec jekyll serve```

Access: <localhost:4000>

## Slider

For activate slider work you should add classes `slide` and `another-class` for each block slide and add class `slide_visible` for first slide. For example:

```html
<div class="class slide slide_visible">
    I'm content of slide!
</div>
<div class="class slide">
    I'm content of slide!
</div>
<div class="class slide">
    I'm content of slide!
</div>
```

And add buttons in div with other class and buttons with class `carousel-btns__btn` (for first button add class `carousel-btns__btn_active`):

```html
<div class="div__carousel-btns">
    <button class="carousel-btns__btn carousel-btns__btn_active"></button>
    <button class="carousel-btns__btn"></button>
    <button class="carousel-btns__btn"></button>
</div>
```

In `assets/js/main.js` in variable `slidersClassNames` add two classes - slide's class and wrapper for buttons class:

```javascript
const slidersClassNames = [
    ['class', 'div__carousel-btn']
]
```

That's all.
