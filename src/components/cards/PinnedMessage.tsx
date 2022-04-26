import React from "react";
import { chakra, Flex, Image, Text } from "@chakra-ui/react";

const MessageCard: React.FC<{
    title: string;
    desc: string;
    by: string;
}> = ({ title, desc, by }) => {
    return (
        <Flex
            px={1}
            align="center"
            w="500px"
            rounded="sm"
            h="175px"
            justify="space-between"
        >
            <Image
                h="170px"
                w="170px"
                objectFit="cover"
                rounded="md"
                src="https://images.unsplash.com/photo-1644976541214-2a5d7e1a1f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
            <Flex
                w="300px"
                h="170px"
                direction="column"
                justify="space-between"
                py={2}
            >
                <Flex direction="column">
                    <Text as={chakra.h1}>{title}</Text>
                    <Text as={chakra.h1} color="brand.highlight">
                        {desc}
                    </Text>
                </Flex>
                <Flex>
                    <Text as={chakra.h1} color="gray.500">
                        By:
                    </Text>
                    &nbsp;
                    <Text as={chakra.h1} fontWeight="bold" color="gray.700">
                        {by}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MessageCard;
