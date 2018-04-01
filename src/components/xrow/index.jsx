import React from'react';
import PropTypes from 'prop-types';

class XRow extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, columns} = config;

        return (
            <React.Fragment>
                {columns.map(col => (
                    <Shader key={col.field} data={data} config={{ ...config, ...col }} />
                ))}
            </React.Fragment>
        );
    }
}

export default XRow;

XRow.propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        columns: PropTypes.arrayOf(PropTypes.shape({
            field: PropTypes.string.isRequired,
            width: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
}