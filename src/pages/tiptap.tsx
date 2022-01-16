import Navbar from '@/components/Navbar';
import { TIPTAP_CONFIG } from '@/components/TipTapEditor/config/config';
import styled from '@emotion/styled';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
const TipTap = () => {
  const editor = useEditor({
    extensions: [
      ...TIPTAP_CONFIG.extensions,
      Placeholder.configure({
        placeholder: `Type Something`,
      }),
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
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive(`bold`) ? `is-active` : ``}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive(`italic`) ? `is-active` : ``}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive(`heading`, { level: 1 }) ? `is-active` : ``}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive(`heading`, { level: 2 }) ? `is-active` : ``}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive(`heading`, { level: 3 }) ? `is-active` : ``}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive(`bulletList`) ? `is-active` : ``}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive(`orderedList`) ? `is-active` : ``}
      >
        ordered list
      </button>
    </>
  );
};
export default TipTap;
