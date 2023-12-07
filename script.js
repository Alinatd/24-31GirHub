// Функция для создания элементов "снега"
const createSnow = (total) => {
    const snowflakes = document.createElement('div');
    snowflakes.classList.add('snow');
  
    for (let i = 0; i < total; i++) {
      const snowflake = document.createElement('i');
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 2}s`;
      snowflakes.appendChild(snowflake);
    }
  
    document.body.appendChild(snowflakes);
  };
  
  // Обработчик события для запуска снега при нажатии на кнопку
  document.getElementById('startSnowButton').addEventListener('click', function() {
    createSnow(40); // Создание "снега" при клике на кнопку
  });
  