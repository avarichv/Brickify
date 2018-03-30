import React from'react';
import PropTypes from 'prop-types';

import './style.css';

class Pagination extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { pageIndex: 0 };

        this.onChange = this.onChange.bind(this);
    }

    onChange(evt) {
        const { dataset } = evt.target;
        const { onChange } = this.props.config;
        const { pageIndex } = this.state;
        const action = dataset['key'];
        let nextIndex = 0;

        if(action === 'prev') {
            nextIndex = pageIndex - 1;
        }

        if(action === 'next') {
            nextIndex = pageIndex + 1;
        }

        this.setState({ pageIndex: nextIndex });
        onChange(nextIndex);
    }

    render() {
        const { pageIndex } = this.state;

        return (
            <div className="bfy-pagi" onClick={this.onChange}>
                <button className="bfy-pagi_prev" data-key="prev" >{"<<"}</button>
                <input className="bfy-pagi_index" type="text" value={pageIndex} />
                <button className="bfy-pagi_next" data-key="next" >{">>"}</button>
            </div>
        );
    }
}

export default Pagination; 

Pagination.propTypes = {
    config: PropTypes.shape({
        onChange: PropTypes.func.isRequired
    }).isRequired
} 
