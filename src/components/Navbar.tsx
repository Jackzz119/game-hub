import {
  HStack,
  Image,
  Text,
  Spacer,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const isCollectionActive = location.pathname === "/collection";

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = document.querySelector(
        `.${styles.navbar}`
      ) as HTMLElement;
      if (navbarElement) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          navbarElement.classList.add(styles.navbarActive);
        } else {
          navbarElement.classList.remove(styles.navbarActive);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HStack className={styles.navbar}>
        <LinkBox as="div">
          <LinkOverlay
            as={Link}
            to="/"
            style={{
              color: "inherit",
            }}
          >
            <HStack spacing="2">
              <Image src={logo} boxSize="60px" />
              <Text fontSize="xl">JSverse</Text>
            </HStack>
          </LinkOverlay>
        </LinkBox>
        <Spacer />
        <HStack spacing="5">
          <LinkBox as="div">
            <LinkOverlay
              as={Link}
              to="/"
              style={{
                color: "inherit",
              }}
            >
              <Text
                fontSize="xl"
                color="inherit"
                _after={
                  isHomeActive
                    ? {
                        background: "#FBC07A",
                        content: '""',
                        width: "67px",
                        height: "7px",
                        display: "block",
                        position: "absolute",
                        transform: "translate(-6px, -.1px)",
                        zIndex: -2,
                        borderRadius: "3px",
                        opacity: 0.7,
                      }
                    : {}
                }
                isTruncated
              >
                Home
              </Text>
            </LinkOverlay>
          </LinkBox>
          <Text>/</Text>
          <LinkBox as="div">
            <LinkOverlay
              as={Link}
              to="/collection"
              style={{
                color: "inherit",
              }}
            >
              <Text
                fontSize="xl"
                color="inherit"
                _after={
                  isCollectionActive
                    ? {
                        background: "#EFEA61",
                        content: '""',
                        width: "156px",
                        height: "7px",
                        display: "block",
                        position: "absolute",
                        transform: "translate(-6px, -.1px)",
                        zIndex: -2,
                        borderRadius: "3px",
                        opacity: 0.7,
                      }
                    : {}
                }
                isTruncated
              >
                Game collection
              </Text>
            </LinkOverlay>
          </LinkBox>
        </HStack>
        <Spacer />
        <ColorModeSwitch />
      </HStack>

      <Outlet />
    </>
  );
};

export default Navbar;
