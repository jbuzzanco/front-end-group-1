'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
// const store = require('../store.js');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');

const authEvents = require('./auth/events.js');
const backEndEvents = require('../backend/events.js');
// const backEndApi = require('../backend/api.js');

$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  backEndEvents.addClueHandlers();
  // backEndApi.viewAllSurveys();
  $('#signInBox').hide();
  $('#shakeHere').show().empty().append(' <-- Log in to make your Own Survey');
  // $('.surveysContainer').hide();
//links
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
//buttons
  $('#viewAllSurveys').hide();
  $('#surveyOptions').hide();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  $('#surveyBox').hide();
  $('.surveyOptions').hide();

});
