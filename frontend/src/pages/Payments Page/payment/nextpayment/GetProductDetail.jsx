import React, { useEffect, useState } from "react";
import axios from "axios";
import "../payment.css";
import { Box, Flex, Text } from "@chakra-ui/react";

function GetProductDetail({ id, qty }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetailId(id).then((res) => {
      setDetail(res);
      //   console.log(res.name);
    });
  }, []);
  return (
    <div>
      <Flex sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="pari_diff">{detail.title}</Box>
        <Flex sx={{ display: "flex", justifyContent: "start", gap: "20px" }}>
          <Box className="pari_diff">Qty: {qty}</Box>

          <Box className="pari_diff" display={"flex"}>
            Price: ₹{detail.price}.00
          </Box>
        </Flex>
      </Flex>
    </div>
  );
}

const getDetailId = async (id) => {
  return await axios
    .get(`https://comicadigitalbackend.up.railway.app/api/products/${id}`)
    .then((res) => res.data);
};
export default GetProductDetail;
