import React, { useEffect, useState } from 'react'
import { getQuotes } from '../Services/allApi'
import { Table } from 'react-bootstrap'
import './List.css'
import Header from '../components/Header'

function List() {

    const [quotes, setQuotes] = useState({})

    const getQuotesData = async () => {
        const { data } = await getQuotes()
        console.log(data);
        setQuotes(data)
    }

    console.log(quotes);

    useEffect(() => {
        getQuotesData()
    }, [])

    return (

        <div className='first' style={{ padding: '1rem 0' }}>
            <div className='main'>
            <Header></Header>
            </div>
            <div className='view_detail'>
            <h1 className='mb-4 mt-5 text-center text-white fw-bolder'>ENQUIRED LIST</h1>
            <div className='view_table'>
                {quotes.length > 0 ? (
                    <Table striped bordered responsive hover variant="dark" className=''>

                        <thead >
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>CONTACT NO</th>
                            </tr>
                        </thead>
                        <tbody>

                            {quotes.map((i, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.uname}</td>
                                    <td>{i.email}</td>
                                    <td>{i.phn}</td>


                                </tr>
                            )}




                        </tbody>


                    </Table>
                ) : <h1>NO DATA FOUND</h1>
                }

</div>

            </div>
        </div>
    )
}

export default List