const images = document.querySelectorAll('.main img');
const currentImg = document.getElementById('current-img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const empty = document.getElementById('empty');

const play = document.getElementById('play');
const pause = document.getElementById('pause');
let currentid;
let isPause = false;
let interval;

images.forEach((image) => {
  image.addEventListener('click', () => {
    currentImg.src = image.src;
    currentid = image.id;
    empty.style.display = 'block';
    play.style.display = 'block';
    pause.style.display = 'block';
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';
  });
});

empty.addEventListener('click', () => {
  currentImg.src = '';

  empty.style.display = 'none';
  play.style.display = 'none';
  pause.style.display = 'none';
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
  if (interval) {
    clearInterval(interval);
  }
});

nextButton.addEventListener('click', () => {
  const currentIndex = Number(currentid[1]);
  let nextIndex = -1;
  if (currentIndex >= images.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = currentIndex + 1;
  }
  const nextid = 'a' + String(nextIndex);
  const nextImg = document.querySelector(`#${nextid}`);
  currentImg.src = nextImg.src;
  currentid = nextImg.id;
});
prevButton.addEventListener('click', () => {
  const currentIndex = Number(currentid[1]);
  let nextIndex = -1;
  if (currentIndex <= 0) {
    nextIndex = images.length - 1;
  } else {
    nextIndex = currentIndex - 1;
  }
  const nextid = 'a' + String(nextIndex);
  const nextImg = document.querySelector(`#${nextid}`);
  currentImg.src = nextImg.src;
  currentid = nextImg.id;
});

play.addEventListener('click', () => {
  play.style.display = 'none';
  pause.style.display = 'block';
  interval = setInterval(() => {
    const currentIndex = Number(currentid[1]);
    let nextIndex = -1;
    if (currentIndex >= images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    const nextid = 'a' + String(nextIndex);
    const nextImg = document.querySelector(`#${nextid}`);
    currentImg.src = nextImg.src;
    currentid = nextImg.id;
  }, 2000);
});
pause.addEventListener('click', () => {
  play.style.display = 'block';
pause.style.display = 'none';
  if (interval) {
    clearInterval(interval);
}
});

