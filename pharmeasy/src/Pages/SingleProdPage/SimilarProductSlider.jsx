import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SimilarProduct } from './SimilarProduct';

const responsive = {

    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },

    desktop: {
        breakpoint: { max: 1241, min: 800 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export const SimilarProductSlider = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://upset-dove-zipper.cyclic.app/health-care')
            .then((res) => {
                console.log('simi', res);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            {data &&
                <Box
                    w='90%'
                    h='auto'
                    borderRadius={'lg'}
                    mt='16' >
                    <Text pl='4' mb='-4'>Similar Products</Text>
                    <Carousel responsive={responsive}>
                        {data?.map((el) => (
                            <SimilarProduct key={el.id} {...el} />
                        ))}
                    </Carousel>
                </Box>
            }
        </>
    )
}

