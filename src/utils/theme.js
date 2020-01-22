import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#ffff';
const lightShades = '#0000ffff';
const darkAccent = '#f39c12';
const darkShades = '#000000';
const greyshade = '#5d6b82';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#8B8989',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Open Sans', sans-serif",
  secondaryFontFamily: "'Open Sans', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
  greyshade: '#5d6b82',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 17px;
  }
  .title {
    font-family: ${theme.primaryFontFamily};
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  .p {
     line-height: 5rem;
     }
  .title, .box {
    color: ${theme.textColor} !important;
  }
  .subtitle {
    color: ${lighten(0.06, theme.textColor)} !important;
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-secondary {
    color: ${theme.mainBrandColor};
    background-color: ${theme.greyshade};
    transition: background-color .3s ;
    :hover {
      background-color: ${theme.darkAccent};
    }
  }
  .button.is-link {
    color: ${theme.mainBrandColor};
    border-color: ${theme.mainBrandColor};
    background-color: transparent;
    transition: background-color .3s ;
    :hover {
      background-color: ${theme.darkAccent};
    }
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  hr{
    background-color: ${theme.darkAccent} !important
  }
`;

export default GlobalStyle;
