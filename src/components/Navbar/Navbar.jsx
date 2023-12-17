import React from "react";
import { NavLink } from 'react-router-dom'
// import { connect } from "react-redux";
import './nav.css'

function Navbar() {
    return (
        <ul className=" Navbar"
          >
            <li >
                <NavLink exact to="/" >
                    <button className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true">Home</button>
                </NavLink>
            </li>
            <li  >
                <NavLink exact to="/cars" >
                    <button className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true">Cars</button>
                </NavLink>
            </li>
            <li  >
                <NavLink exact to="/note">
                    <button className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true">Notebook</button>
                </NavLink>
            </li>
            <li >
                <NavLink exact to="phone" >
                    <button className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true">Smartphone</button>
                </NavLink>
            </li>
            <li  >
                <NavLink exact to="/gdisk" >
                    <button className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true">GDisk</button>
                </NavLink>
            </li>
            {/* <button className="btn btn-dark w-25" data-toggle="modal" data-target="#basket_modal">BASKET</button>
            <div className="modal fade " id="basket_modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                           
                            <h3>BASKET</h3>
                        </div>
                        <div className="modal-body">
                            <table className="table table-dark table-bordered w-100"> 
                                <tr>
                                    <th></th>
                                    <th>Name:</th>
                                </tr>
                                
                              
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" data-dismis="modal">CLOSE</button>
                        </div>

                    </div>
                </div>

            </div> */}
        </ul>
       
    )
}

export default Navbar