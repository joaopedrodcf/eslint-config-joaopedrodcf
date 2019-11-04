module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react-perf/all'],
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        'prettier',
        'markdown',
        'react-perf'
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to']
            }
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'builtin'
                ]
            }
        ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_id']
            }
        ],
        'prettier/prettier': ['error'],
        'react/prop-types': 0
    }
};
