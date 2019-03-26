function addMessage() {

  var msgStr1 = 'As the original site domain has expired due to the frequency of the ' +
  'conference, this is a re-uploaded version.';
  var msgStr2 = 'All official changes made after 1/1/2019 will not be reflected here.';

  var header = document.getElementsByTagName("header")[0]; //enter header box
  var div_to_add = document.createElement("div"); //make a div
  div_to_add.style.textAlign = "center";
  div_to_add.style.color = "red";
  div_to_add.style.padding = "10px";

  var msg_to_add1 = document.createTextNode(msgStr1); //make chunk of text
  var msg_to_add2 = document.createTextNode(msgStr2);

  var newline = document.createElement("br"); //create new line

  div_to_add.appendChild(msg_to_add1); //stick message into div
  div_to_add.appendChild(newline);
  div_to_add.appendChild(msg_to_add2);

  header.appendChild(div_to_add); //add to header
}

addMessage(); //add the message
