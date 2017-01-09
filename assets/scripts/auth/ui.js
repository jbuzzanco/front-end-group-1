'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
};

const signUpSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("You Are Signed Up!");
  $('#myModal2').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-up').trigger('reset');
};

const signUpFailure = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("Maybe You Entered Something Wrong....Or Maybe That Email Already Exists!");
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#surveyDelete').show();
  $('#imageView').show();
  $('#createSurveys').show();
  $('#sign-out').show();
  $('#sign-out-main').show();
  $('#seeYourSurveys').show();
  $('#change-password').show();
  $('#close').hide();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#needAccountBox').hide();
  $('#changePwrd').show();
  $('#sign-out-pwrd').show();
  $('.containera').hide();
  $('#changePwrd-main').show();
  $('#signInBox').show();
  $('#viewAllSurveys').show();
  $('#myModal1').modal('hide');
  $('#outANDin').hide();
  $('#surveyOptions').show();
  $('#sign-in').trigger('reset');
  $('#shakeHere').hide();
};

const signInFailure = (data) => {
  store.user = data.user;
  $('#signInBox').show().text("Maybe You Entered Something Wrong....Try Again.");
};

const signOutSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  $('#signInBox').empty().hide();
  $('#changePasswordBox').empty();
  $('.close').show();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#signUpBox').empty();
  $('#needAccountBox').show();
  $('#changePasswordBox').show();
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
  $('#myModal3').modal('hide');
  $('.containera').show();
  $('.options')
    .empty()
    .append("User Options");
  $('.userIdMain').empty();
  $('#viewAllSurveys').hide();
  $('#outANDin').show();
  $('#surveyOptions').hide();
  $('#shakeHere').empty().hide();
  $('#signInBoxTwo').empty().hide();
  $('#sign-in').trigger('reset');
  $('#myModal4').modal('hide');
  $('.surveysContainer').empty();
  $('.img-container').empty();
  $('.appendAnswer').hide();
};

const changePasswordFailure = () => {
  // store.user = data.user;
  $('#changePasswordBox').text("Maybe You Entered Something Wrong....Try Again.");
  $('#signInBox').text("Password NOT changed. You're Still Logged In Though!");
};

const changePasswordSuccess = () => {
  // store.user = data.user;
  $('#signInBox').text('Write Down Your New Password!');
  $('#myModal3').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-in').trigger('reset');
  $('#change-password').trigger('reset');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  changePasswordFailure,
  changePasswordSuccess,
};
