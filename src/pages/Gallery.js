import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { 
      src: require('../components/images/1.jpg'), 
      alt: 'Morning Oats', 
      recipe: `Morning oats\n
Mix and match, build your own bowl of oats by using the ingredients you like and have on hand.
Healthy, simple breakfast that you can make ahead for busy mornings and customize with many add-ins and toppings!\n
Ingredients that I used in this recipe:\n
- ½ cup 5 Grain flakes, gives it loads of texture from tiny nibbles to bigger bites.
- 1 tbs peanut butter (smooth or crunchy)
- Boiled water
- 1 Banana
- Strawberries
- Cashews
- Date syrup\n
1. In the bowl that you’re going to serve, add oats first followed by boiling water. Stir and let soak for 3-5 minutes.
2. Add peanut butter and stir in, until it’s thick and creamy.
3. Then add the remaining ingredients.
4. Drizzle with date syrup.\n
Tip: I like to use crunchy peanut butter for that extra crunch, but you can use either smooth or crunchy, whatever you prefer.\n
Enjoy ❤️`
    },
    { 
      src: require('../components/images/2.jpg'), 
      alt: 'Tortillas', 
      recipe: `TORTILLAS\n
Probably a favourite meal in our house!
And it’s so easy to make!
Vegetables or meat based, binded with shredded mozzarella, all wrapped up in a tasty wrap and baked for 10-15 minutes, it’s truly a satisfying meal! Give it a try!\n
INGREDIENTS:\n
- Minced beef
- Finely diced onions and carrots
- Chopped capsicum
- Shredded mozzarella
- Wheat tortillas
- Salt and pepper\n
Prepare the ingredients so you can add them one at a time.
1. Sauté the onions until translucent, add capsicum, fry for a few minutes then continue with minced beef and carrots.
2. When beef is cooked, remove from the heat and let it cool off for a few minutes.
3. I usually mix shredded mozzarella with beef, but you can also add it separately. Layer of beef mixture and layer of shredded mozzarella.
4. When everything is wrapped up, it’s ready to go in the oven.\n
High heat for 10-15 minutes until it starts to brown!
You can serve it with your favourite dips or eat as is.`
    },
    { 
      src: require('../components/images/3.jpg'), 
      alt: 'Pumpkin Soup', 
      recipe: `Pumpkin soup🍜\n
Thick, creamy, and irresistible, a classic easy pumpkin soup made with fresh pumpkin that’s easy to make ❤️ The natural flavour of pumpkin is good enough that you need very little to make a beautiful, creamy, full-flavoured soup 😋\n
Ingredients:\n
- Pumpkin, any type, or Butternut squash which is my favourite
- 1 Onion
- 2 Potatoes
- 2 cups vegetable or chicken broth/stock
- 2 cups water
- Salt and pepper\n
Additionally:\n
- ½ – ¾ cup Sour cream\n
1. Peel the pumpkin, clean from the seeds, and cut into cubes. Roast for 30 minutes.
2. Cut the onions, sauté until golden. Add broth, water, and potatoes.
3. When potatoes are cooked, add roasted pumpkin, season to taste with salt and pepper.
4. Remove from heat and use a stick blender to blend until smooth.
5. Ladle soup into bowls, drizzle over a bit of sour cream, sprinkle with pepper and parsley if desired. Serve with crusty bread!\n
Enjoy ❤️`
    },
    { 
      src: require('../components/images/4.jpg'), 
      alt: 'Snack Board', 
      recipe: `Snack board\n
I’ll keep it simple—a snack board can be anything you want it to be.\n
My ingredients of choice:\n
- Hard boiled eggs
- Olives
- Cherry Tomatoes
- Tomatoes and mozzarella slices
- Cheese toasts (Gouda)
- Cucumber\n
Arrange in a desirable way.\n
Happy snacking ❤️`
    },
    { 
      src: require('../components/images/5.jpg'), 
      alt: 'One Pot Minced Beef, Corn, and Noodles', 
      recipe: `One pot\n
Minced beef, corn, and noodles, cooked in a rich tomato sauce 👌\n
Ingredients:\n
- Onion
- Minced beef
- Canned corn
- One packet of noodles
- Tomato sauce
- Beef bouillon\n
1. Start with chopping and sautéing the onions.
2. Add beef and fry until nice and brown.
3. Combine everything with tomato sauce and canned corn.
4. Lower the temperature and let it simmer for another 5 minutes.
5. Put noodles on top and cover. The noodles will absorb the liquid.
6. Stir everything together.\n
It’s ready to be served ❤️\n
Enjoy!`
    },
    { 
      src: require('../components/images/6.jpg'), 
      alt: 'One Pot Minced Beef, Orzo Pasta, and Corn', 
      recipe: `One pot\n
Minced beef, orzo pasta, and corn\n
Ingredients:\n
- Onion
- Minced beef
- Tomato sauce
- Beef bouillon
- Orzo pasta
- Canned corn\n
1. Start by chopping and sautéing the onions.
2. Add minced beef and fry until it’s brown.
3. Combine everything with beef bouillon and tomato sauce.
4. Add orzo pasta and one cup of water. Mix well.
5. Cook for another 10 minutes.
6. Add canned corn and simmer for another 5 minutes.\n
It’s ready to be served ❤️\n
Enjoy!`
    },
  ];

  const handleClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${selectedImage === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} />
            {selectedImage === index && (
              <div className="recipe">
                <h2>{image.alt}</h2>
                <p>{image.recipe}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
