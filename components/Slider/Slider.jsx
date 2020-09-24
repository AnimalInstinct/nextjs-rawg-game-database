import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

export default function Slider({images}) {
  const [activeSlide, setActiveSlide] = useState(0)
  const Slider = styled.div`
    position: relative;
  `

  const Slide = styled.div`
    width:100%;
    ${({ index }) => index == activeSlide ? `
      display: block;
      transition: opacity 1s ease-out;
      opacity: 1;
    `: `
      display: none;
      transition: opacity 1s ease-out;
      opacity: 0;
    `}
    
  `

  const Image = styled.img`
    width:100%;
  `

  const Next = styled.div`
  right: 0;
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  -webkit-user-select: none;
  height: 100vh;
  `

  const Prev = styled.div`
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  -webkit-user-select: none;
  height: 100vh;
  `


  const Previews = styled.div`
    display: flex;
  `

  const Preview = styled.img`
    width: 5px;
    flex-grow: 1;
    cursor: pointer;
    ${({ index }) => index == activeSlide ? `
      padding: 0;
      opacity: 1;
    `: `
      padding: 5px;
      opacity: 0.5;
    `}
  `

  

  
  useEffect(() => {
    setActiveSlide(0)
  }, [images])

  const handleNext = () => {
    let next
    if (activeSlide == images.length - 1){
      next = 0
    } else {
      next = activeSlide + 1
    }
    setActiveSlide(next)
  }

  const handlePrev = () => {
    let prev
    if (activeSlide == 0){
      prev = images.length - 1
    } else {
      prev = activeSlide - 1
    }
    setActiveSlide(prev)
  }
  

  return (
    <Slider>
      {images && images.map((image, index) => 
        <Slide index={index} key={image.id} id={image.id}>
          <Image src={image.image} />
        </Slide>
      )}
      <Next onClick={() => handleNext()}>&#8594;</Next>
      <Prev onClick={() => handlePrev()}>&#8592;</Prev>
      <Previews>
        {images && images.map((image, index) =>
          <Preview index={index} src={image.image} onClick={() => setActiveSlide(index)}/>
        )}
      </Previews>
    </Slider>
  )
}


