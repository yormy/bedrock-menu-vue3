module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint-config-prettier',
        'eslint:recommended',
        '@vue/eslint-config-airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: [
        "vue",
        "@typescript-eslint",
    ],
    parser:  'vue-eslint-parser',
    parserOptions: {
        "ecmaVersion":  "latest",
        "parser":  "@typescript-eslint/parser",
        "sourceType":  "module"
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/multi-word-component-names': 'off',
        "indent": [
            "error",
            4,
            {"SwitchCase":1},
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],

        'no-console': process. env. NODE_ENV ===  'production' ? [ 'error', {  allow: [ 'error',  'warn'] }] :  'off',  //The production mode does not allow the use of log
        'no-debugger': process. env. NODE_ENV ===  'production' ?  'warn' :  'off',  //The production default does not allow the use of debugger
        'no-fallthrough': 'off',
        'vue/this-in-template': ['error', 'never'],
        "no-restricted-syntax": "off",
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/require-explicit-emits': [
            'error',
            {
                allowProps: false
            }
        ],
        'vue/attributes-order': [
            'error',
            {
                order: ['CONDITIONALS', 'LIST_RENDERING', 'DEFINITION', ['UNIQUE', 'SLOT'], 'RENDER_MODIFIERS', 'GLOBAL', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', ['OTHER_ATTR', 'EVENTS'], 'CONTENT'],
                alphabetical: false
            }
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    'extends',
                    'mixins',
                    ['delimiters', 'comments'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    'emits',
                    'setup',
                    'fetch',
                    'head',
                    ['props', 'propsData'],
                    ['provide', 'inject'],
                    'asyncData',
                    'data',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'computed',
                    ['components', 'directives', 'filters'],
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
            { blankLine: 'any', prev: 'case', next: 'case' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' }
        ],
        '@typescript-eslint/no-unused-vars': [ 'error', {  varsIgnorePattern:  '.*',  args:  'none' }],  //variable declaration is not used
        '@typescript-eslint/no-explicit-any':  'off',  // allow ts to use any
        // '@typescript-eslint/no-var-requires': 'off', // Force use of import and disallow setting off with require to turn off checking
        // 'vue/require-v-for-key': 'off', // Check the reserved element v-for in vue3 will automatically append the key value, so there is no need to force the addition of the key attribute, so the filling of the key is not checked
        // 'vue/valid-v-for': 'off', // For non-reserved (custom) elements, v-for in vue3 will automatically append the key value, so there is no need to force the addition of the key attribute, so the key is not checked fill in
        // // Add component naming ignore rule vue's official default rule is multi-word camel case for component naming
        // 'vue/multi-word-component-names': [
        // 'warn',
        // {
        // ignores: ['index'], //Component names to ignore
        // },
        // ],
    }
}
