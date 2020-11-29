import React, { useCallback, useState, ButtonHTMLAttributes } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  toggleItemSelected(): void;
};

const SideBarBtn: React.FC<ButtonProps> = ({
  children,
  toggleItemSelected,
}) => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => {
    setActive(prevState => !prevState);
    toggleItemSelected();
  }, [toggleItemSelected]);

  return (
    <Button active={active} onClick={toggleActive}>
      {children}
      {active ? <RemoveIcon /> : <AddIcon />}
    </Button>
  );
};

export default SideBarBtn;
