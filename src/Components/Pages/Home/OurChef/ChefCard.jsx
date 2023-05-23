import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio,
  } = chef;
  return (
    <>
      <div className="card mt-3 w-96 mx-auto bg-base-100 shadow-xl">
        <figure>
          <LazyLoad
            className="LazyLoad"
            width={400}
            height={200}
            offset={300}
            threshold={0.75}
          >
            <img className="h-72 w-full object-cover"  src={chefPicture} alt="Chef" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>
            Experience: <span>{yearsOfExperience}</span>
          </p>
          <p>
            Number of Recipes: <span>{numberOfRecipes}</span>
          </p>

          <div className="card-actions justify-between items-center mt-2">
            <Link to={`/chef-details/${id}`}>
              <button className="btn btn-primary font-semibold">View Recipes</button>
            </Link>

            <div className="badge badge-outline gap-2">
              <FaThumbsUp></FaThumbsUp>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
