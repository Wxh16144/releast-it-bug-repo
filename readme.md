# release-it-bug-repo

## Prerequisites

1. use [pnpm](https://pnpm.io/) package manager
2. [using workspace](https://pnpm.io/workspaces)

## Expectation

I want to put the release-it config in the root directory. Then I want to specify the config file for root in packages, and then I want to differentiate it in tagName. For example foo@1.0.0 or bar@1.0.1

I configured `tagName: '${name}@${version}'` according to the documentation; but he seems to have the same problem as [#641](https://github.com/release-it/release-it/issues/641), name is undefined

## Quick reproduction

`fork` => `pnpm install` => `pnpm -F foo release`

Not surprisingly, you should see the error message on the console again.
