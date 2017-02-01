# Template for Tyson Steele

## Description
This template is designed to get you started building a single page promotional website for Tyson Steele and Associates. It includes several resources including external resources (Canvas HTML5 Template, Bootstrap, jQuery), a suite of development, build, and deployment tools using Gulp, useful scss mixins, and documentation. 

## Setup

Install node dependencies:

    npm install

## Usage

Compile site:

    npm run compile

Compile site, start watches, and serve:

    npm start

Deploy site: (*Note*: You will need to setup your siteConfig.py file to deploy)

    npm run deploy

## Sass

See [sassdoc](http://sassdoc.com/) docs at `./sassdoc` (at http://localhost:3002/sassdoc after `npm start`)

Add more sassdoc annotations like `/// @param` by seeing [docs here](http://sassdoc.com/annotations).

## Troubleshooting

Delete `node_modules` and re-install:

    rm -rf node_modules
    npm install

