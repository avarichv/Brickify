import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Layout extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, slicing } = config;
        let slices = slicing.split(',').map(i => parseInt(i, 10) || 1);

        if(slices.length !== Shader.length) {
            const slLen = slices.length;
            const sdLen = Shader.length;

            if(slLen > sdLen) {
                slices.splice(sdLen);
            }

            if(slLen < sdLen) {
                slices.length = sdLen;
                slices = slices.fill(1, slLen, sdLen);
            }
        }

        const total = slices.reduce((accu, curr) => accu + curr);
        const widths = slices.map(s => `${s / total * 100}%`);  
        return (
            <div className="bfy-layout">
                {Shader.map((View, i) => (
                    <div key={i} className="bfy-layout_slice" style={{ width: widths[i] }}>
                        <View data={data} config={config} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Layout;

Layout.defaultProps = {
    config: {
        slicing: ''
    }
}

Layout.propTypes = {
    data: PropTypes.any.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.arrayOf(PropTypes.func).isRequired,
        slicing: PropTypes.string.isRequired
    }).isRequired
}
