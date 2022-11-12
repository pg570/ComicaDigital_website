import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function MultiSliderCart({data}) {
  return (
    <VStack height={"100%"} justifyContent="center" alignItems={"center"} color="black" >
        <Image src={data.img} height="50%" width={"60%"}/> 
        <Text>{data.name}</Text>
        <Text>{data.offer}</Text>
    </VStack>
  )
}

export default MultiSliderCart