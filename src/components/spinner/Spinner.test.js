import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element).toBeInTheDocument();
  });
});
