import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input } from 'components';
import './styles.scss';
import { DataProps } from 'toolbox';

interface ServiceFormProps {
  isEditing?: boolean;
  onClose: () => void;
  onAccept: (values: DataProps) => void;
  dataToEdit?: DataProps;
}

const ServiceForm: FC<ServiceFormProps> = props => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { isEditing, onAccept, onClose, dataToEdit } = props;
  const classnames = cn(['component-service-form', {
    'component-service-form__editing': isEditing
  }]);

  const handleCreate = () => {
    onAccept({
      name,
      description,
      id: uuidv4(),
      slug: 'health'
    });
    setName('');
    setDescription('');
  };

  const handleEdit = () => {
    if (dataToEdit) {
      onAccept({
        name,
        description,
        id: dataToEdit.id,
        slug: dataToEdit.slug
      });
      setName('');
      setDescription('');
    }
  }

  useEffect(() => {
    if (isEditing && dataToEdit) {
      setName(dataToEdit.name);
      setDescription(dataToEdit.description);
    }
  }, [isEditing, dataToEdit])

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
          label={isEditing ? '' : 'Nombre'}
          onChange={setName}
          value={name}
        />
        <Input
          size={isEditing ? 'small' : 'default'}
          label={isEditing ? '' : 'Descripción'}
          onChange={setDescription}
          value={description}
        />
      </div>
      <div className='component-service-form__actions'>
        <Button
          onClick={isEditing ? handleEdit : handleCreate}
          disabled={!name || !description}
          className='component-service-form__actions-accept'
        >
          Grabar
        </Button>
        <Button
          variant='error'
          onClick={() => {
            onClose();
            setName('');
            setDescription('');
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};

ServiceForm.defaultProps = {
  isEditing: false
}

export default ServiceForm;
