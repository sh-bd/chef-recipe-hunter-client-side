import React from "react";

const Feedback = () => {
  return (
    <section className="container md:w-9/12 mx-auto px-10 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center justify-center">
              <div className="relative flex-shrink-0 w-48 min-h-min">
                <img
                  className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black">
                  “Chef Recipe Hunter is a culinary gem! Their website offers a delightful collection of diverse and easy-to-follow recipes. From delectable appetizers to mouthwatering desserts, it's a treasure trove for food enthusiasts. Highly recommended! #FoodieHeaven”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black mt-4">
                John Doe
              </p>
              <p className="text-base text-gray-600">Traveller</p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center justify-center">
              <div className="relative flex-shrink-0 w-48 min-h-min">
                <img
                  className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                  src="https://media.cnn.com/api/v1/images/stellar/prod/220801142443-shakira.jpg?c=original"
                  alt="Shakira"
                />
              </div>
            </div>

            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black ">
                  “Chef Recipe Hunter is a game-changer! Their website offers a treasure trove of delectable recipes, with clear instructions and mouthwatering visuals. From novice cooks to seasoned chefs, this site is a must-visit for all food enthusiasts. Five stars! 🌟🍽️ #recipeheaven”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black  mt-4">
                Shakira
              </p>
              <p className="text-base text-gray-600">Singer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
