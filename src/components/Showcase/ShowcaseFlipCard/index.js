import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import { FaGithub } from 'react-icons/fa'

import{
  ShowcaseH1,
  ShowcaseH2,
  ShowcaseCard,
  ShowcaseIcon,
  ShowcaseP,
  ImageWrapper,
  ShowcaseImage
} from './FlipCardElements'

const ShowcaseFlipCard = ({img1, hasTwoImages, img2, frontHead, backHead, backP, ghlink}) => {
  // const [isFlipped, setIsFlipped] =useState(false);
  // const toggle = () => {
  //   setIsFlipped(!isFlipped);
  // }
  return (
    <div>
      <a href={ghlink} target="_blank">
      <ShowcaseCard>
            <ImageWrapper>
              <ShowcaseImage display = {1} src={img1}/>
              <ShowcaseImage display = {hasTwoImages ? 1 : 0} src={img2}/>
            </ImageWrapper>
            <ShowcaseH2>{frontHead}</ShowcaseH2>
            <ShowcaseP class='showmore'>Click to view on Github  <FaGithub/> </ShowcaseP>
      </ShowcaseCard>
      </a>
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ImageWrapper>
              <ShowcaseImage display = {1} src={img1}/>
              <ShowcaseImage display = {hasTwoImages ? 1 : 0} src={img2}/>
            </ImageWrapper>
            <ShowcaseH2>{frontHead}</ShowcaseH2>
            <ShowcaseP class='showmore'>Click for details</ShowcaseP>
          </ShowcaseCard>
          </button>
          <button onClick={toggle} class="hidden">
          <ShowcaseCard>
            <ShowcaseH2>{backHead}</ShowcaseH2>
            <ShowcaseP>{backP}</ShowcaseP>
          </ShowcaseCard>
          </button>
        </ReactCardFlip> */}
    </div>
  )
}

export default ShowcaseFlipCard
