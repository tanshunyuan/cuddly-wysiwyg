import React, { useState } from 'react';
import styled from '@emotion/styled';
import { createPlateUI, createPlugins, Plate } from '@udecode/plate';
import BasicElementToolbarButtons from '@/components/editor/BasicElementToolbarButtons';
import BasicMarkToolbarButtons from '@/components/editor/BasicMarkToolbar';
import ListToolbarButtons from './editor/ListToolbarButtons';
import { PLUGINS } from './editor/config/plugins';

const Editor = () => {
  const editableProps = {
    placeholder: `Start Typing...`,
    style: {
      padding: `15px`,
    },
  };
  const [debugValue, setDebugValue] = useState(null);

  const components = createPlateUI();

  const plugins = createPlugins(
    [...PLUGINS.basicNodes, ...PLUGINS.listElements, ...PLUGINS.utils],
    {
      components,
    },
  );
  return (
    <MdEditor>
      <EditorToolbar>
        <BasicElementToolbarButtons />
        <BasicMarkToolbarButtons />
        <ListToolbarButtons />
      </EditorToolbar>
      <PlateContainer>
        <Plate
          id="og"
          editableProps={editableProps}
          onChange={(newValue: any) => setDebugValue(newValue)}
          plugins={plugins}
        />
      </PlateContainer>
      value: {JSON.stringify(debugValue, null, 2)}
    </MdEditor>
  );
};
const MdEditor = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 200px;
`;
const EditorToolbar = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 1rem 0.5rem;
`;
const PlateContainer = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  margin: 8px 8px 16px 8px;
`;
export default Editor;
