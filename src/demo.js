import React from 'react';

import Label from './components/label';
import List from './components/list';
import Slice from './components/slice';
import Sort from './components/sort';
import Pagination from './components/pagination';
//import PagingView from './components/pagination';

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

const tree = {
    id: 'root',
    items: [
        { id: 'root/1', items: [
            { id: 'root/1/1', items: [
                { id: 'root/1/1/1' },
                { id: 'root/1/1/2' },
                { id: 'root/1/1/3' }
            ] },
            { id: 'root/1/2', items: [
                { id: 'root/1/2/1' },
                { id: 'root/1/2/2' },
                { id: 'root/1/2/3' }
            ] },
            { id: 'root/1/3', items: [
                { id: 'root/1/3/1' },
                { id: 'root/1/3/2' },
                { id: 'root/1/3/3' }
            ] }
        ] },
        { id: 'root/2', items: [
            { id: 'root/2/1', items: [
                { id: 'root/2/1/1' },
                { id: 'root/2/1/2' },
                { id: 'root/2/1/3' }
            ] },
            { id: 'root/2/2', items: [
                { id: 'root/2/2/1' },
                { id: 'root/2/2/2' },
                { id: 'root/2/2/3' }
            ] },
            { id: 'root/2/3', items: [
                { id: 'root/2/3/1' },
                { id: 'root/2/3/2' },
                { id: 'root/2/3/3' }
            ] }
        ] },
        { id: 'root/3', items: [
            { id: 'root/3/1', items: [
                { id: 'root/3/1/1' },
                { id: 'root/3/1/2' },
                { id: 'root/3/1/3' }
            ] },
            { id: 'root/3/2', items: [
                { id: 'root/3/2/1' },
                { id: 'root/3/2/2' },
                { id: 'root/3/2/3' }
            ] },
            { id: 'root/3/3', items: [
                { id: 'root/3/3/1' },
                { id: 'root/3/3/2' },
                { id: 'root/3/3/3' }
            ] }
        ] }
    ]
};

const contents = (i => {
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

export const data = { contents, tree };
