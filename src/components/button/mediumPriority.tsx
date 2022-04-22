import {
    Button,
    ButtonProps,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const PendingAttendance: React.FC<{
    props?: ButtonProps;
    tooltipText?: string;
    edit?: boolean;
}> = ({ props, tooltipText = "", edit = true }) => {
    return (
        <Tooltip label={tooltipText}>
            <Menu>
                <MenuButton
                    as={Button}
                    bg="yellow.400"
                    _active={{ bg: "yellow.500" }}
                    rightIcon={edit ? <FiChevronDown /> : ""}
                    color="white"
                    transition="all 100ms linear"
                    fontWeight="500"
                    cursor={edit ? "pointer" : "default"}
                    rounded="sm"
                    _hover={{
                        bg: "yellow.500",
                    }}
                    {...props}
                >
                    Medium
                </MenuButton>
                {edit ? (
                    <MenuList>
                        <MenuItem>Low</MenuItem>
                        <MenuItem>High</MenuItem>
                    </MenuList>
                ) : (
                    ""
                )}
            </Menu>
        </Tooltip>
    );
};

export default PendingAttendance;
