import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const FilledOutline: React.FC<{
    props?: ButtonProps;
    tooltipText?: string;
    children: ReactNode;
}> = ({ children, props, tooltipText = "" }) => {
    return (
        <Tooltip label={tooltipText}>
            <Button
                bg="white"
                variant="ghost"
                color="brand.highlight"
                fontWeight="500"
                rounded="sm"
                {...props}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

export default FilledOutline;
