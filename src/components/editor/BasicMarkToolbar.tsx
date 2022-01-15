import {
  getPluginType,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_ITALIC,
  usePlateEditorRef,
} from '@udecode/plate';
import { FormatBold, FormatItalic } from 'styled-icons/material';

const BasicMarkToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
    </>
  );
};
export default BasicMarkToolbarButtons;
