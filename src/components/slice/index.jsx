import React from'react';
import PropTypes from 'prop-types';

class Slice extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { offset, bufferSize, Shader } = config;
        const slice = data.slice(offset, offset + bufferSize);
        return <Shader data={slice} config={config} />
    }
}

export default Slice;

Slice.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        offset: PropTypes.number.isRequired,
        bufferSize: PropTypes.number.isRequired
    }).isRequired
}
