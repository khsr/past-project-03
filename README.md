# statictemp

The simple static site generator built on node.js

## Installation

Via npm:

```bash
npm install statictemp
```

You also need a template adapter, such as [statictemp-jade]:

```bash
npm install statictemp-jade --save-dev
```

## Usage

statictemp takes templates and content and mashes them together to create a folder structure and html files. It can be used from the command line or inside a node module and plays nice with Gulp. Gulp is the recommended method of running statictemp, since it does not have any CSS preprocessing or similar built in.

Templates and content can use [jade](http://jade-lang.com/) with YAML front matter for defining properties on content pages using template adapters.

statictemp now has a [Yeoman](http://yeoman.io/) generator which simplifies setup considerably. Read about it here: [generator-statictemp] and install it with

```bash
npm install -g generator-statictemp
```

See the [documentation](docs/README.md) for more information.

### Options

* `templates` Source folder for templates. Default is `templates`.
* `content` Source folder for content. Default is `content`.
* `baseUrl` Base URL for the site. Set this to create an XML sitemap when generating the site.
* `templateAdapter` The template adapter to use. Default is `statictemp-jade`.
* `dest` Destination folder for generated html. Optional. If specified, generated files will be written to that location. If not, you can write them to disk using `vinyl-fs`.
* `globalFunctions` An object with functions that should be available on all pages and in all templates. Optional. Note that it is often better to use a jade mixin defined in `templates/includes/globals.jade` or a [global plugin](docs/GlobalPlugins.md) instead.

### API

statictemp exports one function that takes three optional arguments: options (see above), a success callback and and error callback. The function returns a stream of generated html files and a sitemap xml if `baseUrl` was specified.

```javascript
var statictemp = require('statictemp');

statictemp(options, onSuccess, onError);
```

### Gulp

Using statictemp together with [Gulp](http://gulpjs.com/) is simple, no plugin required. Since 0.3.0, statictemp returns a stream that can be piped to `gulp.dest()` to write the files to disk and optionally process them.

```javascript
var statictemp = require('statictemp');

gulp.task('statictemp', function() {
    return statictemp()
        .pipe(gulp.dest('www'));
});
```

# Change Log

## 0.4.2

* Parallellized sitemap and page generation.
* Updated mocha and minimatch dependencies.
* Removed gulp.

## 0.4.1

* Updated vinyl-fs dependency.

## 0.4.0

* Model plugins.

## 0.3.0

* Now returns a stream of generated files. Makes it easy to post-process the files with plugins when using gulp.

## 0.2.1

* Added loading of global plugins. It's now possible to write plugins that extend the globals object in templates and have access to options and a list of all content models.

## 0.2.0

* Extracted template engines into adapters. _This is a breaking change. statictemp now requires a template adapter to work, and none is included. Install with `npm i statictemp-jade` for jade templates._

## 0.1.6

* Refactored code
* Tests!

## 0.1.5

* Last modified date added to sitemap.

## 0.1.4

* XML sitemap generation.

## 0.1.3

* Convert flat file list to folder structure.
* Page sort order.

## 0.1.2

* Bug fixes.
* Improved documentation.

## 0.1.1

* Fixed stream error handling.
* Fixed compiled body rendering.
* Fixed readme file layout issues.

# License

MIT
