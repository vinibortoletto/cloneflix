import styled from 'styled-components/macro'
import { media } from '../../helpers/styles/mixins'
import { vars } from '../../helpers/styles/variables'

export const Container = styled.div`
  position: relative;
  margin-right: 0.5rem;

  ${media(550)} {
    margin-right: 1.5rem;
  }

  &::before {
    content: '🌐';
    position: absolute;
    top: 0.5rem;
    left: 0.4rem;
    filter: grayscale(1) contrast(3);
    pointer-events: none;
  }

  &::after {
    content: '▼';
    position: absolute;
    top: 0.6rem;
    left: 6.6rem;
    transform: scaleX(1.5) scale(0.6);
    pointer-events: none;
    font-size: 0.7rem;
  }

  label {
    display: block;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    margin: -1px;
    clip: rect(0 0 0 0);
    border: 0;
  }

  select {
    padding: 0.4rem 1.7rem;
    border: 1px solid ${vars.color.lightGrey};
    border-radius: ${vars.borderRadius};
    appearance: none;
    background-color: transparent;
  }

  option {
    background: black;
  }
`
