import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';
import Flatten from '../../components/flatten';
import IndentLabel from '../../components/indentLabel';
import List from '../../components/list';

const Bricks = Brickify([Flatten, IndentLabel, List]);

const TreeView = ({data, config}) => (
    <Bricks.Flatten data={data} getSubNodes={node => node.items || []}>
        <Bricks.List getKey={i => i.data.id}>
            <Bricks.IndentLabel matchProps={(d, c, s) => ({data: d.data.id, config: { indent: d.level }})} />
        </Bricks.List>
    </Bricks.Flatten>
);

export default TreeView;
