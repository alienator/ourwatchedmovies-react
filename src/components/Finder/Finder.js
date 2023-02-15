import React from 'react';

import './Finder.scss';

class Finder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            what: '',
        };
    }

    handleWhatChange(value) {
        this.setState({what: value});
    }

    handleSubmit() {
        this.props.onFind(this.state.what, 'all');
    }
        
    render() {
        return (
            <form
                id="finder"
                method="POST"
                onSubmit={(e) => {e.preventDefault(); this.handleSubmit();}}>
                <input
                    type="text"
                    name="what"
                    aria-label='what'
                    onChange={(e) => this.handleWhatChange(e.target.value)}/>
                <button
                    type="submit"
                    aria-label='find'>find</button>
            </form>
        );
    }
}

export default Finder;
