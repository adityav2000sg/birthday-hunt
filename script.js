
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');

const clues = [
  {
    clue: "Start your day with this: Who’s the first person to wish you?",
    answer: "Baby, you're the kindest soul I've ever known. Your ability to light up any room is amazing. You're the most incredible person I know, and I love you!",
    image: ""
  },
  {
    clue: "Where would you go if you could spend this birthday anywhere in the world?",
    answer: "Turkey, Antalya. A serene, picturesque getaway that’s perfect for you.",
    image: "Antalya.jpg"
  },
  {
    clue: "What’s your ultimate guilty pleasure when it comes to sweet treats?",
    answer: "Tiramisu or Red Velvet! Two treats as sweet as you.",
    image: "Tiramisu_and_Red_Velvet.jpg"
  },
  {
    clue: "Your stunning style always amazes me. What colors and looks define your elegance?",
    answer: "Absolutely stunning! Neutral tones and elegant vibes, just like this picture.",
    image: "Anousha_Stunning.jpg"
  },
  {
    clue: "If you could watch one movie on repeat, what would it be?",
    answer: "The Proposal! A timeless romantic comedy that makes her smile every time.",
    image: "The_Proposal.jpg"
  },
  {
    clue: "If we could create something together for your birthday, what would it be?",
    answer: "Art that reflects your heart. Something meaningful and creative!",
    image: ""
  },
  {
    clue: "What’s one activity that makes any day feel special for you?",
    answer: "Cooking or enjoying cozy moments together, with hugs and laughs!",
    image: ""
  },
  {
    clue: "What kind of gift do you treasure the most?",
    answer: "Something handmade, meaningful, and full of effort!",
    image: ""
  },
  {
    clue: "What’s the one thing that makes your birthday magical?",
    answer: "Confetti, laughter, and love all around!",
    image: ""
  },
  {
    clue: "Your final surprise is here. Guess what’s coming?",
    answer: "A delicious tiramisu and... a special question!",
    image: "Tiramisu_and_Red_Velvet.jpg",
    special: true
  }
];

function startHunt() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('hunt-section').classList.remove('hidden');
  loadClues();
  launchConfetti();
}

function loadClues() {
  const cluesContainer = document.getElementById('clues-container');
  clues.forEach((clue, index) => {
    const clueBtn = document.createElement('button');
    clueBtn.classList.add('clue-btn');
    clueBtn.textContent = `Clue ${index + 1}`;
    clueBtn.onclick = () => revealAnswer(index);
    cluesContainer.appendChild(clueBtn);
  });
}

function revealAnswer(index) {
  const answerContainer = document.getElementById('answer-container');
  const clue = clues[index];
  answerContainer.innerHTML = `
    <h3>${clue.answer}</h3>
    ${clue.image ? `<img src="${clue.image}" alt="Clue Image" class="clue-image">` : ''}
  `;
  if (clue.special) {
    answerContainer.innerHTML += `
      <div class="special-question">
        <h2>Will you do me the honor of being my girlfriend all over again? ❤️</h2>
        <button class="yes-btn" onclick="showLoveAnimation()">Yes</button>
        <button class="no-btn">No</button>
      </div>
    `;
  }
}

function showLoveAnimation() {
  document.body.innerHTML = '<div class="love-animation">❤️❤️❤️ Love Forever ❤️❤️❤️</div>';
  document.body.style.animation = "heartPulse 2s infinite";
}

function launchConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confettiColors = ['#ff4d6d', '#ff748c', '#ff9aa2', '#ffd1dc'];
  const confettiPieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 1,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    rotation: Math.random() * 360
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((piece) => {
      ctx.fillStyle = piece.color;
      ctx.beginPath();
      ctx.arc(piece.x, piece.y, piece.size / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function updateConfetti() {
    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      if (piece.y > confettiCanvas.height) {
        piece.y = -piece.size;
      }
    });
  }

  function render() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(render);
  }

  render();
}
