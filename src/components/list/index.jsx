import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class List extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, getKey } = config;
        return (
            <ul className="bfy-list">
                { data.map(i => (
                    <li className="bfy-list_item" key={getKey(i)}>
                        <Shader data={i} config={config} />
                    </li>
                )) }
            </ul>
        );
    }
}

export default List;

List.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        getKey: PropTypes.func.isRequired
    }).isRequired
}