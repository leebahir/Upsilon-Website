function myFunc(myModal, myImg, myModalImg, imgSrc) {
  var modal = document.getElementById(myModal);
  var img = document.getElementById(myImg);
  var modalImg = document.getElementById(myModalImg);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
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
var long = document.getElementById("longModal");
var riya = document.getElementById("riyaModal");
var sharon = document.getElementById("sharonModal");
var shlok = document.getElementById("shlokModal");
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];

span0.onclick = function () {
  danson.style.display = "none";
};

span1.onclick = function () {
  ian.style.display = "none";
};

span2.onclick = function () {
  john.style.display = "none";
};

span3.onclick = function () {
  long.style.display = "none";
};

span4.onclick = function () {
  riya.style.display = "none";
};

span5.onclick = function () {
  sharon.style.display = "none";
};

span6.onclick = function () {
  shlok.style.display = "none";
};

function close(myModal) {
  var modal = document.getElementById(myModal);
  modal.style.display = "none";
}
