import {
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  ListToolbarButton,
  usePlateEditorRef,
} from '@udecode/plate';
import { FormatListBulleted, FormatListNumbered } from 'styled-icons/material';

const ListToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </>
  );
};
export default ListToolbarButtons;
