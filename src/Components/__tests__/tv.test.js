import Tv from '../Tv'
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

test("Contact componenet headings rendered",()=>{
    render(<Tv/>);
    const headings = screen.getByRole("heading")
    expect(headings).toBeInTheDocument();
})