import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { FILTERS, DATA, DataProps } from 'toolbox/datasources';
import { SessionKeys } from 'toolbox/constants';
import { ServiceCard, ServiceForm } from 'components';
import './styles.scss';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [serviceData, setServiceData] = useState<DataProps[]>([]);

  const handleCreateService = (values: DataProps) => {
    setServiceData([ ...serviceData, values])
  };

  const handleEditService = (values: DataProps) => {
    const editedService = serviceData.map(service => {
      if (service.id === values.id) return values;
      return service;
    })

    setServiceData(editedService);
  };

  const handleDeleteService = (id: string) => {
    const filtered = serviceData.filter(service => service.id !== id);
    setServiceData(filtered);
  }

  const handleFilterServices = () => {
    if (activeFilter !== 'all') {
      return serviceData.filter(service => service.slug === activeFilter);
    }

    return serviceData;
  }

  useEffect(() => {
    if (!sessionStorage.getItem(SessionKeys.Services)) {
      sessionStorage.setItem(SessionKeys.Services, JSON.stringify(DATA));
      setServiceData(DATA);
    } else {
      const serviceData = sessionStorage.getItem(SessionKeys.Services) as string;
      setServiceData(JSON.parse(serviceData));
    }
  }, []);

  useEffect(() => {
    if (serviceData.length) {
      sessionStorage.setItem(SessionKeys.Services, JSON.stringify(serviceData));
    }
  }, [serviceData]);

  return (
    <div className='page-home'>
      <div className='page-home__title'>
        <h1>Servicios</h1>
      </div>
      <div className='wrapper-container page-home__container-filters'>
        <div className='wrapper-content page-home__filters'>
          { FILTERS.map(filter => {
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
            { handleFilterServices().map((service: DataProps) => {
              return (
                <ServiceCard
                  key={service.id}
                  onEdit={handleEditService}
                  onDelete={handleDeleteService}
                  { ...service }
                />
              );
            }) }
          </div>
          <div className='page-home__card-form'>
            <ServiceForm
              onClose={() => console.log(false)}
              onAccept={handleCreateService}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
