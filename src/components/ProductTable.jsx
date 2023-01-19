import React, { useState } from 'react'

const ProductTable = ({cars, setCars}) => {
	const [knop, setKnop] = useState(false)

	const sortNum = (soortnaam) => {
		if (knop) {
			console.log(soortnaam)
			const numAscending = [...cars].sort((a, b) => a.soortnaam - b.soortnaam)
			setCars(numAscending)
			setKnop(!knop)
		} else {
			const numDescending = [...cars].sort((a, b) => b.soortnaam - a.soortnaam);
			setCars(numDescending)
			setKnop(!knop)
		}	
	}

	//sort by Numeric property ASCENDING (1 - 100)
	const numAscending = [...cars].sort((a, b) => a.id - b.id); 
  
	//sort by Numeric property DESCENDING (100 - 1)
	const numDescending = [...cars].sort((a, b) => b.id - a.id); 
  
	//sort by String property ASCENDING (A - Z)
	const strAscending = [...cars].sort((a, b) =>
	  a.merk > b.merk ? 1 : -1,
	); 
  
	//sort by String property DESCENDING (Z - A)
	const strDescending = [...cars].sort((a, b) =>
	  a.merk > b.merk ? -1 : 1,
	);

	return (
		<table>
			<caption>Products</caption>
			<thead>
				<tr>
					<th>
						<button type="button" onClick={() => sortNum('id')} >kenteken</button>
					</th>
				<th>
					<button type="button" >kleur</button>
				</th>
				<th>
					<button type="button" >merk</button>
				</th>
				<th>
					<button type="button" >aantaldeuren</button>
				</th>
				<th>
					<button type="button" >prijs</button>
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
