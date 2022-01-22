import styled from '@emotion/styled';
import { Editor } from '@tiptap/react';
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
export default MenuBar;
