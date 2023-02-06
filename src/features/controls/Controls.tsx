import styled from "styled-components";

import { Search } from "./Search";
import { setRegion } from "./controls-slice";
import { useRegion } from "./use-region";
import { Region } from "types/region";
import { CustomSelect } from "./CustomSelect";

type RegionOption = {
  [RegKey in Region]: { value: RegKey, label: RegKey }
}

const optionsMap: RegionOption = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [handleRegion, region] = useRegion();

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region ? optionsMap[region] : ""}
        onChange={handleRegion}
      />
    </Wrapper>
  );
};
