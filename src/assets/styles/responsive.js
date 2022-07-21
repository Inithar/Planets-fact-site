const size = {
  bigMobile: '500px',
  tablet: '768px',
  desktop: '1440px',
  smallDesktop: '1200px',
};

export const device = {
  bigMobile: `@media (min-width: ${size.bigMobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  smallDesktop: `@media (min-width: ${size.smallDesktop})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
