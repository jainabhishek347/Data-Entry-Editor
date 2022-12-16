import * as React from 'react';
import './style.css'
import * as ReactDOM from 'react-dom';
import GenericTile from "react-generic-tile";
import "./tiles.css";


const Tiles = () => {

  return (
    <div className="App">
      <h1>Holidays Data</h1>
      <div className="flex">
        <GenericTile className='card' header="Date" />
        <GenericTile className='card' header="Date" subheader="Subheader" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" />
        <GenericTile className='card' header="Date" subheader="Subheader" footer="Footer" onClick={() => console.log("Click")}
        />
      </div>
    </div>
  );

};
export default Tiles
