import React, { Component } from 'react';
import SideBarItem from './SideBarItems.react';
import TripForm from './TripForm.react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link, browserHistory } from 'react-router';


class SideBarList extends Component{
  render(){
    var trip = [];

    for (var key in this.props.trip){
      var className = (this.props.tripId == this.props.trip[key].get("tripId")) ? 'active' : '';

      trip.push(<SideBarItem key={key} tripData={this.props.trip[key]} className={className} />)
    }

    return (
      <nav className="trip-list">
        <h3>Travel Planner</h3>
        <ul>
          <li className={(this.props.tripId == 0) ? 'active' : '' }>

          </li>

          {trip}
          <MenuItem><SideBarItem/></MenuItem>
          <TripForm />
          <button
            className='new-trip'
            onClick={() => this.showNewTripForm()}>[DEV] ConsoleLog
          </button>
          <Link to="/" style={{height:"50px"}}>
            <button className='new-trip'>[DEV] Home</button>
          </Link>

        </ul>
      </nav>
    )
  }
  showNewTripForm(e){
    console.log("Testing endpoints", context.router)
  }
}

export default SideBarList;
