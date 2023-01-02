import {Component} from 'react'

import HistoryItem from '../historyItem'

import './index.css'

class BrowserItem extends Component {
  render() {
    const {historyList} = this.props

    return (
      <div className="app-container">
        <div className="history-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="history icon"
            className="history-icon"
          />
          <div className="input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search History"
              className="input-element"
            />
          </div>
        </div>
        <div className="history-bottom-container">
          <ul>
            {historyList.map(eachItem => (
              <HistoryItem itemDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserItem
