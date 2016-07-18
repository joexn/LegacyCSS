#### Please read
Legacy 4.0 [alpha](https://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha) has nearly been completed. I am going to be releasing the Legacy 4.0 public [beta](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta) very soon.
All development versions are released early to our Slack team for testing which then results in a public [RC](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate). Email me [here](mailto:hi@joexn.com?subject=Slack&20team) and I'll send you an invite.
If you have any questions about Legacy, Twitter is the best way to contact me.

This week is going to be extreamly busy as I am switching to better servers, new domains and a 100% uptime CDN.



# [Legacy Framework 3.4](https://legacy-framework.com) 
### modern design, lightweight framework
![development](https://img.shields.io/badge/ Stability: - Unstable -yellow.svg)

(If you haven't been keeping up the with the development of Legacy, it was recently discussed that the previous versions haven't been stable enough for public use. This version is currently unstable and I'd wait until 4.0 is released before you use Legacy)

Anyone can download Legacy and use it, all you need to do is head over the the releases tab, download the latest version then you can start creating your own site.
Legacy is built for anyone, if you either have a lot of knowledge on web design, or none at all.. You can use Legacy to create a neat looking site based on your design preferences.
<br />
Check out <https://legacy-framework.com> for examples and details.<br />
<br />
Legacy was made as a minimalistic approach to modern web design. Legacy continues to be updated with improved code for the future.
The colour scheme is from Google's Material Design, and the styles are flat and very modern.


#### What's in the download?

Included in every release is the SASS file, CSS file, minified CSS file and a Getting Started page.

```

Legacy/
├── Hello.html
├── LICENSE
├── legacy.css
├── legacy.min.css
├── legacy-core.sass
└── legacy.sass

```

#### How to install, compress and minify.

I use [Atom](https://atom.io) to code SASS, then it automatically compiles and minifies the files for me. <br />
<br /><br />
Prefer a more traditional method? Use the instructions below.

> Install SASS using if you haven't already:

>     gem install sass

> (Depending on your setup, this may or may not require `sudo`.)

> To compile the SASS source code to CSS, use:

>     sass legacy-core.sass legacy.css

> To compile the SASS source to a minified file, use:

>     sass -t compressed legacy.sass legacy.min.css

#### Please note

You are allowed to host your own themes and templates for Legacy on your own site but you are **NOT** allowed to show ads on the page. Any form of monetization is not allowed.

#### Want us to host it?
To use Legacy on your site without downloading it, include this code in your <head> tags:

```
<link href="https://legacy-framework.com/legacy-latest.min.css" rel="stylesheet">
```

<br><br>
##### [made by joexn :ok_hand:](https://joexn.com)
