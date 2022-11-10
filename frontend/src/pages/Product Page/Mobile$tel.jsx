import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Mobile$tel = (
  <Box bg={"#093373"}>
    <SimpleGrid
      columns={{
        base: 1,
        md: 3,
        lg: 5,
      }}
      pos="relative"
      gap={{
        base: 6,
        sm: 8,
      }}
      px={5}
      py={6}
      p={{
        sm: 8,
      }}
    >
      <Stack textAlign={"start"}  >
        <Heading
          m={"3px"}
          textDecoration={"underline"}
          fontSize={"14px"}
          color={"#ffffff"}
        >
          Smartphones
        </Heading>

        <Stack m={"3px"}>
          <Heading
            m={"3px"}
            textDecoration={"underline"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Wearable Technology
          </Heading>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Boat New Launch
          </Text>
        </Stack>
        <Stack gap={"5px"}>
          <Heading
            textDecoration={"underline"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Accessories
          </Heading>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Tablet_Accessories
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Mobile_Accessories
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Mobile Grips & Stands
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Car Mobile Holders
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Memory Cards
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Chargers & Adapters
          </Text>
        </Stack>
      </Stack>

      <Stack textAlign={"start"}>
        <Heading
          m={"3px"}
          textDecoration={"underline"}
          fontSize={"14px"}
          color={"#ffffff"}
        >
          Headphones & Headsets
        </Heading>

        <Stack m={"3px"}>
          <Heading
            m={"3px"}
            textDecoration={"underline"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Tablets & eRaders
          </Heading>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Every Day use Tablets below 15000
          </Text>
          <Text
            cursor={"pointer"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Premium Tablets, About 15001
          </Text>
        </Stack>
        <Stack gap={"5px"}>
          <Heading
            textDecoration={"underline"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            Power Banks
          </Heading>
        </Stack>
        <Stack gap={"5px"}>
          <Heading
            textDecoration={"underline"}
            m={"3px"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            eSlates
          </Heading>
        </Stack>
      </Stack>

      <Stack textAlign={"start"}>
        <Stack m={"3px"}>
          <Heading
            m={"3px"}
            textDecoration={"underline"}
            fontSize={"14px"}
            color={"#ffffff"}
          >
            AI Learning Robots
          </Heading>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Box>
);

export default Mobile$tel;
