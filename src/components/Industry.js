import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const industryQuery = graphql`
  {
    allSanityIndustry {
      edges {
        node {
          industry
        }
      }
    }
  }
`;

const Industry = () => {
  const allIndustries = useStaticQuery(industryQuery);
  const industries = allIndustries.allSanityIndustry.edges.map(({ node }) => ({
    label: node.industry,
    value: node.industry
  }));
  const [industry, setIndustry] = useState(industries[0].value);

  const handleChange = event => {
    setIndustry(event.target.value);
  };

  return (
    <div>
      <h3 style={{ color: "#005056" }}>Industry</h3>
      <RadioGroup aria-label="Industry" onChange={handleChange} horizontal>
        {industries.map((item, index) => {
          return (
            <RadioButton key={`${index}-${item.value}`} value={item.value}>
              {item.value}
            </RadioButton>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default Industry;
