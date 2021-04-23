import styled from 'styled-components';
import { Link } from 'react-router-dom';



const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    :link { color: blue; text-decoration: underline; }
    :visited { color: blue; text-decoration: underline; }
    :active { color: blue; text-decoration: underline; }
`;
    
const TH = styled.th`
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    background-color: #c1c1c1;
    color: black;
    border: 1px solid #ddd;
`;


const TR = styled.tr`
    :nth-child(even){background-color: #f2f2f2;}
`;


const TD = styled.td`
    border: 1px solid #ddd;
    padding: 4px;
`;


const TableRow = ({ row }) => {
    return (
        <TR>
        <TD key={row.index}>{row.branch}</TD>
        <TD key={row.index}>{row.street}</TD>
        <TD key={row.index}>{row.city}</TD>
        <TD key={row.index}>{row.state}</TD>
        <TD><a href='#'>Show</a> | <a href="#">Edit</a> | <a href="#">Destroy</a></TD>
    </TR>
    );
}



const Table = (props) => {
    return (
        <div style={{width: "600px", height: '600px', margin: '50px auto'}}>
            <section>
                    <h2>Listing {props.data.length} Dojos</h2>
                    <StyledTable>
                        <tbody>
                            <TR>
                                <TH>Coding Dojo Branch</TH>
                                <TH>Street</TH>
                                <TH>City</TH>
                                <TH>State</TH>
                                <TH>Actions</TH>
                            </TR>
                            { props.data.map(row => { return <TableRow key={row.index} row={row} /> })}
                        </tbody>
                    </StyledTable>
                </section>
                <Link to="/new">New Dojo</Link>
        </div>
    );
}

export default Table;
