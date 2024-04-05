import { render, screen, fireEvent, waitFor, getByText } from "@testing-library/react";
import Users from "./Users";

describe('Get Users Component', () => {

    it('renders the "Get Users" button initally', () => {
        render(<Users />)
        expect(screen.getByText("Get Users")).toBeInTheDocument()
    })

    it('fetches and displays users when "Get Users" button is clicked', async () => {
        render(<Users />)
        fireEvent.click(screen.getByText("Get Users"))
        await waitFor(() => expect(screen.getByText("Leanne Graham")).toBeInTheDocument())
    })

    it('hides users when "Hide Users" button is clicked', async () => {
        render(<Users />);
        fireEvent.click(screen.getByText('Get Users'));
        await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument());

        fireEvent.click(screen.getByText('Hide Users'));
        expect(screen.queryByText('Leanne Graham')).not.toBeInTheDocument();
    });
})


describe('posting component', () => {

    beforeAll(() => {
        console.log("this will be tested first")
    })

    it('allows users to post messages', async () => {
        render(<Users />);
        const postInput = screen.getByRole('textbox');
        fireEvent.change(postInput, { target: { value: 'New message' } });
        expect(postInput.value).toBe('New message');
    
        const postButton = screen.getByText('Post');
        fireEvent.click(postButton);
    
        await waitFor(() => expect(screen.getByText('New message')).toBeInTheDocument());
    });

    it('should empty the input after posting', () => {
        render(<Users/>)
        const postInput = screen.getByRole('textbox');
        fireEvent.change(postInput, { target: { value: 'New message' } });
        expect(postInput.value).toBe('New message');
        const postButton = screen.getByText('Post');
        fireEvent.click(postButton)
        expect(postInput.value).toBe("")
    })

    it('should delete the post after clicking delete button', () => {
        render(<Users />);
        const postInput = screen.getByRole('textbox'); 
        fireEvent.change(postInput, { target: { value: 'New message' } });
        const postButton = screen.getByText('Post');
        fireEvent.click(postButton);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(screen.queryByText('New message')).not.toBeInTheDocument();

    })


})



