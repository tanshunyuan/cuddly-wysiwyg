import Navbar from '@/components/Navbar';
import styled from '@emotion/styled';
const data = [
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

const Table = () => {
  return (
    <div>
      <Navbar />
      <ItemTable>
        <ItemTableHeader>
          <ItemTableRow>
            <ItemTableHeaderCell>
              <Input type="checkbox" />
            </ItemTableHeaderCell>
            <ItemTableHeaderCell size={8}>
              <HeaderText>Preview</HeaderText>
            </ItemTableHeaderCell>
            <ItemTableHeaderCell>
              <HeaderText>Ratings</HeaderText>
            </ItemTableHeaderCell>
          </ItemTableRow>
        </ItemTableHeader>

        <ItemTableContent>
          {data.map((x) => {
            return (
              <ItemTableRowWrapper key={x.id}>
                <ItemTableRow>
                  <Input type="checkbox" />
                  <ItemTableCell size={8}>
                    <Circle />
                    <p>{x.title}</p>
                  </ItemTableCell>
                  <ItemTableCell>
                    <p>{x.ratings}(s)</p>
                  </ItemTableCell>
                </ItemTableRow>
              </ItemTableRowWrapper>
            );
          })}
        </ItemTableContent>
      </ItemTable>
    </div>
  );
};
const ItemTableRowWrapper = styled.div`
  background-color: gray;
  border-bottom: 1px solid black;
`;
const Circle = styled.div`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: pink;
`;
const ItemTableCell = styled.div`
  display: flex;
  align-items: center;
  width: ${(props: { size?: number }) => {
    const { size } = props;
    if (size !== undefined) {
      const res = (size / 12) * 100;
      return `${res}%`;
    }
  }};
`;
const ItemTableContent = styled.div``;
const HeaderText = styled.p`
  font-weight: bold;
`;
const ItemTable = styled.div``;
const ItemTableRow = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.5rem 0;
`;
const Input = styled.input`
  margin-right: 1rem;
`;
const ItemTableHeader = styled.div``;
const ItemTableHeaderCell = styled.div`
  width: ${(props: { size?: number }) => {
    const { size } = props;
    if (size !== undefined) {
      const res = (size / 12) * 100;
      return `${res}%`;
    }
  }};
`;

export default Table;
