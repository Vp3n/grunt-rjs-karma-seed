What's the point ?
===================

I didn't found any yeoman generator that can bootstrap a project with grunt, requirejs and karma/jasmine 
while keeping a clean distribution build (jshint, image optimizations, minification css/js etc..)
So this project is primary usefull for me to help bootstrap some more frontend project. 

I hope it can help you too, if you use it feel free to send feedbacks or PRs. 

What is doing this template ?
=============================

This template provide a grunt build which provides 4 usefull tasks :

* ```grunt``` launch the main build (jshint, tests, minify, image optimization) and create a prod version in /dist folder
* ```grunt server:dev``` start a node server for development, point at /app folder
* ```grunt server:prod``` launch the primary build the start a node server which point at /dist folder. Usefull to check your distribution
* ```grunt server:test``` launch the test server using karma. You can setup karma.conf.js to enable watch mode to test contineously

The template goes with jQuery and underscore.js with a requireJS setup out of the box.

Tests are also set to be used convenienly with karma. A requireJS test entry point is available in test/main.test.js. It contains the needed code
to execute test after requirejs load.

By default, it includes all files contained in test/spec which are named xxxSpec.js
You also get code coverage in HTML (if you need others formats look at http://karma-runner.github.io/0.8/config/coverage.html)

Finally, it includes support for travis out of the box, just flip the button on your travis UI and you are good to go.

How can i use it ?
==============

To use this template, you will need to fulfill some requirements :

* NodeJS 0.10+
* Bower 

Next step, clone this repository, remove .git folder and follow the steps below :

First you need to setup your build dependencies (specified in package.json file) with 
```npm install```

Then, you need to build your runtimes dependencies (specified in bower.json) with 
```bower install```

Theses commands must be executed everytime you add a new dependency.

Now, just launch  ```grunt server:dev``` and you should see a JS logo with jQuery and underscore.js loaded


License <a href="http://www.wtfpl.net/"><img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png" width="80" height="15" alt="WTFPL" /></a>
=======
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

You just DO WHAT THE FUCK YOU WANT TO.