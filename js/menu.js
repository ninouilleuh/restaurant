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
    },
    {
        id: 6,
        name: "Melanzane alla Parmigiana (Vegan)",
        category: "primipiatti",
        price: 15.00,
        description: "Layers of grilled eggplant, vegan cheese, and tomato sauce baked to perfection.",
        image: "https://cdn.pixabay.com/photo/2020/07/23/12/41/delicious-5431267_1280.jpg",
        dietary: ["vegan", "gluten-free"],
        allergens: [],
        ingredients: ["eggplant", "vegan cheese", "tomato sauce", "basil", "olive oil"],
        chefNote: "A vegan twist on a classic Italian comfort dish."
    },
    {
        id: 7,
        name: "Insalata di Quinoa e Ceci",
        category: "antipasti",
        price: 10.00,
        description: "Fresh salad with quinoa, chickpeas, cherry tomatoes, cucumber, and lemon dressing.",
        image: "https://cdn.pixabay.com/photo/2017/01/26/21/33/quinoa-2011771_1280.jpg",
        dietary: ["vegan", "gluten-free"],
        allergens: [],
        ingredients: ["quinoa", "chickpeas", "cherry tomatoes", "cucumber", "lemon", "olive oil"],
        chefNote: "Light, refreshing, and packed with plant-based protein."
    },
    {
        id: 8,
        name: "Pasta al Pesto di Pistacchio (Vegan)",
        category: "primipiatti",
        price: 16.00,
        description: "Spaghetti tossed in a creamy vegan pistachio pesto sauce.",
        image: "https://cdn.pixabay.com/photo/2018/10/27/22/11/pasta-3777541_1280.jpg",
        dietary: ["vegan"],
        allergens: ["nuts", "gluten"],
        ingredients: ["spaghetti", "pistachios", "basil", "olive oil", "garlic", "nutritional yeast"],
        chefNote: "A Sicilian specialty made fully plant-based."
    },
    {
        id: 9,
        name: "Zuppa di Lenticchie",
        category: "antipasti",
        price: 9.00,
        description: "Hearty lentil soup with carrots, celery, and tomatoes.",
        image: "https://cdn.pixabay.com/photo/2021/01/20/03/30/lentil-5932977_1280.jpg",
        dietary: ["vegan", "gluten-free"],
        allergens: [],
        ingredients: ["lentils", "carrots", "celery", "tomatoes", "onion", "herbs"],
        chefNote: "A rustic, warming soup perfect for any season."
    },
    {
        id: 10,
        name: "Polenta con Funghi",
        category: "primipiatti",
        price: 13.00,
        description: "Creamy corn polenta topped with sautéed wild mushrooms and fresh herbs.",
        image: "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg",
        dietary: ["vegetarian", "gluten-free"],
        allergens: ["dairy"],
        ingredients: ["cornmeal", "mushrooms", "butter", "parmesan", "herbs"],
        chefNote: "A rustic Northern Italian favorite, naturally gluten-free."
    },
    {
        id: 11,
        name: "Insalata Caprese",
        category: "antipasti",
        price: 9.50,
        description: "Fresh mozzarella, ripe tomatoes, basil, olive oil, and balsamic glaze.",
        image: "https://cdn.pixabay.com/photo/2018/08/29/09/21/dish-3639491_1280.jpg",
        dietary: ["vegetarian", "gluten-free"],
        allergens: ["dairy"],
        ingredients: ["mozzarella", "tomatoes", "basil", "olive oil", "balsamic glaze"],
        chefNote: "A classic Italian salad, simple and gluten-free."
    },
    {
        id: 12,
        name: "Minestrone Verde (Vegan)",
        category: "antipasti",
        price: 8.50,
        description: "A hearty green vegetable soup with zucchini, spinach, peas, and beans.",
        image: "https://cdn.pixabay.com/photo/2023/05/27/13/49/soup-8021564_1280.jpg",
        dietary: ["vegan", "gluten-free"],
        allergens: [],
        ingredients: ["zucchini", "spinach", "peas", "beans", "vegetable broth", "herbs"],
        chefNote: "A light, healthy, and gluten-free soup."
    },
    {
        id: 13,
        name: "Pollo alla Griglia",
        category: "secondipiatti",
        price: 17.00,
        description: "Grilled chicken breast marinated with lemon, rosemary, and olive oil. Served with roasted vegetables.",
        image: "https://cdn.pixabay.com/photo/2017/06/26/13/58/chicken-2443901_1280.jpg",
        dietary: ["gluten-free"],
        allergens: [],
        ingredients: ["chicken breast", "lemon", "rosemary", "olive oil", "vegetables"],
        chefNote: "Simple, flavorful, and gluten-free."
    },
    {
        id: 14,
        name: "Frittelle di Zucchine",
        category: "antipasti",
        price: 8.50,
        description: "Crispy zucchini fritters served with a tangy vegan aioli.",
        image: "https://th.bing.com/th/id/OIP.RutVjXwT2SOuVj95nhQVhwHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        dietary: ["vegan"],
        allergens: ["gluten"],
        ingredients: ["zucchini", "flour", "herbs", "vegan aioli"],
        chefNote: "A light and crunchy start to your meal."
    },
    {
        id: 15,
        name: "Arancini di Riso",
        category: "antipasti",
        price: 9.00,
        description: "Golden fried risotto balls filled with peas and vegan cheese.",
        image: "https://th.bing.com/th/id/OIP.-tcIknC1IQNZlQVJZgvtZAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        dietary: ["vegan"],
        allergens: ["gluten"],
        ingredients: ["rice", "peas", "vegan cheese", "breadcrumbs"],
        chefNote: "A Sicilian street food favorite, made plant-based."
    },
    {
        id: 16,
        name: "Caponata Siciliana",
        category: "antipasti",
        price: 8.00,
        description: "Sweet and sour eggplant stew with tomatoes, olives, and capers. Served with toasted bread.",
        image: "https://th.bing.com/th/id/OIP.7MqUCKXh4f6CdogLsrAkYwHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        dietary: ["vegan"],
        allergens: ["gluten"],
        ingredients: ["eggplant", "tomatoes", "olives", "capers", "celery", "onion", "bread"],
        chefNote: "A classic Sicilian antipasto bursting with Mediterranean flavors."
    },
    {
        id: 17,
        name: "Carciofi alla Romana",
        category: "antipasti",
        price: 10.00,
        description: "Roman-style artichokes braised with herbs, garlic, and olive oil.",
        image: "https://www.deliciousitaly.com/media/k2/items/cache/2e2843e2ade511d88df42c8a44a73c77_XL.jpg",
        dietary: ["vegan", "gluten-free"],
        allergens: [],
        ingredients: ["artichokes", "mint", "parsley", "garlic", "olive oil"],
        chefNote: "Tender artichokes, a springtime Roman specialty."
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

