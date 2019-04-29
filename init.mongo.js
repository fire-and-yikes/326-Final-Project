db = new Mongo().getDB('menu');
db.items.remove({});
db.cart.remove({});
db.items.insertMany([
 {location: 'Bamboo', item: 'Dim Sum Platter', description: 'Six pieces of assorted dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Individual Plate', description: 'Two pieces of dim sum', price: 3.50},
 {location: 'Bamboo', item: 'Lunch and Dinner Hot Plate Special', description: 'Hot plate with two pieces of dim sum', price: 9.00},
 {location: 'Bamboo', item: 'Fountain Drink', description: '', price: 1.00},
 {location: 'Deli', item : "Chicken Bacon Ranch Ciabatta", description: 'Roasted chicken breast, cheddar cheese, bacon, and ranch dressing, with local greens and sliced tomato', price : 8 },
{location: 'Deli', item : "Buffalo Chicken Ciabatta", description: 'Breaded chicken, house-made buffalo sauce, and crumbled blue cheese, with local greens and sliced tomato', price : 8 },
{location: 'Deli', item : "Steak and Cheese Ciabatta", description: 'Shaved steak, onions, peppers, cheddar cheese, and garlic aioli, with local greens and sliced tomato', price : 8 },
{location: 'Deli', item : "Chicken and Pesto", description: 'Roasted chicken breast, pesto, and fresh mozzarella, with local greens and sliced tomato', price : 8 },
{location: 'Deli', item : "Valley Chicken Sandwich", description: 'Roasted chicken breast, ham, Swiss cheese, spicy mustard, and pickles, with local greens and sliced tomato on a signature roll', price : 8 },
{location: 'Deli', item : "Tavola Veggie Sandwich", description: 'Fresh hummus, olives, roasted red peppers, and feta cheese, with local greens and sliced tomato on 12-grain bread', price : 6.75 },
{location: 'Deli', item : "Spicy Roast Beef Sandwich", description: 'House roast beef, provolone cheese, banana peppers, and creamy horseradish, with local greens and sliced tomato on sourdough', price : 7 },
{location: 'Deli', item : "Italian Cold Cut Sandwich", description: 'Pepperoni, salami, ham, provolone, roasted red peppers, and pesto, with local greens and sliced tomato on a baguette', price : 8 },
{location: 'Deli', item : "Caprese Sandwich", description: 'Fresh mozzarella and pesto, with local greens and sliced tomato on a baguette', price : 7 },
{location: 'Deli', item : "Classic Grinder", description: 'Choice of ham, turkey, or house roast beef, with local greens and sliced tomato on a signature roll or 12-grain bread', price : 7 },
{location: 'Deli', item : "Three Cheese and Spinach Hot Sandwich", description: 'Melted Swiss, provolone, and cheddar cheeses with baby spinach and garlic aioli on a baguette', price : 7.25 },
{location: 'Deli', item : "The BLT", description: 'Double portion of bacon with mixed greens, tomato, and mayo on sourdough', price : 6 },
{location: 'Deli', item : "Blue Wall Club Hot Sandwich", description: 'House roasted turkey, bacon, cheddar cheese, mixed greens, tomato, and garlic aioli on sourdough', price : 8 },
{location: 'Deli', item : "Chicken Parmesan Hot Sandwich", description: 'Breaded chicken, tomato sauce, and provolone and mozzarella cheeses on a signature roll', price : 8 },
{location: 'Deli', item : "Extra Cheese", price : 1.5 },
{location: 'Deli', item : "Avocado", price : 2 },
{location: 'Deli', item : "Bacon", price : 2 },
{location: 'Deli', item : "Fresh Hummus", price : 3 },
{location: 'Deli', item : "Extra Meat", price : 3 },
{location: 'Deli', item : "Combo Upgrade", price : 2 },
{location: 'Deli', item: 'Fountain Drink', description: '', price: 1.00},
{location: 'Green', item: 'Garden Salad', description: 'Mixed greens, croutons, sliced almonds, carrot, cucumbers, and tomatoes with balsamic vinaigrette', price: 6.5},
{location: 'Green', item: "Caesar Salad", description: "Mixed greens, croutons & Parmesan cheese with Caesar Dressing", price: 6.5},
{location: 'Green', item: "Southwestern Salad", description: "Mixed greens, roasted corn, black beans, avocado, sliced peppers & onions with chipotle ranch", price: 7.5},
{location: 'Green', item: "Blueberry Cheddar Salad", description: 'Mixed greens, cheddar cheese, blueberries, and sliced almonds with blueberry pomegranate vinaigrette', price: 7.5},
{location: 'Green', item: "Antipasto Salad", description: "Mixed greens, salami, ham, pepperoni, provolone cheese, red peppers, kalamata olives, banana peppers, and white balsamic vinaigrette", price: 9},
{location: "Green", item: "Buffalo Chicken Salad", description: "Mixed greens, hand battered buffalo chicken, blue cheese, diced celery, grape tomatoes, and ranch dressing", price: 9},
{location: "Green", item: "Cobb Salad", description: "Mixed greens, diced chicken, bacon, hard boiled egg, blue cheese, avocado, and grape tomatoes with balsamic vinaigrette", price: 9},
{location: "Green", item: "Pesto Chicken Salad", description: "Mixed greens, pesto grilled chicken, mozzarella cheese, grape tomatoes, and croutons", price: 9},
{location: "Green", item: "Harvest Salad", description: "Spinach, almonds, avocado, spiced chickpeas, quinoa, meatless chicken, sweet potato, and blueberry pomegranate vinaigrette", price: 8.5},
{location: "Green", item: "Egg", description: "", price: 0.75},
{location: "Green", item: "All Butter Lettuce", description: "", price: 1},
{location: "Green", item: "Extra Cheese", description: "", price: 1},
{location: "Green", item: "Avocado", description: "", price: 1.5},
{location: "Green", item: "Bacon", description: "", price: 1.5},
{location: "Green", item: "Chicken Breast", description: "", price: 2.5},
{location: "Green", item: "Chicken Tender", description: "", price: 2.5},
{location: "Green", item: "Meatless Chicken", description: "", price: 2.5},
{location: "Green", item: "Spiced Chickpeas", description: "", price: 2.5},
{location: "Green", item: "Chicken Tenders Combo", description: "Chicken tenders with a small salad", price: 9},
{location: "Green", item: "Fountain Drink", description: "", price: 1},
{location: "Green", item: "Make it a Wrap", description: "Turn any salad into a wrap", price: 0},
]);
db.items.createIndex({ location: 1 });
db.items.createIndex({ item: 1 });
db.items.createIndex({ description: 1 });
db.items.createIndex({ price: 1 });
<<<<<<< HEAD



=======
db.cart.createIndex({ location: 1 });
db.cart.createIndex({ item: 1 });
db.cart.createIndex({ description: 1 });
db.cart.createIndex({ price: 1 });
>>>>>>> ce9daf54a23beb881748a7160c1cd5a328565c3e