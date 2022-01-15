import {
  toggleIndentList,
  ToolbarButton,
  usePlateEditorRef,
} from '@udecode/plate';
import { FormatListBulleted, FormatListNumbered } from 'styled-icons/material';

const IndentToolbarButtons = () => {
  const editor = usePlateEditorRef();
  return (
    <>
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          toggleIndentList(editor, {
            listStyleType: `disc`,
          });
        }}
        icon={<FormatListBulleted />}
      />
      <ToolbarButton
        onMouseDown={(e) => {
          e.preventDefault();
          toggleIndentList(editor, {
            listStyleType: `decimal`,
          });
        }}
        icon={<FormatListNumbered />}
      />
    </>
  );
};
export default IndentToolbarButtons;
