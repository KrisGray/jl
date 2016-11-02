module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "no-console": [
            "off"
        ]
    }
};