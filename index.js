'use strict'

module.exports = {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-sass-guidelines",
        "stylelint-config-property-sort-order-smacss",
        "stylelint-config-standard-scss"
    ],
    "rules": {
        "no-descending-specificity": null,
        "indentation": 4,
        "declaration-empty-line-before": null,
        "declaration-colon-newline-after": null,
        "declaration-block-no-duplicate-properties": true,
        "declaration-no-important":true,
        "declaration-property-value-disallowed-list": {
            "border": ["none"],
            "border-top": ["none"],
            "border-right": ["none"],
            "border-bottom": ["none"],
            "border-left": ["none"],
            "/^transition/": ["/all/"]
        },
        "block-closing-brace-newline-after": null,
        "max-empty-lines": null,
        "selector-list-comma-newline-after": null,
        "at-rule-empty-line-before": null,
        "at-rule-semicolon-newline-after": null,
        "selector-pseudo-element-colon-notation": "single",
        "color-no-hex": true,
        "function-url-quotes": "always",
        "function-parentheses-space-inside": "never-single-line",
        "max-nesting-depth": [
            3,
            {
                "ignoreAtRules": ["each", "media", "supports", "include"],
                "severity": "warning"
            }
        ],
        "number-leading-zero": null,
        "order/order":[
            [
                "custom-properties",
                "dollar-variables",
                {
                    "type": "at-rule",
                    "name": "extend"
                },
                {
                    "type": "at-rule",
                    "name": "include"
                },
                "declarations",
                "rules"
            ]
        ],
        "order/properties-alphabetical-order": null,
        "property-no-vendor-prefix": [
            true,
            {
                "severity": "warning"
            }
        ],
        "value-no-vendor-prefix": [
            true,
            {
                "severity": "warning"
            }
        ],
        "scss/selector-no-redundant-nesting-selector": null,
        "selector-class-pattern": null,
        "selector-max-compound-selectors": [
            3,
            {
                "severity": "warning"
            }
        ],
        "selector-no-qualifying-type": null,
        "string-quotes": null,
        "max-line-length": null,
        "keyframes-name-pattern": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/double-slash-comment-whitespace-inside": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/dollar-variable-pattern": /[a-z\-]/,
        "scss/at-import-partial-extension": null,
        "declaration-block-no-redundant-longhand-properties": [
            true,
            { "severity": "warning" }
        ],
        "color-function-notation": null,
        "alpha-value-notation": null
    }
}
