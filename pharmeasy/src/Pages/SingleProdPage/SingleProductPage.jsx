import { Box, Button, Center, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

import { FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { BiChevronRight } from "react-icons/bi";
import { SimilarProductSlider } from './SimilarProductSlider';

export const SingleProductPage = () => {

    return (
        <Box border={'0px solid'} px='100px' mt={'20px'}>
            <Box
                border={'1px solid'} p='5'
            >
                <Flex className="content" justify="space-between">
                    <Box
                        w='70%'
                        h={"50rem"}
                        mb='100px'
                        // overflow={'scroll'}
                        // overflowX='hidden'
                        p='40px 0'
                        // scrollBehavior={'smooth'}
                    >
                        <Box>
                            <Flex className="product" h="340px" justify="space-between">
                                <Flex
                                    className="img"
                                    w="30%"
                                    direction="column"
                                    justify="space-between"
                                    position="relative"
                                >
                                    <Flex
                                        overflow="hidden"
                                        h="76%"
                                        border="1.5px solid #e5e5e5"
                                        borderRadius="md"
                                        align="center"
                                        justify="center"
                                        p="10px"
                                        cursor="pointer"
                                    >
                                        <Box
                                            w='90%'
                                            display={'flex'}
                                            h='90%'
                                            justifyContent={'center'}
                                            p='0'
                                            position={'relative'}
                                        >
                                            <Image
                                                position='absolute'
                                                top={'0'}
                                                bottom='0'
                                                objectFit={'contain'}
                                                opacity='1'
                                                // transtion='opacity  1s'
                                                h={'90%'}
                                                w='90%'
                                                src={"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"} alt="" />
                                        </Box>
                                    </Flex>
                                    <Flex
                                        h="20%"
                                        justify="space-between"
                                    >
                                        <Center
                                            // onMouseOver={() => {
                                            //   setShowImg(product.img1);
                                            // }}
                                            overflow="hidden"
                                            className="img1"
                                            border="1.5px solid #e5e5e5"
                                            borderRadius="md"
                                            w="23%"
                                            cursor="pointer"
                                        >
                                            <Image
                                                w="75%"
                                                transition="all 0.4s ease"
                                                _hover={{
                                                    transform: "scale(1.2)",
                                                    transition: "all 0.4s ease",
                                                }}
                                                //   src={product.img1}
                                                src={'https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0'}
                                            />
                                        </Center>
                                        <Center
                                            // onMouseOver={() => {
                                            //   setShowImg(product.img2);
                                            // }}
                                            overflow="hidden"
                                            className="img2"
                                            border="1.5px solid #e5e5e5"
                                            borderRadius="md"
                                            w="23%"
                                            cursor="pointer"
                                        >
                                            <Image
                                                w="75%"
                                                transition="all 0.4s ease"
                                                _hover={{
                                                    transform: "scale(1.2)",
                                                    transition: "all 0.4s ease",
                                                }}
                                                //   src={product.img2}
                                                src='https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0'
                                            />
                                        </Center>
                                        <Center
                                            // onMouseOver={() => {
                                            //   setShowImg(product.img3);
                                            // }}
                                            overflow="hidden"
                                            className="img3"
                                            border="1.5px solid #e5e5e5"
                                            borderRadius="md"
                                            w="23%"
                                            cursor="pointer"
                                        >
                                            <Image
                                                w="75%"
                                                transition="all 0.4s ease"
                                                _hover={{
                                                    transform: "scale(1.2)",
                                                    transition: "all 0.4s ease",
                                                }}
                                                src={'https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0'}
                                            />
                                        </Center>
                                    </Flex>
                                    <IconButton
                                        aria-label="Search database"
                                        isRound="true"
                                        position="absolute"
                                        size="sm"
                                        bottom="90"
                                        right="2"
                                        icon={<FaShareAlt color="gray" />}
                                    />
                                </Flex>

                                <Box
                                    className="description"
                                    w="65%"
                                    position="relative"
                                    textAlign="left"
                                    color="#4f585e"
                                    py="10px"
                                    border={'1px solid'}
                                >
                                    <Text
                                        // istruncated="true"
                                        fontSize="20px"
                                        fontWeight="700"
                                        noOfLines={1}
                                        height="30px"
                                    >
                                        {"product.name"}
                                    </Text>
                                    <Text fontSize="14" color="#0f847e" py="2px">
                                        Visit {'storename'} Store
                                    </Text>
                                    <Flex
                                        className=" rating"
                                        paddingBottom="20px"
                                        w="38%"
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Flex color="#ffd344" fontSize="20px" align="center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <TiStarHalfOutline fontSize="24px" />
                                            <FaRegStar />
                                        </Flex>
                                        <Text color="#8e9ca7" fontSize="14px">
                                            (1180 ratings)
                                        </Text>
                                    </Flex>
                                    <Flex
                                        mt='-6'
                                        className="price"
                                        h="3rem"
                                        justify="space-between"
                                        alignItems={'center'}
                                        w="42%"
                                         border={'0px solid'}
                                    >
                                        <Text fontSize="18px" fontWeight="700" border={'0px solid'}>
                                            ₹{'242.25'} 
                                        </Text>
                                        <Text fontSize="14px"  color="#8e9ca7" pt='1'> 
                                            MRP₹<span style={{textDecoration: "line-through"}}>285.00</span>
                                        </Text>
                                        <Flex
                                            align="center"
                                            justify="start"
                                            px="6px"
                                            color="white"
                                            fontSize="11px"
                                            fontWeight="600"
                                            height="20px"
                                            w="60px"
                                            mt='1.5'
                                            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                                        >
                                            {"15"} % OFF
                                        </Flex>
                                    </Flex>
                                    <Text fontSize="10px" color="#8e9ca7" mt='-3.5'>
                                        Inclusive of all taxes
                                    </Text>
                                    <Text py="8px" fontSize="11px">
                                        Delivery by{" "}
                                        <span style={{ fontWeight: "700" }}>
                                            Tomorrow, before 10:00 pm
                                        </span>
                                    </Text>
                                    <Button
                                        className="addToStore"
                                        position="absolute"
                                        variant="#0f847e"
                                        bg="#0f847e"
                                        color="white"
                                        fontWeight="700"
                                        fontSize="16px"
                                        right="4"
                                        top="28"
                                        height="2.8rem"
                                        w="9rem"
                                        transition="all 0.4s ease"
                                        placeholder="Add to Cart"
                                    //   onClick ={()=>addCartHandler(product)}
                                    // _hover={{ bg: "#0a5855", transition: "all 0.4s ease" }}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Flex>


                        </Box>

                        <SimilarProductSlider />

                    </Box>
                    {/* Right hand side */}
                    <Box className="right" w="25%" color="#4f585e" textAlign="left">
                        <Box className="cartDetails" padding="10px 0">
                            <Text fontSize="16" fontWeight="600" py="30px">
                                {"qty"} Items in Cart
                            </Text>
                            <Link to="/cart">
                                <Button
                                    className="viewCart"
                                    variant="#0f847e"
                                    bg="#0f847e"
                                    color="white"
                                    fontWeight="700"
                                    h="3rem"
                                    fontSize="16px"
                                    transition="all 0.4s ease"
                                    borderRadius="md"
                                    w="100%"
                                    display="flex"
                                    align="center"
                                    _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
                                >
                                    View Cart
                                    <BiChevronRight fontSize="25px" />
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            className="offers"
                            marginY="50px"
                            border="1px dashed pink"
                            borderRadius="5px"
                            p="15px"
                        >
                            <Flex justify="space-between" align="center" mb="10px">
                                <Text fontSize="14px" fontWeight="700">
                                    Offers Just for you
                                </Text>
                                <Text
                                    fontSize="12px"
                                    fontWeight="700"
                                    color="#0f847e"
                                    cursor="pointer"
                                >
                                    View All
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                fontSize="12px"
                                fontWeight="600"
                                gap="10px"
                                mb="10px"
                            >
                                <Image
                                    src="https://cms-contents.pharmeasy.in/offer/ea20b1fcb6c-11.jpg"
                                    h={7}
                                    w={7}
                                />
                                <Text size={'10'}>Get Flat Rs. 150 instant discount on HDFC Bank Cards </Text>
                            </Flex>
                            <Flex
                                align="center"
                                fontSize="12px"
                                fontWeight="600"
                                gap="10px"
                                mb="10px"
                            >
                                <Image
                                    src="https://cms-contents.pharmeasy.in/offer/62e13eb58a2-2.jpg"
                                    h={7}
                                    w={7}
                                />
                                <Text size={10}>
                                    Healthy Heart Sale is LIVE!
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
