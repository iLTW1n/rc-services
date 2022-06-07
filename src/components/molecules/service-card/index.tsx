import React, { FC, useState } from 'react';
import { Button, ServiceForm } from 'components';
import './styles.scss';

interface ServiceCardProps {}

const ServiceCard: FC<ServiceCardProps> = props => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return isEditing ?
    <ServiceForm
      isEditing={true}
      onClose={() => setIsEditing(false)}
      onAccept={() => setIsEditing(false)}
    /> :
    <div className='molecules-service-card'>
      <div className='molecules-service-card__content'>
        <h3 className='molecules-service-card__title'>Servicio</h3>
        <p className='molecules-service-card__description'>
          Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum
        </p>
      </div>
      <div className='molecules-service-card__actions'>
        <Button variant='link' onClick={() => setIsEditing(true)}>
          Editar
        </Button>
        <Button variant='link'>Eliminar</Button>
      </div>
    </div>
};

export default ServiceCard;
