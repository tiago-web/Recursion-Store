import React, { useCallback, useState } from 'react';

import SideBarBtn from '../SideBarBtn';

import { Container, Options } from './styles';

interface SideBarProps {
  title: string;
}

const SideBarItem: React.FC<SideBarProps> = ({ children, title }) => {
  const [selected, setSelected] = useState(false);

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  return (
    <Container>
      <SideBarBtn toggleItemSelected={toggleItemSelected}>{title}</SideBarBtn>
      <Options selected={selected}>{children}</Options>
    </Container>
  );
};

export default SideBarItem;
