import { Box, Grid, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./index.module.css"

export function MobileAndTablets() {
  return (
    <Box
      bgImage={`url(
        "https://www.reliancedigital.in/medias/Mobiles-Tablet-Menu-Banners-04-01-2021-01.jpg?context=bWFzdGVyfGltYWdlc3wxMTkxOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gxNy85NTIwNDc1MzczNTk4LmpwZ3xjMmU0NzlmMWZjODQyMmFmNDZhMjA2NTUwZTVhNTI4ODcxMWVkZjM5YzgyNDY3YTE3ODU1OWM0NGQyY2E4MmVi"
      )`}
      bgRepeat="no-repeat"
      bgSize={"cover"}
      display={"flex"}
      gap={"20px"}
      textAlign="left"
    >
        <div className={styles.mobile_maindiv_A}>
          <ul>
            <li className={styles.mobile_li_A}>Smartphones</li>
          </ul>
          <ul>
            <li className={styles.mobile_li_A}>Wearable Technology</li>
            <li>Boat New Launch</li>
          </ul>
          <ul>
            <li className={styles.mobile_li_A}>
              <span>Accessories</span>
            </li>
            <li>Tablet Accessories</li>
            <li>Mobile Accessories</li>
            <li>Mobile Grips &amp; Stands</li>
            <li>Car Mobile Holders</li>
            <li>Memory Cards</li>
            <li>Cables &amp; Cords</li>
            <li>Chargers &amp; Adapters</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.mobile_li_A}>Headphones &amp; Headsets</li>
          </ul>
          <ul>
            <li className={styles.mobile_li_A}>Tablets &amp; eReaders</li>
            <li>Every Day use Tablets below 15000</li>
            <li>Premium Tablets, Above 15001</li>
          </ul>
          <ul>
            <li className={styles.mobile_li_A}>Power Banks</li>
          </ul>
          <ul>
            <li className={styles.mobile_li_A}>eSlates</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.mobile_li_A}>AI Learning Robots</li>
          </ul>
        </div>
    </Box>
  );
}
