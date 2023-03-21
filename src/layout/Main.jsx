import React from "react";
import {Movies} from "../components/Movies";
import {Preloader} from '../components/preloader';
import {Search} from '../components/Search';

class Main extends React.Component {

	state = {
		movies: []
	}

	componentDidMount() {
		fetch("http://www.omdbapi.com/?apikey=a2c86e92&s=matrix")
		.then(response => response.json())
		.then(data => this.setState({movies: data.Search}))
	}

	render () {
		const {movies} = this.state;

		return <main className="container content"> 
		<Search/>
		{
			movies.length ? (
			<Movies movies={this.state.movies}/>
			) : <Preloader/>
		}			
		</main>
	}	
}

export {Main};