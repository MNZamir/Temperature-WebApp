import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import http from "http-common";

export default function FileTable() {

    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

    const [rowData2] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
      {field: 'id'},
      {field: 'name'},
      {field: 'contentType'},
      {field: 'size'}
    ]);
   
    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
        sortable: true
      }));
   
    // Example of consuming Grid Event
    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);
   
    // Example load data from sever
    useEffect( () => {

        http.get('/api/v1/files')
        .then( response => {
            if (response.status == 200) {
                setRowData(response.data);
                console.log(rowData2)
                console.log(response.data)
            }
        }, (error) => {
            console.log(error.response.data.message);
        });

    //   fetch('https://www.ag-grid.com/example-assets/row-data.json')
    //   .then(result => result.json())
    //   .then(rowData => setRowData(rowData))
    }, []);
   
    // Example using Grid's API
    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);

    return (
     <div className="ag-theme-alpine" style={{width: 800, height: 500}}>

       <AgGridReact 
           ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows

           onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           />
     </div>
    );
}