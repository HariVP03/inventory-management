import React, { ReactNode } from "react";
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Button,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown, FiHome } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { LinkItemProps } from "@types";
import router, { useRouter } from "next/router";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

const Logo = "Chuchi CMS";

export const Sidebar: React.FC<{
    children: ReactNode;
    // linkItems: Array<LinkItemProps>;
}> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const linkItems: Array<LinkItemProps> = [
        {
            name: "Dashboard",
            icon: FiHome,
            link: "/dashboard",
            active: router.pathname === "/dashboard",
        },
        {
            name: "View Inventory",
            icon: BsFileEarmarkSpreadsheet,
            active: router.pathname === "/dashboard/inventory",
            link: "/dashboard/inventory",
        },
    ];
    return (
        <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
                LinkItems={linkItems}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent LinkItems={linkItems} onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
};

interface SidebarProps extends BoxProps {
    onClose: () => void;
    LinkItems: Array<LinkItemProps>;
}

const SidebarContent = ({ onClose, LinkItems, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue("brand.1", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text
                    fontSize="2xl"
                    color="text.1"
                    cursor="pointer"
                    fontFamily="Pacifico"
                    fontWeight="bold"
                >
                    {Logo}
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            <Flex w="full" direction="column" align="center">
                {LinkItems.map((link) => (
                    <NavItem
                        key={link.name}
                        link={link.link}
                        icon={link.icon}
                        active={Boolean(link.active)}
                    >
                        {link.name}
                    </NavItem>
                ))}
            </Flex>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    active: boolean;
    link: string;
}
const NavItem = ({ icon, children, active, link, ...rest }: NavItemProps) => {
    const router = useRouter();
    return (
        <Button
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            onClick={() => {
                router.push(link);
            }}
            variant="flushed"
            w="90%"
            // textAlign="left"
            h="50px"
            display="flex"
            justifyContent="start"
            bg={!active ? "buttonDark.1" : "buttonDark.hover"}
            rounded="sm"
            _hover={{ bg: "buttonDark.hover" }}
            color="text.1"
            cursor={active ? "default" : "pointer"}
        >
            <Flex
                align="center"
                p="4"
                // mx="4"
                borderRadius="lg"
                role="group"
                cursor={active ? "default" : "pointer"}
                justify="center"
                // _hover={{
                //     bg: "cyan.400",
                //     color: "white",
                // }}
                fontWeight="300"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        // _groupHover={{
                        //     color: "white",
                        // }}

                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Button>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    interface MenuItemLinks {
        name: string;
        onClick?: () => void;
    }
    const MenuLinks: Array<MenuItemLinks> = [
        {
            name: "Dasboard",
        },
        {
            name: "Inventory",
        },
        {
            name: "Console",
        },
        {
            name: "Post a Message",
        },
    ];
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                cursor="pointer"
                fontFamily="Pacifico"
                fontWeight="bold"
            >
                {Logo}
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                        >
                            <HStack>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm" mb={0}>
                                        Hari Vishnu Parashar
                                    </Text>
                                    <Text fontSize="xs" color="brand.highlight">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue("white", "gray.900")}
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700",
                            )}
                        >
                            {/* <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem> */}
                            {MenuLinks.map((e) => (
                                <MenuItem onClick={e.onClick}>
                                    {e.name}
                                </MenuItem>
                            ))}
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default Sidebar;
