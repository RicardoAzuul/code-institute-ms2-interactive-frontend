# Puggy Patterns

Puggy Patterns is a browser game for people who like pugs and memory games.

It is a game inspired by Simon, but using pug pictures. Instead of a circle with four different colours, players see four pug pictures. The game randomly animates a picture, which the player then has to click. Each round the game generates a longer sequence of pictures that need to be clicked in order.


Must haves for this project:
- a clear interface.
- a functioning game.

Nice to have: 
- a way to keep track of scores, maybe even a scoreboard.

To visit the site, open [https://ricardoazuul.github.io/code-institute-ms2-interactive-frontend/](https://ricardoazuul.github.io/code-institute-ms2-interactive-frontend/)

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

**Update:** having a scoreboard for multiple players that is centrally accessible would require a backend database that saves the scores, which is out of scope for this project.
- In order to play the game I need to:
    1. See a board of pug pictures.
    1. Have the game animate which picture needs to be clicked on.
    1. Be able to click on these pictures.
    1. Have the game generate longer sequences of pictures that need to be clicked on in order, to make it more difficult as I progress.
    1. Nice to have: scaling difficulty, by having more or less pictures on the board. 

    **Update:** the difficulty isn't in the amount of pictures, but the length of sequence. Scaling difficulty is now implemented by having the game start off with longer or shorter sequences.
    1. Nice to have: a scoreboard, at least for individual players. 
- To view my highscores, I will click on "My high scores" in the navbar. This will take me to a page with my highscores.

    - Screenshots related to this user story:

- To adjust the game settings, I will click on "Game settings" in the navbar. This will take me to the page where I can set the difficulty or reset my highscores.

    - Screenshots related to this user story:

- To find out how to play, I will click on "How to play in" in the navbar. This will take me to the page with game instructions.

    - Screenshots related to this user story:

---

### The 5 Planes of Design

Jesse James Garret's 5 planes of UX design were used to design the site. We start off at the Strategy Plane:

#### Strategy Plane

The main goal for visitors to the site is to play a game. This means that upon visiting the page, a game must be ready to start. For this, we need a board of pictures. Because the game is about memorizing sequences, we need a start button, otherwise players might miss the first sequence and lose straight away. The start button gives them a chance to get their bearings, and then start the game. 

We want players to come back as well. For this, we implement a scoreboard, so players can keep track of their progress between sessions and work on getting better at the game.  

---

#### Scope Plane

The functional specifications of the site:
- A responsive website, mobile first design - with *at least* the following content:
    - the main section, with the game interface. For this we need:
      - a collection of pug pictures. Potential problem: as the board increases in number of tiles, tile size will decrease and pictures might be become hard to keep apart.
      - code to generate a sequence of random numbers, with the numbers equating to pictures on the board.
      - code that checks whether the player gave the right sequence as input.
    - a navbar, for quick navigation to the scoreboard.
    - a basic footer

Content requirements:
- Photos of pugs.

---

#### Structure Plane
All pages should have the same navigation bar and footer:
- the navigation bar contains links to all the pages, as well as the home page.
- the footer contains copyright info.

<ins>The Home Page</ins>
- a game logo
- the main game interface:
  - the Start button, which changes to a Submit button when clicked. This saves space on the screen, especially useful for small screens.
  - the picture board.
  - a score tracker.
  - two alert areas where game messages will appear.
 

<ins>High scores</ins>
- a page with a table of the 10 highest scores. Whenever the player fails the game, this page will update with any new high scores.

<ins>Game settings</ins>
- a page where you can reset your high scores, but also change the starting difficulty of the game.

<ins>How to play page</ins>
- explains how the game works.

---

#### Skeleton Plane

The navigation bar will be added to the top of every page and will always remain visible. There are links to all pages on this navbar. 
On the left will be the logo, which when clicked upon will take the player back to the game page.

The active page is indicated with a line under the navigation item. When hovering over navigation items, the navigation item will be indicated with a dog paw icon, to keep with the pug theme.

At the bottom of every page will be the same footer.

---

#### Surface Plane

The color palette is based on the theme: the colors were taken from a picture of a typical pug: 
- #f4dfc3 as the darker fawn colour on the back of a pug, used for the navbar and footer.
- #faf8f2 as the lighter fawn colour on the belly of a pug, used for the body.
- #2a1f1a for the black on a pug's nose, used for text.

The icons are sourced from Font Awesome.

The game buttons and game settings buttons are Bootstrap-style buttons: I used the Bootstrap button classes as easy ways to complement the function of buttons.

Fonts are sourced from Google Fonts. I decided on Lobster, because it seemed playful while remaining legible and professional. Open Sans was one of the recommended pairings, which is a nice clean font.

<ins>Wireframes</ins>

- [Game page](readme-assets/wireframes/game.png)
- [Game page tablet version](readme-assets/wireframes/game_tablet_view.png)
- [Game page mobile Version](readme-assets/wireframes/game_mobile_view.png)
- [High scores](readme-assets/wireframes/your_highscores.png)
- [High scores tablet version](readme-assets/wireframes/your_highscores_tablet_view.png)
- [High scores mobile version](readme-assets/wireframes/your_highscores_mobile_view.png)
- [Game settings](readme-assets/wireframes/game_settings.png)
- [Game settings tablet version](readme-assets/wireframes/game_settings_tablet_view.png)
- [Game settings mobile version](readme-assets/wireframes/game_settings_mobile_view.png)
- [How to play](readme-assets/wireframes/how_to_play.png)
- [How to play tablet version](readme-assets/wireframes/how_to_play_tablet_view.png)
- [How to play mobile version](readme-assets/wireframes/how_to_play_mobile_view.png)

---

## Features

### Existing Features

- Navigation bar: contains links to all the pages and allows users to browse to pages.
- Footer: contains copyright info.
- Game interface: has 4 pug pictures, that animate in a generated sequence when start is clicked. The player can then click these pictures in the correct sequence to increase their score.
- Score tracker: keeps track of how many rounds have been completed and the length of the longest memorized sequence.
- High scores page: displays a table with the 10 highest scores, which is retrieved from localStorage.
- How to play page: explains how to play the game.
- Settings page: allows the player to reset high scores and allows them to set the starting difficulty - at which length the sequence starts.

---

### Features Left to Implement

- Classic Simon Mode: a setting on the Game settings page that allows you the run the game like Simon: each time the same sequence is used, but one more step is added to the sequence.
- Saving the game before failing: right now the game only records high scores once the player fails the game. It would be nice to implement a save button that allows you to save your scores without failing.

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
- [WAVE - web accessibility evalution tool](https://wave.webaim.org/): to check the accessibility of the pages.
- [Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html): to generate colors that contrast better.
- [Am I Responsive?](http://ami.responsivedesign.is/): to generate screenshots of the site at various viewpoints, indicating responsiveness.
- [EyeDropper](https://eyedropper.org/): to pick colours from an image.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): an automated tool in Chrome DevTools that audits for performance, accessibility, progressive web apps, SEO and more.
- [JSHint](https://jshint.com/): a linter for JavaScript, to help identify coding problems
- [Prettier VS Code plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): a code formatter that helps with code formatting, which is good for creating a consistent style.

---

## Responsiveness of Pages

The website is fully responsive on the following screens: smartphone, iPad, iPad in landscape mode, iPad Pro, iPad Pro in landscape mode, laptop and desktop screens.

These screenshots indicate the responsiveness of the pages on various screens.

- [Index.html](readme-assets/responsive/main_page_responsive.png)
- [Highscores.html](readme-assets/responsive/highscores_responsive.png)
- [Game-Settings.html](readme-assets/responsive/game-settings_responsive.png)
- [How-to-play.html](readme-assets/responsive/how-to-play_responsive.png)

---

## Testing

Testing was done using Google Chrome, Mozilla Firefox, Microsoft Edge, and also Internet Explorer. I also tested it on a Huawei P smart+ 2019 Android smartphone. The site works fine on all browsers. 

<ins>Tests for Readme.md:</ins>
- :heavy_check_mark: When you click on the links in the TOC, you navigate to the section you clicked on.
- :heavy_check_mark: All links to images open images.
- :heavy_check_mark: All links to external websites open properly.
<br/>

<ins>Code validation:</ins>
1. [HTML validation](https://validator.w3.org/nu/)
- :heavy_check_mark: 
- index.html: 3 warnings, 1 error
- highscores.html: 1 error
- game-settings.html: 1 error
- how-to-play.html: 1 error
1. [CSS validation](https://jigsaw.w3.org/css-validator/)
- 2 errors in Bootstrap
- 750 warnings in Bootstrap
1. [VS Code JSHint extension]9https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)
- first check on 21-7-2021: 51 errors. Many of these errors were caused by JSHint not checking using ECMAScript 6. Added a .jshintrc file with this setting enabled.
- second check on 21-7-2021: 14 errors. 12 of these are missing semicolons.


<br/>

<ins>Navigation Links in the nav bar:</ins>
- The brand logo takes you back to the main page.
- All links in the navbar take you to their respective page.
- The active page is indicated with an underline below the related link.
- When you hover over a link, a dog paw appears next to it.
<br/>

<ins>Buttons</ins>
- Clicking the start button runs the game.
- Clinking the submit button submits the player sequence.
- Choosing any of the difficulties means the game starts with a pattern length as indicated by that difficulty.
- The difficulty choice is remembered between sessions, and indicated using a Bootstrap class.
- Clicking the reset button resets the high scores.
<br/>

<ins>The game</ins>
- Images that need to be clicked are animated.
- When the player clicks an image, it is animated.
- The score increments when the player gets the pattern right.
- The longest sequence score increments when the player beats a sequence that is the longest so far.
- The game gets progressively harder, by generating longer sequences.
- Game info messages show up indicating progress.
- The pattern increases in length until the player fails or the max length of 31 is reached.

<ins>High scores</ins>
- High scores populate in the table if they exist.
- The table is updated when new high scores are achieved: they are given the correct place above and below lower and higher scores.

### Notable Bugs

While working on making the game loop, I ran into the following bug:
- the first round of an easy game worked as expected: a picture was highlighted, the player clicked the picture and submitted, and the game checked the score properly.
- on the second round, things went wrong: two pictures would highlight, the player would click the two pictures and submit, but the game would indicate it was wrong

Steps to troubleshoot:
1. Console.logging at various steps in the code. This revealed that on the second round, when the player clicked an image, it registered as 2 clicks, and then would register as 1 click. It seemed to not be clearing the saved playersequence properly.
1. As a side-step, I set playerSequence to be a globally scoped variable, and took the code to add eventListeners to the images to the function that runs on page load. This changed the bug: on the second round, the code to compare the playersequence and the gamesequence ran twice.
1. To further disentangle the code from being a mess of functions calling functions calling functions, I moved the code that adds an eventListener to the submit button to the function that runs on page load. This seems to have fixed the bug. I think the bug was caused by a loop not running as I expected it to.

### Problems
1. The code to animate pictures was animating all pictures at the same time. Ultimately I found code that processed each image in order, but it had a mistake. The code: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
The mistake: the code would first check if index was equal to or greater than the length of the array, and after that check increment the index. This meant that before the if check, index was smaller, but after it was equal, which meant that the code tried to get to an index in the array that wasn't there.

---

## Deployment

This site is deployed to Github Pages. If you want to deploy it yourself:
1. On GitHub, navigate to this repository: [code-institute-ms2-interactive-frontend](https://github.com/RicardoAzuul/code-institute-ms2-interactive-frontend)
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
The main inspiration for the game was one of the project suggestions from Code Institute: to make a pattern-matching memory game like Simon. To personalize this, I decided to not go for the four buttons in different colours, but instead to use pictures of pugs, as inspired by my dog Pablo!


### Content
The little bit of text explaining how to play the game was written by me. 


### Media
The pug photos were sourced from [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/) and [Stockvault](https://www.stockvault.net/).

### Acknowledgements

- My pug Pablo, for being the inspiration for this game!
- I also received help and support from my mentor at Code Institute, [Jack Wachira](https://github.com/iamjackwachira). He gave me the tip to use docstrings for instance.
- I would also like to thank to all the people at [Code Institute](https://codeinstitute.net/) for providing the Diploma in Software Development course and giving me the tools and guidance to create this app.
- And also thanks to [Bootstrap](https://getbootstrap.com/) for helping with implementing their Bootstrap stylings, and [Stackoverflow](https://stackoverflow.com/) and [MDN](https://developer.mozilla.org/en-US/) for helping with finding solutions to coding problems, like animating the pictures in sequence instead of all at once.
- My wife, Elizabeth Lane, for supporting me during this coding course.