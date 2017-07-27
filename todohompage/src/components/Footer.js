import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      	<footer>
			<section class="col-lg-3 col-sm-12">
				recently completed
			</section>
			<h3 class="col-lg-3 col-sm-12">
				Daniel Doherty 2017.
			</h3>
			<a href="#" class="col-lg-3 col-sm-12">
				<img src="#" alt="Contact Dan" />
			</a>
		</footer>	
      </div>
    );
  }
}

export default Footer;