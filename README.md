Hi, I'd like to thak you for giving me a chance to take part in this recrutation. 
I'm new to typescript, so this task was a real challenge to me. This opportunity gave me a lot of motivation and helped me to understand that the best way to learn programing is by just doing it. I had a lot of difficulties to overcome, starting from configuring the vsc, json file that for some reason has stopped working with import, fighting with tsconfig and package.json fils, learning about endpoints and how to write unit tests in typescript...
I know that this isnt excatlly what you wanted, but I'm simply lacking time to learn about everything I'd like to know and use it here. After a few days break I will continue to work on this project, so even if I wont get a chcance here, at last I will have something to add to my CV.
I had a lot of problems with creating interface/type that would store the data, so at this moment the formatting function is... primitive and shows the expected result in console. I'm going to work on making it a type that will store the values by mapping it, so It will be sending nicelly formatted json file through the server. 
Server and test at the moment are using .js files from /dist folder, due to a lot of problems when I wanted to make some file structure (I'm just happy it somehow works rn :D). I'm going to work on them to use .ts file from /src
Unit tests also could be done better, server file should be tested but I was lacking time.

TL;DR I'm happy with myself doing this much starting from scratch, but I'm aware that It could be done a lot better

How to run the app:
open repository in visual studio code, in terminal write:
npm i --save-dev @types/node
npm start

To run tests:
npm test

to access endpoints after starting the app go to your browser and go to:
http://localhost:3000/mostlikelyresults/10
http://localhost:3000/uniquecompetitors  - now I see its the next thing to fix, but today my brain goes brrr and refuses to do anything


If its still not working, try installing globally typescript, eventually express framework for unit tests. I'm still not sure how it all works here 
