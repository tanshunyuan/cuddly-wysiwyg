import { Plate } from '@udecode/plate';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { createPlateUI, createPlugins } from '@udecode/plate';
import { PLUGINS } from '@/components/SlateEditor/config/plugins';
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
  [...PLUGINS.basicNodes, ...PLUGINS.listElements, ...PLUGINS.utils],
  {
    components,
  },
);
const About = () => {
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
    </div>
  );
};
const PlateEditor = styled.div`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
`;
export default About;
