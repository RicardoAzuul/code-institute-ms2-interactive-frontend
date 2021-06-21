# Puggy Poke-it

Puggy Poke-it is a browser game for people who like pugs and memory games.

It is a game inspired by Bop-it, but using pug pictures. Players see a board of different pug pictures. The game randomly highlights a picture, which the player then has to click. Higher difficulties have more pictures and generate longer sequences of pictures that need to be clicked in order.


Must haves for this project:
- a clear interface.
- a functioning game.

Nice to have: 
- a way to keep track of scores, maybe even a scoreboard.

To visit the site, open [https://ricardoazuul.github.io/puggy-pair-up](https://ricardoazuul.github.io/puggy-pair-up)

---

## Table of Contents
1. [UI and UX](#ui-and-ux)
    1. [User Stories](#user-stories)
    1. [The 5 Planes of Design](#the-5-planes-of-design)
        1. [Strategy Plane](#strategy-plane)
        2. [Scope Plane](#scope-plane)
        3. [Structure Plane](#structure-plane)
        4. [Skeleton Plane](#skeleton-plane)
        5. [Surface Plane](#surface-plane)
1. [Features](#Features)
    1. [Existing Features](#existing-features)
    1. [Features Left To Implement](#features-left-to-implement)
1. [Technologies Used](#technologies-used)
1. [Responsiveness of Pages](#responsiveness-of-pages)
1. [Testing](#Testing)
    1. [Notable Bugs](#notable-bugs)
1. [Deployment](#Deployment)
1. [Credits](#Credits)
    1. [Content](#Content)
    2. [Media](#Media)
    3. [Acknowledgements](#Acknowledgements)

---

## UI and UX
 
### User stories
- As a visitor to the site, I want to be able to play the game. It would be nice if I can keep track of high scores, and even nicer if there is a scoreboard for multiple players. 
- In order to play the game I need to:
    1. See a board of pug pictures.
    1. Have the game indicate which picture needs to be clicked on.
    1. Be able to click on these pictures.
    1. Have the game generate longer sequences of pictures that need to be clicked on in order, to make it more difficult as I progress.
    1. Nice to have: scaling difficulty, by having more or less pictures on the board.
    1. Nice to have: a scoreboard, at least for individual players. 
- To see my own scores, I will click on "My high scores" in the navbar. This will take me to a page with my highscores.

    - Screenshots related to this user story:




---

### The 5 Planes of Design

Jesse James Garret's 5 planes of UX design were used to design the site. We start off at the Strategy Plane:

#### Strategy Plane

The main goal for visitors to the site is to play a game. This means that upon visiting the page, a game must be ready to be started. For this, we need a board of pictures. Because the game is about memorizing sequences, we need a start button, otherwise players might miss the first sequence and lose. 

We want players to come back as well. For this, we can implement a scoreboard, so players can keep track of their progress between sessions.  

---

#### Scope Plane

The functional specifications of the site:
- A responsive website, mobile first design - with at least the following content:
    - the main section, with the game interface. For this we need:
      - a collection of pug pictures. Potential problem: as the board increases in number of tiles, tile size will decrease and pictures might be become hard to keep apart.
      - code to generate a sequence of random numbers, with the numbers equating to pictures on the board.
      - code that checks whether the player gave the right sequence as input.
    - a navbar, for quick navigation to the scoreboard.
    - a basic footer

Content requirements:
- Photos of pugs.
- Maybe a logo.
- Some background music, but not a necessity.

---

#### Structure Plane
All pages should have the same navigation bar and footer:
- the navigation bar contains links to all the pages, as well as the home page.
- the footer contains general info.

<ins>The Home Page</ins>
- a game logo
- the main game interface:
  - the picture board
  - a score tracker
  - a timer?

<ins>Individual scoreboard</ins>
- a list of an individual player's scores. This list needs to update after games.

<ins>How to play page</ins>
- explains how the game works.

---

#### Skeleton Plane

The navigation bar will be added to the top of every page and will always remain visible. There are links to all pages on this navbar. 
On the left will be the logo, which when clicked upon will take the player back to the game page.

The active page is indicated with a line under the navigation item. When hovering over navigation items, the navigation item will be highlighted.

At the bottom of every page will be the same footer.

---

#### Surface Plane

Color palette

The icons are sourced from Font Awesome.

Fonts are sourced from Google Fonts. 

<ins>Wireframes</ins>

- [Game page](readme-assets/wireframes/game.png)
- [Game page tablet version](readme-assets/wireframes/game_tablet_view.png)
- [Game page mobile Version](readme-assets/wireframes/game_mobile_view.png)
- [Individual high scores](readme-assets/wireframes/your_highscores.png)
- [Individual high scores tablet version](readme-assets/wireframes/your_highscores_tablet_view.png)
- [Individual high scores mobile version](readme-assets/wireframes/your_highscores_mobile_view.png)

---

## Features

### Existing Features

---

### Features Left to Implement

- Navigation bar: contains links to all the pages and allows users to browse to pages.
- Footer: contains general info.
- Game interface:
- Score tracker
- Timer?
- Individual scoreboard
- How to play page
- Settings page

---

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5): provides the content and structure of the site.
- [CSS3](https://en.wikipedia.org/wiki/CSS3): provides the formatting, layout and styling of the site.
- [Bootstrap](https://getbootstrap.com/): provides a popular CSS framework with many custom elements to quickly bootstrap a site. I've used Bootstrap 4.6.
- [FontAwesome](https://fontawesome.com/): provides several icons I've used on the site.
- [Visual Studio Code](https://code.visualstudio.com/): a free IDE with enough features to be useful but not so many features as to confuse you.
- [Live Server](https://ritwickdey.github.io/vscode-live-server/): a Visual Studio Code extension that allows you to run your site on your local machine, for quick debugging, testing and developing.
- [GitHub](https://github.com): for hosting the git repository and providing the GitHub pages static site hosting functionality.
- [git](https://git-scm.com/): as one of the most popular source code management tools.
- [Balsamiq](https://balsamiq.com): for creating wireframes of all the pages.
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/): for quick debugging and testing of HTML and CSS. 
- [Hover.css](https://ianlunn.github.io/Hover/#effects): to add hover effect to nav links and buttons.
- [Placeholder.com](https://placeholder.com/): to add placeholder images that help with the layout of the pages.
- [WAVE - web accessibility evalution tool](https://wave.webaim.org/): to check the accessibility of the pages.
- [Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html): to generate colors that contrast better.
- [Am I Responsive?](http://ami.responsivedesign.is/): to generate screenshots of the site at various viewpoints, indicating responsiveness.
- [EyeDropper](https://eyedropper.org/): to pick colours from an image.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): an automated tool in Chrome DevTools that audits for performance, accessibility, progressive web apps, SEO and more.

---

## Responsiveness of Pages

The website is fully responsive on the following screens: smartphone, iPad, iPad in landscape mode, iPad Pro, iPad Pro in landscape mode, laptop and desktop screens.

These screenshots indicate the responsiveness of the pages on various screens.


---

## Testing

Testing was done using Google Chrome, Mozilla Firefox, Microsoft Edge, and also Internet Explorer. I also tested it on an Huawei P smart+ 2019 Android smartphone. The site works fine on all browsers. 

<ins>Tests for Readme.md:</ins>
- :heavy_check_mark: When you click on the links in the TOC, you navigate to the section you clicked on.
- :heavy_check_mark: All links to images open images.
- :heavy_check_mark: All links to external websites open properly.
<br/>

<ins>Code validation:</ins>
1. [HTML validation](https://validator.w3.org/nu/)
2. [CSS validation](https://jigsaw.w3.org/css-validator/)

<br/>

<ins>Navigation Links in the nav bar:</ins>
<br/>

<ins>Buttons</ins>
<br/>

### Notable Bugs

While working on making the game loop, I ran into the following bug:
- the first round of an easy game worked as expected: a picture was highlighted, the player clicked the picture and submitted, and the game checked the score properly.
- on the second round, things went wrong: two pictures would highlight, the player would click the two pictures and submit, but the game would indicate it was wrong

Steps to troubleshoot:
1. Console.logging at various steps in the code. This revealed that on the second round, when the player clicked an image, it registered as 2 clicks, and then would register as 1 click. It seemed to not be clearing the saved playersequence properly.

---

## Deployment

This site is deployed to Github Pages. If you want to deploy it yourself:
1. On GitHub, navigate to this repository: [puggy-pair-up](https://github.com/RicardoAzuul/puggy-pair-up)
2. In the top-right corner of the page, click Fork.
3. GitHub will fork the repository with the same name under your GitHub profile.
4. Rename the repository on your own Github profile, with a specific name: %YourGitHubUserName%.github.io.
5. Go to the Settings of this repository.
6. Scroll all the way down, to right above the Danger Zone.
7. Here you can setup the repository to serve as the source for your GitHub Pages. In order to do so, choose a theme.
8. Choosing a theme will apply one of several themes available. This adds a _config.yml file to the repository.
9. After the theme has been applied, simply delete _config.yml from the repository to delete the theme and you'll have your own GitHub Pages site of Puggy Pair Up!

Click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for more information about Github Pages.

### Run locally

1. If you want to run the project locally, simply clone the repository into the directory of your choice: 

```
git clone 
```
2. Using Visual Studio Code, search for the [Live Server](https://ritwickdey.github.io/vscode-live-server/) extension by Ritwick Dey and install it.
3. Press F1 in Visual Studio Code and in the search bar that pops up look for Live Server and start it.
4. This will start a browser on your own machine hosting the website locally. 

---

## Credits

### Inspiration


### Content


### Media
Pug stock photos from Pexels.com

### Acknowledgements

- My pug Pablo, for being the inspiration for this game!
- I also received help and support from my mentor at Code Institute, [Jack Wachira](https://github.com/iamjackwachira). 
- I would also like to thank to all the people at [Code Institute](https://codeinstitute.net/) for providing the Diploma in Software Development course and giving me the tools and guidance to create this site.
- And also thanks to [Bootstrap](https://getbootstrap.com/) for helping with implementing their Bootstrap stylings, and [Stackoverflow](https://stackoverflow.com/) and [MDN](https://developer.mozilla.org/en-US/) for helping with finding solutions to coding problems, like the full background image.
- https://www.w3schools.com/html/html5_canvas.asp
- https://stackoverflow.com/questions/63526002/unable-to-load-image-from-assets-folder-in-angular
- https://stackoverflow.com/questions/17767759/css3-scale-animation-keyframes/34226236