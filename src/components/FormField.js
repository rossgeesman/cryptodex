import React from 'react'

class FormField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    }
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value })
  }

  onChange(evt) {
    const name = this.props.name
    const value = evt.target.value

    this.setState({ value })

    this.props.onChange({ name, value })
  }

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

FormField.propTypes = {
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
}

export default FormField
