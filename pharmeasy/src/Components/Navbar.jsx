import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
// import icon
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { CiMobile2, CiDiscount1 } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { BsPerson, BsCart2 } from "react-icons/bs";

// import components
// import DrawerExample from "../Components/drawer";
// import LoginDrawer from "../Components/LoginDrawer";
// import LogOutMenu from "../Components/LogOutMenu";
// import Cart from "./Cart";
// import { AuthContext } from "../Context/AuthContext";
import NavStyle from "../Styles/NavStyle.module.css";

const Links = ["Download App", "Hello,Login", "Offers", "Cart"];

export default function Navbar() {
  // const [phoneNo, setPhoneNo] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);
  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            className={NavStyle.mainBox}
          >
            {/* logo */}
            <Box style={{ display: "flex" }}>
              <Box className={NavStyle.pinBtn}>
                {" "}
                <NavLink to="/">
                  <Image
                    className={NavStyle.logoImg}
                    src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
                    alt="logo"
                  />
                </NavLink>{" "}
              </Box>
              <Box style={{ marginTop: "10px" }}>{/* pin code drawer */}</Box>
            </Box>
            {/* pin Button */}

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              className={NavStyle.navAppBox}
            >
              <NavLink>
                <Box className={NavStyle.downloadApp}>
                  <CiMobile2 size={"22px"} />
                  <Box className={NavStyle.navHeading}>Download App</Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <AiOutlineUser size={"22px"} />

                  <Box className={NavStyle.login}> User</Box>
                </Box>
              </NavLink>
              <NavLink>
                <Box className={NavStyle.navApp}>
                  <CiDiscount1 size={"22px"} />
                  <Box className={NavStyle.navHeading}> Offers</Box>
                </Box>
              </NavLink>

              <NavLink to="/cart">
                <Box className={NavStyle.navApp}>
                  <BsCart2 size={"22px"} />

                  {/* cart invoke */}

                  <Box className={NavStyle.navHeading}>
                    <Text>Cart</Text>
                  </Box>
                </Box>
              </NavLink>
            </HStack>
          </HStack>
          {/* <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                <Box className={NavStyle.navHeading}> user</Box>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
      <hr />
      <Box
        p={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          fontSize: "15px",
        }}
      >
        <Link>Medicine</Link>
        <Link>Lab Tests</Link>
        <Link>Healthcare</Link>
        <Link>Surgeries</Link>
        <Link>Health Blogs</Link>
        <Link>PLUS</Link>
        <Link>Offers</Link>
        <Link>Value Store</Link>
      </Box>
    </>
  );
}
