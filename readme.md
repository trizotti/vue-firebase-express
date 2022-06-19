# Vue + Firebase with Express

This template allows you to create a Vue SPA application that is deployed to Hosting and also deploy an Express application to Cloud Functions.

# Setup

You need to install the Firebase CLI and also be logged in. Then you need to insert your project ID into the '.firebaserc' file.

# Development

```
npm run dev
```

If Firebase CLI does not recognize your project setup, just run the following command:

```
firebase use <YOUR-PROJECT-ID>
```

# Using the API
To get the API base URL just use the 'useApiBaseUrl' composable to get a baseUrl string.


# Deploy
```
npm run deploy
```