Package.describe({
  name: 'evilboss:react-quickform',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Enables you to use quickforms in react',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/evilboss/react-quickform.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.mainModule('react-quickform.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('evilboss:react-quickform');
  api.mainModule('react-quickform-tests.js');
});
