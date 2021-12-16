import type { GridClient } from "grid3_client";
import type { IProfile } from "../types/Profile";
import getGrid from "./getGrid";

export interface IContract {
  id: number;
  type: "name" | "node";
}

function _getConsumption(id: number, grid: GridClient) {
  return grid.contracts
    .getConsumption({ id })
    .then((res) => (res === 0 ? "No Data Available" : res + " TFT/Hour"))
    .catch(() => "No Data Available");
}

export default function getContractsConsumption(
  profile: IProfile,
  contracts: { id: number }[]
) {
  return getGrid(profile, (grid) => {
    return Promise.all(contracts.map(({ id }) => _getConsumption(id, grid)));
  });
}