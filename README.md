# StarWarsProject + simple NodeJS server

1. StarWarsProject:
Use the https://swapi.co/ API to implement the Star Wars universe. The page must have the "Previous Hero" and "Next Hero" buttons. Display the information (which you consider necessary) about the current character. At the first page entry, show a modal window with a site instruction. You can again call the help with the button on the site (History is 3 days). When the buttons are pressed, the next / previous characters must be updated without reloading the page. The design and the displayed information are completely up to you.

Implementation:
The project is started by /bin/www.js. You can choose hero id from 1 to 88, hero under number 17 is missing, so the app is skipping it. I used ExpressJS framework with Jade engine. Also added server side, which is responsible for taking the info from the API. By default the server port is 8080. But the application can work without the server, but this will take more delay for requesting info about the heroes.

2. Simple NodeJS ping/pong server:
Write on the Node.js server with 2nd endpoints: GET / ping - response: pong, POST / pong - response: ping. For all other queries, the server must show the 404 error.

Implementation:
The project is started by /bin/www.js. Also used ExpressJS framework with Jade engine. By default the server port is 8080.