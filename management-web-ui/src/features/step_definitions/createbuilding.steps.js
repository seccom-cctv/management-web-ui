import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import Buildings from '../../Pages/Buildings/Buildings';
import {render, fireEvent, act} from '@testing-library/react';
import {toast} from 'react-toastify';
const axios = require('axios');

const feature = loadFeature('./src/features/createbuilding.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('axios', () => {
    const actual = jest.requireActual('axios');
    Object.assign(actual, {post: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let button;

    let api;
    let spy;
    let toastCalls;

    beforeEach(() => {
        act(() => {
            toastCalls = [];
            spy = toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            api = axios.post.mockImplementation(() => {
                return Promise.resolve({
                    data: { message: 'New Building Created !' }
                });
            });

            const {getByTestId} = render(<Buildings />);
            getElement = getByTestId;

        });
    });

    test('Detect the submit action', ({given, when, then}) => {

        given('I am in the Buildings page', () => {
            button = getElement("buildings");
        });

        when('I click the submit button', () => {
            fireEvent.click(button);
        });

        then('I should be notified', () => {
            expect(toastCalls.length).toEqual(1);
        });
    });

});