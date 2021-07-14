# gitgood

**gitgood** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

## Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Other info 

In the vue sub-directory, create `.env` and put this in here:

```
VUE_APP_ADDRESS_PREFIX=party
```

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)

## Calculating Levels

``` js
function calculateLevel(exp) {
	// Set the first level at around 10 exp
	exp = exp - 9;

	// the last divisor helps "flatten" the curve a bit
	return Math.ceil(Math.sqrt(exp/9))
}
```

The above gives us these levels:

```
  EXP: 10
  Level: 1

  EXP: 19
  Level: 2

  EXP: 46
  Level: 3

  EXP: 91
  Level: 4

  EXP: 154
  Level: 5

  EXP: 235
  Level: 6

  EXP: 334
  Level: 7

  EXP: 451
  Level: 8

  EXP: 586
  Level: 9

  EXP: 739
  Level: 10

  EXP: 910
  Level: 11
```
