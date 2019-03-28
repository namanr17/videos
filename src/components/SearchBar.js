import React from "react";

class SearchBar extends React.Component {
  state = { key: "" };

  onInputChange = event => {
    this.setState({ key: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onKeySubmit(this.state.key);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ top: 5 }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <h3>Video Search</h3>
            </label>
            <input
              type="text"
              value={this.state.key}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
