import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../utils/constants"
import { NavLink, useParams } from "react-router-dom"
import { CountryDetails } from "../../api/models"
import { Chart } from "./components/Chart"

export function CountryInfo() {
    const { country: countryName } = useParams<{ country: string }>()

    const [countryDetails, setCountryDetails] = useState<CountryDetails | undefined>(undefined)

    useEffect(() => {
        setCountryDetails(undefined)
        
        axios.get<CountryDetails>(`${BACKEND_URL}/countries/get-info/${countryName}`).then(response => {
            setCountryDetails(response.data)
        })
    }, [countryName])
    
    const chartCountries = countryDetails ? countryDetails.populationCounts.slice(-10) : []
    
    return (
        <div>
            {countryDetails ? (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Border Countries</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full my-8 table-auto border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-100 text-center">
                                    <th className="px-4 py-2 border border-gray-200">Country</th>
                                    <th className="px-4 py-2 border border-gray-200">Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countryDetails.borderCountries.map((borderCountry, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                                    >
                                        <td className="px-4 py-2 border border-gray-200">
                                            <NavLink
                                                to={`/${borderCountry.countryCode}`}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {borderCountry.commonName}
                                            </NavLink>
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {borderCountry.countryCode}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Chart countries={chartCountries} />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}