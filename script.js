
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');

const clues = [
  {
    question: "She’s the most loved person in the world today! But… what makes her so special?",
    answer: "Baby, you're the kindest soul I've ever known. Your ability to light up any room when you walk into it is absolutely beautiful. You're the most incredible person I know, and I love you.",
    image: ""
  },
  {
    question: "Where would you go if you could spend this birthday anywhere in the world?",
    answer: "Turkey, Antalya. A serene, picturesque getaway that’s perfect for you.",
    image: "Antalya.jpg"
  },
  {
    question: "What’s your ultimate guilty pleasure when it comes to sweet treats?",
    answer: "Tiramisu or Red Velvet! Two treats as sweet as you.",
    image: "Tiramisu_and_Red_Velvet.jpg"
  },
  {
    question: "Your stunning style always amazes me. What colors and looks define your elegance?",
    answer: "Absolutely stunning! Neutral tones and elegant vibes, just like this picture.",
    image: "Anousha_Stunning.jpg"
  },
  {
    question: "If she could watch one movie on repeat, what would it be?",
    answer: "The Proposal! A timeless romantic comedy that makes her smile every time.",
    image: "The_Proposal.jpg"
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
  answerContainer.innerHTML = `
    <h3>${clues[index].answer}</h3>
    ${clues[index].image ? `<img src="${clues[index].image}" alt="Clue Image" class="clue-image">` : ''}
  `;
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
