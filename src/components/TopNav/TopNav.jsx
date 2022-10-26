import React from 'react'

export const TopNav = () => {
    return (
       <>
        <header>
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-left">
                                <div className="logo">
                                  
                                </div>
                                <div className="menu">
                                   
                                    <ul className="nav" id="nav" >
                                         <li><a href="shop.html">Shop</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="experiance.html">Events</a></li>
                                        <li><a href="experiance.html">Experiance</a></li>
                                        <li className=""><a href="shop.html">Company</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li> 
                                        <div className="clear"></div>
                                    </ul> 
                                </div>
                                <div className="clear"></div>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};
export default TopNav;
