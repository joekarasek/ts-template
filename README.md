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
```
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


## Sass/Scss and Sass Documentation

Sass/Scss documentation is handled by Sassdoc. See [sassdoc](http://sassdoc.com/) docs at `./sassdoc` (at http://localhost:3002/sassdoc after `yarn start`)

Add more sassdoc annotations like `/// @param` by seeing [docs here](http://sassdoc.com/annotations).

Build Sassdocs:
```
yarn run compile:sassdoc
```

## JS and JS Documentation

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
4. `yarn install`
5. `yarn run build`

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
