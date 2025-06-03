let soundbutton = document.querySelector('.song_button');
let audio = new Audio('1807978078_2_tiktok.mp3');
audio.loop = true; // Loop the background music
audio.volume = 0.5; // Set volume to 50%    
// Start playing the audio when the page loads
document.addEventListener('DOMContentLoaded', function() {
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});
let click = document.querySelector('.clickable_img');
let clickSound = new Audio('click-sound.mp3');
let currentScore = parseInt(localStorage.getItem('plush_score')) || 0;
let collection = JSON.parse(localStorage.getItem('plush_collection')) || [];
function scoreClick() {
    let score = document.querySelector('.score');
    let currentScore = parseInt(score.textContent.replace(/\D/g, '')) || 0;
    let newScore = currentScore + 1;
    score.innerHTML = `<strong>Score:</strong> ${newScore}`;
    clickSound.play();
    click.style.transform = 'scale(1.1)';
    setTimeout(() => {
        click.style.transform = 'scale(1)';
    }, 100);
}

// Update score display on page load
document.addEventListener('DOMContentLoaded', function() {
    let score = document.querySelector('.score');
    score.textContent = score.textContent || '0';
    score.innerHTML = `<strong>Score:</strong> ${score.textContent}`;
});

click.addEventListener('click', scoreClick);

let change_plush = document.querySelector('.change_plush_button');
change_plush.addEventListener('click', function() {
    let plush = document.querySelector('.clickable_img');
    if (plush.src.includes('https://i.postimg.cc/fLm1sv5D/Adobe-Express-file-1.png')) {
        plush.src = 'https://i.postimg.cc/sXh9wDf6/Adobe-Express-file-2.png';
    }
    else {
        const plushImages = [
            'https://i.postimg.cc/fLm1sv5D/Adobe-Express-file-1.png',
            'https://i.postimg.cc/sXh9wDf6/Adobe-Express-file-2.png',
            'https://i.postimg.cc/fb9FGsBF/Adobe-Express-file-3.png',
            'https://i.postimg.cc/fbHnssdf/Adobe-Express-file-4.png',
            'https://i.postimg.cc/XYp9Lc8N/Adobe-Express-file-5.png',
            'https://i.postimg.cc/fRrpqCQ8/Adobe-Express-file-6.png',
            'https://i.postimg.cc/T2jrkPvS/Untitled.png',
            'https://i.postimg.cc/k43bc01q/Untitled-1.png',
            'https://i.postimg.cc/rm3gBFft/Untitled-2.png',
        ];
        let currentIndex = plushImages.findIndex(src => plush.src.includes(src));
        let nextIndex = (currentIndex + 1) % plushImages.length;
        plush.src = plushImages[nextIndex];
    }
});
let randomi_button = document.querySelector('#buy_plush_button');

randomi_button.addEventListener('click', function () {
    let score = document.querySelector('.score');
    let currentScore = parseInt(score.textContent.replace(/\D/g, '')) || 0;

    if (currentScore >= 10) {
        let plush = document.querySelector('.clickable_img');
        const plushImages = [
            'https://i.postimg.cc/fLm1sv5D/Adobe-Express-file-1.png',
            'https://i.postimg.cc/sXh9wDf6/Adobe-Express-file-2.png',
            'https://i.postimg.cc/fb9FGsBF/Adobe-Express-file-3.png',
            'https://i.postimg.cc/fbHnssdf/Adobe-Express-file-4.png',
            'https://i.postimg.cc/XYp9Lc8N/Adobe-Express-file-5.png',
            'https://i.postimg.cc/fRrpqCQ8/Adobe-Express-file-6.png',
            'https://i.postimg.cc/T2jrkPvS/Untitled.png',
            'https://i.postimg.cc/k43bc01q/Untitled-1.png',
            'https://i.postimg.cc/rm3gBFft/Untitled-2.png',
        ];

        let currentImageName = plush.src.split('/').pop();
        let currentIndex = plushImages.findIndex(src => src.endsWith(currentImageName));

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * plushImages.length);
        } while (randomIndex === currentIndex && plushImages.length > 1);

        plush.src = plushImages[randomIndex];
        score.innerHTML = `<strong>Score:</strong> ${currentScore - 10}`;
    } else {
        alert('You need at least 10 points to buy a random plush!');
    }
});


// --- Cookie helpers ---
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
}

// --- Weighted Random Selection ---
function getWeightedRandom(plushes) {
  const totalWeight = plushes.reduce((sum, p) => sum + p.weight, 0);
  let random = Math.random() * totalWeight;

  for (const plush of plushes) {
    if (random < plush.weight) {
      return plush;
    }
    random -= plush.weight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to the Clickable Image Game!');
  const scoreElement = document.querySelector('.score');
  const plush = document.querySelector('.clickable_img');
  const buyButton = document.querySelector('#buy_plush_button');
  updateCollectionDisplay();

  // Load saved score or set default
  scoreElement.innerHTML = `<strong>Score:</strong> ${currentScore}`;

  const plushPool = [
    { src: 'https://i.postimg.cc/fLm1sv5D/Adobe-Express-file-1.png', weight: 40, rarity: "Common" },
    { src: 'https://i.postimg.cc/sXh9wDf6/Adobe-Express-file-2.png', weight: 40, rarity: "Common" },
    { src: 'https://i.postimg.cc/fb9FGsBF/Adobe-Express-file-3.png', weight: 30, rarity: "Uncommon" },
    { src: 'https://i.postimg.cc/fbHnssdf/Adobe-Express-file-4.png', weight: 15, rarity: "Rare" },
    { src: 'https://i.postimg.cc/XYp9Lc8N/Adobe-Express-file-5.png', weight: 7, rarity: "Super Rare" },
    { src: 'https://i.postimg.cc/fRrpqCQ8/Adobe-Express-file-6.png', weight: 3, rarity: "Ultra Rare" },
    { src: 'https://i.postimg.cc/T2jrkPvS/Untitled.png', weight: 0.001, rarity: "Legendary" },
    { src: 'https://i.postimg.cc/k43bc01q/Untitled-1.png', weight: 0.001, rarity: "Legendary" },
    { src: 'https://i.postimg.cc/rm3gBFft/Untitled-2.png', weight: 0.001, rarity: "Legendary" }
  ];

  let collection = JSON.parse(localStorage.getItem('plush_collection')) || [];

buyButton.addEventListener('click', () => {
  if (currentScore >= 10) {
    const selected = getWeightedRandom(plushPool);
    plush.src = selected.src;

    // Save to collection if not already there
    if (!collection.includes(selected.src)) {
      collection.push(selected.src);
      localStorage.setItem('plush_collection', JSON.stringify(collection));
      updateCollectionDisplay(); // refresh the visuals
    }

    currentScore -= 10;
    setCookie('plush_score', currentScore, 30);
    scoreElement.innerHTML = `<strong>Score:</strong> ${currentScore}`;

    alert(`You got a ${selected.rarity} Plush! 🎉`);
  } else {
    alert('You need at least 10 points to buy a random plush!');
  }
})});
function updateCollectionDisplay() {
  const grid = document.getElementById('plush-grid');
  grid.innerHTML = ''; // Clear it

  collection.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.objectFit = 'contain';
    img.style.border = '2px solid #aaa';
    img.style.borderRadius = '10px';
    grid.appendChild(img);
  });
}

// Initial load
updateCollectionDisplay();
  scoreElement.innerHTML = `<strong>Score:</strong> ${currentScore}`;

  // Load a random plush on page load
  const randomPlush = getWeightedRandom(plushPool);
  plush.src = randomPlush.src;

  // Add click event to the plush image
  plush.addEventListener('click', () => {
    currentScore++;
    scoreElement.innerHTML = `<strong>Score:</strong> ${currentScore}`;
    setCookie('plush_score', currentScore, 30);
  });
// Add click event to the plush image
click.addEventListener('click', function() {
    scoreClick();
    // Add plush to collection if not already there
    if (!collection.includes(click.src)) {
        collection.push(click.src);
        saveCollection();
        updateCollectionDisplay();
    }
});
// Play background music
soundbutton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        soundbutton.textContent = 'Pause Music';
    } else {
        audio.pause();
        soundbutton.textContent = 'Play Music';
    }
});
// Save collection to localStorage
function saveCollection() {
    localStorage.setItem('plush_collection', JSON.stringify(collection));
}
// Load collection from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    collection = JSON.parse(localStorage.getItem('plush_collection')) || [];
    updateCollectionDisplay();
});
function updateCollectionDisplay() {
    let collectionDisplay = document.querySelector('.collection_display');
    collectionDisplay.innerHTML = ''; // Clear existing items
    collection.forEach(plush => {
        let img = document.createElement('img');
        img.src = plush;
        img.style.width = '80px';
        img.style.height = '80px';
        img.style.objectFit = 'contain';
        img.style.margin = '5px';
        collectionDisplay.appendChild(img);
    });
}
// Update collection display on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCollectionDisplay();
});
// Add event listener to the change plush button
