module.exports = {
  "env": {
      "es6": true,
      "browser": true,
      "node": true,
    },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "allowArrowFunctions": true,
          "experimentalObjectRestSpread": true
        },
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "plugins": [
      "react"
  ],
  "rules": {
      "no-console": "off",
      "semi": [
          "error",
          "always",
      ],
    },
};
