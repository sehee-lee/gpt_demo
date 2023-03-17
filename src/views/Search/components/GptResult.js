import {
  Flex,
  Spacer,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const GptResult = ({ prompt, result}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");

  return (
    <Card minHeight='50px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "100%" }}>

            <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
              <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                prompt
              </Text>
              {prompt}
              <br />
              <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                GPT
              </Text>
              {result}
            </Box>

          </Flex>
          <Spacer />

        </Flex>
      </CardBody>
    </Card>
  );
};

export default GptResult;
