import {
  createBasicMarksPlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createListPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createTodoListPlugin,
} from '@udecode/plate';
import { CONFIG } from '@/components/SlateEditor/config/config';
const listElements = createPlugins(
  [createListPlugin(), createTodoListPlugin()],
  { components: createPlateUI() },
);
const basicElements = createPlugins(
  [createParagraphPlugin(), createHeadingPlugin()],
  { components: createPlateUI() },
);
const utils = createPlugins([
  createResetNodePlugin(CONFIG.resetBlockType),
  createSoftBreakPlugin(CONFIG.softBreak),
  createExitBreakPlugin(CONFIG.exitBreak),
]);

export const PLUGINS = {
  basicNodes: createPlugins([...basicElements, createBasicMarksPlugin()], {
    components: createPlateUI(),
  }),
  listElements,
  utils,
};
