import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Login from '../pages/login/login';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';

fetchMock.enableMocks();
const successResponse = 'user';
describe('Login page', () => {

    it('renders login with form', () => {
        render(<Router><Login /> </Router>);
        expect(screen.getAllByRole('textbox'));
    });

    it('tests user login', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><Login /></Router>);
        });
        const submitBtn = screen.getByRole('button');
        fireEvent.click(submitBtn);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/user/login', {
                'body': '{"username":"","password":""}',
                "headers": { "Content-Type": "application/json" },
                'method': 'POST'
            });

        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});