//custom for odds change
import userAuth from 'modules/user/reducers/form'
import dimmer from 'modules/dimmer/reducers/form'
import modal from 'modules/modal/reducers/form'
import language from 'modules/language/reducers/form'
import loader from 'modules/loader/reducers/form'
import login from 'modules/login/reducers/form'
import header from 'modules/header/reducers/form'
import list from 'modules/list/reducers/form'
import products from 'modules/products/reducers/form'
import stone from 'modules/stone/reducers/form'
import toolbar from 'modules/toolbar/reducers/form'
import casting from 'modules/casting/reducers/form'
import order from 'modules/order/reducers/form'
import bag from 'modules/bag/reducers/form'
import bagDetail from 'modules/bagDetail/reducers/form'
import output from 'modules/output/reducers/form'
import grouplist from 'modules/grouplist/reducers/form'
import common from 'modules/common/reducers/form'
import customer from 'modules/customer/reducers/form'
import report from 'modules/report/reducers/form'
import baogia from 'modules/baogia/reducers/form'
import permision from 'modules/permision.page/reducers/form'
import changepassword from 'modules/changepassword/reducers/form'
import createReport from 'modules/report.createReport/reducers/form'
import listReport from 'modules/report.listreport/reducers/form'
const actionTypeSkip = ['GET_ODDS_LIVE', 'GET_ODDS_TODAY', 'GET_ODDS_EARLY', 'REFRESH_ODDS_LIVE', 'REFRESH_ODDS_TODAY', 'REFRESH_ODDS_EARLY', 'CHANGE_NUMBER_MATCH_VIEW']
const lastAction = (state = null, action) => {
    if (actionTypeSkip.indexOf(action.type) >= 0) {
        return action
    }
    return {}
}
//end
const rootReducer = Redux.combineReducers({
    listReport:listReport,
    changepassword: changepassword,
    routing: ReactRouterRedux.routerReducer,
    i18n: ReactReduxI18n.i18nReducer,
    userAuth,
    dimmer,
    modal,
    language,
    loader,
    login,
    header,
    list,
    products,
    stone,
    toolbar,
    casting,
    order,
    bag,
    bagDetail,
    output,
    grouplist,
    common,
    customer,
    report,
    baogia,
    permision,
    createReport
})

module.exports = rootReducer
