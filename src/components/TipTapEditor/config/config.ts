import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';

const nodes = [
  Document,
  Text,
  Paragraph,
  BulletList,
  ListItem,
  OrderedList,
  Heading,
];
const marks = [Bold, Italic];

export const TIPTAP_CONFIG = {
  extensions: [...nodes, ...marks],
};
