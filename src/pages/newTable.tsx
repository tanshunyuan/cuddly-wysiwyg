import Navbar from '@/components/Navbar';
import styled from '@emotion/styled';
import React, { MouseEventHandler, useState } from 'react';
import TableData from '../lib/table.data';

const NewTable = () => {
  const newTableData = TableData.map((x) => {
    x.isChecked = false;
    return x;
  });
  const [meme, setMeme] = useState(newTableData);

  const handlePreviewOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, checked } = event.target;
    const newMeme = meme.map((x) => {
      return { ...x, isChecked: checked };
    });
    setMeme(newMeme);
    console.log(id, checked);
  };
  const handleServiceItemOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, checked } = event.target;
    const newShit = meme.map((x) => {
      if (x.id.toString() == id) {
        return { ...x, isChecked: checked };
      } else {
        return x;
      }
    });
    setMeme(newShit);

    console.log(id, checked);
  };
  return (
    <div>
      <Navbar />
      <ServiceTable>
        <ServiceTableHeader>
          <ServiceTableRow>
            <Input
              onChange={handlePreviewOnChange}
              id="preview"
              type="checkbox"
            />
            <ServiceTableHeaderCell>
              <p>Preview</p>
            </ServiceTableHeaderCell>
            <ServiceTableHeaderCell>
              <p>Ratings</p>
            </ServiceTableHeaderCell>
          </ServiceTableRow>
        </ServiceTableHeader>

        <ServiceTableContent>
          {meme.map((x) => {
            return (
              <ServiceTableRowWrapper key={x.id}>
                <ServiceTableRow>
                  <Input
                    checked={x.isChecked}
                    id={`${x.id}`}
                    onChange={handleServiceItemOnChange}
                    type="checkbox"
                  />
                  <ServiceTableCell>
                    <Circle />
                    <p>{x.title}</p>
                  </ServiceTableCell>
                  <ServiceTableCell>
                    <p>{x.ratings}(s)</p>
                  </ServiceTableCell>
                </ServiceTableRow>
              </ServiceTableRowWrapper>
            );
          })}
        </ServiceTableContent>
      </ServiceTable>
    </div>
  );
};

const ServiceTable = styled.div`
  // max-width:546px;
`;
const ServiceTableHeader = styled.div``;
const ServiceTableContent = styled.div``;
const ServiceTableRowWrapper = styled.div`
  background-color: gray;
  border-bottom: 1px solid black;
`;
const ServiceTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 60% 40%;
  align-items: center;
`;
const ServiceTableHeaderCell = styled.div`
  padding: 10px 0 10px 20px;
`;
const ServiceTableCell = styled(ServiceTableHeaderCell)`
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding-left: 20px;
`;
const Circle = styled.div`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: pink;
`;
export default NewTable;
