# BOOKMARK MANAGER

This application is made to simply deal with bookmarks. You can add bookmarks from 2 websites:
* Flickr 
* Vimeo

Both video and photo have common properties:
* Url
* Author Name
* Title
* Upload date
* width
* height
* duration (only for video)

## Getting Started

### Prerequisites

In order to build and deploy this app you need to have these packages:

```shell
  npm
```

### Installing

In order to install all the dependancies of this application you have to execute the following commands

```shell
  npm install
```

This app uses localStorage in order to maintain bookmarks. If browser does not support localStorage all bookmarks will not be persistent after refresh.

### Start developping

Just type the following command in your terminal

```shell
npm start
```

### Launch test

You can launch unitary tests with this command

```shell
npm test
```

### Build and deployement

In order to make a production build you simply need to execute this line

```shell
npm build
```

You can now host all the content of the build folder on a server.
