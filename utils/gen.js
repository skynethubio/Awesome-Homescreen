// Package Imports
const jsonToTable = require('json-to-table');
const markdownTable = require('markdown-table');

// Import json array
const apps = require('../src/apps.json');

// Build New Object
let officialApps = [];
let unofficialApps = [];
let addToHomescreen = "[![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/"
apps.forEach((app) => {
    // Build fields
    let jsonData = {}
    jsonData['Application'] = "[" + app.applicationName + "](" + app.repoLink + ")";
    jsonData['Add To Homescreen'] = addToHomescreen + app.resolverSkylink + ")";
    jsonData['Description'] = app.description;
    if (app.unofficial) {
        unofficialApps.push(jsonData);
    } else {
        officialApps.push(jsonData);
    }
})

// Convert json to table
const officialAppsTabled = jsonToTable(officialApps);
const unofficialAppsTabled = jsonToTable(unofficialApps);

// Convert table to markdown
const officialAppsMarkdown = markdownTable(officialAppsTabled, { align: ['c', 'c', 'l'] })
const unofficialAppsMarkdown = markdownTable(unofficialAppsTabled, { align: ['c', 'c', 'l'] })

// Log the official apps
console.log(officialAppsMarkdown);

// Log the Header for the Unofficial Apps sections
console.log("### Unofficial Apps");
console.log("Below is a list of unofficial apps that can be used as examples of what can be supported on Homescreen. These should not be considered production apps.");

// Log the unofficial apps
console.log(unofficialAppsMarkdown);