# gatsby-remark-widows

Automatically adds a non-breaking space between the last 2 words in a text node parsed by `gatsby-transformer-remark`. This ensures there isn't a "widow", or single word left at the end of a wrapped sentance/paragraph.

---

### Nulla et exercitation excepteur ullamco <br/>eiusmod.

Lorem ipsum dolor sit Lorem irure aliquip magna labore qui<br/>velit officia aliquip deserunt aliqua. Aute tempor fugiat nisi<br/>adipisicing et aliquip sint minim cupidatat elit consequat<br/>et.

:arrow_down:

### Nulla et exercitation excepteur<br/>ullamco eiusmod.

Lorem ipsum dolor sit Lorem irure aliquip magna labore qui<br/>velit officia aliquip deserunt aliqua. Aute tempor fugiat nisi<br/>adipisicing et aliquip sint minim cupidatat elit<br/>consequat et.

---

## Install

`npm install --save gatsby-remark-widows`

Currently uses `\u00a0` to insert a space so you don't need to use `dangerouslySetInnerHTML`.  
Your browser should™ render that as `&nbsp;`

> **Warning:** This currently effects **every text node**. You can limit by word count via the options.

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // Probably best to place after other plugins
      plugins: [`gatsby-remark-widows`],
    },
  },
];
```

### Options

You may set some options to configure which text nodes are processed by their word count. Defaults to `minLength: 4`

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-widows',
          options: {
            minLength: 4, // default
            maxLength: null, // default
          },
        },
      ],
    },
  },
];
```

### Todo

* [ ] Add more options
* [ ] Add tests
