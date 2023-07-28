import React, { useEffect, useState } from 'react'
import WeatherApp from './components/WeatherApp'

const App = () => {
	const [weather, setWeather] = useState()
	const [query, setQuery] = useState('warsaw')
	const [error, setError] = useState('')

	useEffect(() => {
		let timeout = setTimeout(() => {
			getdata()
		}, 700)
    return() => clearTimeout(timeout)

	}, [query])

	const getdata = async () => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b8f337afbc9706d3f8db77374b959a7d`
			)
			console.log(response)
			if (response.ok) {
				const data = await response.json()
				setError('')
				setWeather(data)
			} else {
				setError('nie znaleziono miasta')
			}
		} catch (error) {
			setError(error)
		}
	}
	if (!weather) {
		return 'loading'
	}

	return (
		<div>
			<input onChange={e => setQuery(e.target.value)} value={query} placeholder='Podaj nazwę mista' />

			{!error ? <WeatherApp data={weather} /> : <p>Brak miasta</p>}
		</div>
	)
}

export default App

// https://api.openweathermap.org/data/2.5/weather?q={Warsaw&appid={b8f337afbc9706d3f8db77374b959a7d}

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     setLoading(true);

//     let timeout = setTimeout(() => {
//       getData();
//     }, 700);

//     return () => clearTimeout(timeout)

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   const getData = async () => {
//     try {
//       let response;
//       if (!query) {
//         response = await fetch("https://restcountries.com/v3.1/all");
//       } else {
//         response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
//       }

//       const data = await response.json();
//       setCountries(data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log(countries);

//   return (
//     <div>
//       <input
//         onChange={(e) => setQuery(e.target.value)}
//         value={query}
//         placeholder="Podaj nazwę kraju"
//       />
//       <div>
//         {countries.map((country) => (
//           <p key={country.cca3}>{country.name.common}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
