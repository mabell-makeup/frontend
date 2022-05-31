// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "no-unused-vars": 2,
    "react/jsx-uses-vars": 2,
    "react/prop-types": [0],
    "max-lines-per-function": ["error", 20],
    "max-statements": ["error", 15],
    "max-depth": ["error", 2],
    "complexity": ["error", 5],
    "no-delete-var": "error",
    "no-var": "error",
    "block-spacing": ["error", "always"],
    "comma-dangle": ["error", {
      "objects": "only-multiline"
    }],
    "no-console": "warn",
    "max-params": ["error", 3],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    "react/react-in-jsx-scope": "off"
  }
};