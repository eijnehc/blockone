import React from 'react';
import { NavBar, NavLinkActive } from '../styles/Nav';

export default function Header() {
  return (
    <NavBar>
      <NavLinkActive exact to='/blockone' activeStyle={{ color: '#2dbe60' }}>
        Transactions
      </NavLinkActive>
      <NavLinkActive
        exact
        to='/blockone/trade'
        activeStyle={{ color: '#2dbe60' }}
      >
        Trade
      </NavLinkActive>
    </NavBar>
  );
}
