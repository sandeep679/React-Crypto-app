import { Avatar, Box, Stack, Text, VStack ,Link } from "@chakra-ui/react";
import React from "react";
import {ExternalLinkIcon} from "@chakra-ui/icons"




const avatarSrc = "https://avatars.githubusercontent.com/u/118195440?s=400&v=4";
const GithubLink ="https://github.com/sandeep679"
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We provide best experience for cryptocurrencies . We provide our guidance at a very cheap price.  We have a lots of cryptoexchange.
            
          </Text>
          <Text
            fontSize={"medium"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            fontFamily={"Bebas Neue"}
          >
           MADE BY SANDEEP
          </Text>
          <Text>
            <Link href={GithubLink} is External>
              Github Profile <ExternalLinkIcon mx ='2px'/>
            
            </Link>
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Sandeep679</Text>
          <Text fontSize={"medium"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}>
              
              
             </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;