# Greenspark product widget app

React TypeScript app, that allows a user to display product widgets as
well as update their settings.

## Getting started

Create a **.env file** in the root directory, with the following key: **REACT_APP_API_URL**
(url of the mock api)

    npm install
    npm start

## Documentation

-   API fetch logic: As _App.tsx_ mounts, it dispatches _fetchProductWidgets()_ from useEffect, while making sure only one runs at a time, status of the fetch operation is kept inside _fetchStatus_, and an appropriate visual cue is provided for the user.
-   used react-redux for state management, all user actions dispatched
    -   _updateWidgetActive({id: number; active: boolean})_
    -   _updateWidgetLinked({ id: number; linked: boolean })_
    -   _updateWidgetColor({
        id: number;
        selectedColor: ColorOptions;
        })_
-   _src/utils.ts_
    -   _getColorCode()_ - maps the color names to hex values
    -   _getIconColor_ - given a color name, returns a high contrast color
    -   _findWidgetToUpdate_ - returns widget by id if present
-   fonts: loaded from fonts.googleapis -> Cabin

### Contact:

Levente Kovács - kovacs.levente.csanad@gmail.com
