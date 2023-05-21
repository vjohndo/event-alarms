# Event Alarms
Single page app that displays open 'events' or 'alarms'.

### Build
---
- Clone the repo
    >`git clone git@github.com:vjohndo/event-alarms.git`
- Change to ui directory containing the react app
    >`cd ui`
- Install dependencies
    >`npm i`
- Start react app
    >`npm start`


### User Interface
---
- User can:
    - Add new alarms
    - Delete existing alarms
    - Change the status of alarms
- Expect user to correctly enter new alarm information. No error handling.

### Main Features
---
- Displays alarms in priority of time remaining
    - Overdue alarms will be red
    - Alarms with time remaining will be green
- Alarms show updated time until event
- Add alarms via modal
- Toggle alarm status
- Delete alarms

### UX Philosophy
---
- Vision of the app was to be similar to an "order screen" like those found in the cooking line of a fast food restaurant
- Want the user to quickly get an overview of upcoming alarms but always being able to identify the current priority alarm immediately
- In future want to be able to sort by type and filter by room ID / user ID
- In future want to be able to manually manipulate the order by dragging / dropping the alarm components

### Project Requirements
--- 
1. Create a react app with Typescript. I am only expecting to see a single page. So no need for functional navigation or authentication. 
2. Assume you are creating a page that displays open ‘events’ or alarms. An example event model could look something like this:

    >
    Id: 1\
    type: “Assistance”\
    datetime: 1684477511\
    status: “active”\
    roomId: 12\
    residentId: 23
    >

    Feel free to add more if you think necessary. 

3. Mock the data in the front end. 
4. Think about how best to display the data, paying particular attention to the design and styling. 

Note that the requirements are intentionally vague, as I want you to get creative with it and implement patterns/structures that you think necessary. I wouldn’t expect you to spend any more than a few hours. If you do not finish, that is perfectly ok. We can walk through your progress on Monday. I would prefer to see a partial, but well thought out project than a complete but messy one!

### User Story
---

As a user, I want to be able to see all of my active alarms on a screen (by priority) so I can action them accordingly. 

Consider screen realestate, necessary information etc.


### List of Dependencies
---
- React
