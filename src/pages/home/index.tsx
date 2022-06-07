import React, { useState } from 'react';
import cn from 'classnames';

import { ServiceCard, ServiceForm } from 'components';
import './styles.scss';

const filters = [
  { name: 'Todos', id: 'all' },
  { name: 'Autos', id: 'cars' },
  { name: 'Salud', id: 'health' },
  { name: 'Hogar', id: 'home' }
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className='page-home'>
      <div className='page-home__title'>
        <h1>Servicios</h1>
      </div>
      <div className='wrapper-container page-home__container-filters'>
        <div className='wrapper-content page-home__filters'>
          { filters.map(filter => {
            return (
              <span
                onClick={() => setActiveFilter(filter.id)}
                key={filter.id}
                className={cn(['page-home__filter', {
                  active: filter.id === activeFilter
                }])}
              >
                { filter.name }
              </span>
            );
          }) }
        </div>
      </div>

      <div className='wrapper-container'>
        <div className='wrapper-content page-home__cards'>
          <div className='page-home__card-content'>
            { filters.map((_, index) => {
              return <ServiceCard key={index} />;
            }) }
          </div>
          <div className='page-home__card-form'>
            <ServiceForm
              onClose={() => console.log(false)}
              onAccept={() => console.log(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
