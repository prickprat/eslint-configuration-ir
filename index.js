module.exports = {
    "rules": {
        "indent": [
            2,
            3,
            {"SwitchCase": 1, "VariableDeclarator": 2}
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            1,
            "unix"
        ],
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
        ]
    },
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "root": true
}