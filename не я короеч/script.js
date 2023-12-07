const resumeData = {
    name: "Применый Комиссар",
    contact: {
      phone: "+7 123 456 7890",
      email: "example@email.com"
    },
    education: [
      { degree: "Бакалавр по Компьютерным Наукам", university: "Университет Имени", graduationYear: "Год окончания" },
      { degree: "Курсы по JavaScript и HTML/CSS", course: "Название Курсов", year: "Год прохождения" }
    ],
    skills: [
      "Продвинутые знания в JavaScript и HTML для рендеринга веб-страниц",
      "Умение создавать динамические и интерактивные пользовательские интерфейсы",
      "Опыт работы с библиотеками и фреймворками, такими как React, Vue.js, Angular"
      // Добавьте другие навыки по вашему желанию
    ],
    experience: "Проект по разработке веб-приложения для [Название проекта], где использовалась технология рендеринга на JavaScript и HTML. Работа в команде программистов для создания высокопроизводительного пользовательского интерфейса.",
    projects: [
      "Создание персонального портфолио с использованием JavaScript и HTML",
      "Разработка интерактивной веб-страницы с использованием React"
    ],
    additionalInfo: "Стремление к постоянному обучению и освоению новых технологий"
    // Добавьте другую дополнительную информацию по вашему желанию
  };
  
  function generateResume(data) {
    const resumeDiv = document.getElementById('resume');
    const { name, contact, education, skills, experience, projects, additionalInfo } = data;
  
    const resumeHTML = `
      <div class="resume">
        <h1>${name}</h1>
        <h2>Заявление о поступлении в университет</h2>
  
        <h3>Имя: ${name}</h3>
        <h3>Контактная информация: Телефон: ${contact.phone} | Email: ${contact.email}</h3>
  
        <h4>Образование:</h4>
        <p>${education[0].degree}, ${education[0].university}, ${education[0].graduationYear}</p>
        <p>${education[1].degree}, ${education[1].course}, ${education[1].year}</p>
  
        <h4>Навыки:</h4>
        <ul>
          ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
  
        <h4>Опыт работы:</h4>
        <p>${experience}</p>
  
        <h4>Проекты:</h4>
        <ul>
          ${projects.map(project => `<li>${project}</li>`).join('')}
        </ul>
  
        <h4>Дополнительная информация:</h4>
        <p>${additionalInfo}</p>
      </div>
    `;
  
    resumeDiv.innerHTML = resumeHTML;
  }
  
  generateResume(resumeData);
  