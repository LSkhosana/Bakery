import React from "react";
import Pancake from "../Assets/Pancake.jpg"
import brownie from "../Assets/brownie.webp"
import Cheesecake from "../Assets/cheesecake.jpg"
import "../CSS/Ing.css"

const IngredientsPage = () => {
    const ingredientInfoData = [
        {
          image: Pancake,
          title: "Pancake",
          text: "Flower, Sugar, Baking Powder, Salt, An Egg, Milk, and Vegetable Oil",
          steps: ""
        },
        {
          image: Cheesecake,
          title: "Cheesecake",
          text: "1 (9 inch) prepared shortbread pie crust, 2 (8 ounce) packages cream cheese, 1 cup white sugar, 2 large eggs, 1 cup sour cream, 2 teaspoons vanilla extract",
        },
        {
          image: brownie,
          title: "Brownie",
          text: "1/2 cup all-purpose flour, 2 tablespoons espresso powder, 1/8 teaspoon baking powder, 1/8 teaspoon salt, 1 cup white sugar, 1/2 cup butter, softened, 2 large eggs, 2 ounces unsweetened baking chocolate, melted, 1/2 teaspoon vanilla extract",
        },
      ];
    return(
        <div className="work-section-bottom2">
        {ingredientInfoData.map((data) => (
          <div className="work-section-info2" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            
          </div>
          
        ))}
        <div className="steps-pan">
            <div className="pancake">
                <h1>Steps</h1>
                <h3>Pancake</h3>
                <p>Mix<br></br>
                Combine your dry ingredients (flour, sugar, salt, baking powder) in one bowl and your wet ingredients (egg, milk, vegetable oil, mashed bananas) in another bowl. Add the dry ingredients to the bowl with the wet ingredients, then stir until they're incorporated. It's OK if your batter is slightly lumpy.<br></br><br></br>
                Cook<br></br>
                Pour the batter in ¼ cup portions onto a lightly oiled pan or griddle over medium-high heat. Cook for a few minutes, flip with a spatula, and cook for another few minutes (or until each side is golden brown).
                </p>
            </div>

            <div className="pa">
               
                <h3>Cheesecake</h3>
                <p>Mix:<br></br>

                    Combine graham cracker crumbs, granulated sugar, and melted butter in a bowl.
                    Press mixture onto the bottom of a greased 9-inch springform pan to form the crust.
                    In another bowl, beat cream cheese and granulated sugar until smooth.
                    Add eggs one at a time, mixing well after each addition.
                    Stir in vanilla extract.
                    Gently fold in sour cream until well combined.<br></br><br></br>
                    Bake:<br></br>

                    Pour filling over chilled crust in springform pan.
                    Bake in preheated oven at 325°F (163°C) for 45-50 minutes, until edges are set and center is slightly jiggly.
                    Turn off oven and leave cheesecake inside with door slightly ajar for about an hour.
                    Remove from oven and cool completely at room temperature.
                    Refrigerate for at least 4 hours or overnight before serving.
                    Serve chilled and enjoy your homemade cheesecake!
                </p>
            </div>

            <div className="bro">
               
                <h3>Brownie</h3>
                <p>Mix:<br></br>

                    In one bowl, combine dry ingredients: flour, cocoa powder, espresso powder, baking powder, and salt.
                    In another bowl, mix wet ingredients: melted butter, granulated sugar, eggs, and vanilla extract.
                    Add dry ingredients to the bowl with wet ingredients.
                    Stir until well combined.<br></br><br></br>
                    Bake:<br></br>

                    Preheat oven to 350°F (175°C).
                    Grease a baking pan and pour the brownie batter into it.
                    Spread evenly.
                    Bake for 25-30 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs.
                    Let cool in the pan before slicing and serving.
                    Enjoy your rich and indulgent espresso brownies!
                </p>
            </div>
          </div>
      </div>
    );
};

export default IngredientsPage;
