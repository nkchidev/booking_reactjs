import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomeHeader.scss"
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/logo.svg';
import {LANGUAGES} from "../../utils";
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    handleClickChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img src={logo} className='header-logo' alt="" />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.specialty" /></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.healthy-facility"/></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-room"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.doctor"/></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-doctor"/>Chọc bác sĩ giỏi</div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.fee"/></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.check-health"/></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="far fa-question-circle"></i><FormattedMessage id="home-header.support"/></div>
                            <div className={this.props.language === 'vi' ? 'language-vi active' : 'language-vi'}><span onClick={() => this.handleClickChangeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={this.props.language === 'en' ? 'language-en active' : 'language-en'}><span onClick={() => this.handleClickChangeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>

                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1"/></div>
                        <div className="title2"><FormattedMessage id="banner.title2"/></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>

                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-hospital"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child1"/></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child2"/></div>
                            </div> 
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child3"/></div>
                            </div> 
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-flask"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child4"/></div>
                            </div> 
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child5"/></div>
                            </div> 
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-briefcase-medical"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child6"/></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: language => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
