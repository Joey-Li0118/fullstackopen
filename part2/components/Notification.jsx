const Notification = ({ message }) => {
  if (message === null) {
    return null
  } else if (message.includes("Added")) {
    return (
      <div className= "addSuccessful">
        {message}
      </div>
    )
  }
  return (
    <div className='error'>
      {message}
    </div>
  )
}

export default Notification