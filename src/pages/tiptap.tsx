import Navbar from '@/components/Navbar';
import { TIPTAP_CONFIG } from '@/components/TipTapEditor/config/config';
import styled from '@emotion/styled';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
const TipTap = () => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: `Type Something`,
      }),
      ...TIPTAP_CONFIG.extensions,
    ],
  });
  return (
    <div>
      <Navbar />
      <TipTapContainer>
        <MenuBarContainer>
          <MenuBar editor={editor} />
        </MenuBarContainer>
        <EditorContainer>
          <EditorContent editor={editor} />
        </EditorContainer>
      </TipTapContainer>
      <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
    </div>
  );
};
const TipTapContainer = styled.div`
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
const IconButton = styled.button<{ isActive: boolean }>`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  border-radius: 0.25em;
  background: ${(props) => (props.isActive ? `gray` : `none`)};
  color: ${(props) => props.isActive && `white`};
`;
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  return (
    <>
      <IconButton
        isActive={editor.isActive(`heading`, { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <i className="ri-h-1 ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`heading`, { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <i className="ri-h-2 ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`heading`, { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <i className="ri-h-3 ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`bold`)}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className="ri-bold ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`italic`)}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className="ri-italic ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`orderedList`)}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <i className="ri-list-unordered ri-1x"></i>
      </IconButton>
      <IconButton
        isActive={editor.isActive(`unorderedList`)}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <i className="ri-list-ordered ri-1x"></i>
      </IconButton>
    </>
  );
};
export default TipTap;
