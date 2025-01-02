generateMemberContainers();

async function generateMemberContainers() {
  const [activeMembers, legendaryMembers, oldMembers] = await Promise.all([
    fetchMembers("js/data/members.json"),
    fetchMembers("js/data/legendary-members.json"),
    fetchMembers("js/data/old-members.json"),
  ]);

  populateSection("active-members", activeMembers);
  populateSection("legendary-members", legendaryMembers);
  populateSection("previous-members", oldMembers);
}

async function fetchMembers(jsonPath) {
  const response = await fetch(jsonPath);
  return await response.json();
}

function populateSection(sectionId, members) {
  const section = document.getElementById(sectionId);
  const html = members.map(member => generateMemberProfile(member)).join('');
  section.innerHTML = html;
}

function generateMemberProfile(member) {
  return `
    <div class="profile">
      <div class="profile-picture" style="background-image:url('images/membres/${member.image}');">
        <div class="thumbnail-content">
          ${member.linkedin ? generateLinkedInLink(member.linkedin) : ''}
          ${member.github ? generateGithubLink(member.github) : ''}
        </div>
      </div>
      <div class="bottom-content">
        <h3 class="name">${member.name}</h3>
        ${generateRoles(member.roles)}
      </div>
    </div>
  `;
}

function generateLinkedInLink(username) {
  return `
    <a href="https://www.linkedin.com/in/${username}" target="_blank">
      <img class="thumbnail-link" src="images/socials/linkedin.svg" alt="LinkedIn">
    </a>
  `;
}

function generateGithubLink(username) {
  return `
    <a href="https://github.com/${username}" target="_blank">
      <img class="thumbnail-link" src="images/socials/github.svg" alt="GitHub">
    </a>
  `;
}

function generateRoles(roles) {
  return roles.map(role => `<p>${role}</p>`).join('');
}

window.addEventListener("resize", () => {
  document.getElementById('active-members').classList.add('resize-animation-stopper');
});