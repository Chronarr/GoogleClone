import React from 'react'

export default async function WebSearchPage({ searchParams }) {

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_GOOGLE}&cx=${process.env.CX_KEY}&q=${searchParams.search}`)
    const data = await response.json();
    const result = data.items;
    return (<>
        {result && result.map(result => <h1>{result.title}</h1>)};
    </>
    );
};
