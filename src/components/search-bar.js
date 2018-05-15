import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props); 

        this.state = { term: 'value the input' };
    }


    render() {
        return (
            <div>
                <input className="form-control"
                placeholder="Search Videos "
                value= {this.state.trem} 
                onChange={event => this.onInputChange(event.target.value )}/>
            </div>
        );
    }
onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
}

}


export default SearchBar;