import { chakra, Flex } from "@chakra-ui/react";
import { MessageCard, Sidebar } from "@components";
import { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <chakra.main>
                {/* <Layout></Layout> */}
                <Sidebar>
                    <Flex direction="column" mb={12}>
                        <chakra.h1 mb={3} fontSize="2xl">
                            Messages from Admins
                        </chakra.h1>
                        <MessageCard
                            title="Pinned Message"
                            desc="ABC Company task top priority get it done before 24th April"
                            by="Manoj Chaudhary"
                        />
                    </Flex>
                    <Flex
                        flex="1"
                        // justify="space"
                        // gap="auto"
                        w="full"
                        h="full"
                        flexWrap="wrap"
                    >
                        <MessageCard
                            title="About task 4"
                            desc="ABC Company task top priority get it done before 24th April"
                            by="Suresh Kumar"
                        />
                        <MessageCard
                            title="About task 9"
                            desc="ABC Company task top priority get it done before 24th April"
                            by="Mathew Joseph"
                        />
                    </Flex>
                </Sidebar>
            </chakra.main>
        </>
    );
};

export default Dashboard;
