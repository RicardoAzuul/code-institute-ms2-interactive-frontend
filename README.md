# Puggy Pair Up

Puggy Pair Up is a browser game for people who like pugs and memory games.

Players will be be presented with a board of tiles, which they can click on to flip over. When flipped over, the tile reveals a picture of a pug: there are doubles of every picture on the board and it is up to the players to remember where they are and pair them up!

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
1. [Deployment](#Deployment)
1. [Credits](#Credits)
    1. [Content](#Content)
    2. [Media](#Media)
    3. [Acknowledgements](#Acknowledgements)

---

## UI and UX
 
### User stories
- As a visitor to the site, I want to be able to play the game. It would be nice if I can keep track of high scores, and even nicer if there is a scoreboard for multiple players. 
- In order to play the game I need to be able to:
    1. See a board of tiles that I can flip.
    2. Be able to flip two tiles to see which picture is behind them.
    3. If the pictures match, the tiles need to remain flipped, and the score needs to change.
    4. If the pictures don't match, the tiles flip back.
    5. I then need to select two more tiles to flip and find the remaining matching pairs.
    6. Every time the game is run, it needs to have a random layout.
    7. Nice to have: scaling difficulty, by having more or less tiles on the board.
    8. Nice to have: a scoreboard, at least for individual players. An all time highscore board, and a scoreboard for friends might also be nice.
- To see my own scores, I will click on "My high scores" in the navbar. This will take me to a page with my highscores.
- To see all high scores, I will click on "Alltime high scores" in the navbar. This will take me to a page with alltime highscores.
- To see the scoreboard for me and my friends, I will click on "High scores with friends." This will take me to a page with my friends' and my highscores.


    - Screenshots related to this user story:



---

### The 5 Planes of Design

Jesse James Garret's 5 planes of UX design were used to design the site. We start off at the Strategy Plane:

#### Strategy Plane

The main goal for visitors to the site is to play a game. This means that upon visiting the page, a game must be ready to be started. For this, we need an active board of tiles. The tiles should consist of pairs of pug pictures, that can be flipped over. Players then remember where particular pug pictures are, and if they find the twin, they try and flip both of them to score. 

There are at least two ways of running the game: 
1. Every game is one big board of tiles, with all possible pairs of pug pictures on the board in a random configuration.
1. Upon loading the site, a (relatively) easy version of the game is loaded, with a small number of paired pictures. Once a player clears the board, a new board is generated, this time with increased difficulty: meaning more paired pictures.

We want players to come back as well. Competition can stimulate players to return. There can be a scoreboard that keeps track of individual scores, but a shared scoreboard for all players can be even more stimulating.

It might also be an idea to encourage players to invite their friends to play and compete by having them create a scoreboard for friends.

---

#### Scope Plane

The functional specifications of the site:
- A responsive website, mobile first design - with at least the following content:
    - the main section, with the game interface. For this we need:
      - a collection of pug pictures. Potential problem: as the board increases in number of tiles, tile size will decrease and pictures might be become hard to keep apart.
      - code to generate a board of tiles, with the pug pictures on the other side of the tiles in a random configuration.
      - code that allows for flipping of the tiles and revealing the pug picture.
      - code that checks whether the two flipped tiles match or not:
        - if they match, keep them flipped and keep track.
        - if they don't match, flip them back.
    - a navbar, for quick navigation to individual scoreboards and collective scoreboards.
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
  - the tile board
  - a score tracker
  - a timer?

<ins>Individual scoreboard</ins>
- a list of an individual player's scores. This list needs to update after games.

<ins>Alltime high scores</ins>
- a list of all collective high scores. This list needs to update after games.

<ins>Friends high score board</ins>
- a list of high scores from you and your friends, to see how you match up. This list needs to update after games.

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
- [Alltime high scores](readme-assets/wireframes/alltime_highscores.png)
- [Alltime high scores tablet version](readme-assets/wireframes/alltime_highscores_tablet_view.png)
- [Alltime high scores mobile Version](readme-assets/wireframes/alltime_highscores_mobile_view.png)
- [Friends' highscores](readme-assets/wireframes/highscores_with_friends.png)
- [Friends' highscores tablet](readme-assets/wireframes/highscores_with_friends_tablet_view.png)
- [Friends' highscores mobile Version](readme-assets/wireframes/highscores_with_friends_mobile_view.png)

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
- All time high scores
- Scoreboard for friends

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

<ins>Social Media Links in the footer:</ins>
<br/>

<ins>Newsletter signup in the footer:</ins>
<br/>


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