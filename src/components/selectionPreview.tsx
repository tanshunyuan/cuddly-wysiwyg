import styled from '@emotion/styled';
const selectionPreview = ({ items }: { items: any }) => {
  return (
    <Toolbar>
      <ToolbarStatus>
        {items.length} record is selected: <Link>Delete</Link>
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
const Link = styled.button`
  text-decoration: none;
  border-bottom: 1px solid white;
  margin-left: 1rem;
`;
export default selectionPreview;
