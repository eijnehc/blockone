import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from '../styles/Container';
import { Table } from '../styles/Table';
import { Spinner } from '../styles/Spinner';
import { Title } from '../styles/Title';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

export default function Transactions() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triangle, setTriangle] = useState({
    timestamp: String.fromCharCode('9650'),
    action: String.fromCharCode('9650'),
    description: String.fromCharCode('9650'),
    amount: String.fromCharCode('9650'),
  });
  const [asc, setAsc] = useState({
    timestamp: true,
    action: true,
    description: true,
    amount: true,
  });

  const onSort = (field) => {
    let ascField = { ...asc };
    let sortedData = results.slice().sort((a, b) => {
      if (a[field] < b[field]) {
        return ascField[field] ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascField[field] ? 1 : -1;
      }
      return 0;
    });

    setResults(sortedData);
    ascField[field] = !ascField[field];
    setAsc(ascField);

    let triangleField = { ...triangle };
    triangleField[field] = String.fromCharCode(ascField[field] ? 9650 : 9660);
    setTriangle(triangleField);
  };

  useEffect(() => {
    const transactions = async () => {
      const data = await fetch(
        'https://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions'
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });
      data.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          if (data[key].action === 'DEBIT') {
            data[key].amount *= -1;
          }
        }
      }
      console.log(data);
      setResults(data);
      setLoading(false);
    };
    transactions();
  }, []);

  const renderedResults = results.map((result) => {
    return (
      <tr className='transactionItem' key={result.id}>
        <td>{result.timestamp.split('-').reverse().join('-')}</td>
        <td>{result.action}</td>
        <td>{result.description}</td>
        {result.action === 'DEBIT' ? (
          <td
            style={{
              color: '#d9534f',
            }}
          >
            {result.amount} ({result.currency})
          </td>
        ) : (
          <td
            style={{
              color: 'limegreen',
            }}
          >
            +{result.amount} ({result.currency})
          </td>
        )}
      </tr>
    );
  });

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <Title>My Transactions</Title>
        </Col>
      </Row>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            <Col size={5} style={{ marginRight: '5px' }}>
              <SearchBar results={results} setResults={setResults} />
            </Col>
            <Col size={1}>
              <Filter results={results} setResults={setResults} />
            </Col>
          </Row>
          <Row>
            <Col size={1}>
              <Table>
                <thead>
                  <tr>
                    <th onClick={() => onSort('timestamp')}>
                      Timestamp {triangle.timestamp}
                    </th>
                    <th onClick={() => onSort('action')}>
                      Action {triangle.action}
                    </th>
                    <th onClick={() => onSort('description')}>
                      Description {triangle.description}
                    </th>
                    <th onClick={() => onSort('amount')}>
                      Amount {triangle.amount}
                    </th>
                  </tr>
                </thead>
                <tbody>{renderedResults}</tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </Grid>
  );
}
