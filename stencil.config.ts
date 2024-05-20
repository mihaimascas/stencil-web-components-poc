import { Config } from '@stencil/core';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../../asasqt-portal/ui/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
