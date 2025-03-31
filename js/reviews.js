// reviews.js

// Sample reviews data
const reviews = [
    {
        id: 1,
        author: "Nina P.",
        avatar: "https://ninouilleuh.github.io/CV/assets/picture.jpg",
        rating: 5,
        date: "2023-11-15",
        title: "Amazing authentic Italian experience!",
        text: "The pasta was perfectly al dente and the sauce was incredible. Definitely coming back!",
        photos: ["https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1743410514~exp=1743414114~hmac=335f085a63cce9f14302a7739007e8879f6522be645cb97aeb818e55a249906b&w=1380", "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1743410529~exp=1743414129~hmac=bcbdc4851371ccce9be035e946dd2a4b86136f7e891cca809979192f587243b5&w=1380"],
        helpful: 12,
        isHelpful: false
    },
    {
        id: 2,
        author: "John D.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4,
        date: "2023-11-14",
        title: "Great food, authentic atmosphere",
        text: "Really enjoyed the authentic Italian atmosphere and the food was excellent. Service could have been a bit faster.",
        photos: [],
        helpful: 8,
        isHelpful: false
    } 
];


function initializeReviews() {
    renderReviews(reviews);
    updateOverallRating();
}

function renderReviews(reviewsToShow) {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return; // Guard clause if element doesn't exist
    
    grid.innerHTML = '';

    reviewsToShow.forEach(review => {
        const reviewCard = createReviewCard(review);
        grid.appendChild(reviewCard);
    });
}

function createReviewCard(review) {
    const div = document.createElement('div');
    div.className = 'review-card';
    div.innerHTML = `
        <div class="review-header">
            <img src="${review.avatar}" alt="${review.author}" class="reviewer-avatar">
            <div class="reviewer-info">
                <h3>${review.author}</h3>
                <div class="review-date">${formatDate(review.date)}</div>
            </div>
        </div>
        <div class="review-rating">
            ${generateStars(review.rating)}
        </div>
        <div class="review-content">
            <h4>${review.title}</h4>
            <p class="review-text ${review.text.length > 150 ? 'collapsed' : ''}">${review.text}</p>
            ${review.text.length > 150 ? '<span class="read-more">Read More</span>' : ''}
        </div>
        ${review.photos.length > 0 ? `
            <div class="review-photos">
                ${review.photos.map(photo => `
                    <img src="${photo}" alt="Review photo" class="review-photo">
                `).join('')}
            </div>
        ` : ''}
        <div class="review-footer">
            <button class="helpful-btn ${review.isHelpful ? 'active' : ''}" data-review-id="${review.id}">
                <i class="far fa-thumbs-up"></i>
                <span>Helpful (${review.helpful})</span>
            </button>
        </div>
    `;

    // Add event listeners for the specific review card
    attachReviewCardListeners(div, review);

    return div;
}

function attachReviewCardListeners(cardElement, review) {
    // Read More functionality
    const readMoreBtn = cardElement.querySelector('.read-more');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            const textElement = cardElement.querySelector('.review-text');
            textElement.classList.toggle('collapsed');
            this.textContent = textElement.classList.contains('collapsed') ? 'Read More' : 'Read Less';
        });
    }

    // Helpful button functionality
    const helpfulBtn = cardElement.querySelector('.helpful-btn');
    if (helpfulBtn) {
        helpfulBtn.addEventListener('click', function() {
            toggleHelpful(review.id);
        });
    }

    // Photo click functionality
    const photos = cardElement.querySelectorAll('.review-photo');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            showPhotoModal(this.src);
        });
    });
}

function setupEventListeners() {

    // Write Review Button

    const writeReviewBtn = document.getElementById('writeReviewBtn');

    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', function() {
            const modal = document.getElementById('reviewModal');
            if (modal) modal.style.display = 'block';
        });
    }


    // Close modal button
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            const modal = document.getElementById('reviewModal');
            if (modal) {
                modal.style.display = 'none';
                resetReviewForm();
            }
        });
    }

    // Star Rating Input
    const starContainer = document.querySelector('.star-rating-input');
    if (starContainer) {
        const stars = starContainer.querySelectorAll('i');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.dataset.rating;
                document.getElementById('ratingInput').value = rating;
                updateStarDisplay(stars, rating);
            });
        });
    }


    // Review Form Submit

    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleReviewSubmit();
        });
    }

    // Filter and Sort controls
    const sortSelect = document.getElementById('sortReviews');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortReviews);
    }

    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterAndSortReviews();
        });
    });

}

function toggleHelpful(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.isHelpful = !review.isHelpful;
        review.helpful += review.isHelpful ? 1 : -1;
        renderReviews(reviews);
    }
}

function updateStarDisplay(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.className = 'fas fa-star';
        } else {
            star.className = 'far fa-star';
        }
    });

}

function handleReviewSubmit() {

    const rating = document.getElementById('ratingInput').value;
    const title = document.getElementById('reviewTitle').value;
    const text = document.getElementById('reviewText').value;

    if (!rating) {

        alert('Please select a rating');

        return;

    }
    const newReview = {
        id: reviews.length + 1,
        author: "Anonymous User",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        rating: parseInt(rating),
        date: new Date().toISOString().split('T')[0],
        title: title,
        text: text,
        photos: [],
        helpful: 0,
        isHelpful: false
    };

    reviews.unshift(newReview);


    // Close modal and reset form

    const modal = document.getElementById('reviewModal');
    modal.style.display = 'none';
    resetReviewForm();


    // Re-render reviews

    renderReviews(reviews);
    updateOverallRating();

}

function resetReviewForm() {

    const form = document.getElementById('reviewForm');

    if (form) {

        form.reset();

        const stars = document.querySelectorAll('.star-rating-input i');

        stars.forEach(star => star.className = 'far fa-star');

        document.getElementById('ratingInput').value = '';

    }

}


// Make sure to call setupEventListeners when the page loads

document.addEventListener('DOMContentLoaded', function() {
    initializeReviews();
    setupEventListeners();

});

function generateStars(rating) {
    return Array(5).fill('').map((_, i) => 
        `<i class="${i < rating ? 'fas' : 'far'} fa-star"></i>`
    ).join('');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}


function filterAndSortReviews() {
    let filtered = [...reviews];
    const activeFilter = document.querySelector('.filter-tag.active');
    const sortSelect = document.getElementById('sortReviews');
    
    if (activeFilter && sortSelect) {
        const starFilter = activeFilter.dataset.stars;
        const sortBy = sortSelect.value;

        // Apply star filter
        if (starFilter !== 'all') {
            filtered = filtered.filter(review => review.rating === parseInt(starFilter));
        }

        // Apply sorting
        switch(sortBy) {
            case 'newest':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'most-helpful':
                filtered.sort((a, b) => b.helpful - a.helpful);
                break;
        }

        renderReviews(filtered);
    }
}

function updateOverallRating() {
    if (reviews.length === 0) return;

    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const totalReviews = reviews.length;

    const ratingElement = document.querySelector('.rating-summary h2');
    const reviewCountElement = document.querySelector('.rating-summary p');

    if (ratingElement) {
        ratingElement.textContent = averageRating.toFixed(1);
    }
    if (reviewCountElement) {
        reviewCountElement.textContent = `Based on ${totalReviews} reviews`;
    }
}

// Optional: Photo modal functionality
function showPhotoModal(src) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="photo-modal-content">
            <span class="close-photo-modal">&times;</span>
            <img src="${src}" alt="Review photo">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-photo-modal').addEventListener('click', function() {
        modal.remove();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}