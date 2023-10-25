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
import coldGame from "../assets/coldGame.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/h";
  const isCollectionActive = location.pathname === "/";

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
        <HStack spacing="2">
          <Image src={coldGame} boxSize="60px" />
          <Text fontSize="xl" color="inherit" isTruncated>
            JSverse
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing="5">
          <LinkBox as="div">
            <LinkOverlay
              as={Link}
              to="/h"
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
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "-3px", // 调整这个值以改变下划线与文本的距离
                        borderBottom: "1px solid currentColor",
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
              to="/"
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
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "-3px", // 调整这个值以改变下划线与文本的距离
                        borderBottom: "1px solid currentColor",
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
