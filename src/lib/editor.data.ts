export const plateInitialValue = [
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

export const TipTapDataJSON = {
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
export const TipTapDataHTML = `<p>soemthing </p><h1>hi</h1><ul><li><p>this</p><ul><li><p>this is not</p></li></ul></li></ul>`;
