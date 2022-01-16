// import { Plate } from '@udecode/plate';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { createPlateUI, createPlugins } from '@udecode/plate';
import { PLUGINS } from '@/components/SlateEditor/config/plugins';
import { EditorContent, useEditor } from '@tiptap/react';
import { Plate } from '@udecode/plate';
import { plateInitialValue, TipTapDataJSON } from '@/lib/editor.data';
import { TIPTAP_CONFIG } from '@/components/TipTapEditor/config/config';
import { useEffect } from 'react';

const components = createPlateUI();
const plugins = createPlugins(
  [...PLUGINS.basicNodes, ...PLUGINS.listElements, ...PLUGINS.utils],
  {
    components,
  },
);

const About = () => {
  const editor = useEditor({
    editable: false,
    extensions: [...TIPTAP_CONFIG.extensions],
  });
  useEffect(() => {
    if (editor !== null) {
      editor.commands.setContent(TipTapDataJSON);
    }
  }, [editor]);
  return (
    <div>
      <Navbar />
      <PlateEditor>
        <h1>Render Plate Editor Contents</h1>
        <Plate
          plugins={plugins}
          initialValue={plateInitialValue}
          id="readonly"
          editableProps={{ readOnly: true }}
        ></Plate>
      </PlateEditor>
      <TipTapEditor>
        <h1>Render TipTap Editor Contents</h1>
        <EditorContent editor={editor} />
      </TipTapEditor>
    </div>
  );
};
const PlateEditor = styled.div`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
const TipTapEditor = styled.div`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
`;
export default About;
