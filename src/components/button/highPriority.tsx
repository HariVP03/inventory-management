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
}> = ({ props, tooltipText = "" }) => {
    return (
        <Tooltip label={tooltipText}>
            <Menu>
                <MenuButton
                    as={Button}
                    bg="red.500"
                    rightIcon={<FiChevronDown />}
                    color="white"
                    transition="all 100ms linear"
                    fontWeight="500"
                    _active={{ bg: "red.600" }}
                    rounded="sm"
                    _hover={{
                        bg: "red.600",
                    }}
                    {...props}
                >
                    High
                </MenuButton>
                <MenuList>
                    <MenuItem>Low</MenuItem>
                    <MenuItem>Medium</MenuItem>
                </MenuList>
            </Menu>
        </Tooltip>
    );
};

export default TrackingAttendance;
