import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  renderFilter(filter, name) {
    if (filter === this.props.visibilityFilter) {
      return name;
    }
    return (
      <a 
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
      {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
      </p>
    );
  }
}

export default Footer;