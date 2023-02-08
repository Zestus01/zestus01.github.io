export let projectArray = [];

// Project Object Template 
// Object will have a title, description, repo, and link
// Repo links to the github repository.
// link is to the github.io live version. 

let mindReader = {};
mindReader.title = "Mindreader";
mindReader.description = "Static application that tricks the user into thinking that their number is guessed. The classic math logic prank. Coded in vanilla JavaScript. Completed week one of in person teaching."
mindReader.repo = "https://github.com/Zestus01/mindReader"
mindReader.live = "https://zestus01.github.io/mindReader/";
projectArray.push(mindReader);

let weatherApp = {};
weatherApp.title = "What's the Weather";
weatherApp.description = "Single page application that will tell the weather from an United States zip code or current location of the user. Uses an external API that provides the weather information. API is called with AXIOS. Completed during week two.";
weatherApp.repo = 'https://github.com/Zestus01/weatherApp';
weatherApp.live = "https://zestus01.github.io/weatherApp/";
projectArray.push(weatherApp);

let zicZacZoe = {};
zicZacZoe.title = "Zic Zac Zoe";
zicZacZoe.description = "A simple game of Tic Tac Toe. Coded with Vanilla JavaScript. Implemented three different AI difficulties: random, easy, and hard. Completed during week three.";
zicZacZoe.repo = "https://github.com/Zestus01/ticTacToe";
zicZacZoe.live = "https://zestus01.github.io/ticTacToe/";
projectArray.push(zicZacZoe);

let reactResturant = {};
reactResturant.title = "React Resturant";
reactResturant.description = 'My first introduction to React Javascript. Designed a front end for a make believe restaurant. Loaded in the menu items from a database using AXIOS calls. Completed during week four';
reactResturant.repo = "https://github.com/Zestus01/reactResturant-Template";
reactResturant.live = "https://zestus01.github.io/reactResturant-Template/";
projectArray.push(reactResturant);

let toDoList = {};
toDoList.title = "To Do List";
toDoList.description = "A to do list that uses local storage to keep track of user's tasks. Coded with React JavaScript. Completed during week five";
toDoList.repo = "https://github.com/Zestus01/toDoReact";
toDoList.live = "https://zestus01.github.io/toDoReact/";
projectArray.push(toDoList);

let evercraft = {};
evercraft.title = "Evercraft";
evercraft.description = "Coding exercise to create classes that have the functionality for Dungeons and Dragons. Coded in vanilla python. Dealt with class inheritance with classes extending. Completed during week six.";
evercraft.repo = "https://github.com/Zestus01/evercraftPyython";
evercraft.live = null;
projectArray.push(evercraft);

let sqlHeroes = {};
sqlHeroes.title = "SQL Heroes";
sqlHeroes.description = "Created and queried a superhero database. Used SQL commands to display joined data, and simulate an alien attack. Implemented CRUD functionality. Coded in python using a Postgres conversion. Completed during week seven";
sqlHeroes.repo = "https://github.com/Zestus01/my_hero_and_villans";
sqlHeroes.live = null;
projectArray.push(sqlHeroes);

let backEndBistro = {};
backEndBistro.title = "Backend Bistro";
backEndBistro.description = "Design, construct, and implement a backend using Django Python. Utilized foreign keys to make connections between different database tables. Constructed a simple API that returns the menu items, along with the cuisine descriptions. Completed during week eight."
backEndBistro.repo = "https://github.com/Zestus01/REAL_backend_bistro";
backEndBistro.link = null;
projectArray.push(backEndBistro);

let djangoDjams = {};
djangoDjams.title = "Django Djams";
djangoDjams.description = "A music backend database. Coded with python using Django rest framework too allow queries to specific endpoints. Queries can return all the songs on an album, or the discography for a particular artist. Completed during week nine."
djangoDjams.repo = "https://github.com/Zestus01/Django_Djams"
djangoDjams.live = null;
projectArray.push(djangoDjams);

let healthHound = {};
healthHound.title = "Health Hound";
healthHound.description = "Full stack application for tracking a dog's activities. Planned and coded solo in a two week sprint. Used React for the frontend, and Django Rest framework for the backend. Completed for capstone project."
healthHound.repo = "https://github.com/Zestus01/PuppyTrackerFront";
healthHound.live = "https://health-hound.web.app";
projectArray.push(healthHound);

let angularWeather = {};
angularWeather.title = "Angular of Perception";
angularWeather.description = "A copycat project of the 'What's the Weather'. Coded using Angular framework for practice. Post bootcamp.";
angularWeather.repo = "https://github.com/Zestus01/weatherAppAngular";
angularWeather.live = "Not finished yet"
projectArray.push(angularWeather);
