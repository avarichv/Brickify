import React from'react';
import PropTypes from 'prop-types';

class Sort extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader } = config;
        return <Shader data={data.sort()} config={config} />
    }
}

export default Sort;

Sort.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired
    }).isRequired
}
