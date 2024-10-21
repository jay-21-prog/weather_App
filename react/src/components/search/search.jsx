import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { GEO_API_URL, geoApiOptions } from '../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    if (!inputValue) {
      // Avoid making API requests for empty input
      return { options: [] };
    }

    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
        geoApiOptions
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();

      // Ensure data exists before accessing it
      if (!data || !data.data) {
        console.error('Unexpected response structure:', data);
        return { options: [] };
      }

      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error('Error fetching cities:', error);
      return { options: [] };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search Places"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
