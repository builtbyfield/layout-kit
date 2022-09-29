# Turborepo starter

This is an official pnpm starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Best practices

### Workspaces

Workspaces are the building blocks of your monorepo. Each app and package you add to your monorepo will be inside its own workspace.

Workspaces are managed by your package manager, such as [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [npm](https://www.npmjs.com/), so make sure you've set that up first. **We recommend `pnpm`.** It's faster than the others and offers some helpful options like `--filter`.

{% note %}

**Note:** Plenty of this information is sourced directly from the [Turborepo documentation](https://turborepo.org/docs) and is a great place to go for further information.

{% endnote %}

#### Configuring workspaces

We organize our workspaces into top-level `apps/` and `packages/` directories.

The `apps` folder should contain workspaces for launch-able apps, such as a [Next.js](https://nextjs.org/) or [Astro](https://astro.build/) app.

The `packages` folder should contain workspaces for packages used by either an app or another package.

When using `pnpm`, add the folders you want to configure as workspaces to the `pnpm-workspace.yaml` file that exists in your root directory. This file contains a list of workspace folders in the form of globs:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

#### Naming workspaces

Each workspace has a unique name, which is specified in its package.json:

```json
{
  "name": "@project-name/shared-utils"
}
```

You can use an npm organization or user scope to avoid collisions with existing packages on npm. For instance, use `@project-name/shared-utils` instead of simply `shared-utils`.

#### Workspaces which depend on each other

To use a workspace inside another workspace, you'll need to specify it as a dependency, using its name.

For instance, if we want `apps/web` to import `packages/shared-utils`, we'd need to add `@project-name/shared-utils` as a dependency inside `apps/web/package.json`:

```json
{
  "dependencies": {
    "@project-name/shared-utils": "workspace:*"
  }
}
```

Just like a normal package, we'd need to run `install` from root afterwards. Once installed, we can use the workspace as if it were any other package from `node_modules`.

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
