# Greenspark product widget app

## Getting started

Create a **.env file** in the root directory, with the following key: **REACT_APP_API_URL**
(url of the mock api)

    npm install
    npm start

## Documentation

-   API fetch logic: As _App.tsx_ mounts, it dispatches _fetchProductWidgets()_ from the useEffect, while making sure only one runs at a time. The status of the fetch operation is kept inside _fetchStatus_, and an appropriate visual cue is provided for the user.

### Contact

Levente Kovács - kovacs.levente.csanad@gmail.com
