# Eenwoud

This project was created for Lobke Meekes (the creator of 'Eenwoud'). Eenwoud is a concept where people can register trees so they get re-planted in a big forest with trees that have a special story.
We had to create an interactive web-application that displays all the trees, we had to visualize the data that was available.

## The product

We decided to create an introduction onepager where we inform the user about the necessity of trees. This is what you first see when you go to the website.

This is how we inform the user about the necessity of trees:  
![](https://user-images.githubusercontent.com/10921830/105205069-1e0d6f00-5b45-11eb-939c-9089abb3f406.png)
![](https://user-images.githubusercontent.com/10921830/105205216-485f2c80-5b45-11eb-9af7-d8c96f032a7e.png)
![](https://user-images.githubusercontent.com/10921830/105205236-4e550d80-5b45-11eb-9301-21b19ae797a2.png)

After the onepager, you zoom into the 'planet of Eenwoud'. This brings you to an interactive map where you can look around at all the trees, and filter on specific themes (of stories) and more:  
![](https://user-images.githubusercontent.com/10921830/105205470-983df380-5b45-11eb-952d-a849cdaca665.png)

When you click on one of the trees, you go to the detail page of this tree. On the detail page you can read the story about the tree and consume some other information:  
![](https://user-images.githubusercontent.com/10921830/105205573-b3a8fe80-5b45-11eb-85c4-4b06cd6420e2.png)

We have also created the register part of the concept, where you can register a tree and give it a location in the Eenwoud:
![](https://user-images.githubusercontent.com/10921830/105205833-f539a980-5b45-11eb-99bb-1287655b4a40.png)
![](https://user-images.githubusercontent.com/10921830/105205881-05518900-5b46-11eb-85d2-3c16ae7fd81f.png)
![](https://user-images.githubusercontent.com/10921830/105205895-071b4c80-5b46-11eb-9028-e78d7313ed21.png)

I have used the awesome ReactJS framework for this project. I decided to use ReactJS since I already had some experience with it, and because it was nice to use for the state management of the app.
Most components are split up into the 'components' folder, and I placed the three main screens (intro, map and register) in the 'screens folder'.
For styling I used SCSS (since this makes me a lot more productive) and for the naming/classing of elements I used the BEM method (Block, Element, Module).

## Live version
This project is also being hosted on Netlify, check it out [here](https://bvictorb-eenwoud.netlify.app/)!

## Installation
- Clone this repo
```
git clone https://github.com/BVictorB/eenwoud.git .
```
- Install all NPM packages
```
npm i
```
- Execute this command to start the local server, the project will automatically open in your browser (or just go to http://localhost:3000/)
```
npm start
```
![CLI gif](https://media1.tenor.com/images/356bac3dd24014fd740d196138f3d0f8/tenor.gif?itemid=10933901)  
