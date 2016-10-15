// This setup allows running specs that use enzyme on a headless environemnt (mocha-webpack).
// For more details see: https://github.com/airbnb/enzyme/issues/47#issuecomment-165791879
const jsdom = require('jsdom').jsdom;
var React = require('react')
var chai = require("chai")
var sinonChai = require("sinon-chai")

// Hook up sinon with chai matchers API
chai.use(sinonChai)

global.React = React
global.expect = chai.expect

// Setup fake DOM so that Enzyme can mount React components
global.document = jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = document.defaultView;
global.XMLHttpRequest = window.XMLHttpRequest;
global.navigator = window.navigator;
