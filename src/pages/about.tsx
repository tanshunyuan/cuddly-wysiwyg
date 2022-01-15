import { Plate } from '@udecode/plate';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { createPlateUI, createPlugins } from '@udecode/plate';
import { PLUGINS } from '@/components/SlateEditor/config/plugins';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const initialValue = [
  { type: `h1`, children: [{ text: `Heading 1` }] },
  { type: `h2`, children: [{ text: `Heading 2` }] },
  { type: `h3`, children: [{ text: `Heading 3` }] },
  { children: [{ type: `p`, bold: true, text: `normal text` }] },
  {
    children: [
      { type: `p`, text: `normal text with ` },
      { type: `p`, text: `bold`, bold: true },
    ],
  },
  {
    children: [
      { type: `p`, text: `normal text with ` },
      { type: `p`, text: `bold`, bold: true },
      { type: `p`, text: ` and ` },
      { type: `p`, text: `italics`, italic: true },
    ],
  },
  {
    children: [
      { text: `normal text with ` },
      { text: `bold`, bold: true },
      { text: ` and ` },
      { text: `italics`, italic: true },
      { text: ` and ` },
      { text: `underline`, underline: true },
    ],
  },
  {
    children: [
      { text: `normal text with ` },
      { text: `bold`, bold: true },
      { text: ` and ` },
      { text: `italics`, italic: true },
      { text: ` and ` },
      { text: `underline`, underline: true },
      { text: ` and ` },
      { text: `strikethrough`, strikethrough: true },
    ],
  },
];
const TipTapDataJSON = {
  type: `doc`,
  content: [
    {
      type: `paragraph`,
      content: [
        {
          type: `text`,
          text: `something`,
        },
      ],
    },
    {
      type: `paragraph`,
      content: [
        {
          type: `text`,
          text: `sio`,
        },
      ],
    },
    {
      type: `paragraph`,
      content: [
        {
          type: `text`,
          marks: [
            {
              type: `bold`,
            },
          ],
          text: `this is a text `,
        },
      ],
    },
    {
      type: `bulletList`,
      content: [
        {
          type: `listItem`,
          content: [
            {
              type: `paragraph`,
              content: [
                {
                  type: `text`,
                  text: `this is a list`,
                },
              ],
            },
          ],
        },
        {
          type: `listItem`,
          content: [
            {
              type: `paragraph`,
              content: [
                {
                  type: `text`,
                  text: `1fljds`,
                },
              ],
            },
            {
              type: `bulletList`,
              content: [
                {
                  type: `listItem`,
                  content: [
                    {
                      type: `paragraph`,
                      content: [
                        {
                          type: `text`,
                          text: `shit`,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const TipTapDataHTML = `<p>this is rather insane</p><p>dafug</p><ol><li><p>List lah</p><ol><li><p>inner list</p><ol><li><p>inner inner inner list</p></li></ol></li></ol></li></ol>`;

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
    ],
  });
  editor?.commands.setContent(TipTapDataJSON);
  return (
    <div>
      <Navbar />
      <PlateEditor>
        <h1>Render Plate Editor Contents</h1>
        <Plate
          plugins={plugins}
          initialValue={initialValue}
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
