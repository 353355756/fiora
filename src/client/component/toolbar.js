import React from 'react';
import '../style/toolbar.scss';

import { connect } from 'react-redux';

class Toolbar extends React.Component {
    constructor (props) {
        super(props);
        this.renderToolbar = this.renderToolbar.bind(this);
    }

    render () {
        let { show } = this.props;
        return show ? this.renderToolbar() : null;
    }
    
    renderToolbar () {
        return (
            <div className="toolbar">
                <div>
                    <i className="icon">&#xe604;</i>
                </div>
                <div>
                    <i className="icon">&#xe605;</i>
                </div>
                <div>
                    <i className="icon">&#xe602;</i>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        show: state.ui.showToolbar,
    }),
    () => ({})
)(Toolbar);