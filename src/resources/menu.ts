const menu: {
  [key: string]: {
    img: string;
    desc: string;
    price: string;
  };
} = {
  // Kebabs
  "Kebab": {
    img: "/images/kebab.webp",
    desc: "Choice of meat or falafel rolled in bread with your choice of salads and sauce.",
    price: "$15",
  },

  // HSP
  "HSP (Snack Pack)": {
    img: "/images/hsp.webp",
    desc: "Halal Snack Pack with crunchy chips, falafel or meat and your choice of sauce.",
    price: "Small $15 | Large $18 | Jumbo $22",
  },
  
  // Meat Box
  "Chicken/Lamb/Mix Meat Box": {
    img: "/images/meatbox.jpeg",
    desc: "Choice of meat topped with sauce and salad.",
    price: "Small $18 | Large $22",
  },
  
  // Rice Bowl
  "Kebab Rice Bowl": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/d157c4a15acf336460cd0f1cb7ef3b72",
    desc: "Rice pilaf topped with your choice of meat, salad and sauce.",
    price: "$18",
  },

  // Salad Bowls
  "Kebab Salad Bowl": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/d157c4a15acf336460cd0f1cb7ef3b72",
    desc: "Fresh salad topped with meat and sauce.",
    price: "$18",
  },

  // Kebab Plate
  "Kebab Plate": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/1095591768b51b907c0dcfd110ce11dc",
    desc: "Choice of meat with rice pilaf, bread, salad and sauce.",
    price: "$21",
  },

  // Gozleme
  "Spinach Fetta Cheese Gozleme": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,w_120/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/642a494279d8f0163eb6e991f5863f7e",
    desc: "Crispy Turkish flatbread stuffed with spinach and feta cheese.",
    price: "$22",
  },

  "Chicken & Cheese Gozleme": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,w_120/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/642a494279d8f0163eb6e991f5863f7e",
    desc: "Turkish flatbread filled with chicken and cheese.",
    price: "Full $26",
  },

  // Sides
  "Chips": {
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/chips-regular",
    desc: "Golden crispy hot chips.",
    price: "Small $6 | Large $8",
  },
  
  "Loaded Chips": {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/e313b88b550e5c30e423e5d5af4d1927/7f4ae9ca0446cbc23e71d8d395a98428.jpeg",
    desc: "Chips topped with cheese, special sauce and jalapeños.",
    price: "Small $10 | Large $12",
  },
  "Chips with Gravy": {
    img: "",
    desc: "Crispy chips served with rich gravy.",
    price: "Small $10 | Large $12",
  },
  "Onion Rings": {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/1bc159b238f724ef92e25e720598ae7c/7f4ae9ca0446cbc23e71d8d395a98428.jpeg",
    desc: "Crispy golden onion rings.",
    price: "$8",
  },
  "Jalapeno Bites": {
    img: "",
    desc: "Spicy jalapeño bites with cheese.",
    price: "Small $8 | Large $10",
  },
  "Garlic Chicken Cheese Balls": {
    img: "",
    desc: "Cheesy garlic chicken balls.",
    price: "Small $8 | Large $10",
  },
  "Chicken Nuggets": {
    img: "",
    desc: "Crispy golden chicken nuggets.",
    price: "Small $8 | Large $10",
  },
  "Trio Dip":{
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/82162a56b274ba10ea4314d1dc079249/58f691da9eaef86b0b51f9b2c483fe63.jpeg",
    desc: "Turkish bread served with 3 dips of choice",
    price: "$15",
  },

  // Drinks
  "Cans": {
    img: "/images/drink-cans.jpg",
    desc: "Selection of canned soft drinks.",
    price: "$3",
  },

  "Baklava": {
    img: "/images/drink-cans.jpg",
    desc: "Sweet pastry layers filled with nuts.",
    price: "2 piece $6 | 8 piece $18",
  },

  "Midnight Magic": {
    img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzE5MmQ5MjZkYjVlYmQzNDQ5M2M0ODhmNWY4OTJkM2IvNThmNjkxZGE5ZWFlZjg2YjBiNTFmOWIyYzQ4M2ZlNjMuanBlZw==",
    desc: "10 piece hot donuts topped with Nutella and crushed hazelnuts.",
    price: "$12",
  },

  "Donut & Goldspread": {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/25284d3b6ef972dfcdf2a7e118f2a656/58f691da9eaef86b0b51f9b2c483fe63.jpeg",
    desc: "10 piece hot donuts topped with Nutella and crushed hazelnuts.",
    price: "$12",
  },

  "Mix Donuts": {
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/25284d3b6ef972dfcdf2a7e118f2a656/58f691da9eaef86b0b51f9b2c483fe63.jpeg",
    desc: "10 piece hot donuts topped with Nutella and crushed hazelnuts.",
    price: "$12",
  },

  // "Tzatziki Dip": {
  //   img: "/images/tzatziki.jpg",
  //   desc: "Refreshing yogurt, cucumber & garlic dip.",
  //   price: "$3",
  // },

  // // Sauces
  // "Tomato Sauce": {
  //   img: "/images/tomato-sauce.jpg",
  //   desc: "Classic tomato sauce.",
  //   price: "$1",
  // },
  // "Barbecue Sauce": {
  //   img: "/images/bbq-sauce.jpg",
  //   desc: "Smoky BBQ sauce.",
  //   price: "$1",
  // },
  // "Sweet Chilli Sauce": {
  //   img: "/images/sweet-chilli.jpg",
  //   desc: "Sweet and spicy chilli sauce.",
  //   price: "$1",
  // },
  // "Hot Chilli Sauce": {
  //   img: "/images/hot-chilli.jpg",
  //   desc: "Fiery hot chilli sauce.",
  //   price: "$1",
  // },
  // "Garlic Yoghurt Sauce": {
  //   img: "/images/garlic-yoghurt.jpg",
  //   desc: "Creamy garlic yoghurt sauce.",
  //   price: "$1",
  // },
  // "Mayonnaise": {
  //   img: "/images/mayonnaise.jpg",
  //   desc: "Smooth and creamy mayo.",
  //   price: "$1",
  // },
  // "Sour Cream": {
  //   img: "/images/sour-cream.jpg",
  //   desc: "Cool and creamy sour cream.",
  //   price: "$1",
  // },
};

export default menu;

// const menu: any = {
//     "HSP" : {
//        img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/86e12be7ef6ba40503c33c19046279a2",
//        desc: "Halal Snack Pack, freshly cooked crunchy chips topped with meat and choice of sauce.",
//        selections: [
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 1,
//                 "selectMulti" : false, 
//                 "items" : {"Small" : 18, "Large" : 24, "Jumbo": 31},
//                 "name" : "Size"
//             },
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 1,
//                 "selectMulti" : false, 
//                 "items" : {"Chicken" : 0, "Lamb": 0, "Mixed" : 0},
//                 "name" : "Meat"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 1,
//                 "selectMulti" : false, 
//                 "items" : {"Cheese Regular": 1, "Cheese Large": 2, "Cheese Jumbo" : 3},
//                 "name" : "Cheese"
//             },
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 3,
//                 "selectMulti" : true, 
//                 "items" : {"No Sauce": 0, "Mayonaise": 0, "Sweet Chilli" : 0, "Chilli" : 0, "Carlic Yogurt": 0, "Sour Cream": 0, "Tomato Sauce": 0, "BBQ": 0},
//                 "name" : "Sauce"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Eggplant Dip": 2, "Hummus Dip": 2, "Spicy Capsicum Dip" : 2, "Tatziki Dip" : 2, "Avacado Dip" : 2},
//                 "name" : "Add On Dip"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Jalepenos": 1, "Lettuce": 1, "Olives" : 1, "Onion" : 1, "Pineapple" : 1},
//                 "name" : "Salad Add On"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Coke": 3.50, "Coke No sugar": 3.5, "Schweppes Lemonade" : 3.5, "Solo" : 3.5, "Fanta" : 3.5},
//                 "name" : "Canned Drinks"
//             },
//         ]
//     },

//     "Kebab" : {
//        img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/86e12be7ef6ba40503c33c19046279a2",
//        selections: [
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 0,
//                 "selectMulti" : false, 
//                 "items" : {"Chicken" : 17, "Lamb": 18, "Mixed" : 18},
//                 "name" : "Meat"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : false, 
//                 "items" : {"Cheese Regular": 1, "Cheese Large": 2, "Cheese Jumbo" : 3},
//                 "name" : "Cheese"
//             },
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 3,
//                 "selectMulti" : true, 
//                 "items" : {"No Sauce": 0, "Mayonaise": 0, "Sweet Chilli" : 0, "Chilli" : 0, "Carlic Yogurt": 0, "Sour Cream": 0, "Tomato Sauce": 0, "BBQ": 0},
//                 "name" : "Sauce"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Eggplant Dip": 2, "Hummus Dip": 2, "Spicy Capsicum Dip" : 2, "Tatziki Dip" : 2, "Avacado Dip" : 2},
//                 "name" : "Add On Dip"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Jalepenos": 1, "Lettuce": 1, "Olives" : 1, "Onion" : 1, "Pineapple" : 1},
//                 "name" : "Salad Add On"
//             },
//             {
//                 "minSelect" : 0,
//                 "maxSelect" : 0,
//                 "selectMulti" : true, 
//                 "items" : {"Coke": 3.50, "Coke No sugar": 3.5, "Schweppes Lemonade" : 3.5, "Solo" : 3.5, "Fanta" : 3.5},
//                 "name" : "Canned Drinks"
//             },
//         ]
//     },

//     "Chips" : {
//        img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,q_auto,ar_4:3,c_thumb,h_450,w_600/f_auto/q_auto/dpr_2.0/v1/au/dishes/11059574/86e12be7ef6ba40503c33c19046279a2",
//        selections: [
//             {
//                 "minSelect" : 1,
//                 "maxSelect" : 1,
//                 "selectMulti" : false, 
//                 "items" : {"Small" : 18, "Large" : 24},
//                 "name" : "Size"
//             }
//         ]
//     }
// }

// export default menu 