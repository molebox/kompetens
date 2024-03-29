import * as React from "react";
import Select, { components } from "react-select";
import { graphql, useStaticQuery } from "gatsby";

const roleQuery = graphql`
  {
    allSanityRole {
      edges {
        node {
          id
          role
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
    {<h3>Job Roles</h3>}
    <components.Control {...props} />
  </div>
);

export default ({ getSelectedRoles }) => {
  const allRoles = useStaticQuery(roleQuery);
  const roles = allRoles.allSanityRole.edges.map(({ node }) => ({
    label: node.role,
    value: node.role,
    id: node.id
  }));

  const handleRoles = selections => getSelectedRoles(selections);

  return (
    <Select
      onChange={handleRoles}
      options={roles}
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
