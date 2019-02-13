![Uni Jekyll Theme](/assets/img/share.jpg)

# Uni – A one-page Jekyll theme

[View Half Demo](http://brianmaierjr.com/uni/) | [View Full Demo](http://brianmaierjr.com/uni/full) | [View Card Demo](http://brianmaierjr.com/uni/card)

## Features

* Minimal, One-Page Design
* Fast and responsive
* Flexible
* Built using these tools:
  * GULP
  * SASS
  * BROWSERSYNC
  * AUTOPREFIXER
* A modular, type scale
* 3 different layouts with additional options
* Responsive Images for performance
* Social Meta Tags

## Browser Support

This theme will look great and work in most newer browsers. If you see an issue please feel free to [contact me](mailto:brimaidesigns@gmail.com).

---

## Setup

1. [Install Jekyll](http://jekyllrb.com)
2. [Install Bundler](http://bundler.io/)
3. Run `bundle install`
4. Install gulp dependencies by running `npm install`
5. Run Jekyll and watch files by running `bundle exec gulp`

Please note that any changes made to the `config.yml` will require that you stop gulp and start it again.

---

## Site/Layout Settings

The main settings can be found inside the `_config.yml` file:

* **title:** you or your company's name
* **description:** description of your site that will be used when your site is shared or posted on social media
* **sharing_image:** name of your image (example.jpg). This image should be placed in the `assets/img/` folder
* **content:** a brief blurb about yourself
* **url:** your url
* **social** diverse social media usernames (optional)
  * **platform**: display name for social media or external link
  * **url**: destination for the link
* **google_analytics** Google Analytics key (optional)

---

![Uni Jekyll Theme](layout--half.jpg)

## Half Layout

* **half_side:** which side of the page your content is on [left or right]

---

![Uni Jekyll Theme](layout--full.jpg)

## Full layout

* **full_text_position:** where on the page the text will appear [left, center, or right]

---

![Uni Jekyll Theme](layout--card.jpg)

## Card layout

The background image and other style customizations can be changed in `assets/scss/layouts/_card.scss`

---

## Further Customizations

### Change Layout

By default, Uni is set to use the `half` layout. To change the `layout` change the front matter in `index.html`

For example, the layout below is using the `full` layout. The other options available are `half` and `card`.

```
---
layout: full
title: Uni – A one-page Jekyll theme
---
```

### Styling

While running `bundle exec gulp` modify any of the files in the `assets/scss/` folder and your browser will update automatically. No reload required!

The layouts all have their own stylesheets found in `assets/scss/layouts/`. This is where images for each of the three layouts can be found. In addition, this is where you can change text color, layout, etc.

#### Primary color

The primary color is used for headings, accents, and buttons. It can be changed by modifying the `assets/scss/base/_config.scss` file.

### Add Content

Add content in `config.yml` or alter `index.html` and change `{{ content }}` to be whatever you want.

### Imagery

As stated above, the images are set in the respective stylesheets found in `assets/scss/layouts/`.

We are using responsive images that require three different image sizes. This allows the browser to serve the appropriate image based on the screen size. Recommended image widths are:

* #### Small: 768px wide
* #### Medium: 1200px wide
* #### Large: 1600px wide

To replace the images, modify the names in the `responsivebackground` mixin as shown below.
*Make sure to include the file extension!*

```
@include responsivebackground("half-sm.jpg", "half-md.jpg", "half-lg.jpg");
```

When uploading images please keep file size in mind. For optimizing, we recommend using [TinyPNG](https://tinypng.com) and [TinyJPG](https://tinyjpg.com).

### Favicon

To add your own favicon, replace the image found at `assets/img/favicon.png`.
