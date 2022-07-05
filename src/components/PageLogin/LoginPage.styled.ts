import { Box } from 'grommet';
import styled, { css } from 'styled-components';

const disabledLinkStyle = css`
  pointer-events: none !important;
  cursor: default;
  color: #ccc;
  display: inline-block;
`;

export const LoginBoxContainer = styled(Box)`
  flex-basis: 30%;
  min-width: 360px;
  flex-direction: column;
  background: #fff;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    min-height: 100vh;
  }

  a[disabled],
  a.disabled,
  [aria-disabled='true'] {
    ${disabledLinkStyle}
    span {
      ${disabledLinkStyle}
    }
  }
`;

export const InfoBoxContainer = styled(Box)`
  flex-basis: 70%;
  max-width: calc(100% - 360px);
  flex-direction: row;
  align-items: center;
  background-image: linear-gradient(#071f6d 0%, #030d2c 22.92%, #071749 100%);
  background-color: #071749;

  @media (max-width: 768px) {
    flex-basis: 50%;
    max-width: 100%;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
`;
