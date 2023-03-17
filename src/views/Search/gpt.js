/*global kakao*/
import {
    Flex,
    Grid, IconButton,
    Input, InputGroup, InputLeftElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import React, {useState} from "react";
import axios from "axios";
import GptResult from "./components/GptResult";
import CircularProgress from '@material-ui/core/CircularProgress';

const Gpt = () => {

    let inputBg = useColorModeValue("white", "gray.800");
    let mainTeal = useColorModeValue("teal.300", "teal.300");
    let searchIcon = useColorModeValue("gray.700", "gray.200");
    let mainText = useColorModeValue("gray.700", "gray.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("#F8F9FA", "gray.800");


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            requsetGptApi()
        }
    }

    const requsetGptApi = async () => {
        const gptEndPoint = "https://api.openai.com/v1/completions"
        const key = "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"

        setLoading(true)

        axios
            .post(
                gptEndPoint,
                {
                    model: "text-davinci-003",
                    prompt: prompt,
                    max_tokens: 1000,
                    n: 1,
                    stop: null,
                    temperature: 0.7
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${key}`
                    }
                })
            .then((res) => {
                setGptRes(res.data.choices[0].text)
                console.log(res.data.choices[0].text)
                setLoading(false)
            })
            .catch((res) => {
                alert("검색 실패")
                setLoading(false)
            })
    }

    const [prompt, setPrompt] = useState("");
    const [gptRes, setGptRes] = useState("");
    const [loading, setLoading] = useState(false);

    return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
        <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
           input prompt
        </Text>
        <InputGroup
            cursor="pointer"
            bg={inputBg}
            borderRadius="15px"
            me={{ sm: "auto", md: "20px" }}
            _focus={{
                borderColor: { mainTeal },
            }}
            _active={{
                borderColor: { mainTeal },
            }}
        >
            <InputLeftElement
                children={
                    <IconButton
                        bg="inherit"
                        borderRadius="inherit"
                        _hover="none"
                        _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                        icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
                    ></IconButton>
                }
            />
            <Input
                fontSize="xs"
                py="11px"
                color={mainText}
                placeholder="Type danji query"
                borderRadius="inherit"
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                    const value = e.target.value;
                    setPrompt(value)
                }}
            />
        </InputGroup>
      <Grid
          my='26px'
          gap='24px'>
          {loading === true ? <p>검색 중 입니다. 잠시만 기다려 주세요.</p> : null}
          {loading === true ? <CircularProgress color="secondary" /> : null}
        <GptResult
            prompt={prompt}
            result={gptRes}
        />

      </Grid>
    </Flex>
  );
}
export default (Gpt);