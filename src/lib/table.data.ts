interface ITableData {
  id: number;
  title: string;
  ratings: number;
  isChecked?: boolean;
}
const data: ITableData[] = [
  {
    id: 1,
    title: `Vagram`,
    ratings: 88,
  },
  {
    id: 2,
    title: `Zamit`,
    ratings: 62,
  },
  {
    id: 3,
    title: `Fix San`,
    ratings: 57,
  },
  {
    id: 4,
    title: `Tempsoft`,
    ratings: 31,
  },
  {
    id: 5,
    title: `Daltfresh`,
    ratings: 60,
  },
  {
    id: 6,
    title: `Biodex`,
    ratings: 8,
  },
  {
    id: 7,
    title: `Stringtough`,
    ratings: 63,
  },
  {
    id: 8,
    title: `Bitchip`,
    ratings: 35,
  },
  {
    id: 9,
    title: `Y-Solowarm`,
    ratings: 100,
  },
  {
    id: 10,
    title: `Mat Lam Tam`,
    ratings: 76,
  },
];

export default data;
