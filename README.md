# Project name: FmcGo

## Project goal
Creat page for the FmcGo company which is accurately reflecting provided design reference file for mobile and desktop. 
It contains core information about the company and its services, board and people who cooperate with the company. 

## Brief technical description
The project is based on GatsbyJS framework.
It is a static site generator based on ReactJS.
The content is defined directly in the React components. 
Parts of the project:
- static content defined in the React components
- **animated 3D parts** there is one advanced element of the page, which is a set of animated "drawers" - 3D objects defined in CSS (divs transformed in relation to each other). There are also chain/sequence animations, so all the drawers are in relation to each other in this context. The animation state is reset when browser tab is not active (the custom hook is used for that).
- **styles**:
  - global and sections styles are defined in /src/styles/ folder
  - for some more advanced elements, a styled-components library is used as some variables are passed to the CSS from the React components 
  - font sizes are defined in vw/h - reason: the aim of the business was to reflect a Photoshop reference project as close as possible. At the moment, fonts are readable and tested for most of the devices.
- **multilanguage support**: each language is redundant code (components) version. The reason for not using a library, for example, i18n was that the business decided that eventually the content source will be changed to CMS and later the multilanguage support will be provided on the CMS level. Also, that way there is better control for text formatting and styling (for example breaking lines and adding &nbsp; which was big focus for designer of the layout). Each language can vary in content and styling which happend for languages which are less concise than English.




## Running the project
Development and building for production is done with GatsbyJS CLI and is straightforward.
No environment variables are needed as everything is defined in the code and is a static content.

**develop**

Navigate into your new site’s directory and start it up.

```
npm run develop
npm run develop --host
```
* --host flag is used to make the site available on the local network (useful for docker container)

**build**

```
npm run build
```
**Local server access**

    http://localhost:8000

**Basic gatsby documentation list**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

### Contributors
Michał Majewski [ Agile >◊﬩◊< cat ](https://agilecat.io)