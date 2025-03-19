'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { Resend } from 'resend';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission



      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      
      if(response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
      
      

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h1>Contacto</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>Ubicación</h2>
            <p>Chile 2958 - Balvanera, Buenos Aires, Argentina.</p>
            <h2>Email</h2>
            <p>info@cecam.com.ar</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.formDescription}>Escribinos por cualquier consulta sobre las clases. Tambien alquilamos el espacio para eventos y actividades en los horarios libres de clases.</p>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={50}
                aria-label="Nombre"
                placeholder="Tu nombre"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
                placeholder="tu@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                minLength={10}
                maxLength={500}
                aria-label="Mensaje"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            {submitStatus.message && (
              <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-label="Enviar mensaje"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 