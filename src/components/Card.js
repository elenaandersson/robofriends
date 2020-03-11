import React from 'react';

const Card = ({name, username,id}) => {
  return (
    <fragment className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robots' height='200px' width='200px' src={`https://robohash.org/${id}`}/>
      <main>
        <h2>{name}</h2>
        <p>{username}</p>
      </main>
    </fragment>
  );
}

export default Card;
