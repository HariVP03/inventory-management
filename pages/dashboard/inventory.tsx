import { chakra, Flex } from "@chakra-ui/react";
import { PinnedMessage, GhostButton, Sidebar, Table } from "@components";
import { FilledOutlineButton } from "@components";
import { NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";
import { FiCalendar, FiHome } from "react-icons/fi";
import { Column } from "react-table";
import { classOverview, LinkItemProps } from "@types";
import { BsFileEarmarkSpreadsheet, BsPeople } from "react-icons/bs";
import { useRouter } from "next/router";

const Inventory: NextPage = () => {
    const data = useMemo<classOverview[]>(
        () => [
            {
                id: "EH19HE80U0U1E0",
                name: "XYZ Company",
                date: "18 Feb 2022",
                desc: "Order for XYZ to make ABC items. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam praesentium similique illo quae vero in. Numquam, quas pariatur. Corrupti fugit commodi dignissimos aspernatur velit hic possimus laboriosam repudiandae autem?",
                priority: "low",
            },
        ],
        [],
    );

    const columns = useMemo(
        () =>
            [
                {
                    Header: "ID",
                    accessor: "id",
                },
                {
                    Header: "Name",
                    accessor: "name",
                },
                {
                    Header: "Due Date",
                    accessor: "date",
                },
                {
                    Header: "Description",
                    accessor: "desc",
                },
                {
                    Header: "Priority",
                    accessor: "priority",
                },
            ] as readonly Column<classOverview>[],

        [],
    );
    const router = useRouter();
    const LinkItems: Array<LinkItemProps> = [
        { name: "Dashboard", icon: FiHome, link: "/dashboard" },
        {
            name: "View Inventory",
            icon: BsFileEarmarkSpreadsheet,
            active: router.pathname === "/dashboard/inventory",
            link: "/dashboard/inventory",
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
                <title>Dashboard | Inventory</title>
            </Head>
            <main>
                <Sidebar linkItems={LinkItems}>
                    <Flex w="full" h="full" direction="column">
                        <Flex mb={8}>
                            <PinnedMessage
                                title="Pinned Message"
                                desc="ABC Company task top priority get it done before 24th April"
                                by="Manoj Chaudhary"
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
                                Inventory Details
                                <FiCalendar />
                            </chakra.h1>
                            <Flex>
                                <GhostButton
                                    tooltipText="Export attendance as csv file"
                                    props={{ mr: 1 }}
                                >
                                    Export
                                </GhostButton>
                                <FilledOutlineButton props={{ mr: 5 }}>
                                    Approve
                                </FilledOutlineButton>
                            </Flex>
                        </Flex>
                        <Table data={data} columns={columns} />
                    </Flex>
                </Sidebar>
            </main>
        </>
    );
};

export default Inventory;