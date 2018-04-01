import React from'react';
import PropTypes from 'prop-types';

class SortBy extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, sortBy, direction, ignoreCase } = config;

        let sorted = data;
        if(typeof sortBy === 'string') {
            sorted = data.sort((a,b) => {
                const va = a[sortBy];
                const vb = b[sortBy];
                const sign = direction === 'desc' ? -1 : 1;

                if(typeof va === 'number' && typeof vb === 'number') {
                    return direction === 'desc' ? (vb - va) : (va - vb);
                }

                if(ignoreCase) {
                    return `${va}`.toLowerCase().localeCompare(`${vb}`.toLowerCase()) * sign;
                } else {
                    return `${va}`.localeCompare(`${vb}`) * sign;
                }
            });
        }

        if(typeof sortBy === 'function') {
            sorted = data.sort(sortBy);
        }

        return <Shader data={sorted} config={config} />
    }
}

export default SortBy;

SortBy.defaultProps = {
    config: {
        direction: 'asc',
        ignoreCase: true
    }
}

SortBy.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        sortBy: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]).isRequired,
        direction: PropTypes.oneOf(['asc', 'desc']),
        ignoreCase: PropTypes.bool
    }).isRequired
}
