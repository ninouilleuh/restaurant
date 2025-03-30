// Sample menu data structure
const menuItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "primipiatti",
        price: 14.99,
        description: "Fresh tomatoes, mozzarella, and basil",
        image: "https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dietary: ["vegetarian"],
        allergens: ["gluten", "dairy"],
        ingredients: ["tomatoes", "mozzarella", "basil", "olive oil"],
        chefNote: "Our most popular pizza, made with San Marzano tomatoes"
    },
    {
        id: 2,
        name: "Bruschetta al Pomodoro",
        category: "antipasti",
        price: 8.00,
        description: "Grilled bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
        dietary: ["vegetarian"],
        allergens: ["gluten"],
        ingredients: ["bread", "tomatoes", "garlic", "basil", "olive oil"],
        chefNote: "A classic Italian starter with a burst of fresh flavors"
    },
    {
        id: 3,
        name: "Carpaccio di Manzo",
        category: "antipasti",
        price: 14.00,
        description: "Thinly sliced raw beef served with arugula, parmesan, and a drizzle of truffle oil",
        image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
        dietary: ["gluten-free"],
        allergens: ["dairy"],
        ingredients: ["beef", "arugula", "parmesan", "truffle oil"],
        chefNote: "An elegant dish that combines rich and earthy flavors"
    },
    {
        id: 4,
        name: "Spaghetti alla Carbonara",
        category: "primipiatti",
        price: 16.00,
        description: "Classic Roman pasta made with eggs, pecorino cheese, guanciale, and black pepper",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
        dietary: ["contains pork", "gluten"],
        allergens: ["gluten", "dairy", "egg"],
        ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
        chefNote: "A timeless favorite that embodies the essence of Roman cuisine"
    },
    {
        id: 5,
        name: "Risotto ai Funghi Porcini",
        category: "primipiatti",
        price: 18.00,
        description: "Creamy risotto featuring porcini mushrooms and parmesan",
        image: "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dietary: ["vegetarian"],
        allergens: ["gluten", "dairy"],
        ingredients: ["arborio rice", "porcini mushrooms", "parmesan", "vegetable broth", "butter"],
        chefNote: "A hearty and comforting dish for mushroom enthusiasts"
    }
];

// Initialize the menu
document.addEventListener('DOMContentLoaded', function() {
    renderMenu(menuItems);
    initializeFilters();
});

// Render menu items
function renderMenu(items) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = createMenuItem(item);
        menuGrid.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <div class="item-content">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-description">${item.description}</p>
            <div class="item-footer">
                <span class="item-price">€${item.price.toFixed(2)}</span>
                <div class="dietary-tags">
                    ${item.dietary.map(tag => `<span class="dietary-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    // Add click event for modal
    div.addEventListener('click', () => showDishDetails(item));
    return div;
}

// Show dish details modal
function showDishDetails(item) {
    const modal = document.getElementById('dishModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="dish-details">
            <img src="${item.image}" alt="${item.name}" class="dish-image">
            <div class="dish-info">
                <h2>${item.name}</h2>
                <p class="dish-description">${item.description}</p>
                <p class="chef-note"><em>Chef's Note: ${item.chefNote}</em></p>
                <div class="allergens">
                    <h3>Allergens</h3>
                    <div class="allergen-list">
                        ${item.allergens.map(allergen => 
                            `<span class="allergen-tag">${allergen}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <p>${item.ingredients.join(', ')}</p>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';


    // Add event listeners for closing modal

    const closeBtn = modal.querySelector('.close-modal');

    // Close button click handler

    const closeBtnHandler = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        modal.style.display = 'none';
        closeBtn.removeEventListener('click', closeBtnHandler);
    };


    // Add click event listener to close button

    closeBtn.addEventListener('click', closeBtnHandler);

}

// Initialize filters and sorting
function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const dietaryFilter = document.getElementById('dietaryFilter');
    const sortBy = document.getElementById('sortBy');

    function filterAndSortMenu() {
        let filteredItems = [...menuItems];

        // Apply category filter
        if (categoryFilter.value !== 'all') {
            filteredItems = filteredItems.filter(item => 
                item.category === categoryFilter.value
            );
        }

        // Apply dietary filter
        if (dietaryFilter.value !== 'all') {
            filteredItems = filteredItems.filter(item => 
                item.dietary.includes(dietaryFilter.value)
            );
        }

        // Apply sorting
        switch(sortBy.value) {
            case 'price-asc':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        renderMenu(filteredItems);
    }

    // Add event listeners
    categoryFilter.addEventListener('change', filterAndSortMenu);
    dietaryFilter.addEventListener('change', filterAndSortMenu);
    sortBy.addEventListener('change', filterAndSortMenu);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('dishModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

