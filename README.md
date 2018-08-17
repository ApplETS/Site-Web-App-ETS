# App|ETS Website

This is the repository for the new version of the App|ETS website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the auto-refreshing plugin (BrowserSync), you will need Node.js. You can download it from the official website at : https://nodejs.org/en/download/ .

Next, you need to install the BrowserSync npm package with the follow command.

```
npm install -g browser-sync
```

### Installing

To setup your working environment, follow these steps:

1. Clone the repository by running the follow command.

```
git clone https://github.com/ApplETS/Site-Web-App-ETS
```

2. Next, you want to setup BrowserSync so that changes made to the files will automatically refresh the browser. 

```
browser-sync start --server --files "*.html, css/*, js/*"
```

You can modify the command by adding more files to the auto-sync. 



