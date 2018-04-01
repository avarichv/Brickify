import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';

import ContentList from '../../derivatives/contentList';
import TreeView from '../../derivatives/treeview';
import Layout from '../../components/layout';


const Bricks = Brickify([ContentList, Layout, TreeView]);

const matchTree = (d,c,s) => ({data: d.tree, config: {...c}});
const matchContents = (d,c,s) => ({data: d.contents, config: {...c}});

const ContentManger = ({ data, config }) => (
    <Bricks.Layout data={data} slicing={'1,3'}>
        <Bricks.TreeView matchProps={matchTree} />
        <Bricks.ContentList bufferSize={20} matchProps={matchContents}/>
    </Bricks.Layout>
);

export default ContentManger;
