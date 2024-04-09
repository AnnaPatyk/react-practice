import React from 'react';

const Two = () => {
   const cityInfo = {
  name: 'Хмельницький',
  country: 'Україна',
  region: 'Хмельницька область',
  population: 273_000,
  attractions: ['Палац Потоцьких', 'Костел святого Миколая', 'Майдан Незалежності'],
};
   return (
     <>
      <h1>{cityInfo.name}</h1>
      <p>Населення: {cityInfo.population}</p>
      <p>Країна: {cityInfo.country}</p>
      <p>Область: {cityInfo.region}</p>
      <p>Населення: {cityInfo.population}</p>
      <p>Визначні місця :{cityInfo.attractions.map(el =>{return el}).join(', ')}</p>
    </>
   );
}

export default Two;
