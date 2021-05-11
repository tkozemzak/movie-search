import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element).toBeInTheDocument();
  });

  test('spinner contains 3 children', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element.children.length).toBe(3);
  });
});
