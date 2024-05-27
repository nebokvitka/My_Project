import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Articles from '../pages/articles/articles';
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks();

describe('Article page', () => {
    const user = JSON.parse(localStorage.getItem("user"));
    it('renders articles', () => {
        render(<Router><Articles /> </Router>);
        expect(screen.getAllByRole('div'));
    });

})