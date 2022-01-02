import React, { useState } from 'react';

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
  HeadingToolbar,
  Plate,
} from '@udecode/plate';
import styles from '@/styles/Home.module.css';
import BasicElementToolbarButtons from '@/components/BasicElementToolbarButtons';
import BasicMarkToolbarButtons from '@/components/BasicMarkToolbar';
import Link from 'next/link';
export default function Home() {
  const editableProps = {
    placeholder: `Type…`,
    style: {
      padding: `15px`,
    },
  };
  // const initialValue = [
  //   {
  //     children: [{ text: `Some text to testing`, type: 'p' }],
  //   },
  // ];
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
      createBasicMarksPlugin(),
    ],
    {
      components,
    },
  );

  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <div>
        <HeadingToolbar>
          <BasicElementToolbarButtons />
          <BasicMarkToolbarButtons />
        </HeadingToolbar>
        <Plate
          id="og"
          editableProps={editableProps}
          // initialValue={initialValue}
          onChange={(newValue: any) => setDebugValue(newValue)}
          plugins={plugins}
        />
        value: {JSON.stringify(debugValue, null, 2)}
      </div>
    </div>
  );
}
