import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Checkbox,
    Divider,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Radio,
    Select,
    Stack,
    Text
} from '@chakra-ui/react';

import React from 'react'

export const Products = () => {
    return (
        <Box w='80%' m={'auto'} mt='6' mb='50px' border={'2px solid red'}>
            <Breadcrumb fontWeight='small' fontSize='sm' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>All Categories</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Stack gap={'20px'} direction='row'>
                <Stack w='25%' border={'1px solid'}>
                    <Heading fontSize={'25px'} fontWeight='500' pt={'40px'} pb="40px">
                        Filter
                    </Heading>
                    <Heading fontSize="16px" fontWeight="600" pb="20px" >
                        Category
                    </Heading>
                    <Stack direction={'row'} justifyContent='center' pb={'20px'}>
                        <Text>Nutrition & Fitness Supplements</Text>
                        <Radio type={'radio'} size='lg' colorScheme='teal' isChecked />
                    </Stack>
                    <Divider w='90%' jus alignItems={'center'} borderColor={'gray.900'} />
                    <Heading fontSize="16px" fontWeight="600" pt={'20px'} pb="20px" >
                        Brand
                    </Heading>

                    <InputGroup>
                        <Input placeholder='Search' />
                        <InputRightElement children={<SearchIcon color={'gray.500'} />} />
                    </InputGroup>

                    <Heading fontSize="16px" fontWeight="600" pt={'20px'} pb="20px" >
                        Price
                    </Heading>
                    <HStack justifyContent={'space-between'}  >
                        <Text >Below 99</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>

                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >100 - 199</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >200 - 299</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >300 - 399</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >400 - 499</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                </Stack>
    
                {/* Right side */}
                
                <Stack w='80%' border={'1px solid'} m='auto'>
                    <HStack justifyContent={'space-between'} align='center'>
                        <Heading fontSize="25px" fontWeight="500" w='300px' pt={'40px'}> 
                            Nutrition & Fitness Supplements
                        </Heading>
                        <HStack gap='20px'>
                            <Text w='60px' fontSize={'14px'}>Sort By:</Text>
                            <Select w='220px'>
                                <option value="">Select</option>
                                <option value="asc">Price Low to High</option>
                                <option value="des">Price High to Low</option>
                            </Select>
                        </HStack>
                    </HStack>
                </Stack>
            </Stack>
        </Box>
    )
}
