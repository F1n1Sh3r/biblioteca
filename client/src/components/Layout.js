import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';


const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
      <Header as="h1" className="h1">
          React-Project
        </Header>
      </Link>
      {children}
      <Divider />
      <p>
        Made with <Icon name="heart" color="red" /> 
      </p>
    </Container>
  );
};

export default Layout;
