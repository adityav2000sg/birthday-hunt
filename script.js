function revealSurprise(clueNumber) {
  const surpriseText = document.getElementById('surprise-text');
  const surprises = {
    1: "Clue 1: Our favorite meeting spot... Do you remember?",
    2: "Clue 2: A playlist of your favorite songs is waiting for you!",
    3: "Clue 3: Something sweet is on its way to you. Guess what?",
    4: "Clue 4: One day, we’ll visit Lake Como together. Dream big, my love!"
  };

  surpriseText.textContent = surprises[clueNumber];
  surpriseText.style.visibility = "visible";
}
