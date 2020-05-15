# trailing-whitespaces
removes trailing whitespaces from your files

## Instalition:
```
npm install trailing-whitespaces
```

## Run from command line:
Install globally:
```
npm install trailing-whitespaces -g
```

Then run with filenames or globs as arguments:
```
trailing-whitespaces ./src/**/.js
```

## Remove trailing whitespaces on pre-commit:
Insall [husky](https://github.com/typicode/husky) to set up pre-commit hooks

Then [lint-staged](https://github.com/okonet/lint-staged). We should run linters only on staged files, right?

```
npm install trailing-whitespaces husky lint-staged -s
```

And then add to you package.json root object:
```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "trailing-whitespaces"
    ]
  }
```
