
import React from "react"
import { connect } from 'react-redux'

import { getSources } from '../../redux/selectors'

import SourceButton from "../SourceButton"
import { toggleSource } from '../../redux/actions'

import "./ControlPanel.css"

const ControlPanel = props => {
  const { sources: controls, toggleSource } = props;

  return (
    <div className="control-panel">
      {[...controls].map(([item, checked]) => (
        <SourceButton
          key={item}
          checked={checked}
          onClick={() => toggleSource(item)}
        >
          {item}
        </SourceButton>
      ))
      }
    </div >
  )
}

const mapStateToProps = (state) => ({
  sources: getSources(state),
})

const mapDispatchToProps = { toggleSource }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
