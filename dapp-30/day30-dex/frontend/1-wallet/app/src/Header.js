import React from 'react'; 
import Dropdown from './Dropdown.js';

function Header({
  user, 
  tokens, 
  contracts, 
  selectToken}) {
  return (
    <header id="header" className="card">
      <div className="row">
        <div className="col-sm-3 flex">
          <Dropdown 
            className="ml-3"
            items={tokens.map((token) => ({
              label: token.symbol,
              value: token
            }))} 
            activeItem={{
              label: user.selectedToken.symbol,
              value: user.selectedToken
            }}
            onSelect={selectToken}
          />
        </div>
        <div className="col-sm-9">
          <h1 className="header-title">
            Dex - <span className="contract-address">Contract address: <span className="address">{contracts.dex.options.address}</span></span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
