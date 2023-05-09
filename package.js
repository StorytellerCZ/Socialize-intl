/* global Package */
Package.describe({
  name: 'intl',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Intl for Socialize-starter',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/StorytellerCZ/Socialize-intl',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('2.6')
  api.use(['ecmascript', 'typescript'])
  api.mainModule('./index.ts', ['client', 'server'], { lazy: true })
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'typescript'])
  api.use('tinytest')
  api.use('intl')
})
