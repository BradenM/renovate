import type { PackageFile } from '../types';

export function extractPackageFile(
  content: string,
  packageFile: string
): PackageFile | null {
  return {
    deps: [
      {
        depName: 'nixpkgs',
        currentValue: 'nixpkgs-unstable',
      },
    ],
  };
}
