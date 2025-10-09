const Form = (props) => {
  return (<div> <div>
          name: <input value = {props.name} onChange={props.namechange} />
          phone number: <input value = {props.number} onChange={props.numberchange} />
        </div>
      <div>      <button type="submit" onClick={props.submit}>add</button>
</div></div>)
}

export default Form 