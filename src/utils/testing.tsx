import { render, RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import Providers from '../Providers';

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from '@testing-library/react-native';
export { customRender as render };
