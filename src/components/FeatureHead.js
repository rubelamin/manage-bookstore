import React from "react";

export default function FeatureHead({ handleFeature, isFeature }) {
  const featuredHandler = () => {
    handleFeature();
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${!isFeature ? "active-filter" : null}`}
          id="lws-filterAll"
          onClick={featuredHandler}
        >
          All
        </button>
        <button
          className={`filter-btn ${isFeature ? "active-filter" : null}`}
          id="lws-filterFeatured"
          onClick={featuredHandler}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
