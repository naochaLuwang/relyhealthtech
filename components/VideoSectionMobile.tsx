"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import YouTube, { YouTubeProps } from "react-youtube";

const VideoSectionMobile = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "210",
    width: "380",

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
    <Box
      w="full"
      h="auto"
      bg={"brand.700"}
      py={16}
      px={{ lg: 16, sm: 8 }}
      display={{ base: "block", lg: "none" }}
    >
      <Text
        align="center"
        textColor="brand.900"
        fontWeight={"semibold"}
        fontSize="3xl"
        mb={5}
      >
        VIDEOS YOU MAY LIKE
      </Text>
      <Flex flexDirection={"column"} align="center">
        <Flex flexDirection={"column"} ml={{ lg: 8, sm: 0 }}>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            w="full"
            align="center"
            justify={"center"}
          >
            <Box
              w="fit-content"
              p={{ lg: 2, sm: 0 }}
              bg="white"
              mx={{ sm: 7, lg: 0 }}
            >
              <YouTube
                videoId="SlOdDXMNqwo"
                opts={opts}
                onReady={onPlayerReady}
              />
            </Box>

            <Flex px={5} direction="column" mt={{ base: 5, lg: 0 }}>
              <Text fontSize={"medium"} fontWeight="bold" color={"brand.900"}>
                Rely RIS(Radiology Information System)
              </Text>
              <Text fontSize={"xs"} mt={2}>
                It is a web based ERP developed using latest technologies to
                manage working of a hospital in a paperless environment trusted
                by esteemed clients
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            w="full"
            align="center"
            justify={"center"}
            mt={{ lg: 3, base: 5 }}
          >
            <Box
              w="fit-content"
              p={{ lg: 2, sm: 0 }}
              bg="white"
              mx={{ sm: 7, lg: 0 }}
            >
              <YouTube
                videoId="u8zI0LreY50"
                opts={opts}
                onReady={onPlayerReady}
              />
            </Box>

            <Flex px={5} direction="column" mt={{ base: 5, lg: 0 }}>
              <Text fontSize={"medium"} fontWeight="bold" color={"brand.900"}>
                Rely LIS(Laboratory Information System)
              </Text>
              <Text fontSize={"xs"} mt={2}>
                It is a web based ERP developed using latest technologies to
                manage working of a hospital in a paperless environment trusted
                by esteemed clients
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Link
          href="https://www.youtube.com/@relyhealthcaretechnologies6441/videos"
          target="_blank"
          className="mt-10 bg-brand text-buttonColor shadow-md rounded-3xl text-base font-medium w-fit py-2 px-4 "
        >
          See More
        </Link>
      </Flex>
    </Box>
  );
};

export default VideoSectionMobile;
