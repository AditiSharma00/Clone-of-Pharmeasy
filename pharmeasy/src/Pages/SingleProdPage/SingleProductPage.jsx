import { Box, Button, Center, Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { BiChevronRight } from "react-icons/bi";
import { SimilarProductSlider } from './SimilarProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { postCartProduct } from '../../Redux/cartReducer/cartAction';

// const initState = {
//     image_src: '',
//     productName: '',
//     salePrice: +(''),
//     MRP: '',
//     discountPercent: '',
//     id: +('')
// }
const cartItem = localStorage.getItem('cartItems') || [];

export const SingleProductPage = () => {

    const dispatch = useDispatch();
    const { id } = useParams()
    const [cartData, setCartData] = useState('')
    const { products } = useSelector((store) => {
        return store.prodReducer
    });

    useEffect(() => {
        const singleProdData = products.find((el) => el.id === +id)
        // console.log(id);
        // console.log('find_item',singleProdData);
        setCartData(singleProdData);
    }, [])

    console.log('cartitem', cartData);


    const handleAddToCart = () => {
        //    dispatch(postCartProduct(cartData)).then((res)=>{
        //     console.log('postCart res', res);
        //    })

        if (cartData) {
            cartItem.push(cartData)
            localStorage.setItem('cartItmes', JSON.stringify(cartItem));
            console.log('ccc', cartItem);
        }

    }

    return (
        <Box border={'0px solid'} px='100px' mt={'20px'}>
            <Box
                border={'0px solid red'} p='5'
            >
                <Flex className="content" justify="space-between">
                    <Box
                        w='68%'
                        h={"auto"}
                        mb='100px'
                        border={'0px solid blue'}
                        // overflow={'scroll'}
                        // overflowX='hidden'
                        p='40px 0'
                    // scrollBehavior={'smooth'}
                    >
                        <Box border={'0px solid'}>
                            <Flex h="300px" justify="space-between">
                                <Flex
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
                                                h={'95%'}
                                                w='95%'
                                                src={"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"} alt="" />
                                        </Box>
                                    </Flex>
                                    <Flex
                                        h="20%"
                                        justify="space-between"
                                    >
                                        <Center
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
                                                src={'https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0'}
                                            />
                                        </Center>
                                        <Center
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
                                                src='https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0'
                                            />
                                        </Center>
                                        <Center
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
                                    w="66%"
                                    position="relative"
                                    textAlign="left"
                                    color="#4f585e"
                                    py="10px"
                                    border={'0px solid yellow'}
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
                                        w="52%"
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
                                        h="3.5rem"
                                        justify="space-between"
                                        alignItems={'center'}
                                        w="44%"
                                        border={'0px solid'}
                                    >
                                        <Text fontSize="22px" fontWeight="700" border={'0px solid'}>
                                            ₹{'242.25'}
                                        </Text>
                                        <Text fontSize="14px" color="#8e9ca7" pt='1'>
                                            MRP₹<span style={{ textDecoration: "line-through" }}>285.00</span>
                                        </Text>
                                        <Flex
                                            border={'0px solid'}
                                            align="center"
                                            justify="start"
                                            px="6px"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="600"
                                            height="28px"
                                            w="75px"
                                            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                                        >
                                            {15} % OFF
                                        </Flex>
                                    </Flex>
                                    <Text fontSize="12px" color="#8e9ca7" mt='-2'>
                                        Inclusive of all taxes
                                    </Text>
                                    <Text py="6px" fontSize="12px">
                                        Delivery by{" "}
                                        <span style={{ fontWeight: "700" }}>
                                            Tomorrow, before 10:00 pm
                                        </span>
                                    </Text>
                                    <Button
                                        position="absolute"
                                        variant="#0f847e"
                                        bg="#0f847e"
                                        color="white"
                                        fontWeight="700"
                                        fontSize="16px"
                                        right="4"
                                        top="28"
                                        height="3rem"
                                        w="10rem"
                                        transition="all 0.4s ease"
                                        placeholder="Add to Cart"
                                        mt='3'
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Flex>


                        </Box>
                        <Divider borderColor={'#d1d1d1e1'} mt='10' />
                        <SimilarProductSlider />
                        <Divider borderColor={'#d1d1d1e1'} />

                    </Box>
                    {/* Right side */}
                    <Box
                        w="30%"
                        color="#4f585e"
                        textAlign="left"
                        border={'0px solid orange'}
                        p='2'
                    >
                        <Box mt='7'>
                            <Text fontSize="14px" fontWeight="600" p="10px">
                                {"qty"} Items in Cart
                            </Text>
                            <Link to="/cart">
                                <Button
                                    variant="#0f847e"
                                    bg="#0f847e"
                                    color="white"
                                    fontWeight="500"
                                    h="3rem"
                                    fontSize="16px"
                                    transition="all 0.4s ease"
                                    borderRadius="md"
                                    w="95%"
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
                            border="0px dashed pink"
                            borderRadius="5px"
                            p="5px"
                            mt='4'
                            w='95%'
                        >
                            <Flex justify="space-between" align="center" p="5px">
                                <Text fontSize="16px" fontWeight="700">
                                    Offers Just for you
                                </Text>
                                <Text
                                    fontSize="16px"
                                    fontWeight="700"
                                    color="#0f847e"
                                    cursor="pointer"
                                >
                                    View All
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                fontWeight="600"
                                gap="10px"
                                p='3px'
                            >
                                <Image
                                    src="https://cms-contents.pharmeasy.in/offer/5d08479cec7-CRED.jpg"
                                    h='10'
                                />
                                <Text fontSize="14px">Get up to Rs 250 cashback via CRED pay UPI </Text>
                            </Flex>

                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
