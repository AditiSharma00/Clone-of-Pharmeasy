import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Text,
    Flex,
    Divider
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../Context/ProductContext';
import { Link as RLink, Navigate, useNavigate } from 'react-router-dom';

export const NavContents = () => {

    const navigate = useNavigate();
    const { state, dispatchFun } = useContext(ProductContext);
    // console.log('prodPageCategory:', state);

    if (state) {
        return <Navigate to='/products' />
    }

    return (
        <Box mt={'4rem'}>
            <Divider borderColor={'gray.900'} />
            <Flex w='60%' m='auto' gap={'30px'} p='3' border={'0px solid'}>
                <Text>Medicine</Text>
                <Text>Lab Tests</Text>
                <Menu>
                    <MenuButton _hover={{ color: 'gray.400' }}>
                        <Text>Healthcare<ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        {/* <RLink to='/products'> */}
                            <MenuItem onClick={() => dispatchFun({ type: "PERSONAL_CARE" })}>Personal Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "FITNESS_CARE" })}>Fitness Supplements</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "HOME_CARE" })}>Home Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "HEALTH_CARE" })}>Health Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "ELDERLY_CARE" })}>Elderly Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "STOMACH_CARE" })}>Stomach Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "BABY_CARE" })}>Baby Care</MenuItem>
                            <MenuItem onClick={() => dispatchFun({ type: "HEALTH_CONDITION" })}>Health Condition</MenuItem>
                        {/* </RLink> */}
                    </MenuList>
                </Menu>
                <Text>Surgeries</Text>
                <Text>Health Blogs</Text>
                <Text>PLUS</Text>
                <Text>Offers</Text>
                <Text>Value Store</Text>
            </Flex>
            <Divider borderColor={'gray.900'} />
        </Box>
    )
}
