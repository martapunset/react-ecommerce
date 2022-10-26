import React from 'react'

export const TopNav = () => {
    return (
       <>
        <div className="header">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-left">
                            <div className="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>
                            <div className="menu">
                                <a className="toggleMenu" href="#" style="display: none;"><img src="images/nav.png" alt="" /></a>
                                <ul className="nav" id="nav" style="display: block;">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="experiance.html">Events</a></li>
                                    <li><a href="experiance.html">Experiance</a></li>
                                    <li className=""><a href="shop.html">Company</a></li>
                                    <li className=""><a href="contact.html">Contact</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <script type="text/javascript" src="js/responsive-nav.js"></script>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="header_right">
                            {/* start search*/}
                            <div className="search-box">
                                <div id="sb-search" className="sb-search">
                                    <form>
                                        <input className="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search" />
                                        <input className="sb-search-submit" type="submit" value="" />
                                        <span className="sb-icon-search"> </span>
                                    </form>
                                </div>
                            </div>
                            {/* ---search-scripts--*/}
					
                            <script src="js/classNameie.js"></script>
                            <script src="js/uisearch.js"></script>
                            {/* <script>
                                new UISearch( document.getElementById( 'sb-search' ) );
                            </script> */}
                            {/* ---search-scripts--*/}
                            <ul className="icon1 sub-icon1 profile_img">
                                <li><a className="active-icon c1" href="#"> </a>
                                    <ul className="sub-icon1 list">
                                        <div className="product_control_buttons">
                                            <a href="#"><img src="images/edit.png" alt="" /></a>
                                            <a href="#"><img src="images/close_edit.png" alt="" /></a>
                                        </div>
                                        <div className="clear"></div>
                                        <li className="list_img"><img src="images/1.jpg" alt="" /></li>
                                        <li className="list_desc"><h4><a href="#">velit esse molestie</a></h4><span className="actual">1 x
                                            $12.00</span></li>
                                        <div className="login_buttons">
                                            <div className="check_button"><a href="checkout.html">Check out</a></div>
                                            <div className="login_button"><a href="login.html">Login</a></div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="clear"></div>
                                    </ul>
                                </li>
                            </ul>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default TopNav;
