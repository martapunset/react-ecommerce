import React from 'react'

 const Footer = () => {
     return (
         <>
     
        <footer className="footer">
        <div className="container">
            <div className="row row-footer">
                <div className="col-md-3">
                    <ul className="footer_box">
                        <h4>Products</h4>
                        <li><a href="#">Mens</a></li>
                        <li><a href="#">Womens</a></li>
                        <li><a href="#">Youth</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer_box">
                        <h4>About</h4>
                        <li><a href="#">Careers and internships</a></li>
                        <li><a href="#">Sponserships</a></li>
                        <li><a href="#">team</a></li>
                        <li><a href="#">Catalog Request/Download</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer_box">
                        <h4>Customer Support</h4>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping and Order Tracking</a></li>
                        <li><a href="#">Easy Returns</a></li>
                        <li><a href="#">Warranty</a></li>
                        <li><a href="#">Replacement Binding Parts</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer_box">
                        <h4>Newsletter</h4>
                        <div className="footer_search">
                           <form>
                            <input type="text" value="Enter your email" />
                            <input type="submit" value="Go"/>
                           </form>
                        </div>
                        <ul className="social">	
                          <li className="facebook"><a href="#"><span> </span></a></li>
                          <li className="twitter"><a href="#"><span> </span></a></li>
                          <li className="instagram"><a href="#"><span> </span></a></li>	
                          <li className="pinterest"><a href="#"><span> </span></a></li>	
                          <li className="youtube"><a href="#"><span> </span></a></li>										  				
                        </ul>
                           
                    </ul>
                </div>
            </div>
            <div className="row footer_bottom">
                <div className="copy">
                   <p>© 2014 Template by <a href="http://w3layouts.com" target="_blank">w3layouts</a></p>
                </div>
                  <dl id="sample" className="dropdown">
                    <dt><a href="#"><span>Change Region</span></a></dt>
                    <dd>
                        <ul >
                            <li><a href="#">Australia<img class="flag flagvisibility" src="images/as.png" alt=""/><span class="value">AS</span></a></li>
                            <li><a href="#">Sri Lanka<img class="flag flagvisibility" src="images/srl.png" alt=""/><span class="value">SL</span></a></li>
                            <li><a href="#">Newziland<img class="flag flagvisibility" src="images/nz.png" alt=""/><span class="value">NZ</span></a></li>
                            <li><a href="#">Pakistan<img class="flag flagvisibility" src="images/pk.png" alt=""/><span class="value">Pk</span></a></li>
                            <li><a href="#">United Kingdom<img class="flag flagvisibility" src="images/uk.png" alt=""/><span class="value">UK</span></a></li>
                            <li><a href="#">United States<img class="flag flagvisibility" src="images/us.png" alt=""/><span class="value">US</span></a></li>
                        </ul>
                     </dd>
                     </dl>
               </div>
        </div>
             </footer>
             </>
    
  )
}

export default Footer;