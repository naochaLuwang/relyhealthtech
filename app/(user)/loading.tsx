"use client";
import { Flex } from "@chakra-ui/react";
import BoltLoader from "../../components/BoltLoader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Flex w="full" h="3xl" justify={"center"} align={"center"}>
        <BoltLoader />
      </Flex>
    </>
  );
}
