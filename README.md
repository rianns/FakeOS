# FakeOS

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

-   [Live link](https://rianns.github.io/FakeOS/)
-   ![Live view of FakeOS](./assets/images/FakeOS.png)

---

## Requirements / Purpose
### MVP
  - HTML/SCSS:
    - Wallpaper scales to fit the viewport
    - Minimum 3 icons on desktop
    - The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
    - Apps look consistent
    - Menu contains a flex with content inside it
    - Apps should be able to contain text, an image or a form

  - JavaScript:
    - Put your js code into separate files
    - Your icons and menu should add event listener for the click event, don't use the html onclick attribute
    - Give your functions and variables good names
    - Use the arrow syntax to declare functions

  - Github:
    - Create a repo on github with a README
    Clone Repo
    - Create and checkout develop branch
    - Push all changes to your develop branch
    - When submitting create a pull request from develop into main for review
    - Add coach as a reviewer

-   The goal of this project is to have students explore and consolidate their understandings of HTML, CSS and JavaScript. This project will require you to replicate the layout and format of a design/image using CSS, add content via HTML and control the interactive elements via JavaScript.

-   Stacks used
  - HTML/SCSS: provide layout and styling of the application such as the containers for each feature application.
  - JavaScript: provide feature functionality such as hidden containers that reveal on button clicks
  - GitHub/Git: used as a repository for the project, and to display the application live

---

## Build Steps

### Required installations

SASS/SCSS

```cmd
npm i sass
or
npm install sass
```
### Setup

![FakeOS project folder/file structure](./fakeOS.drawio.png)

OS: Windows XP 2000
![Visual guide used to recreate in FakeOS](./assets/images/guides/windowsXPguide.jpg)

1. Research was done on what the actual Windows XP looked like:
    - wallpaper background
    - colours
    - icons used
    - font styles and colours
    - how the windows and features moved and behaved when interacted with (clicks, hovers, etc)
2. Created GitHub repository with README.md file and cloned in local drive
3. In VSCode, recreated the folder structure and the files gathered were sorted in assets folder (background wallpaper and icons) 
4. Basic HTML layout was created along with initial styles.scss file
5. I worked on each part in sections
  - Desktop section

    Colour palette
    ```scss
    $main-color-blue: #1f58d9;
    $secondary-color-green: #1e8c1e;
    $tertiary-color-blue: #0a92eb;
    ```
    Font styles
    ```scss
    $primary-font-family: Tahoma, sans-serif;
    $secondary-font-family: Verdana, sans-serif;
    $tertiary-font-family: 'Trebuchet MS', sans-serif;
    ```
    
    This was the main section where the viewpoint size is determined, the rest of the components are relative to this setup. 

---

## Design Goals / Approach

-   Design goals
-   why did you implement this the way you did?

---

## Features

-   What features does the project have?
-   list them...

---

## Known issues

-   Remaining bugs, things that have been left unfixed
-   Features that are buggy / flimsy

---

## Future Goals

-   What are the immediate features you'd add given more time

---

## Change logs

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

### 13/02/2022 - {Theme of changes if applicable}

-   Extended the expiry time of JWT tokens on the backend
-   Added users to cohort response payload
-   Centralized API base URL on frontend using the proxy `package.json` property

---

## What did you struggle with?

-   What? Why? How?

---

## Licensing Details

-   What type of license are you releasing this under?

---

## Further details, related projects, reimplementations

-   Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
-   If it's an API, is there a client app that works with this project? link it