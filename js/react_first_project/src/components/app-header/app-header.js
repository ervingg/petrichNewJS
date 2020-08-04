import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;
//в h1 (можно юзать условия) color: ${props => props.colored ? 'red' : 'black'}

const AppHeader = ({liked, allPosts}) => {
  return (
    <Header colored>
      <h1>Ervin Khamoido</h1>
      <h2>{allPosts} posts, like {liked}</h2>
    </Header>
  )
}

export default AppHeader;	