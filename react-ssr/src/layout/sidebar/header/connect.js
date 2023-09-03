import { connect } from 'react-redux';
import { changeMoreValueAction } from 'src/redux/reducer/global/actions'
import Header from './index';

const mapStateToProps = (state) => {
    const { global } = state;
    return {
        renderMode: global.renderMode,
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeMoreValue: (data) => dispatch(changeMoreValueAction(data)),
});
const ConnectHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectHeader;
