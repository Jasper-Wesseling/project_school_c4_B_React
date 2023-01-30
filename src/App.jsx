import { useState } from 'react'
import ProductTable from './components/ProductTable'

function App() {
	const [cars, setCars] = useState([
        { id: 1, kenteken: '9894awd', kleur: 'rood', merk: 'BMW', aantaldeuren: '5', prijs: '20'},
        { id: 2, kenteken: '23awd', kleur: 'groen', merk: 'Toyota', aantaldeuren: '3', prijs: '10'},
        { id: 3, kenteken: 'awdawd', kleur: 'geel', merk: 'Toyota', aantaldeuren: '12', prijs: '100'},
        { id: 4, kenteken: '2u3ir', kleur: 'grijs', merk: 'Porsche', aantaldeuren: '3', prijs: '268000'},
        { id: 5, kenteken: 'awd234', kleur: 'zwart', merk: 'Toyota', aantaldeuren: '5', prijs: '20000'},
    ])
	
    return (
        <div>
            <ProductTable cars={cars} setCars={setCars} ></ProductTable>
        </div>
    )
}
	
export default App
