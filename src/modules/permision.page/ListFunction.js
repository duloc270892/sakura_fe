import * as permisionActions from 'modules/permision.page/actions/form'
const { Translate, I18n } = ReactReduxI18n;
class ListFunction extends React.Component {
    componentDidMount() {
        this.props.getListFunction()
    }
    _onClickRow(item, checked) {
        let { itemUser } = this.props.permision
        if (itemUser && itemUser.username) {
            this.props.saveListFunction(item, checked)
        }
    }
    _onChangeStatusBtn(itemFunc, codeBtn, status) {        
        let { itemUser } = this.props.permision
        if (itemUser && itemUser.username) {
            this.props.saveListButton(itemFunc, codeBtn, status)
        }
    }
    render() {
        let { list_user, listHeaderFunction, list_function } = this.props.permision
        let { listButton, listBtnReport } = this.props.toolbar

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {
                                listHeaderFunction.map((item, i) => {
                                    let { key, title } = item
                                    return (
                                        <th style={{ "textAlign": "left" }} key={`thead_${key}`} scope="col">{title}</th>
                                    )
                                })

                            }
                            {
                                listButton.map((item, i) => {
                                    let { code, name } = item
                                    return (
                                        <th style={{ "textAlign": "left" }} key={`thead_${code}`} scope="col">{name}</th>
                                    )
                                })

                            }
                        </tr>
                    </thead>
                    <tbody>
                        {list_function && list_function.map((item, i) => {
                            let { name, checked, list_button, code } = item
                            return (
                                <tr key={`data_${i}`}>
                                    <th scope="row">
                                        <label>
                                            <input type="checkbox" checked={checked} onChange={() => this._onClickRow(item, !checked)} />
                                        </label>
                                    </th>
                                    <td width="120px">{name}</td>
                                    {
                                        list_button && list_button.length > 0 ? list_button.map(itemBtn => {
                                            return (
                                                <td  key={`btn_${code}_${itemBtn.name}`}> <input class="pointer" type="checkbox" name={itemBtn.name} checked={itemBtn.status} onChange={() => this._onChangeStatusBtn(item, itemBtn.name, !itemBtn.status)} /></td>
                                            )
                                        })

                                            : <td><span></span></td>
                                    }
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({
    userAuth,
    i18n,
    permision,
    toolbar
}, ownProps) => {
    return {
        userAuth,
        i18n,
        ownProps,
        permision,
        toolbar
    }
}
const mapDispatchToProps = (dispatch) => {
    return Redux.bindActionCreators({
        ...ReactRouterRedux.routerActions,
        ...permisionActions
    }, dispatch)
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ListFunction)
