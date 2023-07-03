import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaugh, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faChartSimple, faGaugeSimpleHigh, faGear, faTable, faWrench } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaugh} />
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>


            <hr class="sidebar-divider my-0" />


            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <FontAwesomeIcon icon={faGaugeSimpleHigh} />
                    <span>Dashboard</span></a>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Interface
            </div>


            <li class="nav-item">
                <a class="nav-link " href="#" >
                    <FontAwesomeIcon icon={faGear} />
                    <span>Components</span>
                </a>

            </li>


            <li class="nav-item">
                <a class="nav-link " href="#">
                    <FontAwesomeIcon icon={faWrench} />
                    <span>Utilities</span>
                </a>

            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Addons
            </div>


            <li class="nav-item">
                <a class="nav-link " href="#">
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Pages</span>
                </a>

            </li>


            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <FontAwesomeIcon icon={faChartSimple} />
                    <span>Charts</span></a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <FontAwesomeIcon icon={faTable} />
                    <span>Tables</span></a>
            </li>


            <hr class="sidebar-divider d-none d-md-block" />




        </ul>

    )
}

export default Header