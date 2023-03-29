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

import React from 'react'

export const NavContents = () => {
    return (
        <Box mt={'4rem'}>
            <Divider borderColor={'gray.900'} />
            <Flex w='60%' m='auto' gap={'30px'} p='3' border={'0px solid'}>
                <Text>Medicine</Text>
                <Text>Lab Tests</Text>
                <Menu>
                    <MenuButton _hover={{ color: 'gray.400' }}>
                        <Text>HealthCare<ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Personal Care</MenuItem>
                        <MenuItem>Fitness Supplements</MenuItem>
                        <MenuItem>Home Care</MenuItem>
                        <MenuItem>Skin Care</MenuItem>
                        <MenuItem>Elderly Care</MenuItem>
                        <MenuItem>Stomach Care</MenuItem>
                        <MenuItem>Baby Care</MenuItem>
                        <MenuItem>Health Condition</MenuItem>
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
