"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import HomeVideo from "./HomeVideo";

import YouTube, { YouTubeProps } from "react-youtube";

const VideoSection = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "135",
    width: "285",

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
    <Box w="full" h="3xl" bg={"brand.700"} py={16} px={16}>
      <Text
        align="center"
        textColor="brand.900"
        fontWeight={"semibold"}
        fontSize="3xl"
        mb={5}
      >
        VIDEOS YOU MAY LIKE
      </Text>
      <Flex>
        <Flex direction={"column"}>
          <HomeVideo />
          <Text color={"brand.900"} fontSize="xl" mt={5} fontWeight={"bold"}>
            RelyHRM (HR & Payroll Management Software)
          </Text>
          <Text mt={2}>
            RelyHRM software is designed to automate the Human resources process
            of an organization
          </Text>
        </Flex>
        <Flex flexDirection={"column"} ml={10}>
          <Flex>
            <YouTube
              videoId="u8zI0LreY50"
              opts={opts}
              onReady={onPlayerReady}
            />
            <Flex ml={5}>
              <Text>Rely HIS(Hospital Management System)</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VideoSection;
