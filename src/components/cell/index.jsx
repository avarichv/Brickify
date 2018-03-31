import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class Cell extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, width } = config;

        return (
            <div className="bfy-cell" style={{ width }}>
                <Shader data={data} config={config} />
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
        width: PropTypes.string
    }).isRequired
}