import React, { useCallback, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SideBarBtn from '../SideBarBtn';

import { Container, Options } from './styles';
import formatLabelToName from '../../../utils/formatLabelToName';

interface SideBarProps {
  title: string;
  items: string[];
}

const SideBarItem: React.FC<SideBarProps> = ({ title, items }) => {
  const [selected, setSelected] = useState(false);

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  return (
    <Container>
      <SideBarBtn toggleItemSelected={toggleItemSelected}>{title}</SideBarBtn>
      <Options selected={selected}>
        <ul>
          {items.map(item => (
            <li key={item}>
              <FormControlLabel
                control={
                  <Checkbox name={formatLabelToName(item)} color="primary" />
                }
                label={item}
              />
            </li>
          ))}
        </ul>
      </Options>
    </Container>
  );
};

export default SideBarItem;
