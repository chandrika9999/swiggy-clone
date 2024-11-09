import { Injectable } from '@angular/core';

interface RestaurantDetails{
    res_id: number
    name: string;
    cuisine: string;
    menu: Item[];
    image: string;
}


interface Item{
  item_id: number;
  name: string;
  rating: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  restaurants: any[] = [
    { 
      res_id: 1, 
      name: 'KFC', 
      cuisine: 'Fast Food', 
      location: 'Banjara Hills', 
      rating: 4.7, 
      image: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/KFC_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1693487107',
      menu: {
        veg: [
          { item_id: 5, name: 'French Fries', rating: '4.2', description: 'Crispy and golden French fries served hot and fresh.', price: 90 }
        ],
        nonVeg: [
          { item_id: 1, name: 'Zinger Burger', rating: '4.5', description: 'A spicy, crispy chicken patty served with fresh lettuce and mayonnaise.', price: 180 },
          { item_id: 2, name: 'Fried Chicken', rating: '4.7', description: 'Crispy fried chicken pieces seasoned with KFC’s secret blend of spices.', price: 220 },
          { item_id: 3, name: 'Chicken Popcorn', rating: '4.6', description: 'Delicious, bite-sized pieces of chicken, perfect for dipping in sauces.', price: 120 },
          { item_id: 4, name: 'Chicken Bucket', rating: '4.8', description: 'A bucket of crispy fried chicken pieces, great for sharing with friends.', price: 850 }
        ]
      }
    },
    { 
      res_id: 2, 
      name: 'McDonald\'s', 
      cuisine: 'Fast Food', 
      location: 'Madhapur', 
      rating: 4.3, 
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/5dollar_MealDeal_COM_1PUB_Meal:1-column-desktop?resmode=sharp2',
      menu: {
        veg: [
          { item_id: 4, name: 'Fries', rating: '4.1', description: 'Golden and crispy fries served with your choice of dipping sauces.', price: 100 },
          { item_id: 5, name: 'Apple Pie', rating: '4.2', description: 'Warm apple pie with a flaky crust, perfect for dessert.', price: 60 }
        ],
        nonVeg: [
          { item_id: 1, name: 'Big Mac', rating: '4.6', description: 'A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.', price: 250 },
          { item_id: 2, name: 'McChicken', rating: '4.4', description: 'Crispy chicken fillet topped with fresh lettuce and mayo in a soft bun.', price: 200 },
          { item_id: 3, name: 'McNuggets', rating: '4.3', description: 'Crispy chicken nuggets served with a variety of sauces.', price: 150 }
        ]
      }
    },
    { 
      res_id: 3, 
      name: 'Subway', 
      cuisine: 'Sandwiches', 
      location: 'Jubilee Hills', 
      rating: 4.2, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1nbWs7wQhpqZ6TcDLLBEt7H3BNvVNAAPWw&s',
      menu: {
        veg: [
          { item_id: 1, name: 'Veggie Delight', rating: '4.3', description: 'Fresh vegetables in a soft sub with your choice of sauces.', price: 180 }
        ],
        nonVeg: [
          { item_id: 2, name: 'Chicken Teriyaki', rating: '4.5', description: 'Tender chicken marinated in a sweet and savory Teriyaki sauce.', price: 250 },
          { item_id: 3, name: 'Tuna Sandwich', rating: '4.4', description: 'A classic tuna salad with crunchy veggies, all packed in fresh bread.', price: 220 },
          { item_id: 4, name: 'Italian BMT', rating: '4.6', description: 'A hearty sandwich with pepperoni, salami, and ham, topped with fresh veggies.', price: 300 },
          { item_id: 5, name: 'Subway Melt', rating: '4.7', description: 'A combination of turkey, ham, and melted cheese, served warm.', price: 280 }
        ]
      }
    },
    { 
      res_id: 4, 
      name: 'Domino\'s Pizza', 
      cuisine: 'Pizza', 
      location: 'Hitech City', 
      rating: 4.4, 
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/1236c834-bb76-4d91-a2ed-6d5671a088f9_74453.jpg',
      menu: {
        veg: [
          { item_id: 2, name: 'Veggie Supreme', rating: '4.5', description: 'A delicious pizza loaded with veggies like peppers, mushrooms, and olives.', price: 320 },
          { item_id: 3, name: 'Cheese Burst Pizza', rating: '4.7', description: 'A pizza with extra cheese stuffed in the crust for an indulgent experience.', price: 380 },
          { item_id: 4, name: 'Garlic Breadsticks', rating: '4.4', description: 'Crispy breadsticks brushed with garlic butter and served with marinara sauce.', price: 150 },
          { item_id: 5, name: 'Chocolate Lava Cake', rating: '4.3', description: 'A rich, molten chocolate cake with a gooey center, served warm.', price: 180 }
        ],
        nonVeg: [
          { item_id: 1, name: 'Pepperoni Pizza', rating: '4.6', description: 'A classic pizza topped with pepperoni and mozzarella cheese.', price: 350 }
        ]
      }
    },
    { 
      res_id: 5, 
      name: 'Burger King', 
      cuisine: 'Fast Food, American', 
      location: 'Gachibowli', 
      rating: 4.1, 
      image: 'https://b.zmtcdn.com/data/pictures/chains/8/6506108/c8008523810583087401ff292c1763a3.jpg?fit=around|960:500&crop=960:500;*,*',
      menu: {
        veg: [
          { item_id: 3, name: 'French Fries', rating: '4.3', description: 'Crispy golden fries with a sprinkle of salt.', price: 100 },
          { item_id: 5, name: 'Soft Drink', rating: '4.2', description: 'Refreshing soda in your favorite flavor.', price: 60 }
        ],
        nonVeg: [
          { item_id: 1, name: 'Whopper', rating: '4.8', description: 'Flame-grilled beef patty with fresh veggies and ketchup.', price: 350 },
          { item_id: 2, name: 'Cheeseburger', rating: '4.5', description: 'A delicious beef patty topped with melted cheese and pickles.', price: 250 },
          { item_id: 4, name: 'Chicken Nuggets', rating: '4.4', description: 'Crispy chicken nuggets with a side of dipping sauce.', price: 180 }
        ]
      }
    },
    { 
      res_id: 6, 
      name: 'Harley’s', 
      cuisine: 'American, Grill', 
      location: 'Hitech City', 
      rating: 4.2, 
      image: 'https://b.zmtcdn.com/data/pictures/7/20968477/8e667398406985e109b8cc217d027b91.jpg?fit=around|960:500&crop=960:500;*,*',
      menu: {
        veg: [
          // Example if any vegetarian items are added to this restaurant
          // { item_id: 1, name: 'Veg Grilled Sandwich', rating: '4.2', description: 'Grilled veggies in a sandwich.', price: 150 }
        ],
        nonVeg: [
          { item_id: 1, name: 'BBQ Ribs', rating: '4.6', description: 'Juicy grilled ribs served with smoky BBQ sauce.', price: 450 }
        ]
      }
    },
    { 
      res_id: 7, 
      name: 'Pizza Hut', 
      cuisine: 'Pizza', 
      location: 'Madhapur', 
      rating: 4.5, 
      image: 'https://restaurants.pizzahut.co.in/files/upload_outlet_image_data/1484654418-4compressor.jpg',
      menu: {
        veg: [
          { item_id: 1, name: 'Veggie Supreme', rating: '4.5', description: 'A delicious pizza loaded with vegetables like capsicum, onions, and olives.', price: 350 },
          { item_id: 2, name: 'Cheese Margherita', rating: '4.7', description: 'Classic pizza with a tomato base and topped with fresh mozzarella cheese.', price: 300 },
          { item_id: 3, name: 'Garlic Breadsticks', rating: '4.3', description: 'Soft breadsticks with a garlic butter spread, served with marinara sauce.', price: 120 },
          { item_id: 4, name: 'Choco Lava Cake', rating: '4.6', description: 'Decadent molten chocolate cake served warm with a gooey center.', price: 150 }
        ],
        nonVeg: [
          { item_id: 5, name: 'Chicken Tikka Pizza', rating: '4.6', description: 'A spicy pizza with chunks of marinated chicken tikka, onions, and peppers.', price: 380 }
        ]
      }
    },
    {
      res_id: 8,
      name: 'Telangana Spice Kitchen',
      cuisine: 'Indian, Telangana',
      location: 'Kondapur',
      rating: 4.5,
      image: 'https://www.shutterstock.com/image-photo/chicken-biryani-quick-tasty-dum-600nw-2468105649.jpg',  // Replace with actual image URL
      menu: {
        veg: [
          { item_id: 1, name: 'Bagara Baingan', rating: '4.6', description: 'Deep-fried eggplants cooked in a rich and spicy peanut gravy, a signature dish of Telangana.', price: 200 },
          { item_id: 2, name: 'Gongura Dal', rating: '4.7', description: 'Tangy and spicy dal made with gongura leaves, a traditional Telangana delicacy.', price: 150 },
          { item_id: 3, name: 'Vegetarian Biryani', rating: '4.5', description: 'Fragrant basmati rice cooked with vegetables and spices, served with raita.', price: 220 },
          { item_id: 4, name: 'Chili Panner', rating: '4.3', description: 'Paneer cubes stir-fried in a spicy sauce with bell peppers and onions.', price: 240 },
          { item_id: 5, name: 'Vepudu Pulihora', rating: '4.4', description: 'A tangy tamarind rice dish tempered with mustard, curry leaves, and peanuts.', price: 180 }
        ],
        nonVeg: [
          { item_id: 1, name: 'Hyderabadi Chicken Biryani', rating: '4.8', description: 'A traditional Telangana-style biryani made with marinated chicken and basmati rice, cooked with aromatic spices.', price: 350 },
          { item_id: 2, name: 'Telangana Mutton Curry', rating: '4.7', description: 'Tender mutton pieces cooked in a rich, spicy gravy with Telangana’s unique spices.', price: 450 },
          { item_id: 3, name: 'Royyala Vepudu', rating: '4.6', description: 'Juicy shrimp fried with ground spices and curry leaves, a traditional Telangana seafood dish.', price: 400 },
          { item_id: 4, name: 'Kodi Kura', rating: '4.5', description: 'A spicy and flavorful chicken curry cooked with Telangana spices, served with rice or roti.', price: 350 },
          { item_id: 5, name: 'Fish Pulusu', rating: '4.4', description: 'Fish cooked in a tangy tamarind gravy with traditional spices, served with rice.', price: 380 }
        ]
      }
    }
    
    
  ];
  
  

  getRestaurantDetails(){
    return this.restaurants;
  }

}
