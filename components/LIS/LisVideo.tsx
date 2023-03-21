"use client";
import { Card, CardBody } from "@chakra-ui/react";
import YouTube, { YouTubeProps } from "react-youtube";
const LisVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "720",
    width: "1280",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      showInfo: 0,
      controls: 0,
      autoHide: 0,
      modestBranding: 0,
      rel: 0,
      color: "white",
      loop: 1,
    },
  };
  return (
    <Card bg="purple.50" w="fit-content" mx="auto">
      <CardBody display={{ sm: "none", lg: "block" }}>
        <YouTube videoId="u8zI0LreY50" opts={opts} onReady={onPlayerReady} />
      </CardBody>
    </Card>
  );
};

export default LisVideo;
