/**
 * Main application theme
 * @see https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
 */
import { ThemeType } from 'grommet';
import { css } from 'styled-components';

export default {
  global: {
    font: {
      size: '1rem',
      family: 'Miami Sans',
    },

    size: {
      topMenuHeight: '60px',
      topMenuPad: '30px',
      loginFormWidth: '80%',
      loginFormHeight: '80%',
      sideRailDefaultSize: '60%',
    },

    colors: {
      brand: '#311989',
      black: '#000000',
      border: '#E6E6E6',
      blue: '#4969F0',
      topMenuBackground: '#fff',
      pageBackground: '#fff',
      mainBackground: '#f9f8f7',
      focus: undefined,
      sideRailBackground: '#fff',
      lightGrey1: '#EFF0F3',
      lightGrey2: '#F4F4F4',
      lightGrey3: '#E0E1E7',
      lightGrey4: '#F7F7F8',
      lightGrey5: '#E0E2E9',
      grey1: '#B4B7C3',
      green: '#27AE60',
      red: '#D41010',
      yellow: '#F0BB32',
    },

    control: {
      border: {
        radius: '4px',
      },
    },

    input: {
      font: {
        weight: 400,
      },
    },

    breakpoints: {
      small: {
        value: 768,
      },
    },
  },

  button: {
    border: {
      radius: '2px',
      color: '#fff',
    },
  },

  table: {
    header: {
      extend: () => css`
        color: #b4b7c3;
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        border-bottom: 1px solid #e6e6e6;
      `,
    },
    extend: () => css`
      width: 100%;
      background-color: #ffffff;
      font-size: 14px;
      font-weight: 400;

      tr {
        height: 50px;
      }

      tr.selected {
        background: #efefef;
      }

      tr.hover:hover {
        background: #efefef;
        cursor: pointer;
      }
    `,
  },

  dataTable: {
    header: {
      color: '#b4b7c3',
      font: {
        size: '14px',
      },
      extend: () => css`
        text-transform: uppercase;
      `,
    },
    body: {
      extend: () => css`
        background-color: #ffffff;
        font-size: 14px;
        font-weight: 400;
      `,
    },
  },

  list: {
    item: {
      border: { color: '#b4b7c3', side: 'bottom', size: '1px' },
    },
  },

  text: {
    medium: {
      size: '16px',
      height: '24px',
    },
  },
} as ThemeType;
