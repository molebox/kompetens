import * as React from "react";
import Select, { components } from "react-select";
import { graphql, useStaticQuery } from "gatsby";

const skillQuery = graphql`
  {
    allSanitySkill {
      edges {
        node {
          id
          skillName
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
    {<h3>Your Skills</h3>}
    <components.Control {...props} />
  </div>
);

export default ({ getSelectedSkills }) => {
  const allSkills = useStaticQuery(skillQuery);
  const skills = allSkills.allSanitySkill.edges.map(({ node }) => ({
    label: node.skillName,
    value: node.skillName,
    id: node.id
  }));

  const handleSkills = selections => getSelectedSkills(selections);

  return (
    <Select
      onChange={handleSkills}
      options={skills}
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
