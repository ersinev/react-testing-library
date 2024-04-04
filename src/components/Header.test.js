import Header from "./Header";
import {render, screen} from '@testing-library/react'


//GET BY
it('should render same text passed into title prop', () => {
    render(<Header title={"example title"}/>)
    const headingElement = screen.getByText("example title")
    expect(headingElement).toBeInTheDocument()
})

// it('should render 2 <p> elements', () => {
//     render(<Header/>);
//     const paragraphElements = screen.getAllByRole("heading");
//     expect(paragraphElements.length).toBe(2); 
// });

// it('should bring the text of button ', () => {
//     render(<Header/>)
//     const buttonElement = screen.getByRole("button")
//     expect(buttonElement).toBeInTheDocument()
// })

// //FIND BY (async)

// it('should render header4 text', async () => {
//     render(<Header/>)
//     const headerElement = await screen.findByText("header4")
//     expect(headerElement).toBeInTheDocument()
// })


// //QUERY BY

// it('should render header4 text', async () => {
//     render(<Header/>)
//     const headerElement =  screen.queryByText("header5")
//     expect(headerElement).not.toBeInTheDocument()
// })