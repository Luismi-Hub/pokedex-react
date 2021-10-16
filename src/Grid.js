import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GridItem } from './GridItem'

export const Grid = ({search}) => {

    const [pokemon, setpokemon] = useState()

    const request = async () =>{

            const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(search)}`
            const req = await fetch(url)
            const data = await req.json()
            console.log(data)

            const pokemonData = {

                name:data.name,
                ability1:data.abilities[0].ability.name,
                ability2:data.abilities[1].ability.name,
                photo:data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                height:data.height,
                power: data.base_experience,
                number:data.id



            }


                    setpokemon(pokemonData)

    }

    

    useEffect(() => {
     request()
    }, [search])


    


    return (
        <div>
            
        <GridItem key={pokemon} {...pokemon}/>

            

        </div>
    )

}
