import React, { FC } from 'react';
import cn from 'classnames';
import { Button, Input } from 'components';
import './styles.scss';

interface ServiceForm {
  isEditing?: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const ServiceForm: FC<ServiceForm> = props => {
  const { isEditing, onAccept, onClose } = props;

  const classnames = cn(['component-service-form', {
    'component-service-form__editing': isEditing
  }])

  return (
    <div className={classnames}>
      { !isEditing &&
        <h3 className='component-service-form__title'>
          Servicio
        </h3>
      }
      <div className='component-service-form__inputs'>
        <Input
          size={isEditing ? 'small' : 'default'}
          label='Nombre'
          onChange={value => console.log('value')}
        />
        <Input
          size={isEditing ? 'small' : 'default'}
          label='Descripción'
          onChange={value => console.log('value')}
        />
      </div>
      <div className='component-service-form__actions'>
        <Button onClick={onAccept}>Grabar</Button>
        <Button onClick={onClose} variant='error'>Cancelar</Button>
      </div>
    </div>
  );
};

ServiceForm.defaultProps = {
  isEditing: false
}

export default ServiceForm;
