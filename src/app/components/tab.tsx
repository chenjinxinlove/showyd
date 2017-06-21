import * as React from 'react';
import './tab.scss';
import classNames from 'classnames';

interface ITabProps {
    active: string,
    changeActive: Function
}

export class Tab extends React.Component<any, any> {
    static defaultProps = {
        active: 'pv'
    };
    render() {
        let { active, changeActive} = this.props;
        return (
            <div>
               <div className = 'top'>中国天气网展示平台</div>
               <div className = 'tab'>
                <ul>
                    <li className = { active === 'pv' ? 'active' : '' } onClick={changeActive.bind({}, 'pv')}>pv展示</li>
                    <li className = { active === 'api' ? 'active' : '' } onClick={changeActive.bind({}, 'api')}>api统计</li>
                    <li className = { active === 'web' ? 'active' : '' } onClick={changeActive.bind({}, 'web')}>网站监控</li>
                </ul>
               </div>
            </div>
        );
    }
}

