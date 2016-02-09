module.exports = {
    "rules": {
        //Space, Indentation and Formatting Style Guide
        "indent": [
            2,
            3
        ],
        "brace-style": [
            2,
            "1tbs",
            { "allowSingleLine": true }
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": 0,
        "semi": [
            2,
            "always"
        ],
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "strict": [
            2,
            "global"
        ],
        "no-cond-assign": [
            2,
            "always"
        ],
        "no-console": 0,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 1,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 1,
        "no-unexpected-multiline": 1,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 1,
        "valid-typeof": 2
    },
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended"
}