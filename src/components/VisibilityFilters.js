import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ filter: activeFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <NavLink
            key={`visibility-filter-${currentFilter}`}
            exact
            to={currentFilter === VISIBILITY_FILTERS.ALL ? '/' : `/${currentFilter}`}
            className="filter"
            activeClassName="filter--active"
          >
            {currentFilter}
          </NavLink>
        );
      })}
    </div>
  );
};

// export default VisibilityFilters;
export default connect()(VisibilityFilters);
