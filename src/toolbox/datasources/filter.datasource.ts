export enum FilterIds {
  All = 'all',
  Cards = 'cards',
  Health = 'health',
  Home = 'home',
}

export interface FilterProps {
  id: string;
  name: string;
}

const FILTERS: FilterProps[] = [
  { name: 'Todos', id: FilterIds.All },
  { name: 'Autos', id: FilterIds.Cards },
  { name: 'Salud', id: FilterIds.Health },
  { name: 'Hogar', id: FilterIds.Home }
];

export default FILTERS;
