# Embed PowerBI in the Quip

## Prerequisites

You must have Node v12 or higher installed on your machine

Use the commands below in your Terminal to set up your machine. For more information, visit our Live Apps guide at https://quip.com/dev/liveapps/ .

npm install -g quip-cli
quip-cli login


## Step 1:

Clone this repository on your local machine


## Step 2:

Visit Quip Developer Console and click on "Create a Live App"

## Step 3:
Copy the App ID displayed in the developer console and paste it inside manifest.json, replacing <<ENTER YOUR LIVE APP ID HERE>>.


## Step 4:
Run the following commands in your Terminal from the repository folder to build the live app and upload it to Quip
npm install
npm run build
quip-cli publish
quip-cli release --beta (and select the only version that appears in the list)



## Step 5:
If step 4 doesn't work, release to production
Switch to Quip Developer Console -> Builds tab ->click upload app.ele  -> click upload and test then click release.




