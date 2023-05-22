import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
const RecipeCard = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { id, details, name, rating, ingredients, thumbnail, cookingMethod } = recipe;
  const handleFavourite = () => {
    toast.success("Added to favourite!");
    setIsDisabled(true);
  };
  return (
    <>
      <div className="card pb-6 px-4 card-compact w-full bg-base-100 overflow-hidden shadow-xl">
        <figure>
          <img className="h-72 w-full object-cover" src={thumbnail} alt="recipe" />
        </figure>
        <div className="card px-4">
          <h2 className="card-title mt-5 text-2xl">{name}</h2>
          <p>{details}</p>
          <div className="">
            <div>
              <h3 className="font-bold text-xl mt-4">Ingredients:</h3>
              {ingredients ? (
                <>
                  {ingredients.map((i) => (
                    <p>{i}</p>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
            <p className="mt-4">
              <h3 className="text-xl font-bold">Cooking Method:</h3>
              {cookingMethod}
            </p>
          </div>
          <div className="mt-5 mb-3">
            <div className="flex card-actions justify-end gap-5">
              <button onClick={handleFavourite} disabled={isDisabled} className="btn btn-primary mt-2">Add to Favourite</button>
              <div className="mr-auto flex items-center my-auto ">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
                {rating}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
export default RecipeCard;
