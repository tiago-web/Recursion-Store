import React, {
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
  Icon,
} from './styles';

interface CheckboxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  isChecked?: boolean;
  disabled?: boolean;
  handleCheckboxChange?(checked: boolean, name: string): void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  disabled,
  children,
  isChecked = false,
  handleCheckboxChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isChecked) setChecked(true);
  }, [isChecked]);

  const handleChange = useCallback(() => {
    if (handleCheckboxChange) handleCheckboxChange(!checked, name);

    setChecked(!checked);
  }, [handleCheckboxChange, checked, name]);

  return (
    <CheckboxContainer onClick={handleChange}>
      <HiddenCheckbox
        name={name}
        type="checkbox"
        disabled={disabled}
        {...rest}
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
