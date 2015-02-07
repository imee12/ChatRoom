var template = [];

template.userTmpl = [
"<div class= 'userBox'>",
'<article data-userid="<%= _id %>">',
  '<h3> <%= name %></h3>',
  "<button class='completed'>Send</button>",
//  "<button class='edit'>Edit?</button>",
  "<button class='delete'>Delete</button>",
  //"<form class='editBook' action=''>",
    //    "<div class='form-group'>",
      //    "<input type='text' class='form-control' name='editTitle' value='<%= title %>'>",
      //  "</div>",
        "</div>",

  "</article>"

].join("");

template.roomTmpl = [
"div class= 'chatbox'>",
'<h3> <%= name %></h3>',
"<article class= 'message'>",
"<p><%= message %>" | "<button class='deleterm1'>Delete</button>",
"<button class='submitrm1'>Submit</button>",
"</article>",

].join("");

template.roomTmpl2 = [
"div class= 'chatbox'>",
'<h3> <%= name %></h3>',
"<article class= 'message'>",
"<p><%= message %>",
"<button class='submitrm2'>Submit</button>",
"</article>",

].join("");


template.sideBar = [
"<h3><%= name %></h3>",
"<article class='activeuser'>",
"<p><%= activeuser %>"

].join("");
