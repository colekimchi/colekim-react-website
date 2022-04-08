import styled from 'styled-components'

export const ShowcaseCard = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  //max-height: 340px;
  height: 300px;
  width: 350px;
  padding: 30px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
    //z-index: 999;
  }
`

export const ImageWrapper = styled.div`
  //max-width: 250px;
  width: auto;
  display: flex;  
  flex-direction: row;
`

export const ShowcaseImage = styled.img`
  height: 200px;
  padding: 10px;
  object-fit: contain;
  margin-bottom: 10px;
  display: ${({display}) => (display ? 'block':'none')};
`

export const ShowcaseIcon = styled.img`
  height: 160px;
  width: 185px;
  object-fit: contain;
  margin-bottom: 10px;
`

export const ShowcaseH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const ShowcaseH2 = styled.h2`
  text-align: center;
  color: #000;
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ShowcaseP = styled.p`
  font-size: 1rem;
  color: #000;
  text-align: center;

`