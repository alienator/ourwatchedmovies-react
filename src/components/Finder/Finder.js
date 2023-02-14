import React from 'react';

class Finder extends React.Component {
    render() {
        return (
            <form id="finder">
                <input
                    type="text"
                    name="what" />
                <button
                    type="button"
                    aria-label='find'>find</button>
            </form>
        );
    }
}

export default Finder;