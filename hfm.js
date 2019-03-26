function addMessage() {

  var msgStr = 'As the original site domain has expired due to the frequency of the ' +
  'conference, this is a re-uploaded version.  ' +
  'All official changes made after 1/1/2019 will not be reflected here.';

  var header = document.getElementsByTagName("header")[0]; //enter header box
  var div_to_add = document.createElement("div"); //make a div
  div_to_add.style.textAlign = "center";
  div_to_add.style.color = "red";
  div_to_add.style.padding = "10px";

  var msg_to_add = document.createTextNode(msgStr); //make chunk of text
  div_to_add.appendChild(msg_to_add); //stick message into div

  header.appendChild(div_to_add); //add to header
}

addMessage(); //add the message
