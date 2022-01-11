import React, { useState } from 'react';
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
  HeadingToolbar,
  Plate,
} from '@udecode/plate';
import styles from '@/styles/Home.module.css';
import BasicElementToolbarButtons from '@/components/BasicElementToolbarButtons';
import BasicMarkToolbarButtons from '@/components/BasicMarkToolbar';
export default function Home() {
  const editableProps = {
    placeholder: `Type…`,
    style: {
      padding: `15px`,
    },
  };
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
    <div>
      <Navbar />
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
