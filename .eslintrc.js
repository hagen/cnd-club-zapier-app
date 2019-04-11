module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node" : true,
    "browser": false
  },
  "globals": {
    "before": true,
    "after": true,
    "describe": true,
    "it": true
  },
  "rules" : {
    "semi": 0,
    "no-undef": "error",
    "no-console": ["error", { allow: ["warn", "error"]}]
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
}
