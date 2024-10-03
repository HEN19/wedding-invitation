import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

interface SelectFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange} required>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </Select>
  );
};

export default SelectField;
