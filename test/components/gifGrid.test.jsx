import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en el ecomponente', () => {

    const category = 'One punch'

    test('debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Loading...'));

    });

    test('Debe de mostrar los items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'abv',
                title:'Saitama',
                url:'http:/saitama.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(1);
        
    })
})