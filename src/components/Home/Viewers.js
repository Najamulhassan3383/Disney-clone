import React, { useState } from "react";
import styled from "styled-components";
import marvel from "../images/viewers-marvel.png";
import pixar from "../images/viewers-pixar.png";
import disney from "../images/viewers-disney.png";
import starwars from "../images/viewers-starwars.png";
import national from "../images/viewers-national.png";
import marvel_video from "../videos/1564676115-marvel.mp4";
import pixar_video from "../videos/1564676714-pixar.mp4";
import disney_video from "../videos/1564674844-disney.mp4";
import starwars_video from "../videos/1608229455-star-wars.mp4";
import national_video from "../videos/1564676296-national-geographic.mp4";

function Viewers() {
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    setPlaying(true);
  };

  const stopVideo = () => {
    setPlaying(false);
  };

  return (
    <Container>
      <Wrap
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onClick={playing ? stopVideo : playVideo}
      >
        <img src={marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={!playing}>
          <source src={marvel_video} type="video/mp4" />
        </video>
        {!playing && <PlayButton />}
      </Wrap>
      <Wrap
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onClick={playing ? stopVideo : playVideo}
      >
        <img src={pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={!playing}>
          <source src={pixar_video} type="video/mp4" />
        </video>
        {!playing && <PlayButton />}
      </Wrap>
      <Wrap
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onClick={playing ? stopVideo : playVideo}
      >
        <img src={disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={!playing}>
          <source src={disney_video} type="video/mp4" />
        </video>
        {!playing && <PlayButton />}
      </Wrap>
      <Wrap
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onClick={playing ? stopVideo : playVideo}
      >
        <img src={starwars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={!playing}>
          <source src={starwars_video} type="video/mp4" />
        </video>
        {!playing && <PlayButton />}
      </Wrap>
      <Wrap
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onClick={playing ? stopVideo : playVideo}
      >
        <img src={national} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={!playing}>
          <source src={national_video} type="video/mp4" />
        </video>
        {!playing && <PlayButton />}
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding-top: 40%;
  }
`;

const PlayButton = styled.button`
  border-radius: 50%;
  font-size: 15px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(249, 249, 249, 0.8);
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  opacity: 0;
  transition: opacity 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgba(249, 249, 249, 0.9);
  }
`;
