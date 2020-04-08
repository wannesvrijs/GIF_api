import React from "react";
import Masonry from "react-masonry-css";

export default ({ data, loading, firstSearch }) => {
  return (
    <>
      {data.length === 0 ? (
        firstSearch ? (
          <p id="welcome">Welcome to Gif-search!</p>
        ) : (
          loading === false && <p id="no_results">no results</p>
        )
      ) : (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((result) =>
            result.media.map((media) => (
              <img src={media.tinygif.url} alt="gif" width="100%" />
            ))
          )}
        </Masonry>
      )}
    </>
  );
};
// {console.log(props.data.length, "sssss")}
