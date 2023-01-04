# Grid Weblets

![Version: 1.0.0](https://img.shields.io/github/v/release/threefoldtech/grid_weblets)
[![CI-CD](https://github.com/threefoldtech/grid_weblets/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/threefoldtech/grid_weblets/actions/workflows/ci-cd.yml)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Introduction

Weblets are a front-end application helps to deploy solutions on TF Grid v3. A weblet is a compiled javascript web component which can be embedded in HTML page of a web app. The backend for the weblets is introduced with [grid client](https://github.com/threefoldfoundation/info_manual3/blob/development/wiki/manual3_iac/grid3_javascript/grid3_javascript_home.md) which communicate to TF Chain and TF Grid over RMB.

Weblets is a svelte project for creating web components - which are reusable custom elements with their functionality encapsulated away from the rest of the code — that interact with TF Grid 3 and could be utilized from other web apps.
It solves such problem where you had to write complex HTML (and associated style and script) to render custom UI controls (eg, to deploy some workload on the TF Grid 3), and how using them multiple times in different projects can be a miss if you are not careful.

## Installation

- **Get the code**

  Clone the repository:

  ```bash
  git clone https://github.com/threefoldtech/grid_weblets.git
  ```

- [**Prepare the environment**](./docs/config.md)

## Getting Started

> For detailed information you can read the [Getting Started](./docs/getting_started.md) documentation.

Before run Weblets, in your terminal move to the project directory.

- **Run Weblets in Development**

```bash
yarn serve:app
```

- **Run Weblets in Production**

```bash
yarn build:app
```

## Configure the editor/IDE

We recommend [Visual Studio Code](https://code.visualstudio.com/) as it has many extensions that will help, there are some of them:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Svelte 3 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vue Language Features](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Testing

The main testing tool that is used in Weblets is [Cypress](https://www.cypress.io/).

- [How to run tests](./docs/cypress.md)
- [How to write new tests](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)

## Related Documentations

- [Prepare the environment](./docs/config.md)
- [Getting Started](./docs/getting_started.md)
- [Contributing Guide](./docs/contributing.md)

- [Weblets documentation](https://library.threefold.me/info/manual/#/manual__weblets_profile_manager)
- [Pipelines documentation](./docs/workflows.md)
