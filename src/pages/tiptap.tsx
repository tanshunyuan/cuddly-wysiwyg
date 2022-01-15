import Navbar from '@/components/Navbar';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const TipTap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        strike: false,
        dropcursor: false,
        gapcursor: false,
        code: false,
        horizontalRule: false,
        blockquote: false,
        codeBlock: false,
      }),
      Placeholder.configure({
        placeholder: `Type Something`,
      }),
    ],
  });
  return (
    <div>
      <Navbar />
      <div>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
    </div>
  );
};

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
