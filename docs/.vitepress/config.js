const path = require('path')

module.exports = {
    title: 'Bedrock UI Vue3',
    description: 'Package with internal components',
    themeConfig: {
    repo: '...repo-here....',
    sidebar: [
        {
            text: 'Introduction',
            children: [
                { text: 'What is My Lib?', link: '/' },
                { text: 'Getting Started', link: '/guide/' },
                { text: 'template', link: '/guide/template' },
            ],
        },
        {
            text: 'Blocks',
            children: [
                {
                    text: 'Auth',
                    children: [
                        {text: 'Login', link: '/components/blocks/auth/login'},
                        {text: 'Login Code', link: '/components/blocks/auth/login-code'},
                        {text: 'Login Wait', link: '/components/blocks/auth/login-wait'},
                        {text: 'Reset Selector', link: '/components/blocks/auth/reset-selector'},
                        {text: 'Reset Loginname', link: '/components/blocks/auth/resetloginname'},
                        {text: 'Reset Password', link: '/components/blocks/auth/resetpassword'},
                    ]
                },
                {
                    text: 'Pricing',
                    children: [
                        {text: 'Pricing (wip)', link: '/components/blocks/pricing/pricing'},
                    ]
                }
            ],
        },
        {
            text: 'Banner',
            children: [
                { text: 'Banner (wip)', link: '/components/atoms/banner/banner' },
            ],
        },
        {
            text: 'Dropdown',
            children: [
                { text: 'Dropdown Styled (wip)', link: '/components/atoms/dropdown/dropdown' },
            ],
        },
        {
            text: 'Tab',
            children: [
                { text: 'Tab', link: '/components/atoms/tab/tab' },
            ],
        },
        {
            text: 'Toggle',
            children: [
                { text: 'Toggle', link: '/components/atoms/select/toggle/toggle' },
            ],
        },
        {
            text: 'Table',
            children: [
                { text: 'Simple', link: '/components/atoms/table/simple' },
            ],
        },
        {
            text: 'Cards',
            children: [
                { text: 'Simple', link: '/components/atoms/card/cards' },
                { text: 'Card Button (wip)', link: '/components/atoms/card/card-button' },
                { text: 'Card Alt (wip)', link: '/components/atoms/card/card-alt' },
                { text: 'Stats Alt (wip)', link: '/components/atoms/card/stats-alt' },
            ],
        },
        {
            text: 'Style',
            children: [
                { text: 'Icons', link: '/components/atoms/style/icons' },
                { text: 'Typography', link: '/components/atoms/style/typography' },
            ],
        },
        {
            text: 'Messages',
            children: [
                { text: 'Message', link: '/components/atoms/message/message' },
                { text: 'toast', link: '/components/atoms/toast/toast' },
                { text: 'Message Alternatives', link: '/components/atoms/message/message-alt' },
                { text: 'toast Alt (wip)', link: '/components/atoms/toast/toast-alt' },
            ],
        },
        {
            text: 'Misc',
            children: [
                { text: 'MouseOver', link: '/components/atoms/misc/mouseover' },
                { text: 'Breadcrumb', link: '/components/atoms/misc/breadcrumb' },
                { text: 'Draggable (wip)', link: '/components/atoms/misc/draggable' },
            ],
        },
        {
            text: 'Display',
            children: [
                { text: 'Appearing Bullets', link: '/components/atoms/display/appearing-bullets' },
                { text: 'Purified Html', link: '/components/atoms/display/purified' },
            ],
        },
        {
            text: 'Tags',
            children: [
                { text: 'Tags', link: '/components/atoms/tags/tags' },
            ],
        },

        {
            text: 'Select',
            children: [
                { text: 'Language', link: '/components/atoms/select/language' },
                { text: 'Checkbox',
                    children: [
                        { text: 'Normal', link: '/components/atoms/select/checkbox/checkbox' },
                        { text: 'Agree', link: '/components/atoms/select/checkbox/checkbox-must-agree' },
                        { text: 'Motivated', link: '/components/atoms/select/checkbox/checkbox-motivated-agree' },
                        { text: 'Checkbox YFrame (wip)', link: '/components/atoms/select/checkbox/checkbox-alt' },
                    ]
                },
                { text: 'Radio',
                    children: [
                        { text: 'Radio', link: '/components/atoms/select/radio/radio' },
                        { text: 'Radio Block (wip)', link: '/components/atoms/select/radio/radio-block' },
                    ]
                }
            ],
        },
        {
            text: 'Modal',
            children: [
                { text: 'Modal', link: '/components/atoms/modal/modal' },
            ],
        },
        {
            text: 'Input',
            children: [
                { text: 'Text', link: '/components/atoms/input/text' },
                { text: 'Phone (wip)', link: '/components/atoms/input/phone' },
                { text: 'Email', link: '/components/atoms/input/email' },
                { text: 'Password', link: '/components/atoms/input/password' },
                { text: 'Username', link: '/components/atoms/input/username' },
                { text: 'Code', link: '/components/atoms/input/code' },
                { text: 'Search', link: '/components/atoms/input/search' },
            ],
        },
        {
            text: 'Button',
            children: [
                { text: 'Buttons', link: '/components/atoms/button/buttons' },
                { text: 'Buttons External', link: '/components/atoms/button/buttons-external' },
                { text: 'Icons & Badges', link: '/components/atoms/button/icons' },
                { text: 'Colors', link: '/components/atoms/button/colors' },
                { text: 'States', link: '/components/atoms/button/states' },
                { text: 'Sizes', link: '/components/atoms/button/sizes' },
                { text: 'Set', link: '/components/atoms/button/set' },
                { text: 'Dropdown', link: '/components/atoms/button/dropdown' },
                { text: 'Misc', link: '/components/atoms/button/misc' },
            ],
        },

        {
            text: 'Layouts',
            children: [
                {
                    text: 'Buttons',
                    children: [
                        {text: 'Button Rows', link: '/components/layouts/buttons/row'},
                    ]
                },
                {
                    text: 'Screen',
                    children: [
                        {text: 'Footer Screen (wip)', link: '/components/layouts/footer/footer'},
                        {text: 'Loader Screen (wip)', link: '/components/layouts/loader/loader'},
                    ]
                },
                {
                    text: 'Content',
                    children: [
                        {text: 'No Content (wip)', link: '/components/layouts/content/no-content'},
                    ]
                }
            ],
        }
    ],
    },
    vite: {
        resolve: {
            alias: {
                'bedrock-menu-vue3': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
        }
    }
}
