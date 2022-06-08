export interface DataProps {
  id: string;
  name: string;
  description: string;
  slug: string;
}

const DATA: DataProps[] = [
  {
    id: '1',
    name: 'Electricidad',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'all'
  },
  {
    id: '2',
    name: 'Auxilio Mecanico',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'health'
  },
  {
    id: '3',
    name: 'Chofer reemplazo',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'cards'
  },
  {
    id: '4',
    name: 'Medico a domicilio',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'health'
  },
  {
    id: '5',
    name: 'Ambulancia',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'cards'
  },
  {
    id: '6',
    name: 'Gasfitero',
    description: 'Lorem ipsum dolor sit amet consectetur adisplicng elit',
    slug: 'home'
  },
];

export default DATA;
