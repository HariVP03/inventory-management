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

const ApprovedAttendance: React.FC<{
    props?: ButtonProps;
    tooltipText?: string;
    edit?: boolean;
}> = ({ props, tooltipText = "", edit = true }) => {
    return (
        <Tooltip label={tooltipText}>
            <Menu>
                <MenuButton
                    as={Button}
                    bg="green.500"
                    rightIcon={edit ? <FiChevronDown /> : ""}
                    color="white"
                    _active={{ bg: "green.600" }}
                    transition="all 100ms linear"
                    fontWeight="500"
                    rounded="sm"
                    cursor={edit ? "pointer" : "default"}
                    _hover={{
                        bg: "green.600",
                    }}
                    {...props}
                >
                    Low
                </MenuButton>
                {edit ? (
                    <MenuList>
                        <MenuItem>Medium</MenuItem>
                        <MenuItem>High</MenuItem>
                    </MenuList>
                ) : (
                    ""
                )}
            </Menu>
        </Tooltip>
    );
};

export default ApprovedAttendance;
