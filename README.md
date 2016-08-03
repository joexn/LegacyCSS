<br><br>

<h3 align="center"> Legacy Framework 4.0.1 <sup>dev</sup> </h1>
<h5 align="center"> modern design, lightweight framework </h3>

<br><br><br><br>

#### What's in the download?

The download contains just what's in the repo:

```
LegacyFramework
├── LICENSE
├── README.md
├── dist
│   ├── legacy.css
│   └── legacy.min.css
├── index.html
└── src
    ├── legacy.sass
    └── partials
        ├── legacybuttons.sass
        ├── legacycolors.sass
        ├── legacyforms.sass
        ├── legacygrid.sass
        ├── legacynavbar.sass
        ├── legacyother.sass
        ├── legacyreset.sass
        ├── legacysetup.sass
        ├── legacytables.sass
        ├── legacytypography.sass
        └── legacyutilities.sass
```

<br><br><br>


#### Want us to host it?

To use Legacy on your site without downloading it, include this code in your head tags:

    <link href="https://cdn.joexn.io/legacy.css" rel="stylesheet">

<br><br><br>



### How To Build Legacy From Source, In 3 Easy Steps.

Included in the repo is a build system to help you build and modify Legacy.

#### 1) Ensure you have NodeJS installed. If you don't, download it [here](https://nodejs.org).
Verify you have node installed by using the command:

    node -v

If you see the the version number, you are ready to proceed. If not, you will have to ensure you both have node installed and it is configured in your system's path.

#### 2) Run 'npm install' to resolve dependencies.
Navigate to the 'LegacyFramework' folder containing the 'package.json' file. By running the following command, you will invoke the node package manager (npm) to download the dependencies needed by the build suite.

    npm install

#### 3) Ensure you gave gulp installed.
Depending on your setup, you might need to use `sudo` before the following line of code.

    npm install --global gulp-cli

You will then be able to run the following command.

    gulp

Gulp is a modern streaming build system that will compile the Legacy sass files into workable css. In addition, it will monitor changes to the source and automatically reprocess the source - so changes are shown immediately. Also included in the build suite is browsersync. Browsersync is a tool that will automatically inject any changes into your browser - providing almost instant feedback for any changes.

##### Using BrowserSync for development
Also included in the build suite is browsersync. Browsersync is a tool that will automatically inject changes to Legacy into any open and connected browser, providing instant visual feedback for any changes. To run gulp with browsersync, you can run the following command:

    gulp serve


<br><br><br>

<center>[designed and developed by joexn :ok_hand:](https://joexn.com)</center>

<br><br><br>

### check out these guys


All the people listed below have helped shape Legacy into the framework it is today.
<small>(you will only be listed here if you have helped more than once with Legacy's development)</small>

[/nloveladyallen](https://github.com/nloveladyallen)

[/georgejenkins](https://github.com/georgejenkins)

[/Haroenv](https://github.com/Haroenv)
