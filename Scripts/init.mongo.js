db = new Mongo().getDB('menu');
db.items.remove({});

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
<<<<<<< HEAD
    {location: 'Tavola', item: 'Hummus Bowl', description: 'Served with freshly made pita, marinated olives, imported feta, cucumber, and tomato salad', price: 9},
    {location: 'Tavola', item: 'Falafel with Tahini Mediterranean Wrap', description: '', price: 9},
    {location: 'Tavola', item: 'Beef Kefta with Tzatiki Mediterranean Wrap', description: '', price: 9},
    {location: 'Tavola', item: 'Chicken Skewers with Romesco Mediterranean Wrap', description: '', price: 9},
    {location: 'Tavola', item: 'Rigatoni with Tomatoes, Spicy Fennel Sausage and Cream', description: 'Made to order featuring Barilla Pasta', price: 9},
    {location: 'Tavola', item: 'Linguini with Pesto and Cherry Tomatoes', description: 'Made to order featuring Barilla Pasta', price: 9},
    {location: 'Tavola', item: 'Chicken Broccoli Alfredo', description: 'Made to order featuring Barilla Pasta', price: 9},
    {location: 'Tavola', item: 'Daily Special Large Plate', description: '', price: 9.00},
    {location: 'Tavola', item: 'Tavola Salad', description: '', price: 9.00},
    {location: 'Tavola', item: 'Two Skewers or Falafel', description: '', price: 3.50},
    {location: 'Tavola', item: 'Extra Hummus', description: '', price: 3.50},
    {location: 'Tavola', item: 'Dolma or Olives', description: '', price: 2.50},
    {location: 'Tavola', item: 'Extra Pita', description: '', price: 1.50},
    {location: 'Tavola', item: 'Fountain Drink', description: '', price: 1.00},
    {location: 'Tavola', item: 'Four Cheese Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 6.00},
    {location: 'Tavola', item: 'Hand Crafted Daily Specials Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 7.00},
    {location: 'Tavola', item: 'Pepperoni Pizzeta', description: 'Fresh hand tossed dough made daily with authentic Italian flour, artisanal toppings, and imported tomatoes', price: 6.00},
    {location: 'Green', item: 'Garden Salad', description: 'Mixed Greens, Croutons, Sliced Almonds, Carrots, Cucumbers & Tomatoes with House Balsamic Vinaigrette', price: 6.50},
    {location: 'Green', item: 'Caesar Salad', description: 'Mixed Greens, Croutons & Shredded Parmesan with Organic Caesar Dressing', price: 6.50},
    {location: 'Green', item: 'Southwestern Salad', description: 'Mixed Greens, Roasted Corn, Black Beans, Fresh Avocado, Sliced Peppers & Onions with Organic Chipotle Ranch Dressing', price: 7.50},
    {location: 'Green', item: 'Blueberry Cheddar Salad', description: 'Mixed Greens, Cheddar Cheese, Fresh Blueberries, and Sliced Almonds with Blueberry Pomegranate Vinaigrette', price: 7.50},
    {location: 'Green', item: 'Antipasto Salad', description: 'Mixed Greens, Salami, Ham, Pepperoni, Provolone Cheese, Red Peppers, Kalamata Olives, Banana Peppers with White Balsamic Vinaigrette', price: 9.00},
    {location: 'Green', item: 'Buffalo Chicken Salad', description: 'Mixed Greens, Hand Battered Antibiotic Free Buffalo Chicken, Blue Cheese, Diced Celery, Grape Tomatoes with Ranch Dressing', price: 9.00},
    {location: 'Green', item: 'Cobb Salad', description: 'Mixed Greens, Diced Antibiotic Free Chicken, Nitrate Free Bacon, Local Cage Free Hard Boiled Egg, Blue Cheese, Fresh Avocado, & Grape Tomatoes with House Balsamic Vinaigrette', price: 9.00},
    {location: 'Green', item: 'Pesto Chicken Salad ', description: 'Mixed Greens, Pesto Grilled Chicken, Fresh Mozzarella, Grape Tomatoes, and Croutons', price: 9.00},
    {location: 'Green', item: 'Harvest Salad ', description: 'Chicken, Sweet Potato with Blueberry Pomegranate Vinaigrette', price: 8.50},
    {location: 'Green', item: 'Cage Free Local Egg', description: '', price: 0.75},
    {location: 'Green', item: 'Scarlett Butter Lettuce Substitution', description: '', price: 1.00},
    {location: 'Green', item: 'Extra Cheese', description: '', price: 1.00},
    {location: 'Green', item: 'Fresh Sliced Avocado', description: '', price: 1.50},
    {location: 'Green', item: 'Nitrate Free Bacon', description: '', price: 1.50},
    {location: 'Green', item: 'Antibiotic Free Chicken', description: 'Breast or Tender', price: 2.50},
    {location: 'Green', item: 'Meatless Chicken or Spiced Chickpeas', description: '', price: 2.50},
    {location: 'Green', item: 'ABF Hand Breaded Chicken Tenders', description: 'Choice of Buffalo, BBQ or Plain Tenders with Blue Cheese or Ranch Dressing. Served with Small Salad', price: 9.00},
    {location: 'Grill', item: 'Single Patty Burger', description: 'Beef, Turkey, Chicken & Veggie patty and American, Swiss, Cheddar, Blue or Pepper Jack cheese', price: 5},
    {location: 'Grill', item: 'Double Patty Burger', description: 'Beef, Turkey, Chicken & Veggie patty and American, Swiss, Cheddar, Blue or Pepper Jack', price: 7},
    {location: 'Grill', item: 'Caramelized Onions', description: '', price:  0.75},
    {location: 'Grill', item: 'Mushrooms', description: '', price:  0.75},
    {location: 'Grill', item: 'Applewood Bacon', description: '', price:  1.50},
    {location: 'Grill', item: 'Fresh Avocado', description: '', price:  1.50},
    {location: 'Grill', item: 'Lettuce Wrap Substitution', description: '', price: 0}
    {location: 'Grill', item: 'Gluten Free Bun Substitution', description: '', price: 0}
    {location: 'Grill', item: 'Burger Combo Upgrade', description: 'Add Fruit or Side Salad & a Fountain Drink', price:  3.00}
    {location: 'Grill', item: 'Chicken Tenders', description: '', price:  7.00},
    {location: 'Grill', item: 'Chicken & Fries Basket', description: '', price:  9.00},
    {location: 'Grill', item: 'French Fries', description: '', price:  3.00},
    {location: 'Grill', item: 'Onion Rings', description: '', price:  3.50},
    {location: 'Grill', item: 'Sweet Potato Fries', description: '', price:  3.50},
    {location: 'Grill', item: 'Side Garden Salad', description: '', price:  2.50},
    {location: 'Grill', item: 'Milkshakes', description: 'Vanilla, Chocolate, Strawberry, Special', price:  5.00},
    {location: 'Grill', item: 'Fountain Drink', description: '', price:  1.00},
    {location: 'Green', item: 'Fountain Drink', description: '', price: 1},
    {location: 'Paciugo', item: 'Perfecto', description: '2 flavors', price: 2.49},
    {location: 'Paciugo', item: 'Piccolo', description: '3 flavors', price: 3.99},
    {location: 'Paciugo', item: 'Medio', description: '4 flavors', price: 4.99},
    {location: 'Paciugo', item: 'Grande', description: '5 flavors', price: 5.99},
    {location: 'Paciugo', item: 'Waffle cone', description: '3 flavors', price: 4.99},
    {location: 'Paciugo', item: 'Frappe', description: 'Smooth Gelato Shake', price: 5.99},
    {location: 'Paciugo', item: 'Frizzante', description: 'Gelato blended with San Pellegrino water', price: 5.99},
    {location: 'Paciugo', item: 'Gelato Smoothie', description: 'Made with Fruit Sorbet', price: 5.99},
    {location: 'star', item: 'Green Curry Chicken', description: 'With chicken, zucchini, peas and bamboo shoots and served with White or Brown Rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {location: 'star', item: 'Jungle Curry', description: 'Tofu and veggies in Yellow Curry served with White or Brown Rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.00},
    {location: 'star', item: 'Thai BBQ Chicken', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {location: 'star', item: '5 Spice Tofu', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {location: 'star', item: 'Orange Chicken', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price: 8.50},
    {location: 'star', item: 'Wok Special', description: 'Served with White or Brown rice and your choice of daily vegetables or Asian Slaw with Sauce', price:  8.50},
    {location: 'star', item: 'Roasted Ginger Broth Pho', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu',  price: 8.00},
    {location: 'star', item: 'Chicken Broth', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu',  price: 8.50},
    {location: 'star', item: 'Spicy Thai Coconut Curry Broth', description: 'Comforting Noodle Soup with Choice of Toppings, herbs & lime. Choice of chicken, beef or tofu', price: 8.50},
    {location: 'star', item: 'Bibimbap', description: 'Bulgogi (Korean style bbq beef), Korean spinach, pickled carrots, kimchi, mushroom, and zucchini, served on top of steamed white rice and topped with a fried egg', price: 10},
    {location: 'star', item: 'Pot Sticker', description: '', price: 1.25},
    {location: 'star', item: 'Spring Roll', description: '', price: 1.25},
    {location: 'star', item: 'Brown Rice or White Rice', description: '', price: 1.50},
    {location: 'star', item: 'Sesame Asian Greens', description: '', price: 2.50},
    {location: 'star', item: 'Fountain Drink', description: '', price: 1.00},
    {location: 'wasabi', item: 'Teriyaki Don', description: 'Choice of Chicken, Beef or Salmon in teriyaki sauce in a bowl of rice', price: 9.00},
    {location: 'wasabi', item: 'Katsu Don', description: 'Choice of Chicken or Pork', price: 9.00},
    {location: 'wasabi', item: 'Blue Wall Don', description: 'Beef Bulgogi, Vegetable Tempura & Broccoli', price: 10.00},
    {location: 'wasabi', item: 'Teppanyaki', description: 'Served with Steamed Rice or Fried Rice and Stir-fried Vegetables. Choice of Chicken or Beef', price: 9.00},
    {location: 'wasabi', item: 'Paradise Roll', description: 'Shrimp Tempura, Crab Meat & Cucumber Roll Wrapped with Salmon & Avocado Topped with Spicy Mayo, Tempura Crunch & Eel Sauce', price: 10.00},
    {location: 'wasabi', item: 'Rainbow Roll', description: 'California Roll topped with assorted Raw Fish, Avocado, & Masago Japanese Mayo', price: 10.00},
    {location: 'wasabi', item: 'Fantastic Roll', description: 'Smoked salmon, Crab Meat & Cucumber topped with Tuna & Avocado', price: 10.00},
    {location: 'wasabi', item: 'Manhattan Roll', description: 'Shrimp roll topped with Spicy Crab Meat & Masago', price: 9.00},
    {location: 'wasabi', item: 'Oishi Roll', description: 'Shrimp tempura, Crab Meat, Tuna, Salmon, Albacore Tuna, Avocado & Masago topped with Spicy Mayo & Tempura Crunch', price: 10.00},
    {location: 'wasabi', item: 'Tiger Roll', description: 'Shrimp Tempura Roll with Tuna and Salmon, Topped with Avocad', price: 10.00},
    {location: 'wasabi', item: 'Alaskan Roll', description: 'Smoked Salmon, Asparagus, Cucumber topped with Masago', price: 7.50},
    {location: 'wasabi', item: 'California Roll', description: 'Crab Meat, Cucumber, Avocado', price: 6.50},
    {location: 'wasabi', item: 'Vegetable Roll', description: 'Asparagus, Carrots, Cucumber, Avocado', price: 6.50},
    {location: 'wasabi', item: 'Sweet Potato Tempura Roll', description: 'Sweet Potato Tempura, Cucumber', price: 6.50},
    {location: 'wasabi', item: 'Spicy Tuna Roll', description: 'Spicy Tuna, Cucumber, Tempura Crunch', price: 7.00},
    {location: 'wasabi', item: 'Philadelphia Roll', description: 'Smoked Salmon, Cream Cheese, Cucumber', price: 7.50},
    {location: 'wasabi', item: 'Spicy Tuna Bowl', description: 'Spicy Tuna, Spring Mix, Avocado, Sushi Rice', price: 10.00},
    {location: 'wasabi', item: 'Poke Bowl', description: 'Marinated Tuna, Spring Mix, Pickled Cucumber, Mango, Avocado, Quinoa, and Sushi Rice ', price: 10.00},
    {location: 'wasabi', item: 'Miso Soup', description: '', price: 2.00},
    {location: 'wasabi', item: 'Edamame', description: '', price: 3.25},
    {location: 'wasabi', item: 'Seaweed Salad', description: '', price: 3.25},
    {location: 'wasabi', item: 'Fried Rice', description: '', price: 3.75},
    {location: 'wasabi', item: 'Fountain Drink', description: '', price: 1.00},
    {location: 'tamales', item: 'Grilled Marinated Beef', description: '', price: 8.00},
    {location: 'tamales', item: 'Grilled Marinated Chicken', description: '', price: 8.00},
    {location: 'tamales', item: 'Pork Carnita', description: '', price: 8.00},
    {location: 'tamales', item: 'Re-Fried Lentils', description: '', price: 7.00},
    {location: 'tamales', item: 'Extra Cheese', description: '', price: 1.00},
    {location: 'tamales', item: 'Extra Meat', description: '', price: 2.50},
    {location: 'tamales', item: 'Chips and Salsa', description: '', price: 2.00},
    {location: 'tamales', item: 'Guacamole', description: '', price: 1.50},
    {location: 'tamales', item: 'Fresh Avocado', description: '', price: 1.50},
    {location: 'tamales', item: 'Fresh Salsa', description: '', price: 0.50},
    {location: 'tamales', item: 'Agua Fresca', description: '', price: 2.95},
    {location: 'tamales', item: 'Fountain Drink', description: '', price: 1.00},
    {location: 'tamales', item: 'Combo Upgrade', description: 'Add Fresh Homemade Chips or Fruit & a Fountain Drink', price: 2.00},
    // ])
// db.items.insertMany([
//  {location: 'Bamboo', item: 'Dim Sum Platter', price: 9.00},
//  {location: 'Bamboo', item: 'Individual Plate', price: 3.50},
//  {location: 'Bamboo', item: 'Lunch and Dinner Hot Plate Special', price: 9.00},
//  {location: 'Bamboo', item: 'Fountain Drink', price: 1.00},
//  {location: 'Deli', item : "Chicken Bacon Ranch Ciabatta", price : 8 },
// {location: 'Deli', item : "Buffalo Chicken Ciabatta", price : 8 },
// {location: 'Deli', item : "Steak and Cheese Ciabatta", price : 8 },
// {location: 'Deli', item : "Chicken and Pesto", price : 8 },
// {location: 'Deli', item : "Valley Chicken Sandwich", price : 8 },
// {location: 'Deli', item : "Tavola Veggie Sandwich", price : 6.75 },
// {location: 'Deli', item : "Spicy Roast Beef Sandwich", price : 7 },
// {location: 'Deli', item : "Italian Cold Cut Sandwich", price : 8 },
// {location: 'Deli', item : "Caprese Sandwich", price : 7 },
// {location: 'Deli', item : "Classic Grinder", price : 7 },
// {location: 'Deli', item : "Three Cheese and Spinach Hot Sandwich", price : 7.25 },
// {location: 'Deli', item : "The BLT", price : 6 },
// {location: 'Deli', item : "Blue Wall Club Hot Sandwich", price : 8 },
// {location: 'Deli', item : "Chicken Parmesan Hot Sandwich", price : 8 },
// {location: 'Deli', item : "Extra Cheese", price : 1.5 },
// {location: 'Deli', item : "Avocado", price : 2 },
// {location: 'Deli', item : "Bacon", price : 2 },
// {location: 'Deli', item : "Fresh Hummus", price : 3 },
// {location: 'Deli', item : "Extra Meat", price : 3 },
// {location: 'Deli', item : "Combo Upgrade", price : 2 },
=======
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
>>>>>>> 4c40f321967ed851f35e52e590ef764b25469b3d
]);
db.items.createIndex({ location: 1 });
db.items.createIndex({ item: 1 });
db.items.createIndex({ description: 1 });
db.items.createIndex({ price: 1 });
db.cart.createIndex({ location: 1 });
db.cart.createIndex({ item: 1 });
db.cart.createIndex({ description: 1 });
db.cart.createIndex({ price: 1 });