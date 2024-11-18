export interface Country {
  countryCode: string;
  name: string;
}

export interface CountryDetails {
  country: string;
  code: string;
  borderCountries: BorderCountry[];
  populationCounts: PopulationCount[];
  flagUrl: string;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface PopulationCount {
  year: number;
  value: number;
}
