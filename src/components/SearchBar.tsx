import React, { useState } from "react"
import storeItems from "../data/items.json"

type SearchBarProps ={
    e: string
}
export function SearchBar({e}: SearchBarProps){

    const [ searchInput, setSearchInput] = useState("");

    const items = [...storeItems];

     const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    if (searchInput.length > 0 ){
        items.filter((item)=>{
            return item.name.match(searchInput);
        });
    }
}