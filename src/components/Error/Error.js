import React from 'react';
import './Error.css';
 
const Error = () => {
  window.scroll(0,0);
	return (
		<>
			<div className="error-messaging">
				<h4>Welp, that's all folks! We got an error </h4>
				<p>☝ Please return to home page.☝</p>
			</div>
		</>
	);
};

export default Error;