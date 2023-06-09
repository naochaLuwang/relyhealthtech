"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import HomeVideo from "./HomeVideo";

import YouTube, { YouTubeProps } from "react-youtube";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const VideoSection = () => {
  const [videoId, setVideoId] = useState("nLrx8DwIFQ8");
  const [videoTitle, setVideoTitle] = useState(
    "RelyHRM (HR & Payroll Management Software)"
  );

  const [videoDescription, setVideoDescription] = useState(
    "RelyHRM software is designed to automate the Human resources process of an organization"
  );
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100",
    width: "200",

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
      h="3xl"
      bg={"brand.700"}
      py={16}
      px={{ lg: 16, sm: 8 }}
      display={{ base: "none", lg: "block" }}
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
      <Flex>
        <Flex direction={"column"} display={{ base: "none", lg: "flex" }}>
          <HomeVideo videoId={videoId} />
          <Text color={"brand.900"} fontSize="xl" mt={5} fontWeight={"bold"}>
            {videoTitle}
          </Text>
          <Text mt={2}>{videoDescription}</Text>
        </Flex>
        <Flex flexDirection={"column"} ml={{ lg: 8, sm: 0 }}>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            w="full"
            align="center"
            justify={"center"}
            cursor="pointer"
            onClick={() => {
              setVideoId("SlOdDXMNqwo");
              setVideoTitle("Rely HIS integration with PACs and RIS");
              setVideoDescription(
                "It is a web based ERP developed using latest technologies to manage working of a hospital in a paperless environment trusted by esteemed clients"
              );
            }}
          >
            <Box
              w="fit-content"
              p={{ lg: 2, sm: 0 }}
              bg="white"
              mx={{ sm: 7, lg: 0 }}
            >
              <Image
                src="/thumb1.jpeg"
                width={380}
                height={200}
                alt="Thumbnail 1"
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
            cursor="pointer"
            mt={{ lg: 3, base: 5 }}
            onClick={() => {
              setVideoId("u8zI0LreY50");
              setVideoTitle("Rely HIS integration with LIS");
              setVideoDescription(
                "It is a web based ERP developed using latest technologies to manage working of a hospital in a paperless environment trusted by esteemed clients"
              );
            }}
          >
            <Box
              w="fit-content"
              p={{ lg: 2, sm: 0 }}
              bg="white"
              mx={{ sm: 7, lg: 0 }}
            >
              <Image
                src="/thumb2.jpeg"
                width={380}
                height={200}
                alt="Thumbnail 1"
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

          <Link
            href="https://www.youtube.com/@relyhealthcaretechnologies6441/videos"
            target="_blank"
            className="mt-10 bg-brand text-buttonColor shadow-md rounded-3xl text-base font-medium w-fit py-2 px-4 "
          >
            See More
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VideoSection;
