import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

import '../../index.css';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30 px;
    height: 1000px;
    position: relative;
    z-index: 1;

`;

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content:center;
    background: #0f0f0f;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size:40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size:20px;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`

export const HeroBtnWrapper = styled.div`
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

export const PFPWrapper = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 4px solid white;
`