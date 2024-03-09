import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src=""
        />
        <Card.Header>Teste React</Card.Header>
        <Card.Description>
          Dev
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
