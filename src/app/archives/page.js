'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

const ArchivesPage = () => {
  const masonryRef = useRef(null);
  const videoRefs = useRef({});
  const [playingVideos, setPlayingVideos] = useState({});
  const [loadingImages, setLoadingImages] = useState({});

  // Efecto para animar la aparición de los elementos del masonry
  useEffect(() => {
    if (!masonryRef.current) return;
    
    // Inicializar los estados
    const initialPlayingState = {};
    const initialLoadingState = {};
    
    mediaItems.forEach((item, index) => {
      const itemId = item.id || `media-${index}`;
      
      if (item.type === 'video') {
        initialPlayingState[itemId] = false;
      }
      
      // Solo marcar las imágenes como en carga inicialmente
      if (item.type === 'image') {
        initialLoadingState[itemId] = true;
      }
    });
    
    setPlayingVideos(initialPlayingState);
    setLoadingImages(initialLoadingState);
    
    // Animar la aparición de los elementos
    setTimeout(() => {
      const items = masonryRef.current.querySelectorAll(`.${styles.masonryItem}`);
      
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
      });
    }, 300);

    // Configurar los event listeners para los videos
    Object.keys(videoRefs.current).forEach(key => {
      const video = videoRefs.current[key];
      const videoData = mediaItems.find(item => item.type === 'video' && item.id === key);
      
      if (video && videoData) {
        // Establecer el tiempo específico para el thumbnail si está definido
        if (videoData.thumbnailTime) {
          // Usar un timeout para asegurarse de que el video tenga tiempo de cargarse
          setTimeout(() => {
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA o superior
              video.currentTime = videoData.thumbnailTime;
              video.pause();
            } else {
              video.addEventListener('loadeddata', () => {
                video.currentTime = videoData.thumbnailTime;
                video.pause();
              }, { once: true });
            }
          }, 500);
        }
        
        // Detectar cuando el video comienza a reproducirse
        video.addEventListener('play', () => {
          setPlayingVideos(prev => ({ ...prev, [key]: true }));
        });
        
        // Detectar cuando el video se pausa
        video.addEventListener('pause', () => {
          setPlayingVideos(prev => ({ ...prev, [key]: false }));
        });
      }
    });
  }, []);

  // Manejar clic en el grid item de video
  const handleVideoItemClick = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  
  // Manejar la carga completa de una imagen
  const handleImageLoad = (itemId) => {
    setLoadingImages(prev => ({ ...prev, [itemId]: false }));
  };

  // Datos de las imágenes y videos para el masonry
  const mediaItems = [
    {
      type: 'video',
      id: 'video1',
      src: '/cecamVideo01.mp4',
      caption: 'Comienza la obra',
      size: 'large',
      thumbnailTime: 4
    },
    {
      type: 'image',
      id: 'image1',
      src: '/oldConstr.jpg',
      alt: 'Trabajando en los obstáculos',
      caption: 'Trabajando en los obstáculos',
      size: 'regular'
    },
    {
      type: 'image',
      id: 'image2',
      src: '/OLD3.jpg',
      alt: 'La luz al final del túnel',
      caption: 'La luz',
      size: 'regular'
    },
    {
      type: 'video',
      id: 'video2',
      src: '/cecamVideo02.mp4',
      caption: 'Los mobos',
      size: 'large',
      thumbnailTime: 10
    },

    {
      type: 'image',
      id: 'image5',
      src: '/old1.jpg',
      alt: 'El CECAM antes del CECAM',
      caption: 'El CECAM antes del CECAM',
      size: 'large'
    },
        {
      type: 'image',
      id: 'image4',
      src: '/old4.jpg',
      alt: 'Inicios',
      caption: 'Inicios',
      size: 'regular'
    },
         {
      type: 'image',
      id: 'image3',
      src: '/oldPA.jpg',
      alt: 'La planta alta',
      caption: 'La planta alta',
      size: 'regular'
    },
    {
      type: 'image',
      id: 'image6',
      src: '/old2.jpg',
      alt: 'El equipo',
      caption: 'El equipo',
      size: 'large'
    },
 
  ];

  // Renderizar un elemento de media (imagen o video)
  const renderMediaItem = (item, index) => {
    const itemId = item.id || `media-${index}`;
    const itemClass = `${styles.masonryItem} ${item.size === 'large' ? styles.imageLarge : styles.image}`;
    
    if (item.type === 'image') {
      const isLoading = loadingImages[itemId];
      return (
        <div key={index} className={`${itemClass} ${isLoading ? styles.loading : ''}`}>
          {isLoading && (
            <div className={styles.placeholder}></div>
          )}
          <Image 
            src={item.src} 
            alt={item.alt} 
            width={item.size === 'large' ? 800 : 500} 
            height={item.size === 'large' ? 600 : 350}
            className={`${styles.masonryImage} ${isLoading ? styles.hidden : ''}`}
            onLoad={() => handleImageLoad(itemId)}
            priority={index < 4}
          />
          <div className={`${styles.imageCaption} ${isLoading ? styles.hidden : ''}`}>{item.caption}</div>
        </div>
      );
    } else if (item.type === 'video') {
      const isPlaying = playingVideos[itemId];
      return (
        <div 
          key={index} 
          className={`${itemClass} ${styles.videoContainer}`}
        >
          <video 
            ref={el => { if (el) videoRefs.current[itemId] = el; }}
            src={item.src}
            className={styles.masonryVideo}
            controls
            playsInline
            loop
            preload="metadata"
            onClick={(e) => {
              // Evitar que el clic en el video se propague al contenedor
              e.stopPropagation();
            }}
          />
          {!isPlaying && (
            <div 
              className={styles.playIcon} 
              aria-hidden="true"
              onClick={() => handleVideoItemClick(itemId)}
            ></div>
          )}
          <div className={styles.imageCaption}>{item.caption}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <main className={styles.main}>
      <div className={styles.archives}>
        <h1>Nuestra Historia</h1>
        <p>
          El CECAM nace en el 2017 del sueño de un grupo de amigos unidos por el Parkour. Un lugar pensado para crecer, compartir y promover el movimiento y el arte. Inicialmente un galpon abandonado transformado en un espacio para el encuentro de personas con ganas de aprender y enseñar.
        </p>
        
        <div className={styles.photoMasonry} ref={masonryRef}>
          {mediaItems.map(renderMediaItem)}
        </div>
      </div>
    </main>
  );
};

export default ArchivesPage; 