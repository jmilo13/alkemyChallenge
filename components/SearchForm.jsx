import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import List from '@components/List'
import TeamContext from '@context/TeamContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_API = 'https://superheroapi.com/api.php/'
const API_KEY = '10224481852849965'

export default function SearchForm() {
    const context = useContext(TeamContext)
    const [heroName, setHeroName] = useState('superman')
    const [data, setData] = useState()
    const handleChange = e => {
        setHeroName(e.target.value)
        console.log(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const API = `${BASE_API}${API_KEY}/search/${heroName}`
        // const API = 'http://localhost:3000/data'
        const response = await axios.get(API)
        setData(response.data.results)
        context.setItem(false)
        console.log(response.data.results)
    }
    return (
        <section className="search-section">
            <form className="search-section__form" onSubmit={handleSubmit}>
                <Form.Label className="search-section__label">Busca un superheroe o villano para tu equipo</Form.Label>
                <Form.Control className="search-section__input" type="text" onChange={handleChange} />
                <Button variant="primary" type="submit">Buscar</Button>
            </form>
            {data &&
                <section className="results-section">
                    <List data={data} />
                </section>
            }
            <style jsx>
                {`
                .search-section {
                padding: 2rem;
                }
                .search-section__form {
                max-width: 30rem;
                margin: auto;
                min-height: 10rem;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                text-align: center;
                }
                .results-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                }
                `}
            </style>
        </section>
    )
}