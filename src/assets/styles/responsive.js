const size = {
  bigMobile: '500px',
  tablet: '768px',
  bigTablet: '992px',
  desktop: '1440px'
};

export const device = {
  bigMobile: `@media (min-width: ${size.bigMobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  bigTablet: `@media (min-width: ${size.bigTablet})`,
  desktop: `@media (min-width: ${size.desktop})`
};
