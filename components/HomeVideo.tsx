"use client";
import { Card, CardBody } from "@chakra-ui/react";
import YouTube, { YouTubeProps } from "react-youtube";

const HomeVideo = ({ videoId }: any) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "360",
    width: "640",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: videoId != "nLrx8DwIFQ8" ? 1 : 0,
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
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      </CardBody>
    </Card>
  );
};

export default HomeVideo;
