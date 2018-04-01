import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';
import Flatten from '../../components/flatten';
import IndentLabel from '../../components/indentLabel';
import Slice from '../../components/slice';
import List from '../../components/list';

const Bricks = Brickify([Flatten, IndentLabel, List, Slice]);

const TreeView = ({data, config}) => (
    <Bricks.Flatten data={data} getSubNodes={node => node.items || []}>
        <Bricks.Slice offset={0} bufferSize={20}>
            <Bricks.List getKey={i => i.data.id}>
                <Bricks.IndentLabel matchProps={(d, c, s) => ({data: d.data.id, config: { indent: d.level }})} />
            </Bricks.List>
        </Bricks.Slice>
    </Bricks.Flatten>
);

export default TreeView;
