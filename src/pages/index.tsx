import React, { useState } from 'react';
import Plain from 'slate-plain-serializer';

import {
  createBlockquotePlugin,
  createHeadingPlugin,
  createLinkPlugin,
  createListPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  createTodoListPlugin,
  HeadingToolbar,
  Plate,
} from '@udecode/plate';
import styles from '@/styles/Home.module.css';
import BasicElementToolbarButtons from '@/components/BasicElementToolbarButtons';
export default function Home() {
  const editableProps = {
    placeholder: `Type…`,
    style: {
      padding: `15px`,
    },
  };
  const initialValue = [
    {
      children: [{ text: `Some text to testing` }],
    },
  ];
  const [debugValue, setDebugValue] = useState(null);

  const components = createPlateUI();

  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createLinkPlugin(),
      createListPlugin(),
    ],
    {
      components,
    },
  );

  return (
    <div className={styles.container}>
      <div>
        <HeadingToolbar>
          <BasicElementToolbarButtons />
        </HeadingToolbar>
        <Plate
          editableProps={editableProps}
          initialValue={initialValue}
          onChange={(newValue) => setDebugValue(newValue)}
          plugins={plugins}
        />
        value: {JSON.stringify(debugValue)}
      </div>
    </div>
  );
}
