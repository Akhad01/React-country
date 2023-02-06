type Flags = {
  svg: string;
  png: string;
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Country = {
  name: string;
  region: string;
  borders: string[];
  flags: Flags;
  currencies: Currency[];
  flag: string;
  subregion: string;
  capital: string;
  population: number;
  nativeName: string;
  topLevelDomain: string[];
  languages: Language[];
};
