# Template for Tyson Steele

## Description
This template is designed to get you started building a single page promotional website for Tyson Steele and Associates. It includes several resources including external resources (Canvas HTML5 Template, Bootstrap, jQuery), a suite of development, build, and deployment tools using Gulp, useful scss mixins, and documentation. 

## Getting Started

```
yarn install
yarn start
```

## Usage

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

## Canvas

Canvas is an additional html frontend framework the client has asked us to use. It includes several javascript libraries (Flex Slider, Owl Carousel, etc). This is the base style that the designers at Tyson Steele will be using and we are expected to be able to implement any of the componenets that are featured in Canvas.

### Live Canvas Version 4.3

[Click here](http://canvas.hwdevs.site/) for a live version of Canvas 4.3.

On ocassion Tyson Steele will request that we reference a specific example page of Canvas. All example pages can be found at the above URL. For example, `one-page.html` can be reached at [http://canvas.hwdevs.site/one-page.html](http://canvas.hwdevs.site/one-page.html).

### Canvas Documentation

Canvas's Documentation can be found [here](http://canvasdocs.hwdevs.site/).

##Quality Assurance

Delivering a professional quality product in a timely manner is of utmost importance. To that end, every site built for Tyson Steele by Hello World Devs goes through an internal Quality Assurance process before delivery of the site. This process *must* be done by a developer who was not the main developer for the site. 

## Sass/Scss

### Sass/Scss Documentation

Sass/Scss documentation is automatically generated during development by Sassdoc. See [sassdoc](http://sassdoc.com/) docs at `./sassdoc` (at http://localhost:3002/sassdoc after `yarn start`)

Add more sassdoc annotations like `/// @param` by seeing [docs here](http://sassdoc.com/annotations).

A number of scss mixins have been created to handle common styling tasks. A full list of these mixins can be found in the Sassdoc documentation. Using these mixins will improve both development time and quality.

Build Sassdocs:
```
yarn run compile:sassdoc
```

### Sass/Scss Best Practices

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

### Custom Hello World Scripts

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

These sites are hosted through [Webfaction](https://www.webfaction.com/) with DNS handled by [Name Cheap](https://www.namecheap.com/).

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
