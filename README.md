# Roleplay Cafe

This project is for a static website for a non-existing cafe: the Roleplay Cafe.
The Roleplay Cafe specializes in providing a venue and resources for roleplaying enthousiasts. 

As such, the site needs to meet the needs of both visitors and owners:
- new visitors need to be able to quickly learn about the Roleplay Cafe.
- returning visitors need to quickly find relevant information, for instance about events.
- the owners want to convert new visitors into recurring visitors and have recurring visitors return to the cafe.

To visit the site, open [https://ricardoazuul.github.io/roleplay-cafe](https://ricardoazuul.github.io/roleplay-cafe)

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
- As a potential customer of the cafe, I want to visit the site and quickly determine if the cafe is suitable for me, so I can decide to visit. I will look at location, opening times and the menu. Some photos to give a sense of the ambience would be nice too.

    - Screenshots related to this user story:

        - [Footer screenshot](assets/readme-assets/footer_screenshot.png)

        - [Menu screenshot](assets/readme-assets/menu_screenshot.png)

        - [Ambience ](assets/readme-assets/ambience_screenshot.png)

- As a recurring customer of the cafe, I want to visit the site to see what events are on and when, so I can decide which events to go to. I want to see when these events are planned, if they recur, and a brief description of these events.

    - Screenshots related to this user story:

        - [Next event screenshot](assets/readme-assets/next_event_screenshot.png)

        - [Upcoming events screenshot](assets/readme-assets/upcoming_events_screenshot.png)

- As a potential customer of the cafe who wants to be a game master for a roleplaying game, I want to visit the site to see what resources the cafe provides for hosting my game, so I can decide to host my game at the cafe. I want to have an overview of the resources provided - dice, character sheets, a sound system, perhaps a booth? - any possible costs associated with them and when the resources are available.

    - Screenshots related to this user story:

        - [Resources screenshot](assets/readme-assets/resources_screenshot.png)

        - [GM form screenshot](assets/readme-assets/gm_form_screenshot.png)

- As a potential customer of the cafe who wants to be a player in a roleplaying game, I want to visit the site to see if there are any games for me to join, so I can decide to go to the cafe.

    - Screenshots related to this user story:

        - [Next event screenshot](assets/readme-assets/next_event_screenshot.png)

        - [Upcoming events screenshot](assets/readme-assets/upcoming_events_screenshot.png)

- As a potential customer of the cafe who is new to roleplaying games, I want to visit the site to see what the cafe offers to help me learn about this hobby, so I can decide to go to the cafe.

    - Screenshots related to this user story:

        - [Information for new players screenshot](assets/readme-assets/newbies_screenshot.png)

        - [Encouraging videos screenshot](assets/readme-assets/newbie_videos_screenshot.png)

---

### The 5 Planes of Design

I've used Jesse James Garret's 5 planes of UX design to design the site. I started off at the Strategy Plane.

#### Strategy Plane

For the owners of the Roleplay Cafe, the site needs to achieve the following:
- inform site visitors what the Roleplay Cafe offers.
- turn visitors to the site into visitors of the cafe, and ideally recurring visitors too.

The value of the site for the owners: the number of visitors to the Cafe increases, website visitors register their games and more games are being offered by the Cafe, building a tribe of like-minded visitors.

For the visitors, the site needs to achieve the following:
- allow them to quickly figure out what the Roleplay Cafe offers.
- find out about roleplaying games they can join.
- submit a game they want to run as game master.
- find out about events.

The value of the site for site visitors: quickly learn about a cool new cafe in town and get to meet people with similar interests.

The owners of the Roleplay Cafe want to have a website designed in order to reach more potential customers and to keep their customers.

The goals of the website are thus:
- inform potential customers of what the Roleplay Cafe has on offer.
- inform returning customers of what the Roleplay Cafe has on offer.

The users I am focusing on:
- players of roleplaying games who are looking for a place to socialize with others like them, try out new roleplaying games, find new groups to play with.
- gamemasters of roleplaying games, who are looking for a place to host their games and find new players.
- people who are interested in roleplaying games, but have little to no experience and are looking to learn more.

The tasks that I will help users solve:
- find the basic details of the Roleplay Cafe: opening times, location, an idea of the menu, social media.
- find events that are hosted at the Roleplay Cafe.
- for the gamemasters: submit their game idea, so the Roleplay Cafe can add it to the regular games.
- for the gamemasters: find out the resources the Roleplay Cafe has on offer, and if necessary reserve them.
- for people curious about roleplaying games: discover what the Roleplay Cafe and roleplaying is about, using photos of the Roleplay Cafe and perhaps some videos about roleplaying games.

Why will users use this solution:
- it's the easiest way to find out what the Roleplay Cafe is about and what is on offer. Walking in might be confusing, and you would have to find the Roleplay Cafe first.

---

#### Scope Plane

The functional specifications of the site:
- A responsive website, mobile first design - for users on the move or who happen to find themselves near or in the Cafe - with at least the following content:
    - a Home section to give a quick overview of the Roleplay Cafe: menu, photos, opening times, location.
    - a section for players to give an overview of games and events on offer.
    - a section for gamemasters to give an overview of the resources on offer and a form to submit their game idea.
    - a section for newbies, that tries to quickly explain what roleplaying and the Roleplay Cafe is about.
    - a section for the drinks and food menu.
    - a section with instructions how to get to the Roleplay cafe.
    - a section with a brief history of the Roleplay Cafe and its owners, the About page.
    - the Home page has a Jumbotron featuring the next event.
    - the players' page has a Jumbotron featuring the next event.
    - the gamemasters'  page has a Jumbotron featuring new resources on offer.
    - the newbies' page has a Jumbotron featuring the next event for beginners.

Content requirements:
- Photos of the Roleplay Cafe and its facilities.
- A list of events.
- A list of resources for gamemasters. 
- Inspirational images and texts to entice users to come visit.
- A short text about roleplaying and the Roleplay Cafe to entice new visitors.    

---

#### Structure Plane
All pages should have the same navigation bar and footer:
- the navigation bar contains links to all the pages, as well as the home page.
- the footer contains the Roleplay Cafe's address and social links.

Initially I was going to have separate pages for the information for players, gamemasters and newbies, but I've decided to combine those into one page, using tab navigation to switch between the sections.

<ins>The Home Page</ins>
- a hero image to inspire visitors of the site to visit the Cafe.
- a short text about the Roleplay Cafe.
- the next upcoming event, and a link to the agenda.
- more photos of the Cafe/roleplaying.
- a short text about the menu, and a link to it.
- a form to sign up for the newsletter.

<ins>Why Visit Us</ins>
- more in-depth information for players of roleplaying games why they should visit.
- a list of events.
- more in-depth information for gamemasters why they should visit.
- a form for gamemasters to submit their game idea.
- more in-depth information for newbies why they should visit.

<ins>Menu</ins>
- photos of food and drinks.
- an overview of the food and drink menu.

<ins>Directions</ins>
- a text on how to get get to the Roleplay Cafe.
- a link that opens a well-known website for planning your public transport route.
- an embedded Google Maps map indicating the location.

<ins>About</ins>
- a brief history of the Roleplay Cafe and why it was opened.
- a brief history of the owners.

*The About page was ultimately left out. It was the least interesting page from a developer's viewpoint, and leaving it out meant having more time to focus on the other pages.*

---

#### Skeleton Plane

Website visitors have come to expect certain layouts from websites. As such, I will add a navigation bar to the top of every page, that will always remain visible, even when scrolling down. This navigation bar contains links to all the different pages. 
On the left will be the logo, which when clicked upon will take the user back to the home page.

The active page is indicated with a line under the navigation item. When hovering over navigation items, a blue line will appear under the navigation item.

At the bottom of every page will be the same footer, with the following information: opening hours, contact details, links to the Roleplay Cafe's social media accounts (in this case links to the home pages of said social media sites) and a form to sign up for a newsletter.

Text will also go from top to bottom, with images between pieces of text to break it up and add variation. Only on the menu page will the food and drinks menu appear next to each other, but only on the larger breakpoints.

On smaller breakpoints the flow of text will be the same, but with less white space on left and right. Images, embedded Youtube videos and the embedded Google Maps map will disappear on smartphone screens, to save space.

---

#### Surface Plane

For the color palette I wanted something that makes one think of an old bar or cafe, but with a little bit of magic injected. I found concept art of a bar in the Dungeons & Dragons world of Eberron, which had both: lots of dark browns, but also magical colours. I used [this image](https://www.artstation.com/artwork/nQXmye).

I used EyeDropper to determine the hex values of colours. I used #542c23 as the background colour for the nav bar and the footer, and borders around images, and #5A94B8 to color buttons, for the line under hovered over nav items and as the color for the social media icons. For white text and the main background I went for #fefefe as an off-white color.

#542c23

![#542c23](assets/readme-assets/542c23.png)

#5A94B8

![#5A94B8](assets/readme-assets/5a94b8.png)

#fefefe

![#fefefe](assets/readme-assets/fefefe.png)

The icons are sourced from Font Awesome, as icons to link to various social media channels, and as icons to enhance certain headings.

Fonts are sourced from Google Fonts. I decided on New Tegomin: I felt it simulated an old type-writer, and the cozy antique feeling it evoked fits with the concept of the Cafe. The Montserrat offset that by being clean and modern. New Tegomin is used for H1 headers, the logo and for the titles in the footer, while everything else is Montserrat.

<ins>Wireframes</ins>

- [Home](assets/readme-assets/home.png)
- [Home tablet version](assets/readme-assets/home_tablet.png)
- [Home Mobile Version](assets/readme-assets/home_mobile_view.png)
- [Why Visit Us Players](assets/readme-assets/why_visit_us_players.png)
- [Why Visit Us Players tablet](assets/readme-assets/why_visit_us_players_tablet.png)
- [Why Visit Us Players mobile Version](assets/readme-assets/why_visit_us_players_mobile_view.png)
- [Why Visit Us Gamemasters](assets/readme-assets/why_visit_us_gamemasters.png)
- [Why Visit Us Gamemasters tablet](assets/readme-assets/why_visit_us_gamemasters_tablet.png)
- [Why Visit Us Gamemasters mobile Version](assets/readme-assets/why_visit_us_gamemasters_mobile_view.png)
- [Why Visit Us Newbies](assets/readme-assets/why_visit_us_newbies.png)
- [Why Visit Us Newbies tablet](assets/readme-assets/why_visit_us_newbies_tablet.png)
- [Why Visit Us Newbies mobile Version](assets/readme-assets/why_visit_us_newbies_mobile_view.png)
- [Menu](assets/readme-assets/menu.png)
- [Menu tablet version](assets/readme-assets/menu_tablet.png)
- [Menu mobile Version](assets/readme-assets/menu_mobile_view.png)
- [Directions](assets/readme-assets/directions.png)
- [Directions tablet](assets/readme-assets/directions_tablet.png)
- [Directions mobile Version](assets/readme-assets/directions_mobile_view.png)

---

## Features

### Existing Features
- Navigation bar: contains links to all the pages and allows users to browse to pages.
- Footer: contains practical information about the Cafe: opening hours, contact details, social media icons, and a newsletter form.
- Home page: has an enticing background image of a cafe bar, a short text about the Cafe, evocative images about roleplaying, food and drinks, buttons that take you to either the upcoming events or the food and drink menu, and short texts about the next upcoming event and food and drinks.
- Why Visit Us page: has tabbed navigation to allow switching between the section for players, the section for gamemasters and the section for newbies.
- The Players section: has text about why you should visit the Cafe if you're a player, an evocative image, and a list of upcoming events.
- The Gamemasters section: has text about why you should visit the Cafe if you're a gamemaster, an evocative image, a list of resources, and a form to submit your game.
- The Newbies section: has text about why you should visit the Cafe if you're new to roleplaying, an evocative image (only on small screens) and links to two Youtube videos meant to encourage roleplaying.
- The Menu page: has a food and drinks menu, and image carousels to go with them.
- The Directions page: has an embedded Google Maps map (only show up on breakpoints md and larger) and texts on how to get to the Cafe by car or public transport.

---

### Features Left to Implement

As I was working on the project, I realized that I was too ambitious. The project requirements specify a minimum of 3 pages, but I had 5 pages. This, coupled with the difficulty of finding suitable free stock images to use, meant that I didn't have the time to implement these features:
- A Jumbotron on the main page, to highlight the next upcoming event
- Calls to action, such as:
    - for players a call to action: perhaps a weekly tournament?
    - for game masters: sign up your game and win.
    - for newbies: join this weekly newbie friendly game.
- A form for players to sign up for games.
- Due to time constraints I also decided to leave out the About page: it is the least important page, and also the least interesting from a developer's perspective.

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

- [Index.html](assets/readme-assets/home_responsive.png)
- [Visit.html](assets/readme-assets/visit_responsive.png)
- [Menu.html](assets/readme-assets/menu_responsive.png)
- [Directions.html](assets/readme-assets/directions_responsive.png)

---

## Testing

Testing was done using Google Chrome, Mozilla Firefox, Microsoft Edge, and also Internet Explorer. I also tested it on an Huawei P smart+ 2019 Android smartphone. The site works fine on all browsers. 

There is one exception: the CSS rule object-fit: cover doesn't work in Internet Explorer. However, Internet Explorer is technically End of Life and no longer supported (even though probably still used for webapps that don't work with any other browser), so this has been left as is. Implementing a fix for object-fit: cover seems like too much of a hassle, according to a quick Google search.

<ins>Tests for Readme.md:</ins>
- :heavy_check_mark: When you click on the links in the TOC, you navigate to the section you clicked on.
- :heavy_check_mark: All links to images open images.
- :heavy_check_mark: All links to external websites open properly.
<br/>

<ins>Code validation:</ins>
1. [HTML validation](https://validator.w3.org/nu/)
- :heavy_check_mark: index.html: the validator indicated a warning: section lacks heading. Changed section to div. Validated again without issue.
- :heavy_check_mark: visit.html: the validator indicated 7 errors and 1 warning. Made changes to the HTML. Validated again without issue.
- :heavy_check_mark: menu.html: validated without issue.
- :heavy_check_mark:  directions.html: the validator indicated a stray end tag div. Validated again without issue.
2. [CSS validation](https://jigsaw.w3.org/css-validator/)
- The validator found 2 errors and 757 warnings. The 2 errors are from the Bootstrap CSS file however. With regards to the warnings: a lot of these are also from Bootstrap. These are unknown vendor extensions. There are 7 warnings about unknown vendor extensions in my own CSS file: these come from the Hover.CSS effects. And there are also warnings about "same color for background-color and border-color", but I intentionally set the same colors.
<br/>

<ins>Navigation Links in the nav bar:</ins>
- :heavy_check_mark: When you click on the Roleplay Cafe logo, you go back to the Home page and the Home page is marked active.
- :heavy_check_mark: When you click on Home, you go back to the Home page and the Home page is marked active.
- :heavy_check_mark: When you click on Why Visit Us, you go to the Why Visit Us page the Why Visit Us page is marked active.
- :heavy_check_mark: When you click on Menu, you go to the Menu page and the Menu page is marked active.
- :heavy_check_mark: When you click on Directions, you go to the Directions page the Directions page is marked active.

- :heavy_check_mark: Hovering over navigation items in the nav bar should show a blue line under the nav item.
<br/>

<ins>Buttons</ins>
- :heavy_check_mark: When you click on the "Check our agenda" button, you go to the Why Visit Us page, to the section with the list of events.
- :heavy_check_mark: When you click on the "Check our menu" button, you go to the Menu page.
- :heavy_check_mark: Hovering over the "Check our agenda" button should show a page curl in the bottom right corner.
- :heavy_check_mark: Hovering over the "Check our menu" button should show a page curl in the bottom right corner.
- :heavy_check_mark: Hovering over "Submit" buttons should change the buttons color to #fefefe.

- :heavy_check_mark: When you click on the phone number in the footer, it opens a phone application.
- :heavy_check_mark: When you hover over the phone number, a line appears under it.
- :heavy_check_mark: When you click on the email address in the footer, it opens an email application.
- :heavy_check_mark: When yhou hover over the email address, a line appears under it.
<br/>

<ins>Social Media Links in the footer:</ins>

For each link (icon):
1. Click on the icon.
1. See if it opens in a new tab and goes to the expected page (the respective social media's home page)
- :heavy_check_mark: Facebook
- :heavy_check_mark: Twitter
- :heavy_check_mark: Instagram
- :heavy_check_mark: Discord

- :heavy_check_mark: When you hover over a Social Media icon, the background changes colour.
<br/>

<ins>Newsletter signup in the footer:</ins>
- :heavy_check_mark: Signup for the newsletter without filling in an email address. This gives a popup that an email address is required.
- :heavy_check_mark: Signup for the newsletter after filling in an incorrect email address. This gives a popup that the email address is incorrect. 
- :heavy_check_mark: Signup for the newsletter after filling in a correct email address. This reloads the page: expected behaviour, as there is no server that the data is POST-ed to. 
<br/>

<ins>The "Why Visit Us?" page:</ins>
- :heavy_check_mark: When you hover over the nav tabs, borders appear around it.
- :heavy_check_mark: When you click on a nav tab, the correct content is shown.
<br/>

<ins>Submit your game form on the "Why Visit Us?" page:</ins>
- :heavy_check_mark: When you click on the button to submit your game, a modal opens with the form.
- :heavy_check_mark: Clicking on the "Close" button should close the modal.
- :heavy_check_mark: Clicking outside the modal should close the modal.
- :heavy_check_mark: Submitting the filled in form should do nothing, as the submit button has not been linked up to anything.
<br/>

<ins>The YouTube videos in the Gamemasters tab on the "Why Visit Us?" page:</ins>
- :heavy_check_mark: When you click the Youtube start button, the video starts playing.
<br/>

<ins>The "Menu" page:</ins>
- :heavy_check_mark: When you click on the "previous" icon on the food carousel, it loads the previous picture.
- :heavy_check_mark: When you click on the "next" icon on the food carousel, it loads the next picture.
- :heavy_check_mark: When you click on the "previous" icon on the drinks carousel, it loads the previous picture.
- :heavy_check_mark: When you click on the "next" icon on the drinks carousel, it loads the next picture.

<ins>The "Directions" page</ins>
- :heavy_check_mark: When you click on the link to the GVB website, the website opens in a new tab.

---

## Deployment

This site is deployed to Github Pages. If you want to deploy it yourself:
1. On GitHub, navigate to the [RicardoAzuul/RicardoAzuul.github.io repository](https://github.com/RicardoAzuul/RicardoAzuul.github.io)
2. In the top-right corner of the page, click Fork.
3. GitHub will fork the repository with the same name under your GitHub profile.
4. Rename the repository on your own Github profile, with a specific name: %YourGitHubUserName%.github.io.
5. Go to the Settings of this repository.
6. Scroll all the way down, to right above the Danger Zone.
7. Here you can setup the repository to serve as the source for your GitHub Pages. In order to do so, choose a theme.
8. Choosing a theme will apply one of several themes available. This adds a _config.yml file to the repository.
9. After the theme has been applied, simply delete _config.yml from the repository to delete the theme and you'll have a GitHub Pages of Roleplay Cafe just like mine!

Click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for more information about Github Pages.

### Run locally

1. If you want to run the project locally, simply clone the repository into the directory of your choice: 

```
git clone https://github.com/RicardoAzuul/RicardoAzuul.github.io.git
```
2. Using Visual Studio Code, search for the [Live Server](https://ritwickdey.github.io/vscode-live-server/) extension by Ritwick Dey and install it.
3. Press F1 in Visual Studio Code and in the search bar that pops up look for Live Server and start it.
4. This will start a browser on your own machine hosting the website locally. 

---

## Credits

### Inspiration
I used the following website for inspiration: https://ranked.bar/

### Content
All text content is written by myself.

### Media
I sourced almost all images from [Unsplash](https://unsplash.com), except for one which I sourced from [Pexels](https://www.pexels.com). I happen to watch both Matt Colville's YouTube videos and the Critical Role stream, which is why I added links to their videos.

### Acknowledgements

- My wife Elizabeth Lane gave me the idea for this project. She knows I'm enthousiastic about roleplaying games, and she suggested creating this site as my first Milestone Project for Code Institute's Diploma in Software Development.
- I also received help and support from my mentor at Code Institute, [Jack Wachira](https://github.com/iamjackwachira). Using the tabbed navigation on the visit.html page was his suggestion for instance.
- I would also like to thank to all the people at [Code Institute](https://codeinstitute.net/) for providing the Diploma in Software Development course and giving me the tools and guidance to create this site.
- And also thanks to [Bootstrap](https://getbootstrap.com/) for helping with implementing their Bootstrap stylings, and [Stackoverflow](https://stackoverflow.com/) and [MDN](https://developer.mozilla.org/en-US/) for helping with finding solutions to coding problems, like the full background image.