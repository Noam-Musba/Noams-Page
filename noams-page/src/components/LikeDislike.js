import React, { useReducer } from "react";

const initialLikes = {
  likes: 0,
  dislikes: 0,
};

const reducer = (prevState, buttonAction) => {
  switch (buttonAction.type) {
    case "like":
      return { ...prevState, likes: prevState.likes + buttonAction.value };
    case "dislike":
      return {
        ...prevState,
        dislikes: prevState.dislikes + buttonAction.value,
      };
  }
};

function LikeDislike() {
  const [showLikes, dispatchLikes] = useReducer(reducer, initialLikes);

  return (
    <div style={{ marginTop: "40px", backgroundColor: "lightsteelblue" }}>
      <h1>Do you like my horrible design? vote here!</h1>
      <div>
        <span style={{ margin: "20px", backgroundColor: "lightgreen" }}>
          Liked! {showLikes.likes}
        </span>
        <span style={{ margin: "20px", backgroundColor: "lightcoral" }}>
          disliked! {showLikes.dislikes}
        </span>
        <span
          style={{
            margin: "20px",
            backgroundColor:
              showLikes.likes + showLikes.dislikes >= 0
                ? "lightgreen"
                : "lightcoral",
          }}
        >
          total: {showLikes.likes + showLikes.dislikes}
        </span>
      </div>
      <button
        style={{ margin: "20px" }}
        onClick={() => dispatchLikes({ type: "like", value: 5 })}
      >
        Omega like!
      </button>
      <button
        style={{ margin: "20px" }}
        onClick={() => dispatchLikes({ type: "like", value: 1 })}
      >
        like!
      </button>
      <button
        style={{ margin: "20px" }}
        onClick={() => dispatchLikes({ type: "dislike", value: -1 })}
      >
        dislike!
      </button>
      <button
        style={{ margin: "20px" }}
        onClick={() => dispatchLikes({ type: "dislike", value: -5 })}
      >
        Ewwww!
      </button>
    </div>
  );
}

export default LikeDislike;
