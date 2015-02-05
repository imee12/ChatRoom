$(document).ready(function () {
  foodies.init();

});

var foodies = {

  init: function() {
    foodies.initStyling();

    foodies.initLogin();
    foodies.initEvents();
  },

  initStyling: function(){
  // sidebar displaying users sideBarStyle function
},


  //This will log user in

initLogin: function () {
$('login').on('click', function(event) {
    event.preventDefault();

  // print message saying hello to user in the header

var username=$('input:text').val();
$("header").append('<h2> WELCOME '  + username  +  '! </h2>');

});

    console.log("pressed login");
    foodies.login();
},


initEvents: function () {


//when room1 button pressed user will go to room1
  $('room1').on('click', function(event){
    event.preventDefault();
    //hide loginform
    $(".form-group").hide();
    foodies.room1();

    //the sidebar for room1 will show up
    //foodies.sideBar1();

  });

//in room1 user can post a message

  $('.submit').on('click', function ())



},

config: {
  url: 'http://tiy-fee-rest.herokuapp.com/collections/foodies',


},


/// i don't think we need this if we don't need to track user's message data//

login: function (username) {
  $.ajax({
    url: foodies.config.url + '-' + username,
    data: username,
    type: 'POST',
    success: function (data) {
      console.log(data);


    },
    error: function (error) {
      console.log(error);
    }

  });


},

room1: function (){
  //this will make room 1 data appear using template ajax getdata
  $(.ajax)({
      url: foodies.config.url + '-room1',
      //data:
      type: 'GET',
      success: function (data) {
        console.log(data);
        //if you want to type message in room1



      },
      error: function (error) {
        console.log("error");
      }

  })

}

messageRoom1: function () {
  //this will post user message

  $(.ajax)({
      url: foodies.config.url + '-room1',
      data: message,
      type: 'POST',
      success: function (message)

  })


},

sideBar1: function (){
    $(.ajax) {
      url: foodies.config.url + '-room1',
      data: users,
      type: 'GET',
      success: function (){


      },

      error: function (error) {
        console.log("error");
      }

    },




}
///sideBar1




////room2

}
