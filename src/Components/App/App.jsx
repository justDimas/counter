import Header from "../Header/Header";
import Login from "../Login/Login";
import Counter from "../Counter/Counter";
import Comments from "../Comments/Comments";
import Country from "../Country/Country";
import {Routes, Route} from 'react-router-dom'

function App(){
	return (
		<>
		<Header></Header>
		<Routes>
			<Route path='/' element={<Login/>}/>
			<Route path='/counter' element={<Counter/>}/>
			<Route path='/comments' element={<Comments/>}/>
			<Route path='/country' element={<Country/>}/>
		</Routes>
		</>
	)
}

export default App