/*
 * HomePage
 *
 * The TripPage should be only visible to logged in users
 * Route: /tripinfo
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import ChatRoom from './ChatRoom.react';
import { Link } from 'react-router';

 const styles = {
   gridList: {
     width: 360,
     height: 290,
     marginBottom: 20,
     display: "inline-block",
     marginLeft: 6,
   },
 };

 const tilesData = [
   {
     img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
     title: 'Breakfast',
     author: 'jill111',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
     title: 'Tasty burger',
     author: 'pashminu',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
     title: 'Camera',
     author: 'Danson67',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
     title: 'Morning',
     author: 'fancycrave1',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
     title: 'Hats',
     author: 'Hans',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
     title: 'Honey',
     author: 'fancycravel',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
     title: 'Vegetables',
     author: 'jill111',
   },
   {
     img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
     title: 'Water plant',
     author: 'BkrmadtyaKarki',
   },
 ];


 const TripPage = () => (
   <div className="content-area">

       {tilesData.map(tile => (
        <GridTile
           key={tile.img}
           title={tile.title}
           style={styles.gridList}
           subtitle={<span>by <b>{tile.author}</b></span>}
           actionIcon={<Link to="/chatroom" className="btn btn--chat">Discuss</Link>}
         >
           <img src={tile.img} />
        </GridTile>
       ))}

   </div>
 );

 export default TripPage;

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TripPage);
