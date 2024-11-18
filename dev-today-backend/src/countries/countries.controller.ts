import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('get-available')
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries();
  }

  @Get('get-info/:country')
  async getCountryInfo(@Param('country') country: string) {
    return await this.countriesService.getCountryInfo(country);
  }
}
