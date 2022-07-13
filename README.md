# Embed PowerBI in the Quip

## Prerequisites

You must have Node v12 or higher installed on your machine

Use the commands below in your Terminal to set up your machine. For more information, visit our Live Apps guide at https://quip.com/dev/liveapps/ .

npm install -g quip-cli
quip-cli login


## Step 1:

Download the code to the local.


## Step 2:

Login to Quip Developer Console and create a Live app

## Step 3:

In the Live app - under the overview tab copy the AppID.

## Step 4:

Switch to downloaded code, open app-> Manifest.json, paste and replace the Id


## Step 5:

open terminal -> set the path to the folder and run "npm run build" command.The app.ele file will get generated.


## Step 6:

Switch to Quip Developer Console -> Builds tab ->click upload app.ele  -> click upload and test then click release.




