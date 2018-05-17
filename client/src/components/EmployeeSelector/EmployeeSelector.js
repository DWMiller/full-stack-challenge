import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class EmployeeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.selected ? this.props.selected._id : '',
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });

    if (selectedOption) {
      this.props.onChange(selectedOption ? selectedOption.value : null);
    }
  };

  getOptions(employees) {
    return employees.map(e => ({ value: e._id, label: e.name }));
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="employee"
        value={selectedOption}
        onChange={this.handleChange}
        options={this.getOptions(this.props.employees)}
      />
    );
  }
}

EmployeeSelector.propTypes = {
  selected: PropTypes.object,
  employees: PropTypes.array.isRequired,
};

export default EmployeeSelector;
