import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div``;

export const PlanetImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 95px 0;

  ${device.tablet} {
    padding: 146px 0 130px;
  }

  ${device.bigTablet} {
    width: 100%;
  }
`;

export const Container = styled.div`
  ${device.bigTablet} {
    display: flex;
    margin-top: 210px;
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
    padding-right: 165px;
    width: 50%;
  }
`;
