import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from '../pages/signup/signup';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';

fetchMock.enableMocks();
const successResponse = 'user';
describe('Sign up page', () => {

    it('renders signup with form', () => {
        render(<Router><SignUp /> </Router>);
        expect(screen.getAllByRole('textbox'));
    });

    it('tests user signup', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><SignUp /></Router>);
        });
        const submitBtn = screen.getByRole('button');
        fireEvent.click(submitBtn);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/user', {
                'body': '{"username":"","firstName":"","lastName":"","email":"","phone":"","password":"","isModerator":0}',
                "headers": { "Content-Type": "application/json" },
                'method': 'POST'
            });

        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});