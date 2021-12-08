<H1>Angular and React microfrontends in the same host app - demo</H1>

This demo consists of three apps - simple host app, Angular 12 app and a React app

The host app was created using the create-single-spa tool choosing type "single-spa root config".

The React app was created using the create-single-spa tool choosing type "single-spa application"
and then choosing "react" as framework.

The Angular app had to be created with `npx @angular/cli@12 new Angular12Project` because currently
single-spa has problem with the version of Angular (13).

Then support for single spa was added in the Angular app with `ng add single-spa-angular`
<br/><br/>
<i>Prerequisites:You should have node, npm, create-single-spa and npx installed on your machine</i> 
<br/><br/>
<b>STEPS TO RUN THE PROJECT LOCALLY:</b>

1. Run `npm install` in each of the three directories for the three applications
2. Go to the Angular app and run `npm run serve:single-spa:Angular12Project`
3. Go to the React app and run `npm run start`
4. Go to the host app and run `npm run start`

<br/>
<b>LINK TO VIDEO DEMO:</b>
<br/><br/>
<b>LINK TO HOSTED APP:</b> 