import {
  BlockToolbarButton,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  getPluginType,
  usePlateEditorRef,
} from '@udecode/plate';
import { Looks3 } from '@styled-icons/material/Looks3';
import { LooksOne } from '@styled-icons/material/LooksOne';
import { LooksTwo } from '@styled-icons/material/LooksTwo';

const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef();

  return (
    <>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />
    </>
  );
};

export default BasicElementToolbarButtons;
