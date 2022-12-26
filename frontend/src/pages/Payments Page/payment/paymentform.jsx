import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import "./payment.css";
import Paymet from "./Paymet";
import axios from "axios";
import Editpayment from "./Editpayment";
import { Link } from "react-router-dom";
const Paymentform = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const [address, setAddress] = useState([]);

  async function getData() {
    try {
      let res = await axios.get(
        `https://comicadigitalbackend.up.railway.app/api/addresses/userId/${user.userId}`
      );

      console.log(res.data);
      setAddress(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://comicadigitalbackend.up.railway.app/api/addresses/${id}`
      );
      alert("Address Deleted Successfully");
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, [address]);

  return (
    <Box sx={{ backgroundColor: "#f5f7f7" }}>
      <br />
      <br />

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          padding: "20px 30px",
          border: "1px solid black",
          height: "auto",
          borderRadius: "4px",
          backgroundColor: "white",
          textAlign: "start",
        }}
      >
        <h4>SHIPPING ADDRESS</h4>
        <br />
        <Flex alignItems="center" flexWrap={"wrap"} gap="50px">
          {address?.map((item) => {
            return (
              <Box
                key={item._id}
                sx={{
                  width: "38%",
                  height: "auto",
                  borderRadius: "8px",
                  backgroundColor: "#f5f7f7",
                  border: "1px solid #dddddd",

                  textAlign: "start",
                }}
                p={3}
              >
                <h6 class="owl_schl">
                  {item?.firstname} {item.lastname}
                </h6>

                <Text
                  sx={{
                    marginLeft: "13px",
                    color: "black",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                >
                  {item.address}, {item.city}, {item.city}-{item.pincode},{" "}
                  {item.state}
                </Text>

                <Text
                  sx={{
                    marginLeft: "13px",
                    color: "black",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                >
                  <b id="spcl_b">Mobile : </b>
                  {item.mobile}
                </Text>
                <br />
                <br />
                <Flex>
                  <Button className="raja_wat">
                    <Editpayment />
                  </Button>
                  <Button
                    onClick={() => handleDelete(item?._id)}
                    className="raja_wat"
                  >
                    Delete
                  </Button>
                </Flex>
              </Box>
            );
          })}
        </Flex>

        <br />

        <Box
          sx={{
            border: "1px solid #dddddd",
            width: "100%",
            margin: "auto",
            height: "auto",
            marginTop: "20px",
            padding: "0px 0px 20px 4px",
          }}
        >
          <Box
            sx={{
              textAlign: "start",
              widht: "100%",
              borderBottom: "1px solid #dddddd",
              padding: "20px 0px",
              backgroundColor: "#f5f7f7",
            }}
          >
            <Text sx={{ color: "black", padding: "0px 30px" }}>
              Select Delivery Method
            </Text>
          </Box>
          <Box>
            <Flex>
              <Button
                id="instant_pri"
                sx={{ width: "20%", margin: "10px 0 20px 30px" }}
              >
                INSTANT DELIVERY
              </Button>
              <Button
                id="stand_pri"
                sx={{ width: "20%", margin: "10px 0 20px 20px" }}
              >
                STANDARD DELIVERY
              </Button>
            </Flex>

            <p className="pin_pr">
              {" "}
              * Either your PIN code or some items in your Order are not
              eligible for INSTA Delivery.
            </p>
            <p className="pin_pr">
              {" "}
              * Delivery assurance is subject to our delivery locations staying
              open as per govt. regulation
            </p>
            <div class="TextWeb__Text-sc-1cyx778-0">*Please Note:</div>

            <div class="pin_pr">
              1) OTP is required for delivery completion.
            </div>
            <div class="pin_pr">
              2) For additional information, refer <b>Read T&C's</b>
            </div>
          </Box>
        </Box>
        <br />
        <br />

        <Flex
          sx={{
            borderTop: "1px solid #dddddd",
            gap: "20px",
            padding: "7px 0px 0px 7px",
          }}
        >
          <Link to="/nextpayment/upi">
            <Button
              variant={"blackAlpha"}
              color="white"
              bgColor="red.500"
              disabled={address.length === 0}
            >
              DELIVER HERE
            </Button>
          </Link>

          <Paymet />
        </Flex>
      </Box>
      <br />
      <br />
    </Box>
  );
};

export default Paymentform;
