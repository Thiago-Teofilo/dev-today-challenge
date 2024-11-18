import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Country } from 'src/api/models';
import {
  GerCountriesPopulation,
  GetCountryDetails,
  GetFlagResponse,
} from 'src/api/responses';

@Injectable()
export class CountriesService {
  async getAvailableCountries() {
    const response = await axios.get<Country[]>(
      `${process.env.BASE_DATA_NAGGER_API_URL}v3/AvailableCountries`,
    );

    return response.data;
  }

  async getCountryInfo(country: string) {
    const { commonName, borders: borderCountries } = (
      await axios.get<GetCountryDetails>(
        `${process.env.BASE_DATA_NAGGER_API_URL}v3/CountryInfo/${country}`,
      )
    ).data;

    const { populationCounts, ...countryData } = (
      await axios.get<GerCountriesPopulation>(
        `${process.env.BASE_COUNTRIES_NOW_API_URL}population`,
      )
    ).data.data.find((country) => country.country === commonName);

    const flagUrl = (
      await axios.get<GetFlagResponse>(
        `${process.env.BASE_COUNTRIES_NOW_API_URL}flag/images`,
      )
    ).data.data.find((country) => country.name === commonName).flag;

    return {
      ...countryData,
      borderCountries,
      populationCounts,
      flagUrl,
    };
  }
}
