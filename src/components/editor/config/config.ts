/* eslint-disable @typescript-eslint/ban-types */
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  ExitBreakPlugin,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
  PlatePlugin,
  ResetNodePlugin,
  SoftBreakPlugin,
} from '@udecode/plate';

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

interface Config {
  exitBreak: Partial<PlatePlugin<{}, ExitBreakPlugin>>;
  resetBlockType: Partial<PlatePlugin<{}, ResetNodePlugin>>;
  softBreak: Partial<PlatePlugin<{}, SoftBreakPlugin>>;
}
export const CONFIG: Config = {
  resetBlockType: {
    options: {
      rules: [
        {
          ...resetBlockTypesCommonRule,
          hotkey: `Enter`,
          predicate: isBlockAboveEmpty,
        },
        {
          ...resetBlockTypesCommonRule,
          hotkey: `Backspace`,
          predicate: isSelectionAtBlockStart,
        },
      ],
    },
  },
  exitBreak: {
    options: {
      rules: [
        {
          hotkey: `mod+enter`,
        },
        {
          hotkey: `mod+shift+enter`,
          before: true,
        },
        {
          hotkey: `enter`,
          query: {
            start: true,
            end: true,
            allow: KEYS_HEADING,
          },
        },
      ],
    },
  },
  softBreak: {
    options: {
      rules: [
        { hotkey: `shift+enter` },
        {
          hotkey: `enter`,
          query: {
            allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
          },
        },
      ],
    },
  },
};
