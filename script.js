function myFunc(myModal, myImg, myModalImg, imgSrc) {
  var modal = document.getElementById(myModal);
  var img = document.getElementById(myImg);
  var modalImg = document.getElementById(myModalImg);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
  };

  modal.style.display = "block";
  modalImg.src = imgSrc;
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}

var danson = document.getElementById("dansonModal");
var ian = document.getElementById("ianModal");
var john = document.getElementById("johnModal");
var katherine = document.getElementById("katherineModal");
var kelly = document.getElementById("kellyModal");
var lee = document.getElementById("leeModal");
var long = document.getElementById("longModal");
var natalie = document.getElementById("natalieModal");
var nicole = document.getElementById("nicoleModal");
var riya = document.getElementById("riyaModal");
var sharon = document.getElementById("sharonModal");
var shlok = document.getElementById("shlokModal");
var zilong = document.getElementById("zilongModal");

var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];
var span8 = document.getElementsByClassName("close")[8];
var span9 = document.getElementsByClassName("close")[9];
var span10 = document.getElementsByClassName("close")[10];
var span11 = document.getElementsByClassName("close")[11];
var span12 = document.getElementsByClassName("close")[12];

span0.onclick = function () {
  danson.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span1.onclick = function () {
  ian.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span2.onclick = function () {
  john.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span3.onclick = function () {
  katherine.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span4.onclick = function () {
  kelly.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span5.onclick = function () {
  lee.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span6.onclick = function () {
  long.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span7.onclick = function () {
  natalie.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span8.onclick = function () {
  nicole.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span9.onclick = function () {
  riya.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span10.onclick = function () {
  sharon.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span11.onclick = function () {
  shlok.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

span12.onclick = function () {
  zilong.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
};

function close(myModal) {
  var modal = document.getElementById(myModal);
  modal.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.height = "100%";
}
