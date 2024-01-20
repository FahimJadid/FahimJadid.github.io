# Fahim Al Jadid 👩🏽‍🚀

Personal portfolio built using the popular React library.

- [Features](#-features)
- [Getting started](#-getting-started)
- [Installation and Setup Instructions](#-installation-and-setup-instructions)
- [Folder structure](#-folder-structure)
- [Configurations](#-configurations)
- [Google Analytics](#-google-analytics)
- [Building the React App](#-building-the-react-app)

## 📙 Features

- 📖 Multi-Page Layout
  - Home
  - About
  - Projects
  - Articles
  - Contact
- 📱 Fully Responsive
- 🛠 Easy configurations

## 📚 Getting started

Clone down this repository. You will need `NodeJS` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. Run the project: `npm start`

Runs the app in the development mode.\
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.
The page will reload if you make edits.

## 📁 Folder structure

- `/public`: publicly accessible contents (ex: images, media).
- `/src`: all the components used in this project.
  - `/src/components/`: each reusable components of each pages.
  - `/src/data`: configurations of the web app.
  - `/src/pages`: pages that include in the web app.
  - `/src/assets`: images, media, etc.

## ⚙️ Configurations

Directory: `/src/data/`

- `user.js`

  To change the content of each page of the web application.

- `articles.js`

  To add your articles to the web application.

- `styles.css`

  To change the font colors and font families of the web application.

  ```css
  :root {
    /* ------- colors ------- */
    --primary-color: #27272a;
    --secondary-color: #65656d;
    --tertiary-color: #acacb4;
    --quaternary-color: #e4e4e7;
    --link-color: #14b8a6;
    /* ---------------------- */

    /* ------- fonts ------- */
    --primary-font: "Heebo", sans-serif;
    --secondary-font: "Roboto", sans-serif;
    /* --------------------- */
  }
  ```

## 📈 Google Analytics

Google Analytics 4 MEASUREMENT ID to `/src/data/tracking.js`.

How to find the Google Analytics 4 MEASUREMENT ID ?

[https://support.google.com/analytics/answer/9539598?hl=en](https://support.google.com/analytics/answer/9539598?hl=en)

## 🚀 Building the React App

To build the React app, use the `npm run build` command. This will create a production-ready build of your app in the `build/` directory.

Here are the steps to follow:

1. Open a terminal window and navigate to the root directory of your React app.
2. Run the `npm run build` command to create a production build of your app. This will generate a static bundle of your app in the `build/` directory.
3. Copy the contents of the `build/` directory to your server's public directory. You can do this using an FTP client or by running a command like `scp` to transfer the files to your server. Make sure to replace `example.com` and `/var/www/html` with your server's domain name and public directory, respectively:

   ```bash
   scp -r build/* user@example.com:/var/www/html
   ```
