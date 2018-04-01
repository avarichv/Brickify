import React from 'react';
import PropTypes from 'prop-types';

class PagingView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { pageIndex: 0 };
        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(pageIndex) {
        this.setState({ pageIndex });
    }

    render() {
        const { data, config } = this.props;
        const { Shader: [ Content, Control ] } = config;
        
        return (
            <div className="bfy-pageing-view">
                <Content data={data} config={config} state={this.state} />
                <Control config={{onChange: this.onPageChange}} />
            </div>
        );
    }
}

export default PagingView;

PagingView.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
        Shader: PropTypes.array.isRequired 
    }).isRequired
};
