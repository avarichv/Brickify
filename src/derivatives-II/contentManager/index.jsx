import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';

import ContentList from '../../derivatives/contentList';
import Layout from '../../components/layout';

const Bricks = Brickify([ContentList, Layout]);

const ContentManger = ({ data, config }) => (
    <Bricks.Layout data={data} slicing={'1,3'}>
        <Bricks.ContentList bufferSize={20} />
        <Bricks.ContentList bufferSize={20} />
    </Bricks.Layout>
);

export default ContentManger;
