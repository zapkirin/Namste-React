# Namste-React
What is Emmet?

Emmet is a shorthand that translates to multiple lines of HTML or a CSS attribute.
For example, you can use Emmet to add ID and class attributes, add custom attributes, add text, or add multiple classes. 
Emmet's shorthand notation allows developers to write code quickly and efficiently, and the plugin's expanding capabilities ensure that the code is valid and properly formatted. 

● Difference between a Library and Framework?

The technical difference between a framework and library lies in a term called inversion of control.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library.
When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

● What is CDN? Why do we use it?

A content delivery network (CDN) is a network of servers that speeds up web page loading for applications that use a lot of data. 
CDNs store content from websites on servers that are closer to the user, which makes it faster for the content to reach the user's computer. 
For example, if a user is far from the server that hosts the website, it can take a long time to load a large file, like a video or image.

● Why is React known as React?

React is aptly named because: It "reacts" quickly to changes without reloading the whole page.
It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update

● What is crossorigin in script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. CORS is used to manage cross-origin requests.

● What is CORS? What is it's function?

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. 
It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. 
CORS allows servers to specify who can access the assets on the server, among many other things.

● What is diference between React and ReactDOM?

React and ReactDOM are two important libraries in the React ecosystem. They both play different roles in building user interfaces. React is a JavaScript library for building user interfaces. 
It lets you compose complex UIs from small and isolated pieces of code called "components".

ReactDOM, on the other hand, is the glue between React and the browser's Document Object Model (DOM). It takes the React components and updates the DOM to match the React components.
In simple terms, React is like the architect who designs how things should look, and ReactDOM is the construction worker who puts those designs into action on a website. 

● What is difference between react.development.js and react.production.js files via CDN?

In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. 
We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode.
Performance will be much faster in production mode when compared to development mode.

react.development.js - More developer friendly, readable, will take more size.
react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.


● What is async and defer? 

Async and Defer are boolean attributes of script tag which are used to load external scripts efficiently into our webpage. when loading a webpage there are two things going on behund the scenes:
1. HTML parsing
2. Loading of the scripts
Loading of the scripts contains first fetching of the scripts from the network and the executing it line by line.

When using async attribute in the script tag. HTML parsing and fetching of the script runs in parallel. As soon as the scripts are ready to be executed , parsing stops untils scripts are executed and then 
continues again.

when using defer attribute in the script tag. HTML parsing and fetching of the scripts from the network runs in parallel. When the scripts are ready to be executed , they may have to wait for parsing to be
completed. As soon as the parsing is completed , scripts are executed.
