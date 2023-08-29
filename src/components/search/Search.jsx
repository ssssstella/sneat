import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import { Link } from 'react-router-dom';
import './search.css';
import {
    MagnifyingGlass, X, ChartBar, ChartDonut,
    ShoppingCartSimple, Users, CalendarBlank, ListNumbers,
    CurrencyDollar, Gear, TextAUnderline, Tabs,
    PlusCircle, Cards, ListBullets, Square, Table, Calendar
} from '@phosphor-icons/react';

export default function Search() {

    const { setShowSearch } = useContext(MainContext);


    return (
        <div className='search'>
            <div className='search--top'>
                <div>
                    <MagnifyingGlass size={20} />
                    <input type='search' id='searchbar' placeholder=''></input>
                </div>
                <div>
                    <div className='search--close' onClick={() => setShowSearch(false)}>[esc]</div>
                    <X className='search--close' onClick={() => setShowSearch(false)} size={20} />
                </div>
            </div>
            <div className='search--bottom'>
                <div className='search--card'>
                    <p>POPULAR SEARCHES</p>
                    <Link to='dashboards/analytics' onClick={() => setShowSearch(false)}><div className='search--cardLink'><ChartBar size={20} /><p>Analytics</p></div></Link>
                    <Link to='dashboards/crm' onClick={() => setShowSearch(false)}><div className='search--cardLink'><ChartDonut size={20} /><p>CRM</p></div></Link>
                    <Link to='dashboards/ecommerce' onClick={() => setShowSearch(false)}><div className='search--cardLink'><ShoppingCartSimple size={20} /><p>eCommerce</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Users size={20} /><p>User List</p></div></Link>
                </div>
                <div className='search--card'>
                    <p>APPS & PAGES</p>
                    <Link to='#'><div className='search--cardLink'><CalendarBlank size={20} /><p>Calendar</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><ListNumbers size={20} /><p>Invoice List</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><CurrencyDollar size={20} /><p>Pricing</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Gear size={20} /><p>Account Settings</p></div></Link>
                </div>
                <div className='search--card'>
                    <p>USER INTERFACE</p>
                    <Link to='#'><div className='search--cardLink'><TextAUnderline size={20} /><p>Typography</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Tabs size={20} /><p>Tabs</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><PlusCircle size={20} /><p>Buttons</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Cards size={20} /><p>Advanced Cards</p></div></Link>
                </div>
                <div className='search--card'>
                    <p>FORMS & TABLES</p>
                    <Link to='#'><div className='search--cardLink'><ListBullets size={20} /><p>Select</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Square size={20} /><p>Autocomplete</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Table size={20} /><p>Table</p></div></Link>
                    <Link to='#'><div className='search--cardLink'><Calendar size={20} /><p>Date Pickers</p></div></Link>
                </div>
            </div>
        </div>
    )
}
