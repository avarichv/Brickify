import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class IndentLabel extends React.PureComponent {
    render() {
        const { data, config: {indent} } = this.props;

        return (
            <div className="bfy-indent-label" style={{ marginLeft: `${indent}em` }}>{data}</div>
        );
    }
}

export default IndentLabel;

IndentLabel.propTypes = {
    data: PropTypes.string.isRequired,
    config: PropTypes.shape({
        indent: PropTypes.number.isRequired
    }).isRequired
}