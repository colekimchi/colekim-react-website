import React, {useState} from 'react'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

import Typical from 'react-typical';
import {HeroContainer,
    HeroBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    PFPWrapper, 
    ArrowForward, 
    ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';
import pfp from '../../images/myportraitsquare.JPG';

// import { FaArrowRight } from 'react-icons/fa';


export const HeroSection = () => {
const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <P5Wrapper sketch={sketch}/>
            </HeroBg>
            <HeroContent>
                <PFPWrapper src={pfp}/>
                <HeroH1>
                <Typical
                        loop={1}
                        wrapper="p"
                        steps={['Hello,', 2000, 'Hello, my name is Cole Kim.']}
                    />
                </HeroH1>
                <HeroP class="code"> 
                <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[6000, 
                            'aspiring Software Engineer', 2000,
                            'aspiring Drummer', 2000,
                            'aspiring Political Activist', 2000,
                            'aspiring Music Educator', 2000]}
                    />
                </HeroP>
            <HeroBtnWrapper>
                <Button to="about" 
                    onMouseEnter ={onHover} 
                    onMouseLeave ={onHover}
                    primary = 'false'
                    dark='false'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Continue{hover ? <ArrowForward/>:<ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
