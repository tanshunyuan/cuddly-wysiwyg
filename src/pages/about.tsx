import { Plate } from '@udecode/plate';
import Navbar from '../components/Navbar';
import {
  createBasicMarksPlugin,
  createBlockquotePlugin,
  createHeadingPlugin,
  createLinkPlugin,
  createListPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  createTodoListPlugin,
} from '@udecode/plate';
import Link from 'next/link';
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

const components = createPlateUI();

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createTodoListPlugin(),
    createHeadingPlugin(),
    createLinkPlugin(),
    createListPlugin(),
    createBasicMarksPlugin(),
  ],
  {
    components,
  },
);
const About = () => {
  return (
    <div>
      <Navbar />
      <Plate
        plugins={plugins}
        initialValue={initialValue}
        id="readonly"
        editableProps={{ readOnly: true }}
      ></Plate>
    </div>
  );
};
export default About;
