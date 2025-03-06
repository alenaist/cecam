import styles from './page.module.scss';

const SchedulePage = () => {
  // Estructura de datos para las actividades
  const activities = [
    // LUNES
    { day: 'lunes', activity: 'CIRCO', ages: '3 A 5 AÑOS', time: '16:30 A 17:45H', color: 'orange' },
    { day: 'lunes', activity: 'CIRCO', ages: '6 A 10 AÑOS', time: '18 A 19:15H', color: 'orange' },
    { day: 'lunes', activity: 'TAEKWONDO', ages: '7 A 12 AÑOS', time: '19:30 A 20:30H', color: 'yellow' },
    { day: 'lunes', activity: 'TAEKWONDO', ages: '+13 AÑOS', time: '20:30 A 21:30H', color: 'yellow' },
    
    // MARTES
    { day: 'martes', activity: 'CIRCO', ages: '6 A 12 AÑOS', time: '18 A 19H', color: 'orange' },
    { day: 'martes', activity: 'TELA Y TRAPE', ages: 'ADULTXS', time: '18 A 20H', color: 'green' },
    { day: 'martes', activity: 'CALISTENIA', ages: '+14 AÑOS', time: '20 A 21H', color: 'pink' },
    { day: 'martes', activity: 'KARATE', ages: '+14 AÑOS', time: '20 A 21:30', color: 'lightblue' },
    
    // MIÉRCOLES
    { day: 'miércoles', activity: 'CIRCO', ages: '3 A 5 AÑOS', time: '16:30 A 17:45H', color: 'orange' },
    { day: 'miércoles', activity: 'PARKOUR', ages: '6 A 12 AÑOS', time: '18 A 19H', color: 'teal' },
    { day: 'miércoles', activity: 'PARKOUR', ages: '9 A 12 AÑOS', time: '19 A 20H', color: 'teal' },
    { day: 'miércoles', activity: 'WUSHU KUNG-FU', ages: 'ADULTXS', time: '19 A 21H', color: 'coral' },
    { day: 'miércoles', activity: 'ENTRENAMIENTO LIBRE', ages: '', time: '20 A 22H', color: 'purple' },
    
    // JUEVES
    { day: 'jueves', activity: 'CIRCO', ages: '6 A 12 AÑOS', time: '18 A 19H', color: 'orange' },
    { day: 'jueves', activity: 'TELA Y TRAPE', ages: 'ADULTXS', time: '18:30 A 20:30H', color: 'green' },
    { day: 'jueves', activity: 'CALISTENIA', ages: '+14 AÑOS', time: '20 A 21H', color: 'pink' },
    
    // VIERNES
    { day: 'viernes', activity: 'CIRCO', ages: '9 A 13 AÑOS', time: '18 A 19:15H', color: 'orange' },
    { day: 'viernes', activity: 'PARKOUR', ages: '6 A 8 AÑOS', time: '17 A 18H', color: 'teal' },
    { day: 'viernes', activity: 'PARKOUR', ages: '9 A 12 AÑOS', time: '18 A 19H', color: 'teal' },
    { day: 'viernes', activity: 'PARKOUR', ages: '9 A 14 AÑOS', time: '19 A 20H', color: 'teal' },
    { day: 'viernes', activity: 'TAEKWONDO', ages: '7 A 12 AÑOS', time: '19:30 A 20:30H', color: 'yellow' },
    { day: 'viernes', activity: 'TAEKWONDO', ages: '+13 AÑOS', time: '20:30 A 21:30H', color: 'yellow' },
    
    // SÁBADO
    { day: 'sábado', activity: 'PARKOUR', ages: '6 A 8 AÑOS', time: '12 A 13H', color: 'teal' },
    { day: 'sábado', activity: 'PARKOUR', ages: '9 A 12 AÑOS', time: '13 A 14H', color: 'teal' },
    { day: 'sábado', activity: 'KOBUDO', ages: '+14 AÑOS', time: '13 A 15H', color: 'lightblue' },
    { day: 'sábado', activity: 'KARATE', ages: '+14 AÑOS', time: '15 A 17H', color: 'lightblue' },
    { day: 'sábado', activity: 'WUSHU KUNG-FU', ages: 'ADULTXS', time: '18 A 20H', color: 'coral' },
  ];

  // Agrupar actividades por día
  const groupedActivities = {
    lunes: activities.filter(a => a.day === 'lunes'),
    martes: activities.filter(a => a.day === 'martes'),
    miércoles: activities.filter(a => a.day === 'miércoles'),
    jueves: activities.filter(a => a.day === 'jueves'),
    viernes: activities.filter(a => a.day === 'viernes'),
    sábado: activities.filter(a => a.day === 'sábado'),
  };

  // Días de la semana para el encabezado
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Función para obtener la clase de color según la actividad
  const getColorClass = (color) => {
    switch (color) {
      case 'orange': return styles.orange;
      case 'yellow': return styles.yellow;
      case 'green': return styles.green;
      case 'pink': return styles.pink;
      case 'lightblue': return styles.lightblue;
      case 'teal': return styles.teal;
      case 'coral': return styles.coral;
      case 'purple': return styles.purple;
      default: return '';
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.schedule}>
        <h1>Actividades Abiertas al Público - 2025</h1>
        
        <div className={styles.scheduleGrid}>
          {days.map(day => (
            <div key={day} className={styles.dayColumn}>
              <div className={styles.dayHeader}>
                {day.toUpperCase()}
              </div>
              <div className={styles.activitiesContainer}>
                {groupedActivities[day.toLowerCase()].map((activity, index) => (
                  <div 
                    key={index} 
                    className={`${styles.activityCard} ${getColorClass(activity.color)}`}
                  >
                    <h3>{activity.activity}</h3>
                    {activity.ages && <p className={styles.ages}>{activity.ages}</p>}
                    <p className={styles.time}>{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SchedulePage; 