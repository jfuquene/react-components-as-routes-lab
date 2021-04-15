import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors page</h1>
      {actors.map(actor => <div> {actor.name} </div>)}
    </div>
  );
};

export default Actors;
