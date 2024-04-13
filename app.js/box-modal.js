

function openModal(message) {
  var modal = document.getElementById('myModal');
  var modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message; 
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 3000);
}


var giftIcons = document.querySelectorAll('.gift-icon');
giftIcons.forEach(function(icon) {
  icon.style.cursor = 'pointer';
});


var messages = ["¡Chiki hermosa has ganado 1$ sigue intentandolo ! ",  "Chiki hermosa has ganado 2$ sigue intentandolo !","Chiki hermosa has ganado 5$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !", "Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 20$ sigue intentandolo !","Chiki hermosa has ganado 30$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 100$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 1$ sigue intentandolo !","Chiki hermosa has ganado 2$ sigue intentandolo !", "Chiki hermosa has ganado 1$ sigue intentandolo !", "Chiki hermosa has ganado 1$ sigue intentandolo !", "Chiki hermosa has ganado 5$ sigue intentandolo !",  ];


giftIcons.forEach(function(icon, index) {
  icon.onclick = function() {
      openModal(messages[index]); 
  };
});
