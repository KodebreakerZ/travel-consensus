import React, { Component } from 'react';
import Form from '../Form.react';
import { Link, browserHistory } from 'react-router';


  class SideBarItem extends Component {
    constructor(){
      super();
      this.showEditForm = this.showEditForm.bind(this);
      this.delete = this.delete.bind(this);
    }

    render(){
      return (
        <li className="{className}">
          <Link to="/tripinfo"><span>Sample Trip</span>
          <button className='edit'><i className='fa fa-pencil-square'/></button>
          <button className='delete'><i className='fa fa-times-circle'/></button>
          </Link>
        </li>
      )
    }

    delete(){
      // TODO
      }

    showEditForm(e){
      e.preventDefault();
      // TODO
    }
  };

  export default SideBarItem;
