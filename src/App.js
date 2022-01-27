// import Calendar from './components/calendar';
import {
	TheHeader,
	TheNav,
	TheFooter
} from './components/template';
import Router from './router';

function App() {
  return (
    <div className="App">
		<TheHeader	/>
		<TheNav	/>
		<Router />
		{/*<TheFooter	/>*/}
    </div>
  );
}

export default App;
