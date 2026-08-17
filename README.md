# volto-test-addon

[![Releases](https://img.shields.io/github/v/release/eea/volto-test-addon)](https://github.com/eea/volto-test-addon/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-test-addon%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-test-addon/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-test-addon%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-test-addon/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-test-addon&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-test-addon&branch=develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Volto empty addon used in testing. Does not do anything.

## Getting started

### Try @eeacms/volto-test-addon with Docker

      git clone https://github.com/eea/volto-test-addon.git
      cd volto-test-addon
      make install
      make start

Go to http://localhost:3000

`make start` defaults to Volto 19. To run the same setup against Volto 18, use:

      VOLTO_VERSION=18-yarn make install
      VOLTO_VERSION=18-yarn make start

### Add @eeacms/volto-test-addon to your Volto project

Before starting make sure your development environment is properly set. See the official Plone documentation for [creating a project with Cookieplone](https://6.docs.plone.org/install/create-project-cookieplone.html) and [installing an add-on in development mode in Volto 18 and 19](https://6.docs.plone.org/volto/development/add-ons/install-an-add-on-dev-18.html).

For new Volto 18+ projects, use Cookieplone. It includes `mrs-developer` by default.

1.  Create a new Volto project with Cookieplone

        uvx cookieplone project
        cd project-title

1.  Add the following to `mrs.developer.json`:

        {
            "volto-test-addon": {
                "output": "packages",
                "url": "https://github.com/eea/volto-test-addon.git",
                "package": "@eeacms/volto-test-addon",
                "branch": "develop",
                "path": "src"
            }
        }

1.  Add `@eeacms/volto-test-addon` to the `addons` key in your project `volto.config.js`

1.  Install or refresh the project setup

        make install

1.  Start backend in one terminal

        make backend-start

    ...wait for backend to setup and start, ending with `Ready to handle requests`

    ...you can also check http://localhost:8080/Plone

1.  Start frontend in a second terminal

        make frontend-start

1.  Go to http://localhost:3000

1.  Happy hacking!

        cd packages/volto-test-addon

For legacy Volto 18 projects, keep using the yarn-based workflow from the Volto 18 documentation.

## Cypress

To run cypress locally, first make sure you don't have any Volto/Plone running on ports `8080` and `3000`.

You don't have to be in a `clean-volto-project`, you can be in any Volto Frontend project where you added `@eeacms/volto-test-addon` to `mrs.developer.json`

Go to:

  ```BASH
  cd packages/volto-test-addon/
  ```

Start:

  ```Bash
  make install
  make start
  ```

This will start a clean `Plone backend` (Docker) and `Volto Frontend` (pnpm) with `@eeacms/volto-test-addon` installed.

Use `make VOLTO_VERSION=18-yarn start` if you need to reproduce the Volto 18 setup locally.

Open Cypress Interface:

  ```Bash
  make cypress-open
  ```

Or run it:

  ```Bash
  make cypress-run
  ```


## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-test-addon/blob/develop/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-test-addon/blob/develop/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
