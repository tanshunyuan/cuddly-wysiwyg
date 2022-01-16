import Navbar from '@/components/Navbar';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import TableData, { ITableData } from '../lib/table.data';
import SelectionPreview from '../components/selectionPreview';

const NewTable = () => {
  const [dataWCheckbox, setDataWCheckbox] = useState(
    TableData.map((data) => ({ ...data, isChecked: false })),
  );
  const [selected, setSelected] = useState<ITableData[]>([]);
  useEffect(() => {
    setSelected(dataWCheckbox.filter((data) => data.isChecked));
  }, [dataWCheckbox]);
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setDataWCheckbox((prevState) => {
      console.log({ prevState });
      return prevState.map((data) => ({
        ...data,
        isChecked: checked,
      }));
    });
  };

  const handleServiceItemChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, id, checked } = event.target;
    console.log({ name, id, checked });
    setDataWCheckbox((prevState) => {
      return prevState.map((data) => {
        if (data.id.toString() == id) {
          return { ...data, isChecked: checked };
        } else {
          return data;
        }
      });
    });
  };
  return (
    <div>
      <Navbar />
      <ServiceTable>
        <ServiceTableHeader>
          <ServiceTableRow>
            <Input onChange={handleSelectAll} id="selectAll" type="checkbox" />
            <ServiceTableHeaderCell>
              <p>Preview</p>
            </ServiceTableHeaderCell>
            <ServiceTableHeaderCell>
              <p>Ratings</p>
            </ServiceTableHeaderCell>
          </ServiceTableRow>
        </ServiceTableHeader>

        <ServiceTableContent>
          {dataWCheckbox.map((x) => {
            return (
              <ServiceTableRowWrapper key={x.id}>
                <ServiceTableRow>
                  <Input
                    checked={x.isChecked}
                    id={`${x.id}`}
                    onChange={handleServiceItemChange}
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
      {selected.length > 0 && (
        <SelectionPreview items={selected}></SelectionPreview>
      )}
    </div>
  );
};

const ServiceTable = styled.div``;
const ServiceTableHeader = styled.div`
  box-shadow: inset 0px -1px 0px #f0f0f0;
`;
const ServiceTableContent = styled.div``;
const ServiceTableRowWrapper = styled.div`
  box-shadow: inset 0px -1px 0px #f0f0f0;
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
