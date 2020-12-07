import React, { useState, useEffect } from 'react';
import { Input } from '../styles/Form';

export default function SearchBar(results) {
  const [query, setQuery] = useState('');
  const [resultsClone] = useState(results.results);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const description = resultsClone.filter((result) =>
      result.description.toLowerCase().includes(query)
    );
    results.setResults(description);
  }, [query]);

  return (
    <Input
      type='text'
      value={query}
      onChange={handleChange}
      placeholder='Search by Description'
      style={{ backgroundColor: 'white' }}
    />
  );
}
