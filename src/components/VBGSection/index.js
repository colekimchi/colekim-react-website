
import Video from '../../videos/video.mp4';
import '../../App.css'
import {SectionContainer,
    SectionBg, 
    VideoBg,
    SectionContent,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Disclaimer
     } from './VBGSectionElements';
// import { FaArrowRight } from 'react-icons/fa';


const VBGSection = () => {

    return (
        <SectionContainer id="music">
          <SectionBg>
                <VideoBg autoPlay loop muted src={Video} 
                    type='video/mp4'/>
          </SectionBg>
          <SectionContent>
            <InfoRow>
                    <Column1>
                     <TextWrapper>
                        <TopLine>Music interests</TopLine>
                        <Heading lightText='true'>Drumline & Music Production</Heading>
                        <Subtitle >Battery composition and arrangement
                          <br/>Electronic Music Production
                          <br/>High School Percussion Instructor
                          <br/>WGI Snare drummer
                        </Subtitle>
                        <BtnWrap>
                           <a id="musescoreButton"
                           href="https://musescore.com/user/2667556"
                           target="_blank"
                           >MuseScore</a>
                        </BtnWrap>
                    </TextWrapper>
                    
                    </Column1>
                    <Column2>
                      <ImgWrap>
                        <Img src={require('../../images/dl-sheet-music-stock.jpg').default}/>
                        <Img src={require('../../images/indoor-drumline-stock.jpg').default}/>
                      </ImgWrap>
                    </Column2>
                </InfoRow>
                <Disclaimer>
                  <br/>
                  This footage belongs to Pulse Percussion and Marching Vlogs. I don't own it!
                </Disclaimer>
            </SectionContent>
        </SectionContainer>
    );
};

export default VBGSection