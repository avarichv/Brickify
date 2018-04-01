import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class Cell extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, propKey, width } = config;

        return (
            <div className="bfy-cell" style={{ width: width }}>
                <Shader data={data[propKey]} config={config} />
            </div>
        );
    }
}

export default Cell;

Cell.defaultValues = {
    config: {
        width: 'auto'
    }
}

Cell.propTypes = {
    data: PropTypes.any.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        propKey: PropTypes.string.isRequired,
        width: PropTypes.string
    }).isRequired
}