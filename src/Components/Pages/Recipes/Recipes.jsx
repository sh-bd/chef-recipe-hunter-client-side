import React, { useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chef = useLoaderData();
  const chefRecipes = chef.recipes;

  return (
    <div >
      <div className="w-8/12 mx-auto text-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mx-auto my-4">
          <img
            className="w-full h-full object-cover"
            src={chef?.chefPicture}
            alt={chef?.chefName}
          />
        </div>
        <div className="md:w-10/12 mx-auto mb-10">
          <h2 className="text-5xl my-9 font-bold">{chef?.chefName}
            <div className="badge badge-outline p-3 ml-5 h-5 gap-2 ">
              <FaThumbsUp></FaThumbsUp>{chef?.likes}</div>
          </h2>


          <p>
            <span className="font-bold">About: </span>
            {chef?.chefBio}
          </p>
          <p className="font-semibold mt-4">
            I have <span className="font-bold">{chef?.numberOfRecipes}</span>{" "}
            recipes
          </p>
          <p className="font-semibold">
            My Experience in this profession is{" "}
            <span className="font-bold"> {chef?.yearsOfExperience}</span> years
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="font-bold text-4xl text-center my-10 ">My Recipes</h2>
        <div className="md:grid grid-cols-2 gap-10 mx-auto w-10/12">
          {chefRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
