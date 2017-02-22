#Template for Tyson Steele

## Description
This template is designed to get you started building a single page promotional website for Tyson Steele and Associates. It includes several resources including external resources (Canvas HTML5 Template, Bootstrap, jQuery), a suite of development, build, and deployment tools using Gulp, useful scss mixins, and documentation. 

## Table of Contents

- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
    - [Usage](#usage)
- [Resources](#resources)
- [Canvas](#canvas)
    - [Live Canvas Version 4.3](#live-canvas-version-4.3)
    - [Canvas Documentation](#canvas-documentation)
- [Quality Assurance](#quality-assurance)
- [Scss](#scss)
    - [Scss Documentation](#scss-documentation)
    - [Scss Best Practices](#scss-best-practices)   
- [JS](#js)
    - [Custom Scripts](#custom-scripts)
    - [JS Documentation](#js-documentation)
- [Deployment](#deployment-to-webfaction)
- [DNS through Name Cheap](#dns-through-name-cheap)
- [Troubleshooting](#troubleshooting)


## Dependencies

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (or [npm](https://www.npmjs.com/) if you prefer)

## Getting Started

All the tools you need to set up a working development environment including compiling and watches on files is handled by Node.js and Yarn (or if you prefer, npm).

```
yarn install
yarn start
```

### Usage

Compile resources, open site and documentation, start watches:
```bash
yarn start
```

Compile all resources including scss:
```
yarn run compile
```

Build production version of site:
```
yarn run build
```

# Resources

Here is a list of useful links to documentation pertaining to various components that are used through out these sites, as well as links to articles on best practices, documention for development tools, and links for hosting draft versions of the site.

- [Bootstrap](http://getbootstrap.com/) - Included with Canvas, great for laying out content and handling things such as modals, buttons, and the navbar
- [Canvas Documentation](http://canvasdocs.hwdevs.site/) - Canvas Documentation
- [Canvas Template](http://canvas.hwdevs.site/) - A live version of the current Canvas Template
- [Css/Scss Best Practices](https://css-tricks.com/sass-style-guide/) - A useful guide for best practices when working with style sheets
- [documenationJS](http://documentation.js.org/) - Generates live documentation of javascript based on inline comments
- [flexSlider](http://flexslider.woothemes.com/) - Used for most of the marquee sliders
- [Font Awesome Icons](http://fontawesome.io/) - Included with Canvas and used for many icons
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) - Documentation for working with the javascript API for Gooogle Maps
- [Javascript Best Practices](https://www.thinkful.com/learn/javascript-best-practices-1/) - Thoughts on best practices for writing javascript
- [Name Cheap](https://www.namecheap.com/) - DNS service for the delivering drafts to Tyson Steele
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html) - Used for most carousels
- [Sassdoc](http://sassdoc.com/) - Generates live documentation of stylesheets based on inline comments
- [Webfaction](https://www.webfaction.com/) - The hosting services for delivering drafts to Tyson Steele
- [Html Validation](https://validator.w3.org) - Validator for html errors

## Canvas

Canvas is an additional html frontend framework the client has asked us to use. It includes several javascript libraries (Flex Slider, Owl Carousel, etc). This is the base style that the designers at Tyson Steele will be using and we are expected to be able to implement any of the componenets that are featured in Canvas.

### Live Canvas Version 4.3

[Click here](http://canvas.hwdevs.site/) for a live version of Canvas 4.3.

On ocassion Tyson Steele will request that we reference a specific example page of Canvas. All example pages can be found at the above URL. For example, `one-page.html` can be reached at [http://canvas.hwdevs.site/one-page.html](http://canvas.hwdevs.site/one-page.html).

### Canvas Documentation

Canvas's Documentation can be found [here](http://canvasdocs.hwdevs.site/).

##Quality Assurance

Delivering a professional quality product in a timely manner is of utmost importance. To that end, every site built for Tyson Steele by Hello World Devs goes through an internal Quality Assurance process before delivery of the site. This process *must* be done by a developer who was not the main developer for the site. 

The QA list can be found [here](http://canvasdocs.hwdevs.site/TS-WEB-CHECKLIST-2016.pdf).

**In addition** to the above checklist...

1) Run the html through an [HTML validator](https://validator.w3.org)

2) Please test all of our sites on Safari as well as Chrome, Firefox and Edge

3) Also, please - even if you don’t have a large screen/high-res monitor available, create an inspector size for the ultra-wide low-res laptop (sizes to 1366 x 650px) and make another one at 1920 x 950px for those people that think that a 1080p monitor is to be used by expanding the browser window to fit.

These sizes are important add-ons to discover issues with positioning of elements at all sizes. For instance, have a look at this screenshot showing the 1366 x 650px size with the new Sharon Strong website. We’ll have to move up the headline, tighten it up as needed, in order to show the whole reviews button and not cut things off.

## Scss

### Scss Documentation

Sass/Scss documentation is automatically generated during development by Sassdoc. See [sassdoc](http://sassdoc.com/) docs at `./sassdoc` (at http://localhost:3002/sassdoc after `yarn start`)

Add more sassdoc annotations like `/// @param` by seeing [docs here](http://sassdoc.com/annotations).

A number of scss mixins have been created to handle common styling tasks. A full list of these mixins can be found in the Sassdoc documentation. Using these mixins will improve both development time and quality.

Build Sassdocs:
```
yarn run compile:sassdoc
```

### Scss Best Practices

Here are some basic best practices to strive for when working with this template.
  - Use as few selectors as possible
  - Inception rule: no more than 3 'levels' nesting
  - Avoid generic selectors (ex. `div div`)
  - Avoid descendants, nth-child, siblings, etc
  - Avoid ID’s, use classes as much as possible
  - Stick to one naming convention
  - Design responsively around Bootstrap's breakpoints
  - Avoid setting exact heights, allow the content to dictate height

## JS 

### Custom Scripts

Commonly used custom scripts are contained in the HelloWorldDevsTysonSteele object and are included with this template. These scripts handle a wide range of tasks including the request appointment API, management of orphans in the text, and customization of carousels, sliders, videos, and other interactive elements.

For example:
```javascript
HelloWorldDevsTysonSteele.marqueeCarousel();
```
This script will initialize the marquee slider standard to all the sites we build with default configurations (speed, looping, etc) that match the clients preferences.
The carousel can still be fully customized by passing in standard configuration options for each given javascript components. For example:
```javascript
HelloWorldDevsTysonSteele.marqueeCarousel({ autoplay: false });
```

### JS Documentation

Javascript documentation is handled by DocumentationJS. See [documenationJS](http://documentation.js.org/) docs at `./jsdoc` (at http://localhost:3002/jsdoc after `yarn start`)

Add more jsdoc annotations like `/** @param */` by seeing [docs here](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md).

Build JSdocs:
```
yarn run build:jsdoc
```

## Deployment to Webfaction

These sites are hosted through [Webfaction](https://www.webfaction.com/).

The deployment scripts are not currently complete, but will take care of configuring the webfaction server for you.
```
yarn run deploy
```
_*Note:*Deployment requires `./siteConfig.py`. See `./example.siteConfig.py` for instructions on setting up this file._

To finish deployment:
1. Ssh into the webfaction server as dan linn
2. `cd webapps/projectName_app`
3. Clone the project with *this directory as the root* (`git clone url .`) 
4. `npm install`
5. `npm run build`

## DNS through Name Cheap

DNS for this project is handled through [Name Cheap](https://www.namecheap.com/)

1. Log into Name Cheap as Dan Linn
2. Domains > hwdevs.site > "Manage"
3. Advanced DNS > "Add new record"
	- Type: A Record
	- Host: site name (the last name of the doctor, lowercase)
	- Value: 198.58.114.22
	- TTL: automatic

*Note:* It may take up to 24 hours for DNS to propogate and for the site to go live.

## Troubleshooting

Delete `node_modules` and re-install:
```
rm -rf node_modules
yarn install
```
