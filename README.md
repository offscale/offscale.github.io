offscale.io
===========
Bunch of guides for using my offscale projects; and an introduction to services offered.

Written in Angular with Material. Butchered angular.material.io.

## Build dist

    rm -rf dist; ng build --prod && d=../offscale.github.io && rm -rf "$d/dist" && mv "$PWD/dist" "$d" && cd "$d" && (git add .; git status) || ( >&2 echo BUILD FAILED )

## Install

Assumes you have latest Node.JS and npm on *nix machine, then just run:

    npm i -g @angular/cli typescript
    npm i

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy distribution
First [`npm i -g angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), then:

    ng build --prod
    cp README.md dist/offscale-www
    ngh -c offscale.io --dir='dist/offscale-www' --repo=https://github.com/offscale/offscale.github.io --branch='master' --message='Using angular-cli-ghpages'

## Derived

Header, footer and subpage stolen from [https://material.angular.io](https://material.angular.io) ([src](https://github.com/angular/material.angular.io)); infographic [stolen from the Canadians](https://github.com/bcgov/interactive-infographic).

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or <https://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <https://opensource.org/licenses/MIT>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
