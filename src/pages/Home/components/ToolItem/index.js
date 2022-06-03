import PropTypes from "prop-types";
import "assets/styles/glowOnHover.css";

import MKButton from "components/MKButton";

function ToolItem({ label }) {
  return (
    <MKButton color="light" className="glow-on-hover" fullWidth>
      {label}
    </MKButton>
  );
}

ToolItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ToolItem;
