import styled from '@emotion/styled';
import { TIPTAP_CONFIG } from './config/config';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import MenuBar from './MenuBar';
import React, { useEffect, useState } from 'react';
const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: `Type Something`,
      }),
      ...TIPTAP_CONFIG.extensions,
    ],
  });
  const readonlyEditor = useEditor({
    editable: false,
    extensions: [...TIPTAP_CONFIG.extensions],
  });
  const [savedContent, setSavedContent] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const isContentEmpty = Object.entries(savedContent).length === 0;
  useEffect(() => {
    if (readonlyEditor !== null && !isContentEmpty) {
      readonlyEditor.commands.setContent(savedContent);
    }
  }, [readonlyEditor, savedContent, isContentEmpty]);
  const handleEditorSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editor != null && !editor.isEmpty) {
      setIsEdit(false);
      setSavedContent(editor.getJSON());
    }
  };
  return (
    <>
      {isContentEmpty || isEdit ? (
        <Container onSubmit={handleEditorSave}>
          <MenuBarContainer>
            <MenuBar editor={editor} />
          </MenuBarContainer>
          <EditorContainer>
            <EditorContent editor={editor} />
          </EditorContainer>
          <Footer>
            <Button type="submit">{!isEdit ? `Save` : `Update`}</Button>
            {isEdit && (
              <Button type="button" onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
            )}
          </Footer>
        </Container>
      ) : (
        <>
          <EditorContent editor={readonlyEditor} />
          <Button type="button" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </>
      )}
      <pre>{JSON.stringify(savedContent, null, 2)}</pre>
      <pre>{JSON.stringify(isContentEmpty, null, 2)}</pre>
    </>
  );
};
const Footer = styled.div`
  margin: 8px 8px 16px 8px;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 0.75rem;
  background: gray;
  padding: 1em 1.5em;
  border-radius: 0.3em;
  border: 0px;
  margin-left: 0.5em;
`;
const Container = styled.form`
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
