import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';

import Label from '../../components/label';
import List from '../../components/list';
import Slice from '../../components/slice';
import Sort from '../../components/sort';
import SortBy from '../../components/sortBy';
import InlineList from '../../components/inlineList';
import Row from '../../components/row';
import Cell from '../../components/cell';
import Pagination from '../../components/pagination';
import PagingView from '../../components/pagingView';

const Bricks = Brickify([Label, List, Slice, Sort, SortBy, InlineList, Row, Cell, Pagination, PagingView]);

const matchLabel = (d, c, s) => ({data:`${d}`});

const ContentList = ({ data, config }) => (
    <Bricks.PagingView data={data} >
        <Bricks.SortBy
            sortBy={'random'} 
            direction={'desc'} 
            matchProps={(d, c, s) => ({
                data:d, 
                config: { 
                    ...c, 
                    offset: s.pageIndex * config.bufferSize 
                }}
            )}
        >
            <Bricks.Slice offset={inherits('offset')} bufferSize={config.bufferSize}>
                <Bricks.List getKey={i => i.id}>
                    <Bricks.Row 
                        columns={[
                            {field: 'id', width: '100px'}, 
                            {field: 'type', width: '80px'}, 
                            {field: 'random', width: '200px'}
                        ]}
                    >
                        <Bricks.Cell propKey={inherits('field')} width={inherits('width')}>
                            <Bricks.Label matchProps={matchLabel}/>
                        </Bricks.Cell>
                    </Bricks.Row>
                </Bricks.List>
            </Bricks.Slice>
        </Bricks.SortBy>
        <Bricks.Pagination />
    </Bricks.PagingView>
);

export default ContentList;

ContentList.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        bufferSize: PropTypes.number.isRequired
    }).isRequired
}
