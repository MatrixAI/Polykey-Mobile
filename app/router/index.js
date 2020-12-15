import SelectKeyNode from '../components/SelectKeyNode';
import RecoveryCode from '../components/RecoveryCode';
import Home from '../components/Home';

const routes = {
  selectKeyNode : SelectKeyNode,
  recoveryCode : RecoveryCode,
  home : Home
};

export default (page) => {
    console.log(page)
    return routes[page];
};
