import React from "react";
import {Movies} from "../components/Movies";

class Main extends React.Component {

	state = {
		movies: []
	}

	render () {
		const {movies} = this.state;

		return <main className="container content"> 
		{
			movies.length ? (
			<Movies movies={this.state.movies}/>
			) : <h3>Loading</h3>
		}
			
		</main>
	}	
}

export {Main};