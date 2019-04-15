# Plan2Sprint

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

# Description
Plan2Sprint is a web application that allows agile teams to better plan their sprints using historical data from past sprints of all projects that are completed or still in progress. It leverages on the Earned Value Analysis (EVA) to give users a rough gauge if the task that they are about to add into the current sprint can be completed. All values entered in the app are with reference to man-hours.

# Instructions
We would HIGHLY recommend you to test our application through the links mentioned below. Installing and deploying the angular application locally can be cumbersome and unnecessary as our application is already deployed on our production server. During testings, if you encounter issues, we would recommend you to clear your browser storage (cookies) as our application heavily relies on it. Otherwise, we would also recommend you to switch into another browser or access it through Chrome in incognito mode. If Plan2Sprint's performance is slow, it is due to the domain routing and proxy that we configured, so I would recommend you to access it via the Elastic IP (Alternate URL) if it gets too slow.

Recommended browser: Google Chrome

Note: Our web application is fully responsive and mobile friendly. 


## Links to Plan2Sprint (Live on Production Server)
Plan2Sprint URL: http://plan2sprint.ga:4200/home

Alternate URL (Elastic IP): http://3.18.227.133:4200/

You may test the web application through the URLs mentioned above. This way, you may skip installing and deploying the application which are in the steps mentioned after the Important Notes below.

## Important Notes
Due to time constraints, we were not able to implement validation. Therefore, please take note of the following:

Project User Stories Page: Remember to click on 'Save Sprint' whenever you make changes to the user stories.

Current Sprint Page: (important) Remember to always set the Workload Range before adding a new task.

Past Sprints Page: Always select the sprint number you wish to view from the drop down list located at the top right-hand side. It gives you the option to view the current sprint as well and not just the past sprints, therefore when viewing your current sprint, the values may turn out as 'NaN' or null values as validation is not implemented.

## Installing the pre-requisites
Ensure you have node.js installed, go to command line and enter: `node -v` 
If your console does not recognize the command, get nodejs installed first.

Once nodejs is installed, you need to install the ANGULAR-CLI. Go to the command line and enter `npm install -g @angular/cli`

Once you have the pre-requisites installed, go to the next step below.

# Deploying locally
Navigate to this folder and enter: `npm install`

## Running on locally on Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
