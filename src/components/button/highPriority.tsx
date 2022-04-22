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

const TrackingAttendance: React.FC<{
    props?: ButtonProps;
    tooltipText?: string;
    edit?: boolean;
}> = ({ props, tooltipText = "", edit = true }) => {
    return (
        <Tooltip label={tooltipText}>
            <Menu>
                <MenuButton
                    as={Button}
                    bg="red.500"
                    rightIcon={edit ? <FiChevronDown /> : ""}
                    color="white"
                    transition="all 100ms linear"
                    fontWeight="500"
                    _active={{ bg: "red.600" }}
                    cursor={edit ? "pointer" : "default"}
                    rounded="sm"
                    _hover={{
                        bg: "red.600",
                    }}
                    {...props}
                >
                    High
                </MenuButton>
                {edit ? (
                    <MenuList>
                        <MenuItem>Low</MenuItem>
                        <MenuItem>Medium</MenuItem>
                    </MenuList>
                ) : (
                    ""
                )}
            </Menu>
        </Tooltip>
    );
};

export default TrackingAttendance;
