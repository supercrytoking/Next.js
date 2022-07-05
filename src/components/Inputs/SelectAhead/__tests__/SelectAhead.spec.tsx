import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SelectAhead from '../SelectAhead';

describe('SelectAhead component', () => {
  it('Should render with value', () => {
    render(
      <SelectAhead
        value="string1"
        placeholder="Timezone"
        typeName="timezones"
      />
    );
    const input = screen.getByPlaceholderText('Timezone') as HTMLInputElement;
    expect(input.value).toBe('string1');
  });
});
