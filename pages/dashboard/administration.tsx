import { Avatar, chakra, Flex } from "@chakra-ui/react";
import { Sidebar, Table, PinnedMessage } from "@components";
import { administration, LinkItemProps } from "@types";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { BsFileEarmarkSpreadsheet, BsPeople } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import { Column } from "react-table";

const Administration: NextPage = () => {
    const data = useMemo<administration[]>(
        () => [
            {
                members: [
                    "https://bit.ly/ryan-florence",
                    "https://bit.ly/sage-adebayo",
                    "https://bit.ly/kent-c-dodds",
                    "https://bit.ly/prosper-baba",
                    "https://bit.ly/code-beast",
                ],
                role: "Admin",
            },
            {
                members: [
                    "https://bit.ly/kent-c-dodds",
                    "https://bit.ly/prosper-baba",
                    "https://bit.ly/code-beast",
                ],
                role: "Teacher",
            },
            {
                members: [
                    "https://bit.ly/kent-c-dodds",
                    "https://bit.ly/prosper-baba",
                    "https://bit.ly/code-beast",
                ],
                role: "Student",
            },
        ],
        [],
    );

    const tableDatas = useMemo<any>(
        () => [
            [
                {
                    name: "Hari Vishnu Parashar",
                    profilePic: (
                        <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                        />
                    ),
                },
                {
                    name: "Chhed Singh",
                    profilePic: (
                        <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                        />
                    ),
                },
            ],
            [
                {
                    name: "Haha Ok SIngh",
                    profilePic: (
                        <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                        />
                    ),
                },
                {
                    name: "Illegal Singh",
                    profilePic: (
                        <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                        />
                    ),
                },
            ],
            [
                {
                    name: "Pancho Singh",
                    profilePic: (
                        <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                        />
                    ),
                },
                {
                    name: "MKC Singh",
                    profilePic: (
                        <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                        />
                    ),
                },
            ],
        ],
        [],
    );

    const columns = useMemo(
        () =>
            [
                {
                    Header: "Role",
                    accessor: "role",
                },
                {
                    Header: "Members",
                    accessor: "members",
                },
            ] as readonly Column<administration>[],

        [],
    );
    const tableColumns = useMemo(
        () =>
            [
                {
                    Header: "Name",
                    accessor: "name",
                },
                {
                    Header: "Profile",
                    accessor: "profilePic",
                },
            ] as readonly Column<any>[],

        [],
    );
    const router = useRouter();
    console.log(router.pathname);
    const LinkItems: Array<LinkItemProps> = [
        { name: "Dashboard", icon: FiHome, link: "/dashboard" },
        {
            name: "View Inventory",
            icon: BsFileEarmarkSpreadsheet,
            link: "/dashboard/inventory",
            active: router.pathname === "/dashboard/inventory",
        },
        {
            name: "Administration",
            icon: BsPeople,
            link: "/dashboard/administration",
            active: router.pathname === "/dashboard/administration",
        },
    ];
    return (
        <>
            <Head>
                <title>Dashboard | Administration</title>
            </Head>
            <main>
                <Sidebar linkItems={LinkItems}>
                    <Flex w="full" h="full" direction="column">
                        <Flex mb={8}>
                            <PinnedMessage
                                title="Class hehe"
                                desc="Description"
                                by="Delhi"
                            />
                        </Flex>
                        <Flex justify="space-between">
                            <chakra.h1
                                fontSize="xl"
                                display="flex"
                                alignItems="center"
                                fontWeight="500"
                                mx={5}
                                gap={2}
                            >
                                Administration
                                <RiAdminFill />
                            </chakra.h1>
                        </Flex>
                        <Table
                            variant="simple"
                            checkboxes={false}
                            data={data}
                            columns={columns}
                            editButton={false}
                            viewButton={false}
                            accordion
                            tableColumns={tableColumns}
                            tableDatas={tableDatas}
                        />
                    </Flex>
                </Sidebar>
            </main>
        </>
    );
};

export default Administration;
