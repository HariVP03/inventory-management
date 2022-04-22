import {
    Avatar,
    AvatarGroup,
    Checkbox,
    Collapse,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    Tab,
    Table,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Th,
    Thead,
    Tooltip,
    Tr,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { useTable } from "react-table";
import {
    GhostButton,
    FilledOutlineButton,
    HighPriority,
    LowPriority,
    MediumPriority,
} from "@components";

const TableComp: FC<{
    data: any;
    columns: any;
    variant?: "striped" | "simple" | "unstyled";
    checkboxes?: boolean;
    editButton?: boolean;
    viewButton?: boolean;
    accordion?: boolean;
    tableDatas?: any;
    tableColumns?: any;
}> = ({
    data,
    columns,
    tableDatas,
    tableColumns,
    variant = "striped",
    checkboxes = true,
    editButton = true,
    viewButton = true,
    accordion = false,
}) => {
    const statusTableData: any = {
        low: <LowPriority />,
        medium: <MediumPriority />,
        high: <HighPriority />,
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    const [checked, setChecked] = useState<any[]>(
        new Array(data.length).fill(false),
    );
    const [accordionOpen, setAccordionOpen] = useState<any[]>(
        new Array(data.length).fill(false),
    );
    const [checkedHeader, setCheckedHeader] = useState<boolean>(false);

    const checkAll = () => {
        const f = checked.map(() => true);
        setChecked(f);
        setCheckedHeader(true);
    };
    const uncheckAll = () => {
        const f = checked.map(() => false);
        setCheckedHeader(false);
        setChecked(f);
    };
    const checkBox = (index: number, check: boolean) => {
        setChecked((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp[index] = check;
            const f = new Array(data.length).fill(true);
            if (
                temp.length === f.length &&
                temp.every(
                    (value: boolean, index: number) => value === f[index],
                )
            ) {
                setCheckedHeader(true);
            } else {
                setCheckedHeader(false);
            }
            return temp;
        });
    };
    const toggleAccordion = (index: number) => {
        setAccordionOpen((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp[index] = !temp[index];
            return temp;
        });
    };
    let i = -1;

    return (
        <Table w="full" variant={variant} {...getTableProps()}>
            <Thead w="full">
                {headerGroups.map((headerGroup) => {
                    return (
                        <Tr w="full" {...headerGroup.getHeaderGroupProps()}>
                            {checkboxes ? (
                                <Th>
                                    <Checkbox
                                        isChecked={checkedHeader}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                checkAll();
                                            } else {
                                                uncheckAll();
                                            }
                                        }}
                                        size="lg"
                                        colorScheme="green"
                                    />
                                </Th>
                            ) : (
                                ""
                            )}
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    );
                })}
            </Thead>

            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    i++;
                    const fi = i;

                    return (
                        <>
                            <Tr
                                w="full"
                                cursor={accordion ? "pointer" : "auto"}
                                transition="background-color 100ms linear"
                                _hover={
                                    accordion ? { bg: "rgb(0,0,0,0.04)" } : {}
                                }
                                onClick={
                                    accordion
                                        ? () => {
                                              toggleAccordion(fi);
                                          }
                                        : undefined
                                }
                                {...row.getRowProps()}
                            >
                                {checkboxes ? (
                                    <Td>
                                        <Checkbox
                                            isChecked={checked[i]}
                                            onChange={(e) => {
                                                const f = e.target.checked;
                                                checkBox(fi, f);
                                            }}
                                            size="lg"
                                            colorScheme="green"
                                        />
                                    </Td>
                                ) : (
                                    ""
                                )}
                                {row.cells.map((cell) => {
                                    if (cell.value in statusTableData) {
                                        return (
                                            <Td {...cell.getCellProps()}>
                                                {statusTableData[cell.value]}
                                            </Td>
                                        );
                                    }
                                    return (
                                        // Normal data goes here
                                        <>
                                            <Tooltip
                                                label={
                                                    cell.column.Header !==
                                                        "Members" &&
                                                    cell.column.Header !==
                                                        "Profile"
                                                        ? cell?.value
                                                        : ""
                                                }
                                                noOfLines={5}
                                            >
                                                <Td
                                                    maxW="200px"
                                                    // noOfLines={1}
                                                    {...cell.getCellProps()}
                                                    whiteSpace="nowrap"
                                                    textOverflow="ellipsis"
                                                    overflow="hidden"
                                                >
                                                    {cell.column.Header ===
                                                    "Members" ? (
                                                        <AvatarGroup
                                                            size="md"
                                                            max={2}
                                                        >
                                                            {cell.value?.map(
                                                                (e: string) => {
                                                                    return (
                                                                        <Avatar
                                                                            src={
                                                                                e
                                                                            }
                                                                        />
                                                                    );
                                                                },
                                                            )}
                                                        </AvatarGroup>
                                                    ) : (
                                                        cell.render("Cell")
                                                    )}
                                                </Td>
                                            </Tooltip>
                                        </>
                                    );
                                })}
                                {editButton && viewButton ? (
                                    <Td>
                                        <Icon
                                            mr={4}
                                            cursor="pointer"
                                            as={BiEditAlt}
                                        />
                                        <Icon
                                            ml={4}
                                            cursor="pointer"
                                            as={GrView}
                                        />
                                    </Td>
                                ) : editButton ? (
                                    <Td>
                                        <Icon
                                            mr={4}
                                            cursor="pointer"
                                            as={BiEditAlt}
                                        />
                                    </Td>
                                ) : viewButton ? (
                                    <Td>
                                        <Icon
                                            ml={4}
                                            cursor="pointer"
                                            as={GrView}
                                        />
                                    </Td>
                                ) : (
                                    ""
                                )}
                            </Tr>
                            {accordion ? (
                                <Tr>
                                    <Td colSpan={2}>
                                        <Flex p={4} w="full" justify="center">
                                            <Collapse
                                                in={accordionOpen[fi]}
                                                animate
                                            >
                                                <Tabs
                                                    variant="soft-rounded"
                                                    colorScheme="telegram"
                                                    w="full"
                                                    isLazy
                                                >
                                                    <TabList>
                                                        <Tab fontWeight="400">
                                                            Manage Members
                                                        </Tab>
                                                        <Tab fontWeight="400">
                                                            Edit Role
                                                        </Tab>
                                                    </TabList>
                                                    <TabPanels>
                                                        <TabPanel w="full">
                                                            <TableComp
                                                                columns={
                                                                    tableColumns
                                                                }
                                                                data={
                                                                    tableDatas[
                                                                        fi
                                                                    ]
                                                                }
                                                                checkboxes={
                                                                    false
                                                                }
                                                                variant="simple"
                                                                viewButton={
                                                                    false
                                                                }
                                                                editButton={
                                                                    false
                                                                }
                                                            />
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <>
                                                                <FormControl>
                                                                    <FormLabel>
                                                                        Role
                                                                        Name
                                                                    </FormLabel>
                                                                    <Input />
                                                                    <FormHelperText>
                                                                        Change
                                                                        the name
                                                                        of the
                                                                        role.
                                                                    </FormHelperText>
                                                                </FormControl>
                                                                <GhostButton>
                                                                    Cancel
                                                                </GhostButton>
                                                                <FilledOutlineButton>
                                                                    Save
                                                                </FilledOutlineButton>
                                                            </>
                                                        </TabPanel>
                                                    </TabPanels>
                                                </Tabs>
                                            </Collapse>
                                        </Flex>
                                    </Td>
                                </Tr>
                            ) : (
                                ""
                            )}
                        </>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default TableComp;
