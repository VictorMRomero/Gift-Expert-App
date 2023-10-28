import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";




export const useFetchGifs = (category) => {
    

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    
    useEffect(() => {
        const getImages = async () => {
            try {
                const newImages = await getGifts(category);
                setImages(newImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        }

        getImages();
    }, [category]);




    return {
        images,
        isLoading
    }
}