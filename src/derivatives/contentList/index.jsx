import React from 'react';
import PropTypes from 'prop-types';

import { Brickify, inherits } from '../../utils/brickify';

import Label from '../../components/label';
import List from '../../components/list';
import Slice from '../../components/slice';
import Sort from '../../components/sort';
import SortBy from '../../components/sortBy';
import Row from '../../components/row';
import XRow from '../../components/xrow';
import Cell from '../../components/cell';
import Pagination from '../../components/pagination';
import PagingView from '../../components/pagingView';

const Bricks = Brickify([Label, List, Slice, Sort, SortBy, Row, XRow, Cell, Pagination, PagingView]);

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
                    <Bricks.XRow 
                        columns={[
                            {field: 'id', width: '100px'}, 
                            {field: 'type', width: '80px'}, 
                            {field: 'random', width: '50px'}
                        ]}
                    >
                        <Bricks.Cell propKey={inherits('field')} width={inherits('width')}>
                            <Bricks.Label matchProps={(d, c, s) => ({data:`${d}`})}/>
                        </Bricks.Cell>
                    </Bricks.XRow>
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
