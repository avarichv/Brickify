import React from 'react';

import Label from './components/label';
import List from './components/list';
import Slice from './components/slice';
import Sort from './components/sort';
import Pagination from './components/pagination';
import PagingView from './components/pagination';

export const config = {
    Shader: [
        ({data, config, state}) => (
            <Sort data={data} config={{
                ...config.sort, 
                offset: state.pageIndex * 15
            }} />
        ),
        Pagination
    ],
    sort: {    
        Shader: ({data, config}) => <Slice data={data} config={{ ...config.slice, offset: config.offset}} />,
        slice: {
            offset: 15,
            bufferSize: 15,
            Shader: ({data, config}) => <List data={data} config={config.list} />,
            list: {
                Shader: Label,
                getKey: i => i
            }
        }
    }
};

export const data = (i => {
    const arr = [];
    for(; i > 0; i--) {
        arr.push({
            id: 'item_' + i,
            value: 'item_' + i + '_value',
            type: 'string',
            random: Math.random()
        });
    }
    return arr;
})(300);
