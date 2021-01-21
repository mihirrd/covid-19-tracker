import React, {useState, useEffect} from 'react'
import { fetchCountries } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core';


const CountryPicker = ({handleCountryChange})=> {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI();
    },[setFetchedCountries]);



    return (
        <div style ={{marginTop: '4vh'}}>
            <FormControl>
                <NativeSelect defaultValue="" onChange = {(e)=>handleCountryChange(e.target.value)}>
                    <option value ="">Global</option>
                    {fetchedCountries.map((country,i)=><option key = {i} value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
