import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  TagLabel,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";

import "./filtercss.css";
const Filters = () => {
  //   const [price, setprice] = useState(0);
  const [tempmin, settempmin] = useState(0);
  const [tempmax, settempmax] = useState(5000);
  const [max, setmax] = useState(5000);
  const [min, setmin] = useState(0);
  const [sliderValue, setSliderValue] = useState(min);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Box w={"340px"} p={"10px"} h={"100%"} >
      <Box w={"328px"}>
        <Box bg={"#ffffff"}>
          <Text> Filters</Text>
          <Box m={"7px"}>
            <Slider
              mt={"30px"}
              mb={"20px"}
              w={"268px"}
              id="slider"
              // defaultValue={10}
              min={min}
              max={max}
              colorScheme="teal"
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderMark value={min} mt="1" ml="-2.5" fontSize="sm">
                {min}
              </SliderMark>

              <SliderMark value={max} mt="1" ml="-2.5" fontSize="sm">
                {max}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}₹`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </Box>
        </Box>
        <Flex bg={"#ffffff"}>
          <Box>
            <lable>Min</lable>
            <input
              type={"number"}
              className="inp"
              onChange={(e) => settempmin(e.target.value)}
              placeholder="min"
            />
          </Box>
          <Text p={"5px"} mt={"10"}>
            to
          </Text>
          <Box>
            <lable>Max</lable>
            <input
              type={"number"}
              className="inp"
              onChange={(e) => settempmax(e.target.value)}
              placeholder="max"
            />
          </Box>
          <Button
          mt={"10%"}
            h={"36px"}
            w={"50px"}
            bg={"#003380"}
            colorScheme={"#003380"}
            onClick={() => {
              setmax(tempmax);
              setmin(tempmin);
            }}
          >
            <Text fontSize={"14px"}> GO</Text>
          </Button>
        </Flex>
        <Stack
          mt={"7px"}
          p={"10px"}
          h={"100px"}
          bg={"#ffffff"}
          textAlign={"start"}
        >
          <h4 fontSize={"14px"} color={"#5a5a59"}>
            Availability
          </h4>

          <Checkbox> Exclude out of Stock</Checkbox>
        </Stack>
        <Stack
          mt={"7px"}
          p={"10px"}
          h={"100px"}
          bg={"#ffffff"}
          textAlign={"start"}
        >
          <h4 fontSize={"14px"} color={"#5a5a59"}>
            Category
          </h4>

          <Checkbox> Sports & Fitneww Watches</Checkbox>
          <Checkbox> Wearable Technology</Checkbox>
        </Stack>
        <Stack
          mt={"7px"}
          p={"10px"}
          h={"100px"}
          bg={"#ffffff"}
          textAlign={"start"}
        >
          <h4 fontSize={"14px"} color={"#5a5a59"}>
            Brand
          </h4>

          <Checkbox> boAt</Checkbox>
        </Stack>
      </Box>
    </Box>
  );
};

export default Filters;
