import './App.css';
import Aos from 'aos';
import { FC, useContext, useEffect } from 'react';
import { LandingPage } from './page/landing.page';
import { ThemeContext } from './context/theme.context';


const App: FC = () => {
	const theme = useContext(ThemeContext)

	useEffect(() => {
		if (theme === 'dark') document.documentElement.classList.add(theme);
		else document.documentElement.classList.remove(theme);
	}, [theme])

	useEffect(() => {
		Aos.init({});
	}, [])

	return (
		<ThemeContext.Provider value='light'>
			<LandingPage />
		</ThemeContext.Provider>
	);
};

export default App;
