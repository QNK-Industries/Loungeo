# Loungeo
Loungeo is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of three engineers at QNK Industries.

## Features

### Product Overview

* Cycle through different photos of the same style using the carousel
* Click thumbnails to view different styles of the same product
* Click on image to zoom with highlight box

### Related Items

* Create your own outfits by adding items to the list
* Cycle through your outfit with the carousel
* Get ideas on outfits with the 'Wear it with' section
* Compare items at a touch of a button

### Ratings And Reviews

* See how others have rated products
* Add your own review to products
* Search reviews for products
* Leave ratings

### Questions And Answers

* Add Questions about products
* Search Questions already asked
* See answers others have posted
* Add Answers about products

## Installation

```
npm install
```

## Setup
* Rename tokens.example.js to tokens.js
* Replace GITHUB_KEY with Personal Access Token


In two different terminals run

```
npm start
npm run build-client
```

open

```
http://localhost:3000/
```

## Credit
QNK Industries is

[Quinton Maki](https://github.com/maki-q)
[Noah Lehman](https://github.com/xanzadu)
[Khai Tran](https://github.com/solo917)

## Microservices Setup
* Input appropiate URLs to server/apiconfig.js
* This will set the Atelier/backend service URL's based on the environment variable API_MODE

In terminal run either
```
npm run start-ind-api
```
for individual mode or
```
npm run start-team-api
```
for team mode