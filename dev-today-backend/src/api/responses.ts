import { BorderCountry, PopulationCount } from './models';

export interface GetFlagResponse {
  data: {
    flag: string;
    name: string;
  }[];
}

export interface GerCountriesPopulation {
  data: {
    country: string;
    code: string;
    populationCounts: PopulationCount[];
  }[];
}

export interface GetCountryDetails {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountry[];
}
