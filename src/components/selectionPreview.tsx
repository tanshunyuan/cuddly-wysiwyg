import styled from '@emotion/styled';
const selectionPreview = ({ items }: { items: any }) => {
  return (
    <Toolbar>
      <ToolbarStatus>
        {items.length} record is selected:
        <ToolbarLink type="button">
          <span>Delete</span>
        </ToolbarLink>
      </ToolbarStatus>
    </Toolbar>
  );
};
const Toolbar = styled.div`
  background-color: black;
  color: white;
`;
const ToolbarStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;
const ToolbarLink = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  background: none;
  color: white;
  border: none;
  outline: none;
  span {
    text-decoration: underline;
  }
`;
export default selectionPreview;
