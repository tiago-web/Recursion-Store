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
    if (!disabled) {
      if (handleCheckboxChange) handleCheckboxChange(!checked, name);

      setChecked(!checked);
    }
  }, [handleCheckboxChange, disabled, checked, name]);

  return (
    <CheckboxContainer disabled={disabled} onClick={handleChange}>
      <HiddenCheckbox
        disabled={disabled}
        name={name}
        type="checkbox"
        {...rest}
      />
      <StyledCheckbox disabled={disabled} checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
