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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckBoxComp from "./CheckBoxComp";

import "./filtercss.css";
const Filters = () => {
  //   const [price, setprice] = useState(0);
  const [tempmin, settempmin] = useState(0);
  const [tempmax, settempmax] = useState(5000);
  const [max, setmax] = useState(5000);
  const [min, setmin] = useState(0);
  const [sliderValue, setSliderValue] = useState(min);
  const [showTooltip, setShowTooltip] = useState(false);

  let [arr, setarr] = useState([]);
  let [temparr, settemparr] = useState([]);
  var { category } = useParams();

  useEffect(() => {
    console.log(category);
    try {
      axios
        .get(
          `https://comicadigitalbackend.up.railway.app/api/products?search=${category}`
        )
        .then((res) => settemparr(res.data));
      // console.log(arr)
      // setTimeout(() => {
      //   sortfun()
      // }, 5000);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  useEffect(() => {
    try {
      console.log(category);
      console.log(temparr);
      let newarr = [
        ...new Map(temparr.map((item) => [item["brand"], item])).values(),
      ];

      console.log(newarr);

      setarr(newarr);
    } catch (err) {
      console.log(err.message);
    }
  }, [temparr]);
  return (
    <Box w={"340px"} p={"10px"} h={"100%"}>
      <Box w={"328px"}>
        <Box bg={"#ffffff"}>
          <Text> Filters</Text>
        </Box>
        <Box bg={"#ffffff"} m={"7px"}>
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
            <Text p={"5px"} mt={"30px"}>
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
        </Box>
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
          <div style={{ display: "flex" }}>
            <Checkbox> </Checkbox>

            <p>Sports & Fitneww Watches</p>
          </div>
          <div style={{ display: "flex" }}>
            <Checkbox> </Checkbox>
            <p>Wearable Technology</p>
          </div>
        </Stack>
        <Stack mt={"7px"} p={"10px"} bg={"#ffffff"} textAlign={"start"}>
          <h4 fontSize={"14px"} color={"#5a5a59"}>
            Brand
          </h4>
          {arr.map((e) => (
            <CheckBoxComp brand={e.brand} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Filters;
