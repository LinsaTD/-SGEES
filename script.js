  
    // Smooth scroll for Gallery nav
    document.getElementById('galleryNav').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });

    // Popup data for each gallery type
    const popupData = {
      oils: {
        title: "Rich and aromatic oils",
        images: [
          "olive.jpg",
          "frying-oil.jpg",
          "sunflower.jpg",
          "flavored.jpg"

        ]
      },
      pickles: {
        title: "Tangy artisanal pickles",
        images: [
          "green-olives.jpg",
          "blackolive.jpg",
          "pickled-veggies.jpg"
        ]
      },
      sesame: {
        title: "Creamy tahini and sesame products",
        images: [
          "tahini.jpg",
          "halva.jpg",
          "hummus.jpg"
        ]
      },
      extras: {
        title: "Other premium food products.",
        images: [
          "nuts.jpg",
          "pulses.jpg",
          "honey.jpg",
          "beverages.jpg"
        ]
      }
    };

    // Handle gallery item click
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const data = popupData[type];
        if (data) {
          document.getElementById('popupTitle').textContent = data.title;
          document.getElementById('popupImages').innerHTML = data.images.map(img =>
            `<img src="${img}" alt="" class="popup-img">`
          ).join('');
          document.getElementById('popupSection').style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close popup
    document.getElementById('popupClose').addEventListener('click', function() {
      document.getElementById('popupSection').style.display = 'none';
      document.body.style.overflow = '';
    });

    // Close popup on outside click
    document.getElementById('popupSection').addEventListener('click', function(e) {
      if (e.target === this) {
        document.getElementById('popupSection').style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    // Optional: Close popup with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.getElementById('popupSection').style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  
    // Example structure for images with descriptions
const galleryData = {
  oils: [
    { src: 'olive.jpg', alt: 'Oils', description: 'Olive Oil.' },
    { src: 'sunflower.jpg', alt: 'Oils', description: 'Sunflower Oil.' },
    { src: 'frying-oil.jpg', alt: 'Oils', description: 'Frying Oil.' },
    { src: 'flavored.jpg', alt: 'Oils', description: 'Flavored Oils.' }
  ],
  pickles: [
    { src: 'green-olives.jpg', alt: 'Pickles', description: 'Green Olives' },
    { src: 'blackolives.jpg', alt: 'Pickles', description: 'Black Olives' },
    { src: 'pickled-veggies.jpg', alt: 'Pickles', description: ' Pickled Vegetables' }
  ],
  sesame: [
    { src: 'tahini.jpg', alt: 'Sesame', description: 'Tahini' },
    { src: 'halva.jpg', alt: 'Sesame', description: 'Tahini Halva' },
    { src: 'hummus.jpg', alt: 'Sesame', description: 'Hummus' }
  ],
  extras: [
    { src: 'nuts.jpg', alt: 'Extras', description: 'Other premium food products' },
    { src: 'pulses.jpg', alt: 'Extras', description: 'Other premium food products' },
    { src: 'honey.jpg', alt: 'Extras', description: 'Other premium food products' },
    { src: 'beverages.jpg', alt: 'Extras', description: 'Other premium food products'}
  ]
};

// When opening the popup, render images with descriptions
function openPopup(type) {
  const images = galleryData[type] || [];
  const popupImages = document.getElementById('popupImages');
  popupImages.innerHTML = images.map(img => `
    <div class="popup-img-block">
      <img src="${img.src}" alt="${img.alt}" class="popup-img">
      <div class="popup-img-desc">${img.description}</div>
    </div>
  `).join('');
  // ...existing code to show popup...
}

// Add event listeners to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    const type = this.getAttribute('data-type');
    openPopup(type);
  });
});0