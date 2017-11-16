import React from 'react';
import {connect} from 'react-redux'
import * as constants from '../constants'
import { Link, withRouter } from 'react-router'
import { RESTRICT_CONTEST_TO_ALL_LEVELS_COMPLETE } from '../constants'
import ConsoleDetect from '../components/ConsoleDetect'

class Header extends React.Component {

  render() {
    const currentPath = this.props.router.location.pathname
    const showContestTab = !RESTRICT_CONTEST_TO_ALL_LEVELS_COMPLETE || (RESTRICT_CONTEST_TO_ALL_LEVELS_COMPLETE && this.props.allLevelsCompleted)
    return (
      <nav className="navbar navbar-default" style={{
        borderRadius: '0px',
        backgroundImage: '',
        backgroundColor: 'red',
        zIndex: 10000
      }}>
        <div>

          {/* VERSIONS */}
          { constants.SHOW_VERSION &&
          <div style={{right: '0', position: 'absolute', color: 'lightgray', fontSize: '10px'}}>
            {`v${constants.VERSION} DEVCON³`}
          </div>
          }

          {/* HEADER */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <div className="navbar-brand" style={{paddingTop: '0', paddingBottom: '0', paddingLeft: '25px', lineHeight: '49px'}}>
              <span>
                <a href="https://zeppelin.solutions" target="_blank" rel="noopener noreferred">
                  <img style={{width: '40px', height: '40px'}} src='../../imgs/zeppelin-logo.svg' alt='eternauta'/>
                </a>
              </span>
              &nbsp;
              <Link to={constants.PATH_ROOT}  style={{ textDecoration: 'none' }} activeStyle={{display: 'inline-block', verticalAlign: 'text-top', lineHeight: '15px'}}>
                <span style={{}}>Ethernaut</span>
                <br />
                <span style={{fontSize: '12px'}}>DEVCON³</span>
              </Link>
            </div>
          </div>

          {/* CONTENT */}
          <div className="navbar-collapse collapse">

            {/* LEFT */}
            <ul className="nav navbar-nav" style={{paddingLeft: '10px'}}>
              <li className={currentPath === constants.PATH_ROOT ? 'active' : ''}>
                <Link to={constants.PATH_ROOT} style={{fontSize: '16px'}}>Home</Link>
              </li>
              <li className={currentPath === constants.PATH_HELP ? 'active' : ''}>
                <Link to={constants.PATH_HELP} style={{fontSize: '16px'}}>Help</Link>
              </li>
              <li className={currentPath === constants.PATH_ABOUT ? 'active' : ''}>
                <Link to={constants.PATH_ABOUT} style={{fontSize: '16px'}}>About</Link>
              </li>
              { showContestTab &&
              <li className={currentPath === constants.PATH_CONTEST ? 'active' : ''}>
                <Link to={constants.PATH_CONTEST} style={{fontSize: '16px'}}>*Enter Contest*</Link>
              </li>
              }
              <li className={currentPath === constants.PATH_HIGHSCORE ? 'active' : ''}>
                <Link to={constants.PATH_HIGHSCORE} style={{fontSize: '16px'}}>
                  Highscores
                  <img style={{width: '25px', height: '25px'}} src='../../imgs/uni.png' alt=''/>
                </Link>
              </li>
            </ul>

            {/* RIGHT */}
            <ul className="nav navbar-nav pull-right">
              <li>
                <Link style={{fontSize: '16px'}}><ConsoleDetect/></Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    );
  }
}


function mapStateToProps(state) {
  return { allLevelsCompleted: state.player.allLevelsCompleted }
}

export default withRouter(connect(mapStateToProps)(Header))