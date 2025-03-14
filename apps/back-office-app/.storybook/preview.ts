import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@support/preset-style/styles';

const galaxyZFoldViewports = {
  galaxyZFold5: {
    name: 'Galaxy Z Fold 5',
    styles: {
      width: '344px',
      height: '882px',
    },
  },
  galaxyZFold5Folded: {
    name: 'Galaxy Z Fold 5 Folded',
    styles: {
      width: '690px',
      height: '829px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...galaxyZFoldViewports,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
