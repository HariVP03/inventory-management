import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const FilledOutline: React.FC<{
    props?: ButtonProps;
    children: ReactNode;
    tooltipText?: string;
}> = ({ children, props, tooltipText = "" }) => {
    return (
        <Tooltip label={tooltipText}>
            <Button
                bg="brand.highlight"
                color="white"
                transition="all 100ms linear"
                border="2px solid"
                fontWeight="500"
                rounded="sm"
                borderColor="brand.highlight"
                _hover={{
                    bg: "white",
                    border: "2px solid",
                    borderColor: "brand.highlight",
                    color: "brand.highlight",
                }}
                {...props}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

export default FilledOutline;
