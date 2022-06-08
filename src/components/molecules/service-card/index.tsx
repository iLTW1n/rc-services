import React, { FC, useState } from 'react';
import { DataProps } from 'toolbox';
import { Button, ServiceForm } from 'components';
import './styles.scss';

interface ServiceCardProps extends DataProps {
  onDelete: (id: string) => void;
  onEdit: (values: DataProps) => void;
}

const ServiceCard: FC<ServiceCardProps> = props => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { name, description, id, onDelete, onEdit } = props;

  return isEditing ?
    <ServiceForm
      dataToEdit={props}
      isEditing={true}
      onClose={() => setIsEditing(false)}
      onAccept={values => {
        onEdit(values);
        setIsEditing(false);
      }}
    /> :
    <div className='molecules-service-card'>
      <div className='molecules-service-card__content'>
        <h3 className='molecules-service-card__title'>{ name }</h3>
        <p className='molecules-service-card__description'>
          { description }
        </p>
      </div>
      <div className='molecules-service-card__actions'>
        <Button variant='link' onClick={() => setIsEditing(true)}>
          Editar
        </Button>
        <Button variant='link' onClick={() => onDelete(id)}>
          Eliminar
        </Button>
      </div>
    </div>
};

export default ServiceCard;
