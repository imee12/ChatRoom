var template = [];

template.userTmpl = [
//we make

"<div class= 'userBox'>",
'<article data-userid="<%= _id %>">',
  '<h3> <%= name %></h3>',
  "<button class='completed'>Send</button>",
//  "<button class='edit'>Edit?</button>",
  "<button class='delete'>Delete?</button>",
  //"<form class='editBook' action=''>",
    //    "<div class='form-group'>",
      //    "<input type='text' class='form-control' name='editTitle' value='<%= title %>'>",
      //  "</div>",
        "</div>",

  "</article>"

].join("");
///each message needs a delete button so user can delete own messages
//we need to be able to grab id of message so can be deleted

//also need to add status value of room so we can track which room people are in in our sidebar

template.roomTmpl = [
"div class= 'chatbox'>",
'<h3> <%= name %></h3>',
"<article class= 'message'>",
"<p><%= message %>",
"</article>",

].join("");

template.roomTmpl2 = [
"div class= 'chatbox'>",
'<h3> <%= name %></h3>',
"<article class= 'message'>",
"<p><%= message %>",
"</article>",

].join("");


template.sideBar = [
"<h3><%= name %></h3>",
"<article class='activeuser'>",
"<p><%= activeuser %>"

].join("");
