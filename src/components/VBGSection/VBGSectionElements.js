import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const SectionContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30 px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, 
            rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;

    }
`;

export const SectionBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const SectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px;
`

export const TopLine = styled.p`
  color: #B0DAF1;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#fff' :'#3E1929')};

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#ffffff')};
`

export const BtnWrap = styled.div`
  display:flex;
  justify-content:flex-start;
`

export const ImgWrap = styled.div`
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
  overflow:hidden;
  border-radius: 25px;
  @media screen and (max-width: 768px){
     width: 50%;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 50%;
  padding-right: 0;
  // @media screen and (max-width: 768px){
  //   width: 75%;
  // }
`


export const SectionBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Disclaimer = styled.small`
  color: #fff;
  font-size: 70%;
  opacity: 50%;
  margin-top: 16px;
  margin-bottom: 16px;
`