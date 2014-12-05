
var handlers = {
  getContacts: function() {
    //Performing a GET request and expecting JSON data
    $.getJSON('/contacts', handlers.processContacts);
  }, 
  processContacts: function(data) {
    //The data param in this function is the JSON data
    //returned from the server
    var table = $("#contacts").find('tbody').empty();
    //Calling .empty() allows us to 'reset' the table each time
    $.each(data, function(index, contact) {
      var tr = $("<tr>").appendTo(table);
      $("<td>").text(contact.first_name).appendTo(tr);
      $("<td>").text(contact.last_name).appendTo(tr);
      $("<td>").text(contact.email).appendTo(tr);
    });
    //Shows the results once it has all been assembled
    $("#results").removeClass('hide');
  },  
  addContact: function() {
    //Callback function for the Add Clown button

    var newContact = {
      first_name: $("#first_name_field").val(),
      last_name: $("#last_name_field").val(),
      email: $("#email_field").val()
    };

    //Fourth parameter here is the expected data type from the server.
    $.post('/contacts/create', newContact, handlers.addedContact, 'json');
  },
  addedContact: function(data) {
    //Again, the 'data' param is the JSON data from the server
    if (data.result) {
      handlers.getContacts();
    } else {
      alert("You screwed something up.");
    }
  },
  searchContacts: function(data){
    var query = $("#search_field").val();
    $.getJSON('/contacts/search?query=' + query, handlers.processContacts);
  },
  processForm: function(e) {
    if (e.preventDefault) e.preventDefault();

    return false;
  }
};

$(function() {
  $("#getContacts").on('click', handlers.getContacts);
  $("#makeContact").on('click', handlers.addContact);
  $("#contactForm").on('submit', handlers.processForm);
  $("#searchContacts").on('click', handlers.searchContacts);
});

