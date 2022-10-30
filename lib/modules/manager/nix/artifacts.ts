import { exec } from '../../../util/exec';
import type { ExecOptions } from '../../../util/exec/types';
import type { UpdateArtifact, UpdateArtifactsResult } from '../types';

export async function updateArtifacts({
  packageFileName,
  updatedDeps,
  newPackageFileContent,
  config,
}: UpdateArtifact): Promise<UpdateArtifactsResult[] | null> {
  const cmd = 'nix flake update';

  const execOptions: ExecOptions = {
    docker: {
      image: 'nix',
    },
  };

  const res = await exec(cmd, execOptions);

  return null;
}
