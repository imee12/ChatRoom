var template = [];

template.userTmpl = [
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
