import React from'react';
import PropTypes from 'prop-types';

class InlineList extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader } = config;
        const list = Array.isArray(data) ? data : Object.values(data);

        return (
            <React.Fragment>
                {list.map((value, i) => (
                    <Shader key={i} data={value} config={config} />
                ))}
            </React.Fragment>
        );
    }
}

export default InlineList;

InlineList.propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired
    }).isRequired
}