import { getGifts } from "../../src/helpers/getGifs";




describe('pruebas en gifs', () => {

    test('Debe de retornar el arreglo de gifs', async() => {


        const gifs = await getGifts('one punch');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })


})