import React from "react";

class Search extends React.Component {

	state = {
		search: '',
		type: 'all'
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search);
		}
	}

	handleFilter = (event) => {
		this.setState({type: event.target.dataset.type})
	}

	render() {
		return <div className="row">              
          <div className="input-field">
            <input 
			placeholder="Search" 
			type="search" 
			className="validate"
			value={this.state.search}
			onChange={(e) => this.setState({search: e.target.value})}
			onKeyDown={this.handleKey}
			/>
			<button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>          
          </div>
		  <div>
		  	<label>
				<input type="checkbox" class="filled-in" data-type="all" onChange={this.handleFilter}/>
				<span>All</span>
      		</label>
			  <label>
				<input type="checkbox" class="filled-in" data-type="movie" onChange={this.handleFilter}/>
				<span>Movies</span>
      		</label>
			  <label>
				<input type="checkbox" class="filled-in" data-type="series" onChange={this.handleFilter}/>
				<span>Series</span>
      		</label>
			</div>        
      	</div>
		
	}
}

export {Search};