import React from'react';
import PropTypes from 'prop-types';

class Row extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader } = config;

        return (
            <React.Fragment>
                {Object.values(data).map((value, i) => (
                    <Shader key={i} data={value} config={config} />
                ))}
            </React.Fragment>
        );
    }
}

export default Row;

Row.propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired
    }).isRequired
}