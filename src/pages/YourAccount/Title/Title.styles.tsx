import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  ${media(DisplaySize.Tablet)} {
    display: flex;
    align-items: center;
    gap: 2rem;

    h1 {
      margin: 0;
    }
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    font-weight: bold;
    font-size: ${vars.fontSize.default.tiny};
    color: ${vars.color.mediumGrey};

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
      color: ${vars.color.red};
    }
  }
`;
