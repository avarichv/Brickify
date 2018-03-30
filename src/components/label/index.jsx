import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class Label extends React.PureComponent {
    render() {
        const { data } = this.props;

        return (
            <div className="bfy-label">{data}</div>
        );
    }
}

export default Label;

Label.propTypes = {
    data: PropTypes.string.isRequired
}