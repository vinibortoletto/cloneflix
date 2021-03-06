import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const Button = styled.button`
  background-color: ${vars.color.red};
  padding: 0 0.7rem;
  border-radius: ${vars.borderRadius};

  &.grey {
    background-color: ${vars.color.mediumGrey};
    color: ${vars.color.darkGrey};
  }
`;
