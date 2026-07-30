# Security Policy

Thanks for helping keep this project safe.

## Supported versions

This repository hosts a single static site — the version currently deployed
from the `main` branch to <https://ritochabalala.github.io/> is the only
supported version. Older commits are not maintained.

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Report vulnerabilities privately through GitHub:

- Go to the [**Security** tab of this repository](https://github.com/ritochabalala/ritochabalala.github.io/security/advisories/new)
  and open a new draft security advisory (private vulnerability reporting is
  enabled).

If GitHub advisories are not an option, email **ritochabalala@gmail.com** with:

- a description of the issue,
- steps to reproduce (or a proof of concept),
- the impact you believe it has, and
- any suggested fix, if you have one.

You can expect an initial acknowledgement within a few days. I work on this
project in my personal time, so timelines for a fix are best-effort. Please
give me a reasonable window to remediate before any public disclosure.

## Scope

In scope:

- The site served at <https://ritochabalala.github.io/>.
- The static-site source in [`frontend/`](frontend/) and the GitHub Actions
  workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Out of scope:

- Third-party services linked from the site (GitHub, LinkedIn, X, Facebook,
  Instagram, etc.) — please report those to the respective providers.
- Findings that require a compromised end-user device, physical access, or
  social engineering of the maintainer.
- Missing security headers that are controlled by GitHub Pages and cannot be
  configured from this repository.
- Denial-of-service via brute-force traffic against GitHub Pages.

## Coordinated disclosure

Once a fix is deployed, I will credit the reporter in the associated
GitHub Security Advisory unless they prefer to remain anonymous.
