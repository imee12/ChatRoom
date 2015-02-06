$(document).ready(function () {
  foodies.init();

});

var foodies = {

  init: function() {
    foodies.initStyling();

    foodies.initSignup();
    //foodies.initEvents();
  },

  initStyling: function(){
  // sidebar displaying users sideBarStyle function
},


  //This will log user in

initSignup: function () {
$('.signup').on('click', function(event) {
    event.preventDefault();
    console.log('signup button works');
    // pushing ssn to users array
    var newuser = {

      username: $(this).find('input[name="name"]').val(),
      SSN: ('default').val(),
      msg: ('default').val(),
      status: ('loggedin').val(),
    };
    // print message saying hello to user in the header
  //  var username=$('input:text').val();
  //  $("header").append('<h2> WELCOME '  + username  +  '! //</h2>');


    foodies.signup();



// LATER PUT BUTTON TO EDIT NAME




};


},
};
// initEvents: function () {
//
//
// //when room1 button pressed user will go to room1
//   $('room1').on('click', function(event){
//     event.preventDefault();
//     //hide loginform
//     $(".form-group").hide();
//     foodies.room1();
//
//     //the sidebar for room1 will show up
//     foodies.sideBar1();
//
//   });
//
// //in room1 user can post a message
//
//   $('.submit').on('click', function (){
//     event.preventDefault();
//
//     var newmsg = {
//       //data-txid="<%= _id %>"
//       username: $(username).val();
//       SSN: $(SSN).value();
//       msg:  $(this).find('input[name="message"]').value();
//       status: ('room1').value();
//     };
//
//
//     foodies.messageroom1();
//
//
//   });
//
//
//
// },

//config: {
  //url: 'http://tiy-fee-rest.herokuapp.com/collections/foodies',


//},


// for signing up a new user

signup: function (newuser) {
  $.ajax({
    url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + users,
    data: index,
    type: 'POST',
    success: function (data) {
      _.each(data, function(item, index, array){
      console.log(index);
      var SSN = $(index).val();
    })

  });

//  $.ajax({
  //  url: foodies.config.url + '-' + SSN,
  //  type: 'POST',
  //  success: function (data) {


  //  }

//  })


//}




// login: function (username) {
//   $.ajax({
//     url: foodies.config.url + '-' + username,
//     data: username,
//     type: 'POST',
//     success: function (data) {
//       console.log(data);
//
//
//     },
//     error: function (error) {
//       console.log(error);
//     }
//
//   });
//
//
// },

// room1: function (){
//   //this will make room 1 data appear using template ajax getdata
//   $.ajax({
//       url: foodies.config.url + '-room1',
//       //data:
//       type: 'GET',
//       success: function (data) {
//         console.log(data);
//         //if you want to type message in room1
//
//
//
//       },
//       error: function (error) {
//         console.log("error");
//       }
//
//   })
//
// }
//
// messageRoom1: function () {
//   //this will post user message to room 1
//
//   $(.ajax)({
//       url: foodies.config.url + '-room1',
//       data: message,
//       type: 'POST',
//       success: function (message) {
// }
//   })
//
// /// need to post message to user's data
// },
//
// // messageRoom2: function () {
// //   //this will post user message
//
//   $(.ajax)({
//       url: foodies.config.url + '-room2',
//       data: message,
//       type: 'POST',
//       success: function (message) {
//       },
//   })
//
//
// },
//
//

// //sideBar1: function (){
// //    $(.ajax) {
// //      url: foodies.config.url + '-room1',
//   //    data: users,
//     //  type: 'GET',
//       success: function (){
//
//
//       },
//
//       error: function (error) {
//         console.log("error");
//       }
//
//     },
//
// },



///sideBar2
//sideBar2: function (){
  //  $(.ajax) {
  ////    url: foodies.config.url + '-room2',
    //  data: users,
      //type: 'GET',
    //  success: function (){


  //    },

  //    error: function (error) {
      //  console.log("error");
//      }

  //  },




////room2

//}
