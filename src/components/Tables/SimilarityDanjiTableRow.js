import {
    Badge,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import danji from "../../views/Search/components/Danji";

function SimilarityDanjiTableRow(props) {
  let { danjiname, age, enter_date, near_conveniences, nearest_subway_stations, near_hate_facilities, areaname_d3} = props;
  const textColor = useColorModeValue("gray.700", "white");
  if (age === -999) {
      age = ""
  }
    return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {danjiname}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {age}
        </Text>
      </Td>
        <Td>
            <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                {enter_date}
            </Text>
        </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {near_conveniences.map((tile) => (
                <dev>
                    <Badge
                        color="blue.400"
                        p="3px 10px"
                        borderRadius="8px"
                    >
                        {tile}
                    </Badge>
                    &nbsp;
                </dev>
            ))}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {nearest_subway_stations.map((tile) => (
                <dev>
                    <Badge
                        color="green.400"
                        p="3px 10px"
                        borderRadius="8px"
                    >
                        {tile}
                    </Badge>
                    &nbsp;
                </dev>
            ))}
        </Text>
      </Td>
        <Td>
            <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                {near_hate_facilities.map((tile) => (
                    <dev>
                        <Badge
                            color="red.400"
                            p="3px 10px"
                            borderRadius="8px"
                        >
                            {tile}
                        </Badge>
                        &nbsp;
                    </dev>
                ))}
            </Text>
        </Td>
    </Tr>
  );
}

export default SimilarityDanjiTableRow;
