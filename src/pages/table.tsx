import Navbar from '@/components/Navbar';
import styled from '@emotion/styled';

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
          <ItemTableRow>
            <Input type="checkbox" />
            <ItemTableRowInner>
              <ItemTableCell size={8}>
                <Div>
                  <Circle />
                  <p>Monograph Dashboard</p>
                </Div>
              </ItemTableCell>
              <ItemTableCell>
                <div>
                  <p>5.0(s)</p>
                </div>
              </ItemTableCell>
            </ItemTableRowInner>
          </ItemTableRow>
        </ItemTableContent>
      </ItemTable>
    </div>
  );
};
const Div = styled.div`
  display: flex;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: pink;
`;
const ItemTableRowInner = styled.div`
  display: flex;
  flex: 1;
`;
const ItemTableCell = styled.div`
  display: flex;
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
