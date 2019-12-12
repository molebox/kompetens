import * as _ from "lodash";

export function getAllCompaniesFocuses(companyFocus, selected) {
  return companyFocus.filter(compFocus => {
    return selected.find(selectedFocus => {
      return compFocus.id === selectedFocus.id;
    });
  });
}

export function getAllCompaniesSkills(companySkill, selected) {
  return companySkill.filter(compSkill => {
    return selected.find(selectedSkill => {
      return compSkill.id === selectedSkill.id;
    });
  });
}

export function getAllCompaniesRoles(companyRole, selected) {
  return companyRole.filter(compRole => {
    return selected.find(selectedRole => {
      return compRole.id === selectedRole.id;
    });
  });
}

export function createObject(selectedFocus) {
  const selectionFocus = [];
  selectedFocus.forEach(({ id, value }) => {
    const item = {
      id,
      name: value
    };
    selectionFocus.push(item);
  });
  return selectionFocus;
}

export function createFocusObject(selectedFocus) {
  const selectionFocus = [];
  selectedFocus.forEach(({ id, focus }) => {
    const item = {
      id,
      name: focus
    };
    selectionFocus.push(item);
  });
  return selectionFocus;
}

export function createRoleObject(selectedRole) {
  const selectionRole = [];
  selectedRole.forEach(({ id, role }) => {
    const item = {
      id,
      name: role
    };
    selectionRole.push(item);
  });
  return selectionRole;
}

export function createSkillObject(selectedSkill) {
  const selectionSkill = [];
  selectedSkill.forEach(({ id, skillName }) => {
    const skill = {
      id,
      name: skillName
    };
    selectionSkill.push(skill);
  });
  return selectionSkill;
}

export const sortByMatches = matches =>
  matches.sort((a, b) => (a.matches < b.matches ? 1 : -1));
