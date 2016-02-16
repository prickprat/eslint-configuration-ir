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
            "safe"
        ],
        "no-cond-assign": [
            2,
            "always"
        ],
        "no-console": 0,      //allow console.logs
        "no-extra-parens": 0, //allow extra parenthesis
        "array-callback-return": 2,
        //"complexity" :, //specifiy a maximum cyclomatic complexity allowed TODO
        "curly": 2, //force all block statements are wrapped in curly braces (if's, else etc)
        "default-case": 2,
        "dot-location": [2,"property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "no-alert": 2,
        "no-else-return": 2,
        "no-eval": 2,
        "no-implicit-coercion": 2, //disallow type converstion with shorter notations
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-loop-func": 2, //disallow creation of functions within loops
        "no-new-func": 2,
        "no-new-wrappers":2, //disallow using 'new' with Wrappers (String, Boolean, Number)
        "no-new":2, //dont use 'new' without an assignment/comparison
        "no-param-reassign":2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-script-url": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-with": 2,
        "radix": 2,
        "no-shadow": 2,
        "vars-on-top": 2,//still require this rule due to ECMA5 support
    },
    "extends": "eslint:recommended"
}