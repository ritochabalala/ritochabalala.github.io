## Summary

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor
- [ ] Infrastructure / DevOps
- [ ] Documentation

## Testing

- [ ] Unit tests added / updated
- [ ] Manually tested locally
- [ ] Tested on dev environment

---

## Schema / Migration Checklist

**Does this PR contain a migration?**

- [ ] No — skip this section
- [ ] Yes — complete the checklist below

### If yes:

- [ ] Migration is backwards compatible (no column drops, no renames without multi-step strategy)
- [ ] Migration has been tested locally (`python manage.py migrate`)
- [ ] `python manage.py check_migration_state` passes with no unapplied migrations

### Breaking schema changes (column drop, rename, type change, NOT NULL without default)

- [ ] This PR does **NOT** contain a breaking schema change
- [ ] This PR **does** contain a breaking schema change — I have documented the multi-step migration strategy below and obtained explicit sign-off

**Breaking change sign-off** *(required if box above is checked)*:

> Describe the migration strategy (e.g. step 1: add nullable column, step 2: backfill, step 3: add NOT NULL constraint):
