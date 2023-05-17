import React from "react";

function FavPok() {
  return (
    <div style={{paddingTop: '70px', paddingBottom: '30px'}}>
      <h2 style={{backgroundColor: 'pink'}}>Do you want to see and learn about my favorite pokemon?</h2>
      <h3 style={{backgroundColor: 'yellow'}}>
        Click{" "}
        <a
          href="https://www.pokemon.com/us/pokedex/espeon"
          title="go see the cute espeon!"
          target="_blank"
        >
          here
        </a>{" "}
        to see it!
      </h3>
    </div>
  );
}

export default FavPok;
