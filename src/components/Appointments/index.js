import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const appointDates = []
class Appointments extends Component {
  state = {
    appointDateList: appointDates,
    titleInput: '',
    date: '',
    starred: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {titleInput, date} = this.state

    const newList = {
      id: uuidv4(),
      titleInput,
      date,
      activeStar: false,
    }

    this.setState(prevState => ({
      appointDateList: [...prevState.appointDateList, newList],
      titleInput: '',
      date: '',
    }))
  }

  onchangeInputTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onchangeInputDate = event => {
    this.setState({date: event.target.value})
  }

  selectedItem = id => {
    this.setState(prevState => ({
      appointDateList: prevState.appointDateList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, activeStar: true}
        }
        return eachItem
      }),
    }))
  }

  onclickStarredList = () => {
    this.setState(prevState => ({
      appointDateList: prevState.appointDateList.filter(
        eachItem => eachItem.activeStar === true,
      ),
      starred: true,
    }))
  }

  render() {
    const {titleInput, date, appointDateList, starred} = this.state

    const starredBtn = starred ? 'starred-btn-active' : 'starred-btn-inactive'

    return (
      <div className="bg-container">
        <div className="appoinment-container">
          <div className="form-appoinment-container">
            <div className="form-container">
              <form
                className="input-form-container"
                onSubmit={this.onSubmitForm}
              >
                <h1 className="header">Add Appointments</h1>
                <label htmlFor="title-label" className="label">
                  TITLE
                </label>
                <input
                  id="title-label"
                  className="input-title"
                  placeholder="Title"
                  value={titleInput}
                  onChange={this.onchangeInputTitle}
                />

                <label htmlFor="date-label" className="label">
                  DATE
                </label>
                <input
                  id="date-label"
                  className="input-date"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onchangeInputDate}
                  type="date"
                  value={date}
                />
                <button className="button-add" type="submit">
                  Add
                </button>
              </form>
              <div className="image-container">
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  alt="appointments"
                />
              </div>
            </div>
            <div className="starred-container">
              <h2 className="appoinment">Appointments</h2>
              <button
                className={starredBtn}
                type="button"
                onClick={this.onclickStarredList}
              >
                Starred
              </button>
            </div>
            <ul className="appoinment-item-box-container">
              {appointDateList.map(eachItem => (
                <AppointmentItem
                  appointmentDetails={eachItem}
                  key={eachItem.id}
                  selectedItem={this.selectedItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
