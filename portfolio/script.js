document.addEventListener('DOMContentLoaded', () => {
  const containers = Array.from(document.querySelectorAll('.project-container'));
  const filterContainer = document.getElementById('filter-container');

  if (!filterContainer) return;

  const selectedFilters = new Set();
  const skillSet = new Set();

  const parseSkills = (text) =>
    text
      .split(/[•,]/)
      .map((skill) => skill.trim())
      .filter(Boolean);

  const colorForText = (text) => {
    let hash = 0;
    for (let index = 0; index < text.length; index += 1) {
      hash = (hash * 31 + text.charCodeAt(index)) % 360;
    }
    return `hsl(${hash}, 80%, 58%)`;
  };

  containers.forEach((container) => {
    const titleElement = container.querySelector('.project-title');
    const titleText = titleElement?.textContent?.trim() || '';
    const imageName = titleText.toLowerCase().replace(/ /g, '_');
    const skillsText = container.querySelector('.project-skills')?.textContent || '';

    container.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url("/assets/${imageName}.png")`;

    parseSkills(skillsText).forEach((skill) => skillSet.add(skill));
  });

  const filters = Array.from(skillSet).sort((a, b) => a.localeCompare(b));

  const updateProjects = () => {
    containers.forEach((container) => {
      const skillsText = container.querySelector('.project-skills')?.textContent || '';
      const skills = parseSkills(skillsText);
      const matches = selectedFilters.size === 0 || skills.some((skill) => selectedFilters.has(skill));
      container.classList.toggle('hidden', !matches);
    });
  };

  const updateFilters = () => {
    filterContainer.querySelectorAll('.filter').forEach((button) => {
      const skill = button.dataset.filter;
      const isSelected = selectedFilters.has(skill);
      button.classList.toggle('selected', isSelected);
      button.style.backgroundColor = isSelected ? colorForText(skill) : '';
      button.style.color = isSelected ? '#ffffff' : '';
    });
  };

  filterContainer.innerHTML = '';

  filters.forEach((skill) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter';
    button.dataset.filter = skill;
    button.innerHTML = `<span>${skill}</span>`;
    button.addEventListener('click', () => {
      if (selectedFilters.has(skill)) {
        selectedFilters.delete(skill);
      } else {
        selectedFilters.add(skill);
      }
      updateFilters();
      updateProjects();
    });
    filterContainer.appendChild(button);
  });

  updateFilters();
  updateProjects();
});


const projectContainers = document.querySelectorAll('.project-container');

document.querySelectorAll('.static-hyperlink').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

projectContainers.forEach((projectContainer) => {
  projectContainer.addEventListener('click', () => {
    const isExpanded = projectContainer.classList.contains('expanded-project');

    projectContainers.forEach((container) => {
      container.classList.remove('expanded-project');
    });

    if (!isExpanded) {
      projectContainer.classList.add('expanded-project');
      projectContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  });
});