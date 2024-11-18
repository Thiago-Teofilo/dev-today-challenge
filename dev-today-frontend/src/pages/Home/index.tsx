import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../utils/constants"
import { NavLink } from "react-router-dom"
import { Country } from "../../api/models"

export function Home() {
    const [countries, setCountries] = useState<Country[]>([])

    useEffect(() => {
        axios.get<Country[]>(`${BACKEND_URL}/countries/get-available`).then(response => {
            setCountries(response.data)
        })
    }, [])
    
    return (
        <div>
            {countries.length ? (
                <div>
                    <h1>Available Countries</h1>
                    <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 grid mt-4 w-full mx-auto">
                    {countries.map(country => {
                        return (
                            <NavLink key={country.name} to={country.countryCode} className="py-2 bg-blue-300 w-full max-w-80 ">
                                {country.name}
                            </NavLink>
                        )
                    })}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}