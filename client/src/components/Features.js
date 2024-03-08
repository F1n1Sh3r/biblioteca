import React from 'react';
import { List } from 'semantic-ui-react';

const Features = () => {
  const list = [
    'React 18'
  ];

  return (
    <List>
      {list.map((item, idx) => (
        <List.Item key={idx}>
          <List.Icon name="checkmark" />
          <List.Content>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Features;
