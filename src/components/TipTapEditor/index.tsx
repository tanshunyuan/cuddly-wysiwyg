import styled from '@emotion/styled';
import { TIPTAP_CONFIG } from './config/config';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from './MenuBar';
const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: `Type Something`,
      }),
      ...TIPTAP_CONFIG.extensions,
    ],
  });
  return (
    <Container>
      <MenuBarContainer>
        <MenuBar editor={editor} />
      </MenuBarContainer>
      <EditorContainer>
        <EditorContent editor={editor} />
      </EditorContainer>
      <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid black;
  border-radius: 4px;
`;
const MenuBarContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 1rem 0.5rem;
  button {
    margin-right: 8px;
  }
`;
const EditorContainer = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  margin: 8px 8px 16px 8px;
`;
export default TipTapEditor;
