import React from 'react';
import PropTypes from 'prop-types';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                This is a test component
            </div>
        );
    }
}

TestComponent.propTypes = {};

export default TestComponent;
