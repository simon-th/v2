# Gatsby Starter

This repository contains by preferred React dev setup configured for a minimal Gatsby website. It contains a minimal Gatsby starter created with `gatsby new` refactored to use TypeScript, ESLint configured with the AirBnb and Prettier plugins, Prettier for formatting code, and a Dockerfile and .devcontainer setup for remote development on VSCode. Few things:
* `gatsby-plugin-typescript` is automatically included in gatsby so it's not included in this setup, explicitly include it in `gatsby-config.js` if you need to configure specific options.
* `gatsby-plugin-eslint` is not included so that the default Gastby ESLint config is not entirely overwritten and keeps the required rules.
* The `npm run build` script is modified to type check (Gatsby does not do this by default despite building TypeScript), format and lint beforehand. To just run Gatsby's build, use `npx gatsby build`.

# README from Gatsby

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

# Resources I used

* Help with setting up TypeScript: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript
* Help with setting up ESLint: https://medium.com/@stojanpeshov/how-to-setup-gatsbyjs-starter-with-typescript-eslint-prettier-269b1a0a812f
* Help with setting up tsconfig.json with ESLint: https://stackoverflow.com/a/68686975
* Understanding how Gatsby works with ESLint: https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/
* Help with Dockerfile: https://github.com/gatsbyjs/gatsby/issues/4126