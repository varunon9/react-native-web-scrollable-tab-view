module.exports = {
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true
  },
  plugins: [
    'react',
    'react-native'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: '16.0.0'
    }
  },
  globals: {
    document: true
  },
  rules: {
    'react/display-name': 1,
    'no-console': 'off',
    'max-len': [
      1,
      80,
      2,
      {
        ignoreComments: true
      }
    ]
  }
};
