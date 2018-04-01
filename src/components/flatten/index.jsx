import React from 'react';
import PropTypes from 'prop-types';

function flatten(node, level, getSubNodes) {
    let nodeList = [{level: level + 1, data: node}];
    const subNodes = getSubNodes(node);
    if(!Array.isArray(subNodes)) {
        throw new Error(`getSubNodes must return a Array! bug got:`, subNodes);
    }
    subNodes.forEach(subNode => {
        nodeList = nodeList.concat(flatten(subNode, level + 1, getSubNodes));
    });

    return nodeList;
}

class Flatten extends React.PureComponent {
    render() {
        const { data, config } = this.props;
        const { Shader, getSubNodes } = config;
        return (
            <Shader data={flatten(data, 0, getSubNodes)} config={config} />
        );
    }
}

export default Flatten;

Flatten.propTypes = {
    data: PropTypes.object.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.func.isRequired,
        getSubNodes: PropTypes.func.isRequired
    }).isRequired
}
