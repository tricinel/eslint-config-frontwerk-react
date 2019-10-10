# eslint-config-frontwerk-react

![Node Version][node-version-badge] ![Npm version][npm-version-badge]
[![Npm downloads][npm-downloads-badge]][npm-downloads-badge] ![License][license-badge]

This package provides [Frontwerk][frontwerkorg]'s JavaScript .eslintrc as an extensible shared [ESLint][eslint] config for React projects.

## Usage

1. Install the versions of the package, including its `peerDependencies`:

```sh
npm install --dev eslint-config-frontwerk-react eslint eslint-plugin-{import,jsx-a11y,react,react-hooks}
```

Or with **yarn**:

```sh
yarn add --dev eslint-config-frontwerk-react eslint eslint-plugin-{import,jsx-a11y,react,react-hooks}
```

2. Extend your desired config file in your `.eslintrc` by adding `"extends": "frontwerk-react"` to your `.eslintrc`.

### With TypeScript

If you want to use React with TypeScript, you will need to install the required TypeScript packages and add `"extends": "frontwerk-react/typescript"` to your `.eslintrc`.

> You can use Frontwerk's TypeScript config for ESLint as well. See details for this [here][eslint-config-frontwerk-typescript] and add both `frontwerk-typescript` and `frontwerk-react/typescript` to your `.eslintrc` extends.

> ```
> {
>   "extends": [frontwerk-typescript", "frontwerk-react/typescript"],
>   "parserOptions": {
>      "project": "./tsconfig.json"
>    },
> }
> ```

## Related

- If you're looking for the plain JavaScript config, you might want to check out [eslint-config-frontwerk][eslint-config-frontwerk].
- If you're a TypeScript user, you might want to check out [eslint-config-frontwerk-typescript][eslint-config-frontwerk-typescript].

## Contributing

- Run tests with `npm run test` or `yarn test`.
- Run the lint with `npm run lint` or `yarn lint`.

For details, check out the [Contributing][contributing] guide.

# LICENSE

MIT

[eslint]: https://eslint.org/
[frontwerkorg]: https://frontwerk.org
[license]: https://github.com/tricinel/eslint-config-frontwerk-react/blob/master/LICENSE
[node-version-badge]: https://img.shields.io/node/v/eslint-config-frontwerk-react.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/eslint-config-frontwerk-react.svg?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-frontwerk-react.svg?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/eslint-config-frontwerk-react.svg?style=flat-square
[contributing]: ./Contributing.md
[eslint-config-frontwerk]: https://github.com/tricinel/eslint-config-frontwerk
[eslint-config-frontwerk-typescript]: https://github.com/tricinel/eslint-config-frontwerk-typescript
