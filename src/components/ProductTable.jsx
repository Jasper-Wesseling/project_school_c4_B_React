import React, { useState } from 'react'
import '../css/ProductTable.css'

const ProductTable = ({cars, setCars}) => {
	const [knop, setKnop] = useState(false)

	// sort for numbers
	const sortNum = (soortnaam) => {
		if (knop) {
			const numAscending = [...cars].sort((a, b) => a[soortnaam] - b[soortnaam])
			setCars(numAscending)
			setKnop(!knop)
		} else {
			const numDescending = [...cars].sort((a, b) => b[soortnaam] - a[soortnaam]);
			setCars(numDescending)
			setKnop(!knop)
		}	
	}

	// sort for the strings
	const sortStr = (soortnaam) => {
		if (knop) {
			const strAscending = [...cars].sort((a, b) => a[soortnaam] > b[soortnaam] ? 1 : -1, ); 
			setCars(strAscending)
			setKnop(!knop)
		} else {
			const strDescending = [...cars].sort((a, b) => a[soortnaam] > b[soortnaam] ? -1 : 1, );
			setCars(strDescending)
			setKnop(!knop)
		}	
	}

	return (
		<table>
			<caption>Products</caption>
			<thead>
				<tr>
					<th>
						<button type="button" onClick={() => sortStr('kenteken')} >kenteken</button>
					</th>
					<th>
						<button type="button" onClick={() => sortStr('kleur')}>kleur</button>
					</th>
					<th>
						<button type="button" onClick={() => sortStr('merk')} >merk</button>
					</th>
					<th>
						<button type="button" onClick={() => sortNum('aantaldeuren')} >aantaldeuren</button>
					</th>
					<th>
						<button type="button" onClick={() => sortNum('prijs')} >prijs</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{cars.map((car) => (
					<tr key={car.id}>
						<td>{car.kenteken}</td>
						<td>{car.kleur}</td>
						<td>{car.merk}</td>
						<td>{car.aantaldeuren}</td>
						<td>{car.prijs}</td>
					</tr>
				))}
				
			</tbody>
		</table>
	)
}
	
export default ProductTable
