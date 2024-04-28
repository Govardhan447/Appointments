import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, selectedItem} = props

  const {id, titleInput, date, activeStar} = appointmentDetails
  const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const isActive = activeStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    selectedItem(id)
  }

  return (
    <li className="list-appointments">
      <div className="title-container">
        <p className="title">{titleInput}</p>
        <button
          className="button"
          type="button"
          data-testid="star"
          onClick={onClickStar}
        >
          <img className="star-img" src={isActive} alt="star" />
        </button>
      </div>
      <p>{formatDate}</p>
    </li>
  )
}

export default AppointmentItem
