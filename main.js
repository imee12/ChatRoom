$(document).ready(function () {
  foodies.init();

});

var foodies = {

  init: function() {
    foodies.initStyling();

    foodies.initSignup();
   foodies.initEvents();
  },

  initStyling: function(){
  //sidebar displaying users sideBarStyle function
},


  //This will log user in

initSignup: function (){
$('.signup').on('click', function(event) {
    event.preventDefault();
    console.log('signup button works');
    // pushing ssn to users array
    var newuser = {

      username: $(this).siblings('input[name="username"]').val(),

      status: "loggedin",
    };
//print message saying hello to user in the header

   var username=$('input:text').val();
   $("header").append('<h2> WELCOME '  + username  +  '! </h2>');
console.log(newuser);

    foodies.signup(newuser);



// LATER PUT BUTTON TO EDIT NAME




});

},

initEvents: function () {


//when room1 button pressed user will go to room1
  $('.recipes').on('click', function(event){

    event.preventDefault();
    console.log("recipes button works"),
    //hide loginform
    $(".logsignin").addClass("hide");
    $()

    // var userstatus = {
    //
    //   username: $(this).siblings('input[name="username"]').val(),
    //
    //   status: "Room1",
    // };




   //foodies.statusRoom1();
    foodies.room1();

    //the sidebar for room1 will show up
    //foodies.sideBar1();

  });

},
//in room1 user can post a message

  // $('.submitrm1').on('click', function (){
  //   event.preventDefault();
  //
  //   var userStatus = {
  //     //data-txid="<%= _id %>"
  //     username: $(username),
  //
  //     msg:  $(this).siblings('input[name="message"]').value(),
  //     status: "Room 1"
  //   };
  //
  //
  //   //foodies.messageroom1();
  //
  //
  // });
  //




// config: {
//   url: 'http://tiy-fee-rest.herokuapp.com/collections/foodies',
//
//
// },


// for signing up a new user

// signup: function (newuser) {
//   $.ajax({
//     url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'users',
//     data: newuser,
//     type: 'POST',
//     success: function (data) {
//   //    _.each(data, function(item, index, array){
//       console.log(data);
//
// //  });
//
//   }
//
//   });
//
//   $.ajax({
//     url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'users',
//     data: newuser,
//     type: 'GET',
//     success: function (data){
//       _.each(data, function(item, index, array){
//         var userid = $(item._id);
//
//       });
//
//     }
//
//
//   });
//
//
//
// },
//
//
//
//
//
//
// statusRoom1: function (username) {
//   $.ajax ({
//     url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'users',
//   //  data: username,
//     type: 'PUT',
//     success: function () {
// console.log(user);
//
//     }
//
//   });
//
// },
//

 // $.ajax({
 //   url: foodies.config.url + '-' + ,
 //   type: 'POST',
 //   success: function (data) {
 //
 //
 //   }
 //
 // })


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

room1: function (){
  //this will make room 1 data appear using template ajax getdata
  $.ajax({
      url: 'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-room1',
      //data:
      type: 'GET',
      success: function (data) {
        console.log(data);

          var renderRoom1 = _.template(template.roomTmpl);
            var markup = "";
            _.each(data, function(item, index, array){
              console.log(item);
              markup += renderRoom1(item);

            });
              console.log('markup is..', markup);
              $('article').html(markup);

        },
          error: function (error) {
            console.log(error);
          }
        });

},

};


// }
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
