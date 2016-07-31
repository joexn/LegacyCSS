<h1 align="center"> Legacy Framework 4.0 </h1>
<h3 align="center"> modern design, lightweight framework </h3>

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

#### How to install, compress and minify.

I use [Atom](https://atom.io) to code SASS, then a script to automatically compile and minify the files for me.

Prefer a more traditional method? Use the instructions below.

Install SASS using if you haven't already:

    gem install sass

(Depending on your setup, this may or may not require `sudo`.)

To compile the SASS source code to CSS, use:

    sass legacy-core.sass legacy.css

To compile the SASS source to a minified file, use:

    sass -t compressed legacy.sass legacy.min.css

#### Want us to host it?

To use Legacy on your site without downloading it, include this code in your head tags:

    <link href="https://cdn.joexn.io/legacy.css" rel="stylesheet">

<center>[designed and developed by joexn :ok_hand:](https://joexn.com)</center>

- - -

### check out these guys


All the people listed below have helped shape Legacy into the framework it is today.
<small>(you will only be listed here if you have helped more than once with Legacy's development)</small>

[/nloveladyallen](/nloveladyallen)

[/georgejenkins](/georgejenkins)

[/Haroenv](/Haroenv)
