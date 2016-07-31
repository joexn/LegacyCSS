<br><br>
<h1 align="center"> Legacy Framework 4.0 </h1>
<h3 align="center"> modern design, lightweight framework </h3>
<br><br>
<br />

#### What's in the download?

If you want to download Legacy, you don't get the dev kit (SASS files/compilers)
<br />
If you'd like to get all of this, download the repo zip instead.

```

Legacy/
├── Hello.html
├── LICENSE
├── legacy.min.css
└── legacy.css

```


<br>

## How To Build Legacy From Source

Included in the repo is a build system to help you build and modify Legacy. 

#### Ensure you have nodejs installed.
To utilise the project build suite, you will need to have nodejs installed on your system. You can verify you have node installed by using the command:

    node -v

If you see the the version number, you are ready to proceed. If not, you will have to ensure you both have node installed and it is configured in your system's path. 

#### Run 'npm install' to resolve dependencies.
To install the dependencies required by the build suite, you will need to navigate to the folder containing the 'package.json' file. By running the following command, you will invoke the node package manager (npm) to download the dependencies described in the package.json file. 

    npm install
    

#### Run 'gulp' to start the build suite.
Once this process has successfully completed, you will be able to run the following command. 

    gulp
    
Gulp is a modern streaming build system that will compile the Legacy sass files into workable css. In addition, it will monitor changes to the source and automatically reprocess the source - so changes are shown immediately. Also included in the build suite is browsersync. Browsersync is a tool that will automatically inject any changes into your browser - providing almost instant feedback for any changes.  

##

#### Want us to host it?
To use Legacy on your site without downloading it, include this code in your head tags:

```
<link href="https://cdn.joexn.io/legacy.css" rel="stylesheet">
```

<br /><br /><br />

<center>[designed and developed by joexn :ok_hand:](https://joexn.com)</center>

<hr>

  <h3>check out these guys</h3>
    <p>All the people listed below have helped shape Legacy into the framework it is today.<br />
    <small>(you will only be listed here if you have helped more than once with Legacy's development)</small>
    </p>
    <a href="https://github.com/nloveladyallen">/nloveladyallen</a><br>
    <a href="https://github.com/georgejenkins">/georgejenkins</a><br>
    <a href="https://github.com/runofthemill">/runofthemill</a><br>
    <a href="https://github.com/nishad">/nishad</a><br>
