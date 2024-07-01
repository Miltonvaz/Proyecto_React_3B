import React from "react";
import Title from "../../atmos/Title/Title";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <Title text={title} />
  </div>
);

export default SectionHeader;