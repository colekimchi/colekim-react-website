import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitch, FaLinkedin } from 'react-icons/fa'
import '../../App.css'
import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from './FooterElements'


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Links</FooterLinkTitle>
                <a target="_blank" href="https://github.com/colekimchi">Github</a>
                {/* <a target="_blank" href="https://www.youtube.com/channel/UCVhjORVDU5B7y76TwCv6Z4Q">Youtube</a> */}
                <a target="_blank" href="https://www.linkedin.com/in/cole-kim-31a600193/">LinkedIn</a>
                {/* <FooterLink to='/'>Website Home</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Socials</FooterLinkTitle>
                <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> More Links</FooterLinkTitle>
                <FooterLink to='/signin'>Sign-In </FooterLink>
              </FooterLinkItems>
              {/* <FooterLinkItems>
                <FooterLinkTitle>More More Links</FooterLinkTitle>
                <a target="_blank" href="https://www.instagram.com/">Instagram Placeholder</a>
                
              </FooterLinkItems> */}
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/colekim-react-website' onClick={toggleHome}>
                Back to Top
              </SocialLogo>
              <WebsiteRights>
                 © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/colekim-react-website" target="_blank"
                aria-label="Instagram">
                  <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/in/cole-kim-31a600193/" target="_blank"
                aria-label="LinkedIn">
                  <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink href="https://www.youtube.com/channel/UCVhjORVDU5B7y76TwCv6Z4Q" target="_blank"
                aria-label="Youtube">
                  <FaYoutube/>
                </SocialIconLink>

              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
