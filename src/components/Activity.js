import React, { useState } from 'react'
import "./Activity.css"
import Data from '../Data';
import stocky from './static/Stocky.png';
const Activity = () => {
    const [clickText, setClickText]= useState('')
    const [filteredData,setFilteredData] = useState(Data)

    const Datehandler = ()=>{
        const filterdata = Data.filter((items)=> items.date=='June 23')
        setFilteredData(filterdata);
        setClickText('Last 90 Days')
    }
    const Typehandler = () =>{
        const filterdata = Data.filter(items => items.type=='Completed')
        setFilteredData(filterdata);
        setClickText('Completed')
    }
    const Statushandler = () =>{
        const filterdata = Data.filter(items => items.type=='Pending')
        setFilteredData(filterdata)
        setClickText('Pending')
    }
    const Allhandler = ()=>{
        setFilteredData(Data);
        setClickText('')
    }
  return (
    <div>
      <h4 className="filter">Filter By</h4>
      <div className="button-filter">
        <button
          className={clickText === '' ? 'active' : ''}
          onClick={Allhandler}
        >
          No Filter
        </button>
        <button
          className={clickText === 'Last 90 Days' ? 'active' : ''}
          onClick={Datehandler}
        >
          Date
        </button>
        <button
          className={clickText === 'Completed' ? 'active' : ''}
          onClick={Typehandler}
        >
          Type
        </button>
        <button
          className={clickText === 'Pending' ? 'active' : ''}
          onClick={Statushandler}
        >
          Status
        </button>
      </div>
      <div className="status">{clickText}</div>
      {filteredData.map((items) => {
        const { name, date, type, price, img } = items;
        return (
          <div className="activity-item">
            <div className="item-container">
              <img
                className="item-image"
                src={stocky}
                alt="Item"
              />
              <div className="item-details">
                <div className="item-name">{name}</div>
                <div className="item-info">
                  <span className="item-date">{date}</span>
                  <span className="item-type">- {type}</span>
                </div>
              </div>
              <div className="item-price">{price}</div>
            </div>
          </div>
        );
      })}

      {/* <div>
        <div>Completed</div>
        <div className="item-container">
          <div className="items">
            <img src="D:\WebDev\React\react-projects-master\02-tours\setup\src\components\static\Stocky.png" />
            <span>Name</span>
            <div>
              Date
              <span>Type</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Activity