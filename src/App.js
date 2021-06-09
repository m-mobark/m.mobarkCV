import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navber from './components/Navbar';
import HomeContent from './components/HomeContent.js';
import Experiences from './components/Experiences';
import Slider from './components/Slider';
import Qualifications from './components/Qualifications';



const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navber />
				<Slider/>
				
				

				
				<div>
					<Switch>
					    <Route path="/" exact component ={HomeContent}/>
						<Route path="/exprience" component ={Experiences}/>
						<Route path="/skills" component={Qualifications}/>
					</Switch>
				</div>

				

			</BrowserRouter>
		</div>
	);
};

export default App;
// module.exports = Task;
