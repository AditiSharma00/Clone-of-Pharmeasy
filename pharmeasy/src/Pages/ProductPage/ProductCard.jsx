import { Box, Card, Center, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const ProductCard = () => {
    return (
        <Box 
        w={'250px'}
         border='1px solid'
            ml={'200px'}
            mb='50px'
            p='4'
        >
            <Box
                w='98%'
                m='auto'
                p='1'
                border={'1px solid red'}
            >
                <Center>
                <Image src='https://cdn01.pharmeasy.in/dam/products_otc/205923/maxirich-multivitamin-minerals-sofgels-strip-of-10-2-1671740732.jpg'
                    h='150px'
                />
                </Center>
                
                <Heading mt={'20px'} fontSize={'20px'}>Nutrition & Fitness Supplements</Heading>
                <Flex>
                    <Stack mt='10px'>
                        <Text mb='-10px'>MRP $252.00</Text>
                        <Text>$252.00</Text>
                    </Stack>
                    <Stack m='5px'
                        bg='red.300'
                        color='white'
                        w='60px'
                        h='25px'
                        p='1'
                       >
                       <Text  fontSize={'10px'}> 50% OFF</Text>
                    </Stack>
                </Flex>


            </Box>

        </Box>
    )
}
