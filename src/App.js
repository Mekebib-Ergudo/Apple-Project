import React from 'react';
import Header from './Components/Header/Header';
import Alert from './Components/Alert/Alert';
import First_section from './Components/First section/First section';
import Second_section from './Components/Second section/Second section';
import Third_section from './Components/Third section/Third section';
import Fourth_section from './Components/Fourth section/Fourth section';
import Fifth_section from './Components/Fifth section/Fifth section';
import Sixth_section from './Components/Sixth section/Sixth section';
import Footer from './Components/Footer/Footer';
import './css/styles.css';
import './css/bootstrap.css';
function App() {
	return (
		<>
			<Header />
			<Alert />
			<First_section />
			<Second_section />
			<Third_section />
			<Fourth_section />
			<Fifth_section />
			<Sixth_section />
			<Footer />
		</>
	);
}
export default App;
