const { render } = require("@testing-library/react");
const { GiftItem } = require("../../src/components/GifItem");

describe('Pruebas en <GifItem.jsx /> ', () => {
    const title = 'one punch';
    const url = 'https://one-punch/saitama.jpg'
    
    
    test('debe hacer match con el snapshot', () => {




        const {container} =  render(<GiftItem title={title} url={url}/>)

        expect (container).toMatchSnapshot();


    });

    // test('debe mostrar imagen con el url y el alt indicado', () => {
    //     render( <GiftItem title={title} url={url}/> )

    //     const {src, alt} = screen.getByRole('img');
    //     expect(src).toBe(url);
    //     expect(alt).toBe(alt)
    // })

    // test('debe mostrar el titulo', () => {
    //     render( <GiftItem title={title} url={url}/> )
    // })

});