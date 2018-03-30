import React from'react';
import PropTypes from 'prop-types';

class SortBy extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, sortBy } = config;

        let sorted = data;
        if(typeof sortBy === 'string') {
            sorted = data.sort((itemA,itemB) => {
                const a = itemA[sortBy];
                const b = itemB[sortBy];

                if(typeof a === 'number' && typeof b === 'number') {
                    return a > b;
                } else {
                    return `${a}`.localeCompare(`${b}`);
                }
            });
        } else {
            sorted = data.sort(sortBy);
        }

        return <Shader data={data.sort()} config={config} />
    }
}

export default SortBy;

SortBy.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        sortBy: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]).isRequired
    }).isRequired
}
