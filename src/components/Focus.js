import * as React from "react";
import Select, { components } from "react-select";
import { graphql, useStaticQuery } from "gatsby";

const focusQuery = graphql`
  {
    allSanityFocus {
      edges {
        node {
          id
          focus
        }
      }
    }
  }
`;

const controlStyles = {
  borderRadius: "20px",
  padding: "15px",
  background: "#E5E5E5",
  color: "#005056",
  marginTop: "25px"
};

const ControlComponent = props => (
  <div style={controlStyles}>
    {<h3>Company Focus</h3>}
    <components.Control {...props} />
  </div>
);

export default ({ getSelectedFocus }) => {
  const allFocus = useStaticQuery(focusQuery);
  const focuses = allFocus.allSanityFocus.edges.map(({ node }) => ({
    label: node.focus,
    value: node.focus,
    id: node.id
  }));

  const handleFocus = selections => getSelectedFocus(selections);

  return (
    <Select
      onChange={handleFocus}
      options={focuses}
      components={{ Control: ControlComponent }}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "#4C3735",
          primary25: "#739FA2",
          primary50: "#99B9BB"
        }
      })}
      isMulti
      isClearable
    />
  );
};
