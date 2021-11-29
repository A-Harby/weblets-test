import type { IProfile } from "../types/Profile";
const { GridClient } = window.configs?.grid3_client ?? {};
const { HTTPMessageBusClient } = window.configs?.client ?? {};

export default function validateMnemonics(profile: IProfile) {
  const { networkEnv, mnemonics, storeSecret } = profile;
  const http = new HTTPMessageBusClient(0, "");
  const grid = new GridClient(
    networkEnv as any,
    mnemonics,
    storeSecret,
    http,
    undefined,
    "tfkvstore" as any
  );
  return grid
    .connect()
    .then(() => grid.disconnect())
    .then(() => true)
    .catch(() => false);
}