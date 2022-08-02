// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeClassName = isDark ? 'dark-mode' : 'light-mode'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`container2 ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div className="btn">
            <button className="button" onClick={this.onMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
