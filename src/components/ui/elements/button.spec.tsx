import React from 'react';
import { render } from '@testing-library/react';
import { describe } from 'node:test';

import { Button } from './button';

describe('Button', () => {
    it('Render Button Text', () => {
        const { queryAllByText } = render(<Button children="Hello World!!!" isActive={true} />);

        expect(queryAllByText('Hello World!!!')).toHaveLength(1);
    });
});
