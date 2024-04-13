const card = document.getElementById('card');
const flipButton = document.getElementById('flip-button');
flipButton.addEventListener('click', function() {
  let hasRotated = card.style.transform === 'rotateY(180deg)';
  card.style.transform = hasRotated ? 'rotateY(0deg)' : 'rotateY(180deg)';
});