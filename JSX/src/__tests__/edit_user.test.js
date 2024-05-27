import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditUser from '../pages/edit_user/edit_user';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();


describe('edit user page', () => {

    const info = {
        username: 'admin',
        firstName: 'Bohdana',
        lastName: 'Honserovska',
        email: 'bogdana@gmail.com',
        phone: '0998888888'
    };

    it('tests', async () => {
        await fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(info) }));
        await act(async () => {
            render(<Router><EditUser /></Router>);
        });

        const submitBtn = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(submitBtn);
        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});