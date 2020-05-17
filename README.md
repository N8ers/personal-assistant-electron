
# PiPA
A personal assistant built with [electron.js](https://www.electronjs.org/), mean to run on a raspberry pi with a screen.


# Motivation
I wanted a little touch screen tool that I could use to quickly see the date, calendar, weather, todo list, and market news. I also just wanted to play with tinker toys.
![](images/home.jpg | width=100)
![](images/back.jpg | width=100)
![](images/weather.jpg | width=100)
  
# Hardware
This project was meant to run on a Raspberry pi 3 and the [Elecrow 5-inch Touch Screen](https://www.amazon.com/gp/product/B013JECYF2/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1). It is gracefully held together with rubber bands and tinker toys.

  
# File Structure
**main.js** - this is what kicks off the app. If you want to see your mouse, change screen size, or toggle devtools - this is where you do it. \
**index.html** - the main "landing page", it connects the other html files together. \
**base.css** - contains shared css - if you want to make it more colorful you should start there. \
**everything else** - outside of the above the app is broken down into sections "weather", "stocks", "todo", and "calendar". Each file has a css file (in the styles folder) and a JavaScript file (in the scripts folder)
  
# API(s)
This app is using APIs DarkSky, Google Calendar, Trello, and Finnhub.
  

# Prerequisites
If you want to use this app and all of its features you will first need to get: 
* API key from [DarkSky](https://darksky.net/dev)
* API key from [Finnhub](https://finnhub.io/)
* API key and Token from [Trello](https://developer.atlassian.com/cloud/trello/)
	* (just a heads up, trello doesn't have a way of resetting api keys at the time this is written)
* A public key and calendar ID from a Google Calendar that is open to the public (yes there are ways to do this privately but that's a little past the scope of this project)

# Quick Start
* Gather keys from above and insert them into their appropriate JavaScript file.
* Using a terminal `cd` into the directory
* `npm install`
* `npm run start`
