// Healthy breakfast recipes database
const breakfastRecipes = [
    {
        name: "Overnight Chia Pudding with Berries",
        description: "A nutrient-dense breakfast packed with omega-3 fatty acids, fiber, and antioxidants. This make-ahead option is perfect for busy mornings.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ccircle cx='200' cy='125' r='80' fill='%23e9ecef'/%3E%3Ccircle cx='180' cy='110' r='15' fill='%23dc3545'/%3E%3Ccircle cx='220' cy='115' r='12' fill='%236f42c1'/%3E%3Ccircle cx='200' cy='140' r='10' fill='%23dc3545'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EChia Pudding with Berries%3C/text%3E%3C/svg%3E",
        calories: "320 cal",
        prepTime: "5 min prep + overnight",
        healthScore: "95/100",
        ingredients: [
            { name: "Chia seeds", amount: "3 tbsp" },
            { name: "Almond milk", amount: "1 cup" },
            { name: "Mixed berries", amount: "1/2 cup" },
            { name: "Honey", amount: "1 tbsp" },
            { name: "Vanilla extract", amount: "1/2 tsp" },
            { name: "Sliced almonds", amount: "2 tbsp" }
        ],
        instructions: [
            "Mix chia seeds, almond milk, honey, and vanilla in a jar",
            "Stir well and refrigerate overnight",
            "In the morning, stir the pudding",
            "Top with fresh berries and sliced almonds",
            "Enjoy your nutritious breakfast!"
        ],
        benefits: [
            { icon: "fas fa-heart", text: "Heart-healthy omega-3s" },
            { icon: "fas fa-leaf", text: "High in fiber" },
            { icon: "fas fa-bolt", text: "Sustained energy" }
        ]
    },
    {
        name: "Avocado Toast with Poached Egg",
        description: "A perfect combination of healthy fats, protein, and complex carbohydrates. This Instagram-worthy breakfast provides sustained energy and essential nutrients.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Crect x='100' y='80' width='200' height='120' rx='10' fill='%23d4a574'/%3E%3Cellipse cx='200' cy='140' rx='80' ry='40' fill='%2328a745'/%3E%3Ccircle cx='200' cy='120' r='25' fill='%23fff'/%3E%3Ccircle cx='200' cy='120' r='15' fill='%23ffc107'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EAvocado Toast with Egg%3C/text%3E%3C/svg%3E",
        calories: "380 cal",
        prepTime: "10 min",
        healthScore: "88/100",
        ingredients: [
            { name: "Whole grain bread", amount: "2 slices" },
            { name: "Ripe avocado", amount: "1 medium" },
            { name: "Eggs", amount: "2 large" },
            { name: "Lemon juice", amount: "1 tsp" },
            { name: "Sea salt", amount: "pinch" },
            { name: "Black pepper", amount: "to taste" },
            { name: "Cherry tomatoes", amount: "4-5 halved" }
        ],
        instructions: [
            "Toast the bread slices until golden brown",
            "Mash avocado with lemon juice, salt, and pepper",
            "Poach eggs in simmering water for 3-4 minutes",
            "Spread avocado mixture on toast",
            "Top with poached eggs and cherry tomatoes",
            "Season with additional salt and pepper if desired"
        ],
        benefits: [
            { icon: "fas fa-brain", text: "Brain-boosting fats" },
            { icon: "fas fa-dumbbell", text: "High-quality protein" },
            { icon: "fas fa-shield-alt", text: "Antioxidant-rich" }
        ]
    },
    {
        name: "Greek Yogurt Berry Parfait",
        description: "Layers of creamy Greek yogurt, fresh berries, and crunchy granola create a protein-rich breakfast that supports digestive health and muscle recovery.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Crect x='150' y='50' width='100' height='150' rx='10' fill='%23e9ecef'/%3E%3Crect x='155' y='160' width='90' height='30' fill='%23fff'/%3E%3Crect x='155' y='120' width='90' height='30' fill='%23dc3545'/%3E%3Crect x='155' y='80' width='90' height='30' fill='%23fff'/%3E%3Ccircle cx='175' cy='65' r='8' fill='%23dc3545'/%3E%3Ccircle cx='195' cy='65' r='8' fill='%236f42c1'/%3E%3Ccircle cx='225' cy='65' r='8' fill='%23dc3545'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EGreek Yogurt Parfait%3C/text%3E%3C/svg%3E",
        calories: "290 cal",
        prepTime: "5 min",
        healthScore: "92/100",
        ingredients: [
            { name: "Greek yogurt", amount: "1 cup" },
            { name: "Mixed berries", amount: "3/4 cup" },
            { name: "Granola", amount: "1/4 cup" },
            { name: "Honey", amount: "1 tbsp" },
            { name: "Chopped walnuts", amount: "2 tbsp" },
            { name: "Chia seeds", amount: "1 tsp" }
        ],
        instructions: [
            "Layer half the yogurt in a glass or bowl",
            "Add half the berries and a drizzle of honey",
            "Sprinkle with granola and nuts",
            "Repeat layers with remaining ingredients",
            "Top with chia seeds for extra nutrition",
            "Serve immediately for best texture"
        ],
        benefits: [
            { icon: "fas fa-bacteria", text: "Probiotic support" },
            { icon: "fas fa-dumbbell", text: "20g protein" },
            { icon: "fas fa-apple-alt", text: "Antioxidant boost" }
        ]
    },
    {
        name: "Quinoa Breakfast Bowl",
        description: "A protein-packed alternative to oatmeal, this quinoa bowl provides all essential amino acids along with fresh fruits and nuts for a complete breakfast.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ccircle cx='200' cy='125' r='90' fill='%23e9ecef'/%3E%3Ccircle cx='200' cy='125' r='70' fill='%23ffc107'/%3E%3Ccircle cx='170' cy='110' r='12' fill='%23dc3545'/%3E%3Ccircle cx='230' cy='115' r='10' fill='%236f42c1'/%3E%3Ccircle cx='200' cy='150' r='8' fill='%23dc3545'/%3E%3Crect x='185' y='90' width='30' height='15' rx='7' fill='%23795548'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EQuinoa Breakfast Bowl%3C/text%3E%3C/svg%3E",
        calories: "350 cal",
        prepTime: "15 min",
        healthScore: "90/100",
        ingredients: [
            { name: "Cooked quinoa", amount: "1/2 cup" },
            { name: "Almond milk", amount: "1/2 cup" },
            { name: "Banana", amount: "1 sliced" },
            { name: "Blueberries", amount: "1/4 cup" },
            { name: "Chopped almonds", amount: "2 tbsp" },
            { name: "Cinnamon", amount: "1/2 tsp" },
            { name: "Maple syrup", amount: "1 tbsp" }
        ],
        instructions: [
            "Warm cooked quinoa with almond milk",
            "Add cinnamon and maple syrup",
            "Transfer to a bowl",
            "Top with sliced banana and blueberries",
            "Sprinkle with chopped almonds",
            "Serve warm for best flavor"
        ],
        benefits: [
            { icon: "fas fa-seedling", text: "Complete protein" },
            { icon: "fas fa-leaf", text: "Gluten-free" },
            { icon: "fas fa-fire", text: "Metabolism boost" }
        ]
    },
    {
        name: "Green Smoothie Bowl",
        description: "A vibrant, nutrient-dense bowl packed with leafy greens, tropical fruits, and superfoods. Perfect for detoxing and energizing your morning.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ccircle cx='200' cy='125' r='90' fill='%23e9ecef'/%3E%3Ccircle cx='200' cy='125' r='70' fill='%2328a745'/%3E%3Ccircle cx='170' cy='100' r='8' fill='%23fff'/%3E%3Ccircle cx='190' cy='95' r='6' fill='%23fff'/%3E%3Ccircle cx='210' cy='100' r='7' fill='%23fff'/%3E%3Ccircle cx='230' cy='105' r='5' fill='%23fff'/%3E%3Crect x='180' y='140' width='40' height='8' rx='4' fill='%23795548'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EGreen Smoothie Bowl%3C/text%3E%3C/svg%3E",
        calories: "280 cal",
        prepTime: "8 min",
        healthScore: "96/100",
        ingredients: [
            { name: "Spinach", amount: "2 cups" },
            { name: "Frozen mango", amount: "1/2 cup" },
            { name: "Banana", amount: "1 medium" },
            { name: "Coconut milk", amount: "1/2 cup" },
            { name: "Chia seeds", amount: "1 tbsp" },
            { name: "Coconut flakes", amount: "2 tbsp" },
            { name: "Kiwi", amount: "1 sliced" }
        ],
        instructions: [
            "Blend spinach, mango, banana, and coconut milk until smooth",
            "Pour into a bowl",
            "Top with sliced kiwi in a pattern",
            "Sprinkle with chia seeds and coconut flakes",
            "Add any additional toppings you prefer",
            "Eat immediately while cold"
        ],
        benefits: [
            { icon: "fas fa-leaf", text: "Detoxifying greens" },
            { icon: "fas fa-bolt", text: "Natural energy" },
            { icon: "fas fa-shield-alt", text: "Immune support" }
        ]
    },
    {
        name: "Steel-Cut Oats with Nuts and Seeds",
        description: "Hearty steel-cut oats topped with a variety of nuts and seeds provide sustained energy, fiber, and healthy fats to keep you full all morning.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ccircle cx='200' cy='125' r='90' fill='%23e9ecef'/%3E%3Ccircle cx='200' cy='125' r='70' fill='%23d4a574'/%3E%3Cellipse cx='180' cy='110' rx='8' ry='12' fill='%23795548'/%3E%3Cellipse cx='220' cy='115' rx='6' ry='10' fill='%23795548'/%3E%3Ccircle cx='200' cy='140' r='4' fill='%23333'/%3E%3Ccircle cx='190' cy='145' r='3' fill='%23333'/%3E%3Ccircle cx='210' cy='135' r='3' fill='%23333'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3ESteel-Cut Oats%3C/text%3E%3C/svg%3E",
        calories: "340 cal",
        prepTime: "25 min",
        healthScore: "85/100",
        ingredients: [
            { name: "Steel-cut oats", amount: "1/2 cup" },
            { name: "Water", amount: "2 cups" },
            { name: "Almond milk", amount: "1/2 cup" },
            { name: "Walnuts", amount: "2 tbsp chopped" },
            { name: "Pumpkin seeds", amount: "1 tbsp" },
            { name: "Flaxseeds", amount: "1 tbsp" },
            { name: "Cinnamon", amount: "1/2 tsp" },
            { name: "Maple syrup", amount: "1 tbsp" }
        ],
        instructions: [
            "Bring water to boil, add steel-cut oats",
            "Reduce heat and simmer for 20-25 minutes, stirring occasionally",
            "Add almond milk and cinnamon in last 5 minutes",
            "Stir in maple syrup",
            "Top with chopped walnuts, pumpkin seeds, and flaxseeds",
            "Serve hot with additional toppings if desired"
        ],
        benefits: [
            { icon: "fas fa-heart", text: "Heart-healthy fiber" },
            { icon: "fas fa-battery-full", text: "Long-lasting energy" },
            { icon: "fas fa-brain", text: "Brain-boosting omega-3s" }
        ]
    },
    {
        name: "Sweet Potato Hash with Eggs",
        description: "A savory breakfast featuring roasted sweet potatoes, vegetables, and eggs. Rich in beta-carotene, fiber, and high-quality protein.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Crect x='120' y='80' width='160' height='100' rx='15' fill='%23e9ecef'/%3E%3Crect x='130' y='120' width='30' height='20' fill='%23ff6b35'/%3E%3Crect x='170' y='110' width='25' height='25' fill='%23ff6b35'/%3E%3Crect x='210' y='125' width='35' height='18' fill='%23ff6b35'/%3E%3Ccircle cx='180' cy='95' r='15' fill='%23fff'/%3E%3Ccircle cx='180' cy='95' r='10' fill='%23ffc107'/%3E%3Ccircle cx='220' cy='100' r='12' fill='%23fff'/%3E%3Ccircle cx='220' cy='100' r='8' fill='%23ffc107'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3ESweet Potato Hash%3C/text%3E%3C/svg%3E",
        calories: "390 cal",
        prepTime: "20 min",
        healthScore: "87/100",
        ingredients: [
            { name: "Sweet potato", amount: "1 large, diced" },
            { name: "Bell pepper", amount: "1/2 cup diced" },
            { name: "Red onion", amount: "1/4 cup diced" },
            { name: "Eggs", amount: "2 large" },
            { name: "Olive oil", amount: "2 tbsp" },
            { name: "Paprika", amount: "1 tsp" },
            { name: "Salt and pepper", amount: "to taste" },
            { name: "Fresh herbs", amount: "2 tbsp chopped" }
        ],
        instructions: [
            "Heat olive oil in a large skillet over medium heat",
            "Add diced sweet potato and cook for 8-10 minutes",
            "Add bell pepper and onion, cook 5 more minutes",
            "Season with paprika, salt, and pepper",
            "Make wells in the hash and crack eggs into them",
            "Cover and cook until eggs are set to your liking",
            "Garnish with fresh herbs before serving"
        ],
        benefits: [
            { icon: "fas fa-eye", text: "Vision support" },
            { icon: "fas fa-shield-alt", text: "Immune boosting" },
            { icon: "fas fa-leaf", text: "Anti-inflammatory" }
        ]
    },
    {
        name: "Protein Pancakes with Berries",
        description: "Fluffy pancakes made with protein powder and oats, topped with fresh berries. A muscle-building breakfast that tastes like a treat.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ccircle cx='200' cy='140' r='60' fill='%23ffc107'/%3E%3Ccircle cx='200' cy='110' r='50' fill='%23ffc107'/%3E%3Ccircle cx='200' cy='85' r='40' fill='%23ffc107'/%3E%3Ccircle cx='180' cy='70' r='6' fill='%23dc3545'/%3E%3Ccircle cx='200' cy='65' r='8' fill='%236f42c1'/%3E%3Ccircle cx='220' cy='70' r='7' fill='%23dc3545'/%3E%3Ccircle cx='210' cy='80' r='5' fill='%236f42c1'/%3E%3Ctext x='200' y='210' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EProtein Pancakes%3C/text%3E%3C/svg%3E",
        calories: "420 cal",
        prepTime: "12 min",
        healthScore: "83/100",
        ingredients: [
            { name: "Rolled oats", amount: "1/2 cup" },
            { name: "Protein powder", amount: "1 scoop vanilla" },
            { name: "Banana", amount: "1 mashed" },
            { name: "Eggs", amount: "2 large" },
            { name: "Almond milk", amount: "1/4 cup" },
            { name: "Baking powder", amount: "1/2 tsp" },
            { name: "Mixed berries", amount: "1/2 cup" },
            { name: "Greek yogurt", amount: "2 tbsp" }
        ],
        instructions: [
            "Blend oats into flour in a food processor",
            "Mix oat flour, protein powder, and baking powder",
            "In another bowl, whisk eggs, mashed banana, and almond milk",
            "Combine wet and dry ingredients",
            "Cook pancakes in a non-stick pan over medium heat",
            "Flip when bubbles form on surface",
            "Serve with berries and Greek yogurt"
        ],
        benefits: [
            { icon: "fas fa-dumbbell", text: "25g protein" },
            { icon: "fas fa-fire", text: "Metabolism boost" },
            { icon: "fas fa-heart", text: "Heart-healthy" }
        ]
    }
];

// Utility functions
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function getDailyRecommendation() {
    // Use date as seed for consistent daily recommendation
    const today = new Date();
    const dateString = today.toDateString();
    const seed = dateString.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0);
    
    const index = Math.abs(seed) % breakfastRecipes.length;
    return breakfastRecipes[index];
}

function getRandomRecommendation() {
    const randomIndex = Math.floor(Math.random() * breakfastRecipes.length);
    return breakfastRecipes[randomIndex];
}

function displayBreakfast(recipe) {
    // Add fade-in animation
    const breakfastContent = document.getElementById('breakfastContent');
    breakfastContent.classList.remove('fade-in');
    
    setTimeout(() => {
        // Update basic info
        document.getElementById('breakfastImage').src = recipe.image;
        document.getElementById('breakfastName').textContent = recipe.name;
        document.getElementById('breakfastDescription').textContent = recipe.description;
        document.getElementById('calories').textContent = recipe.calories;
        document.getElementById('prepTime').textContent = recipe.prepTime;
        document.getElementById('healthScore').textContent = recipe.healthScore;

        // Update ingredients
        const ingredientsList = document.getElementById('ingredientsList');
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const ingredientDiv = document.createElement('div');
            ingredientDiv.className = 'ingredient-item';
            ingredientDiv.innerHTML = `
                <span class="ingredient-name">${ingredient.name}</span>
                <span class="ingredient-amount">${ingredient.amount}</span>
            `;
            ingredientsList.appendChild(ingredientDiv);
        });

        // Update instructions
        const instructionsList = document.getElementById('instructionsList');
        instructionsList.innerHTML = '';
        recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        // Update benefits
        const benefitsList = document.getElementById('benefitsList');
        benefitsList.innerHTML = '';
        recipe.benefits.forEach(benefit => {
            const benefitDiv = document.createElement('div');
            benefitDiv.className = 'benefit-item';
            benefitDiv.innerHTML = `
                <i class="${benefit.icon}"></i>
                <span>${benefit.text}</span>
            `;
            benefitsList.appendChild(benefitDiv);
        });

        // Add fade-in animation
        breakfastContent.classList.add('fade-in');
    }, 100);
}

function showLoading(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.disabled = false;
    }, 1000);
}

// Initialize the application
function initApp() {
    // Set current date
    const currentDate = document.getElementById('currentDate');
    currentDate.textContent = formatDate(new Date());

    // Display daily recommendation
    const dailyRecommendation = getDailyRecommendation();
    displayBreakfast(dailyRecommendation);

    // Add refresh button functionality
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', () => {
        showLoading(refreshBtn);
        setTimeout(() => {
            const randomRecommendation = getRandomRecommendation();
            displayBreakfast(randomRecommendation);
        }, 1000);
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.stat-card, .recommendation-card').forEach(el => {
        observer.observe(el);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'r' || e.key === 'R') {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                refreshBtn.click();
            }
        }
    });

    // Add welcome message
    console.log('🥗 Welcome to Healthy Breakfast Hub!');
    console.log('💡 Tip: Press Ctrl+R (or Cmd+R) to get a new breakfast recommendation!');
    console.log('🌟 Enjoy your nutritious breakfast journey!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add service worker for offline functionality (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        breakfastRecipes,
        getDailyRecommendation,
        getRandomRecommendation,
        formatDate
    };
}
