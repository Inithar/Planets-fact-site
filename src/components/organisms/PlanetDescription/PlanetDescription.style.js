import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div``;

export const PlanetImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 95px 0;

  ${device.tablet} {
    padding: 146px 0 130px;
  }

  ${device.bigTablet} {
    padding: 120px 0 130px;
    width: 100%;
  }
`;

export const Container = styled.div`
  ${device.bigTablet} {
    display: flex;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;

  ${device.tablet} {
    text-align: left;
  }
`;

export const DescriptionSection = styled.div`
  ${device.tablet} {
    display: flex;
    align-items: center;
    padding: 0 40px;
    min-height: 280px;
  }

  ${device.bigTablet} {
    flex-direction: column;
    padding-right: 0;
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }
`;
