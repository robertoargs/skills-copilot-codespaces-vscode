function skillsMember() {
  let member = document.getElementById('member').value;
  let memberSkills = document.getElementById('memberSkills');
  let memberName = document.getElementById('memberName');
  let memberRole = document.getElementById('memberRole');

  let memberData = members.filter((data) => {
    return data.name === member;
  });

  memberName.innerHTML = memberData[0].name;
  memberRole.innerHTML = memberData[0].role;

  let skillsData = memberData[0].skills;
  memberSkills.innerHTML = '';
  skillsData.map((skill) => {
    let skillElement = document.createElement('span');
    skillElement.innerHTML = skill;
    memberSkills.appendChild(skillElement);
  });
}

function skillsTeachers() {
  let teacher = document.getElementById('teacher').value;
  let teacherSkills = document.getElementById('teacherSkills');
  let teacherName = document.getElementById('teacherName');
  let teacherRole = document.getElementById('teacherRole');

  let teacherData = teachers.filter((data) => {
    return data.name === teacher;
  });

  teacherName.innerHTML = teacherData[0].name;
  teacherRole.innerHTML = teacherData[0].role;

  let skillsData = teacherData[0].skills;
  teacherSkills.innerHTML = '';
  skillsData.map((skill) => {
    let skillElement = document.createElement('span');
    skillElement.innerHTML = skill;
    teacherSkills.appendChild(skillElement);
  });
}