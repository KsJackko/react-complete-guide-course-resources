import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  const [onSelect, setOnSelect] = useState();

  function handleSelect(selectedButton) {
    setOnSelect(selectedButton);
    console.log(onSelect);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              selected={onSelect === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              selected={onSelect === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              selected={onSelect === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              selected={onSelect === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>{' '}
          </>
        }
      >
        {!onSelect ? (
          <p>Please select a button!</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[onSelect].title}</h3>
            <p>{EXAMPLES[onSelect].description}</p>
            <pre>
              <code>{EXAMPLES[onSelect].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
