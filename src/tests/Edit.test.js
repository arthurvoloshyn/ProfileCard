import React from 'react';

import { render } from '@testing-library/react';

import Edit from '../components/Edit';

describe('Edit component', () => {
  it('Renders Profile Card header', () => {
    const { getByText } = render(<Edit />);

    const linkElement = getByText(/Profile Card/i);
    expect(linkElement).toBeInTheDocument();
  });
});
