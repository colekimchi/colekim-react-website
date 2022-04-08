import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import '../../App.css'
import ShowcaseFlipCard from './ShowcaseFlipCard'
import { TweeterFlipCard } from './ShowcaseFlipCard/Data'
import { ParsegramFlipCard } from './ShowcaseFlipCard/Data'
import { FlixterFlipCard } from './ShowcaseFlipCard/Data'
import { SBPYFlipCard } from './ShowcaseFlipCard/Data'


import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import CPAB from '../../images/codepathandroidbanner.png'
import VolumenLogo from '../../images/VolumenLogo.png'
import SBDW from '../../images/sbdatabase_walkthrough_faster.gif'
import Icon3 from '../../images/icon3.svg'
import Flixter from '../../images/Flixter_v2_GIF.gif'
import SimpleTweet1 from '../../images/SimpleTweet_v1.gif'
import SimpleTweet2 from '../../images/SimpleTweet_v2.gif'
import Parsegram from '../../images/ParseInstagram_v1.5.gif'

import{
    ShowcaseContainer,
    ShowcaseWrapper,
    ShowcaseH1,
    ShowcaseH2,
    ShowcaseCard,
    ShowcaseIcon,
    ShowcaseP,
    ShowcaseImage,
    ImageWrapper
} from './ShowcaseElements'


const Showcase = () => {

  return (
    <ShowcaseContainer id="projects">
      <ShowcaseH1> Projects / Experience </ShowcaseH1>
      <ShowcaseWrapper>
        <ShowcaseCard>
          <ShowcaseIcon src={CPAB}/>
          <ShowcaseH2>Codepath Android Remote</ShowcaseH2>
          <ShowcaseP>6-week remote intensive course covering multiple major aspects of android development. We built rudimental working versions of Twitter, Instagram, and a Movie rating app.</ShowcaseP>
        </ShowcaseCard>
        <ShowcaseFlipCard {...TweeterFlipCard}/>
        <ShowcaseFlipCard {...FlixterFlipCard}/>
        <ShowcaseFlipCard {...ParsegramFlipCard}/>
        <ShowcaseCard>
          <ShowcaseIcon src={VolumenLogo}/>
          <ShowcaseH2>Volumen Technologies Intern</ShowcaseH2>
          <ShowcaseP>Developed websites for clients using Squarespace, Shopify, and custom HTML and CSS. Websites under NDA.</ShowcaseP>
        </ShowcaseCard>
        <ShowcaseCard>
          <a id="gif" href={SBDW} target="_blank">
          <ShowcaseIcon src={SBDW}/></a>
          <ShowcaseH2>Volumen Technologies Intern</ShowcaseH2>
          <ShowcaseP>Developed a Python program to search businesses on Yelp and save the result to a Google Sheet using APIs. 
            Click the image to view walkthrough in a new tab.
            
          </ShowcaseP>
          
        </ShowcaseCard>
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ImageWrapper>
              <ShowcaseImage src={SimpleTweet1}/>
              <ShowcaseImage src={SimpleTweet2}/>
            </ImageWrapper>
            <ShowcaseH2>"Twitter" App</ShowcaseH2>
            <ShowcaseP class='showmore'>Click for details</ShowcaseP>
          </ShowcaseCard>
          </button>
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseH2>This is the back!</ShowcaseH2>
          </ShowcaseCard>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseImage src={Flixter}/>
            <ShowcaseH2>"Flixter"</ShowcaseH2>
            <ShowcaseP class='showmore'>Click for details</ShowcaseP>
          </ShowcaseCard>
          </button>
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseH2>"Flixter: Movie Rating App"</ShowcaseH2>
            <ShowcaseP></ShowcaseP>
          </ShowcaseCard>
          </button>
        </ReactCardFlip>
        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseImage src={Parsegram}/>
            <ShowcaseH2>"Instagram" App</ShowcaseH2>
            <ShowcaseP class='showmore'>Click for details</ShowcaseP>
          </ShowcaseCard>
          </button>
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseH2>This is the back!</ShowcaseH2>
          </ShowcaseCard>
          </button>
        </ReactCardFlip> */}

      </ShowcaseWrapper>
    </ShowcaseContainer>
  )
}

export default Showcase
