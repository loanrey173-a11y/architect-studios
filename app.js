/**
 * ============================================================================
 * MINECRAFT ARCHITECT STUDIO - APPLICATION CORE ENGINE
 * ============================================================================
 */

(function () {
  'use strict';

  window.handleImgFallback = function (img, key) {
    if (!img) return;
    const step = parseInt(img.dataset.retryStep || '0', 10);
    const candidateMap = {
      'villa-costera-moderna': [
        './casa_de_playa_1.jpg',
        'casa_de_playa_1.jpg',
        './images/casa_de_playa_1.jpg',
        'images/casa_de_playa_1.jpg',
        './casa de playa 1.jpg',
        './images/casa de playa 1.jpg'
      ],
      'mansion-playa-muelle': [
        './casa_de_playa_2.jpg',
        'casa_de_playa_2.jpg',
        './images/casa_de_playa_2.jpg',
        'images/casa_de_playa_2.jpg',
        './casa de playa 2.jpg',
        './images/casa de playa 2.jpg'
      ],
      'mansion-moderna-sakura': [
        './casa_danna_1_fachada.jpg',
        'casa_danna_1_fachada.jpg',
        './images/casa_danna_1_fachada.jpg',
        'images/casa_danna_1_fachada.jpg',
        './images/casa1_danna/IMG-20260929-WA0104.jpg',
        'images/casa1_danna/IMG-20260929-WA0104.jpg'
      ],
      'residencia-cerezo-chimenea': [
        './casa_danna_2_fachada.jpg',
        'casa_danna_2_fachada.jpg',
        './images/casa_danna_2_fachada.jpg',
        'images/casa_danna_2_fachada.jpg',
        './images/casa2_danna/IMG-20260929-WA0101.jpg',
        'images/casa2_danna/IMG-20260929-WA0101.jpg'
      ],
      'villa-imperial-cherry': [
        './casa_danna_3_exterior.jpg',
        'casa_danna_3_exterior.jpg',
        './images/casa_danna_3_exterior.jpg',
        'images/casa_danna_3_exterior.jpg',
        './images/casa3_danna/IMG-20260929-WA0098.jpg',
        'images/casa3_danna/IMG-20260929-WA0098.jpg'
      ],
      'mansion-monumental-jungla': [
        './casa_danna_4_fachada.jpg',
        'casa_danna_4_fachada.jpg',
        './images/casa_danna_4_fachada.jpg',
        'images/casa_danna_4_fachada.jpg',
        './images/casa4_danna/IMG-20260929-WA0095.jpg',
        'images/casa4_danna/IMG-20260929-WA0095.jpg'
      ],
      'instagram_logo': [
        './instagram_logo.png',
        'instagram_logo.png',
        './images/instagram_logo.png',
        'images/instagram_logo.png'
      ]
    };

    const list = candidateMap[key] || [];
    if (step < list.length) {
      img.dataset.retryStep = (step + 1).toString();
      img.src = list[step];
    }
  };

  const STORAGE_KEYS = {
    HOUSES: 'mc_architect_houses_v20',
    COMMENTS: 'mc_comments_v12',
    USER_COMMENT_LIKES: 'mc_user_comm_likes_v12',
    THEME: 'mc_theme_v11',
    SOUND: 'mc_sound_v11',
    FAVORITES: 'mc_favs_v11',
    USER_LIKES: 'mc_user_likes_v20',
    ADMIN_ROLE: 'mc_admin_role_v12'
  };

  const INITIAL_HOUSES = [
    {
      id: 'mansion-moderna-sakura',
      title: 'Mansión Moderna Sakura',
      category: 'cerezo',
      tags: ['cerezo', 'moderna', 'sakura', 'cuarzo', 'balcones', 'mansion'],
      difficulty: 'Avanzada',
      difficultyLevel: 3,
      time: '~3.0 Horas',
      biome: 'Arboleda de Cerezos',
      creator: 'Co-creadora',
      creatorDisplay: 'Co-creadora',
      creatorRole: 'Co-creadora',
      instagram: {
        name: 'DANN_YAZ2',
        url: 'https://www.instagram.com/dann_yaz1/'
      },
      image: './casa_danna_1_fachada.jpg',
      gallery: [
        { url: './casa_danna_1_fachada.jpg', caption: 'Fachada Principal y Balcones Panorámicos' },
        { url: './casa_danna_1_interior.jpg', caption: 'Lobby con Candelabro y Escalera Imperial' },
        { url: './casa_danna_1_atardecer.jpg', caption: 'Avenida de Cerezos al Atardecer' }
      ],
      description: 'Espectacular mansión moderna de dos niveles con fachada de hormigón blanco inmaculado, pasillos panorámicos acristalados, un majestuoso candelabro de madera con linternas suspendidas en el vestíbulo y un sendero enmarcado por cerezos florecientes.',
      materials: [
        'Bloque de Hormigón Blanco',
        'Panel de Cristal Tintado Claro',
        'Bloque de Cuarzo Liso',
        'Escaleras de Cuarzo Liso',
        'Madera y Troncos de Cerezo',
        'Hojas de Cerezo Floreciente',
        'Linternas Colgantes Cálidas',
        'Vallas de Roble Oscuro',
        'Puertas de Roble Oscuro'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-29'
    },
    {
      id: 'residencia-cerezo-chimenea',
      title: 'Residencia de Cerezo con Chimenea',
      category: 'cerezo',
      tags: ['cerezo', 'moderna', 'chimenea', 'sakura', 'colina', 'panoramica'],
      difficulty: 'Intermedia',
      difficultyLevel: 2,
      time: '~2.0 Horas',
      biome: 'Bosque de Cerezos / Colinas',
      creator: 'Co-creadora',
      creatorDisplay: 'Co-creadora',
      creatorRole: 'Co-creadora',
      instagram: {
        name: 'DANN_YAZ2',
        url: 'https://www.instagram.com/dann_yaz1/'
      },
      image: './casa_danna_2_fachada.jpg',
      gallery: [
        { url: './casa_danna_2_fachada.jpg', caption: 'Entrada Flanqueada por Cerezos Rosas' },
        { url: './casa_danna_2_chimenea.jpg', caption: 'Salón Superior con Chimenea de Ladrillo' },
        { url: './casa_danna_2_lateral.jpg', caption: 'Vista Panorámica de la Terraza y Colina' }
      ],
      description: 'Encantadora residencia integrada en un bioma de cerezos con terrazas escalonadas, acogedor salón interior con chimenea rústica de ladrillo, iluminación cenital cálida y amplios ventanales con vista abierta a la costa y pradera.',
      materials: [
        'Hormigón Blanco',
        'Ladrillos de Arcilla',
        'Madera de Cerezo',
        'Madera de Roble Oscuro',
        'Cristal Celeste',
        'Lámparas de Rana Ocre',
        'Cuadros Decorativos',
        'Macetas con Rosas y Flores'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-29'
    },
    {
      id: 'villa-imperial-cherry',
      title: 'Villa Imperial Cherry Blossom',
      category: 'cerezo',
      tags: ['cerezo', 'mansion', 'moderna', 'sakura', 'domo-cristal', 'mascotas'],
      difficulty: 'Avanzada',
      difficultyLevel: 3,
      time: '~3.5 Horas',
      biome: 'Montaña de Cerezos',
      creator: 'Co-creadora',
      creatorDisplay: 'Co-creadora',
      creatorRole: 'Co-creadora',
      instagram: {
        name: 'DANN_YAZ2',
        url: 'https://www.instagram.com/dann_yaz1/'
      },
      image: './casa_danna_3_exterior.jpg',
      gallery: [
        { url: './casa_danna_3_exterior.jpg', caption: 'Vista Aérea y Muros Perimetrales' },
        { url: './casa_danna_3_cerezo.jpg', caption: 'Pórtico Principal con Gran Cerezo' },
        { url: './casa_danna_3_lobby.jpg', caption: 'Gran Salón con Techo de Cristal y Lobos' }
      ],
      description: 'Lujosa villa contemporánea con muro perimetral de seguridad, un imponente árbol de cerezo esculpido sobre la entrada principal y un inmenso salón central con techo acristalado tipo domo, araña de luces y zona de descanso para lobos guardianes.',
      materials: [
        'Hormigón Blanco Pulido',
        'Bloque de Cuarzo Suave',
        'Cristal Templado Claro',
        'Madera y Troncos de Cerezo',
        'Hojas de Cerezo',
        'Faroles Colgantes de Cobre',
        'Escaleras de Cuarzo',
        'Paredes de Hormigón'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-29'
    },
    {
      id: 'mansion-monumental-jungla',
      title: 'Mansión Monumental de la Selva',
      category: 'moderna',
      tags: ['jungla', 'mansion', 'moderna', 'golem', 'monumental', 'selva', 'vegetacion'],
      difficulty: 'Avanzada',
      difficultyLevel: 3,
      time: '~4.0 Horas',
      biome: 'Selva / Jungla Tropical',
      creator: 'Co-creadora',
      creatorDisplay: 'Co-creadora',
      creatorRole: 'Co-creadora',
      instagram: {
        name: 'DANN_YAZ2',
        url: 'https://www.instagram.com/dann_yaz1/'
      },
      image: './casa_danna_4_fachada.jpg',
      gallery: [
        { url: './casa_danna_4_fachada.jpg', caption: 'Pórtico Monumental y Gólem Guardián' },
        { url: './casa_danna_4_salon.jpg', caption: 'Salón de Doble Altura con Candelabros' },
        { url: './casa_danna_4_jungla.jpg', caption: 'Escalinatas Exteriores en la Jungla' }
      ],
      description: 'Obra arquitectónica monumental de tres plantas levantada en plena selva. Cuenta con pórtico imperial de bienvenida custodiado por un gólem de hierro, amplios balcones con enredaderas naturales, salón con candelabros colgantes y senderos de piedra integrados en la frondosa vegetación.',
      materials: [
        'Hormigón Blanco',
        'Piedra Lisa y Adoquines',
        'Madera de Jungla y Roble',
        'Enredaderas Naturales',
        'Cristal Celeste',
        'Candelabros de Piedra con Faroles',
        'Faroles Colgantes',
        'Losa de Piedra Lisa'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-29'
    },
    {
      id: 'villa-costera-moderna',
      title: 'Villa Costera Moderna',
      category: 'playa',
      tags: ['playa', 'moderna', 'piscina', 'cuarzo', 'costa'],
      difficulty: 'Intermedia',
      difficultyLevel: 2,
      time: '~1.5 Horas',
      biome: 'Playa / Costa',
      creator: 'heber jhosue',
      creatorDisplay: 'heber jhosue',
      creatorRole: 'Creador',
      instagram: {
        name: 'heber jhosue',
        url: 'https://www.instagram.com/heberjhosue/'
      },
      image: './casa_de_playa_1.jpg',
      gallery: [
        { url: './casa_de_playa_1.jpg', caption: 'Fachada Frente al Océano y Piscina' }
      ],
      description: 'Diseño costero contemporáneo de dos plantas con ventanales panorámicos de cristal tintado, terraza exterior con vista directa al océano, muelle integrado para atraque de botes y piscina iluminada con linternas de mar sumergidas.',
      materials: [
        'Bloque de Cuarzo Liso',
        'Madera de Roble Oscuro',
        'Panel de Cristal Tintado Blanco',
        'Linterna de Mar',
        'Hojas de Roble',
        'Escaleras de Cuarzo Liso',
        'Vallas de Roble Oscuro',
        'Bloque de Hormigón Gris Claro'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-28'
    },
    {
      id: 'mansion-playa-muelle',
      title: 'Mansión de Playa con Muelle',
      category: 'playa',
      tags: ['playa', 'moderna', 'madera', 'muelle', 'costa'],
      difficulty: 'Avanzada',
      difficultyLevel: 3,
      time: '~2.5 Horas',
      biome: 'Playa Tropical',
      creator: 'heber jhosue',
      creatorDisplay: 'heber jhosue',
      creatorRole: 'Creador',
      instagram: {
        name: 'heber jhosue',
        url: 'https://www.instagram.com/heberjhosue/'
      },
      image: './casa_de_playa_2.jpg',
      gallery: [
        { url: './casa_de_playa_2.jpg', caption: 'Residencia sobre Pilotes con Muelle Privado' }
      ],
      description: 'Impresionante residencia frente al mar estructurada sobre pilotes de madera tratada de abeto. Incluye cubierta lounge superior, muelle privado de atraque, pérgolas de sombraje y acabados premium en cuarzo y hormigón blanco.',
      materials: [
        'Hormigón Blanco',
        'Madera de Abeto',
        'Losa de Cuarzo Liso',
        'Cristal Celeste',
        'Faroles de Cobre',
        'Hojas de Azalea Floreciente',
        'Pared de Adoquín',
        'Vallas de Abeto'
      ],
      likes: 0,
      isFavorite: false,
      createdAt: '2026-09-27'
    }
  ];

  const INITIAL_COMMENTS = [
    {
      id: 'comm-1',
      author: 'Alex_Builder',
      houseRef: 'Villa Costera Moderna',
      text: '¡Los ventanales panorámicos y la piscina con linternas de mar quedan increíbles en supervivencia! Muy fácil de construir y súper estética.',
      date: 'Hace 1 hora',
      likes: 3,
      likedByUser: false,
      timestamp: Date.now() - 3600000
    },
    {
      id: 'comm-2',
      author: 'CraftMaster99',
      houseRef: 'Mansión de Playa',
      text: 'La combinación de pilotes de abeto y hormigón blanco es de las mejores para biomas de playa. ¡Excelente galería!',
      date: 'Hace 30 minutos',
      likes: 5,
      likedByUser: false,
      timestamp: Date.now() - 1800000
    }
  ];

  /* ==========================================================================
     2. SOUND FX ENGINE (Web Audio API Synthesizer)
     ========================================================================== */

  class SoundFXEngine {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem(STORAGE_KEYS.SOUND) !== 'false';
    }

    initContext() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem(STORAGE_KEYS.SOUND, this.enabled.toString());
      return this.enabled;
    }

    playPop() {
      if (!this.enabled) return;
      try {
        this.initContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(380, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.08);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.08);
      } catch (e) {
        // Ignore audio failures silently
      }
    }

    playHeart() {
      if (!this.enabled) return;
      try {
        this.initContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.06); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.12); // G5

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {
        // Ignore audio failures silently
      }
    }

    playSuccess() {
      if (!this.enabled) return;
      try {
        this.initContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const start = now + idx * 0.06;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.1, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(start);
          osc.stop(start + 0.12);
        });
      } catch (e) {
        // Ignore
      }
    }
  }

  /* ==========================================================================
     3. AMBIENT PARTICLES CANVAS
     ========================================================================== */

  class AmbientParticles {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.particleCount = 38;
      this.width = 0;
      this.height = 0;
      this.mouseX = -1000;
      this.mouseY = -1000;

      this.init();
    }

    init() {
      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });

      window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      }, { passive: true });

      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push(this.createParticle());
      }

      this.animate();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    createParticle() {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.15,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? 'rgba(16, 185, 129,' : 'rgba(0, 240, 255,'
      };
    }

    animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Interaction with mouse
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x -= (dx / dist) * 1.5;
          p.y -= (dy / dist) * 1.5;
        }

        // Screen wrap
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `${p.color} ${p.opacity})`;
        this.ctx.fill();
      }

      requestAnimationFrame(() => this.animate());
    }
  }

  /* ==========================================================================
     PROFANITY & LEETSPEAK FILTER ENGINE
     ========================================================================== */

  class ProfanityFilter {
    constructor() {
      this.leetMap = {
        '@': 'a', '4': 'a', '^': 'a',
        '3': 'e', '€': 'e',
        '1': 'i', '!': 'i', '|': 'i',
        '0': 'o',
        '5': 's', '$': 's', 'z': 's',
        '7': 't', '+': 't',
        '8': 'b',
        '9': 'g',
        'k': 'c', 'q': 'c',
        'w': 'u', 'v': 'u'
      };

      this.wordPatterns = [
        // Puto / Puta / Putazo / Putito / Pu10 / Pu70 / Pvto
        /\bpu+t+[oaei]\b/i,
        /\bpu+t+i+t+[oa]s?\b/i,
        /\bpu+t+a+z+[oa]s?\b/i,
        /\bpu+t+i+s+i+m+[oa]s?\b/i,
        /\bpu+t+o+n+a?s?\b/i,
        /\bpu+t+e+r+i+a?s?\b/i,
        /\bpu10\b/i,
        /\bpu70\b/i,
        /\bpvt[oa]\b/i,

        // Huevos / Huevo / Huevón / Hu3v0s / W3v0s / Wevos
        /\bh?u+e+u+o+s?\b/i,
        /\bh?u+e+v+o+s?\b/i,
        /\bh?u+e+b+o+s?\b/i,
        /\bh?u+e+u+o+n+a?s?\b/i,
        /\bh?u+e+v+o+n+a?s?\b/i,
        /\bh?u+e+b+o+n+a?s?\b/i,
        /\bh?u+e+v+u+d+[oa]s?\b/i,
        /\bhu3v0s?\b/i,
        /\bw3v0s?\b/i,
        /\bw3w0s?\b/i,
        /\buev0s?\b/i,
        /\bwev0s?\b/i,
        /\bgu+e+u+o+s?\b/i,
        /\bgu+e+v+o+s?\b/i,
        /\bgu+e+b+o+s?\b/i,

        // Verga / Vergazo / V3rg4
        /\bu+e+r+g+[a-z]*\b/i,
        /\bv+e+r+g+[a-z]*\b/i,
        /\bv+r+g+a?s?\b/i,
        /\bv3rg4\b/i,

        // Pendejo / Pendeja / P3nd3j0
        /\bp+e+n+d+e+j+[oaei]s?\b/i,
        /\bp+n+d+j+[oa]s?\b/i,
        /\bp+e+n+d+e+j+a+d+a?s?\b/i,
        /\bp3nd3j0\b/i,
        /\bp3nd3j4\b/i,

        // Pinche / Pinches / P1nch3
        /\bp+i+n+c+h+e+s?\b/i,
        /\bp1nch3\b/i,

        // Cabron / Cabrona / C4br0n
        /\bc+a+b+r+o+n+a?s?\b/i,
        /\bk+a+b+r+o+n+a?s?\b/i,
        /\bc+b+r+n\b/i,
        /\bc4br0n\b/i,

        // Mierda / M13rd4
        /\bm+i+e+r+d+[a-z]*\b/i,
        /\bm+r+d+a?\b/i,
        /\bm13rd4\b/i,

        // Chinga / Chingo / Chingon / Chingada / Ch1ng4
        /\bc+h+i+n+g+[a-z]*\b/i,
        /\bch1ng4\b/i,

        // Culo / Culero / Cvl0
        /\bc+u+l+[oa]s?\b/i,
        /\bc+u+l+e+r+[oa]s?\b/i,
        /\bc+u+l+a+z+[oa]s?\b/i,
        /\bc+u+l+i+t+[oa]s?\b/i,
        /\bcvl0\b/i,
        /\bcul0\b/i,

        // Mamada / Mamon
        /\bm+a+m+a+d+a?s?\b/i,
        /\bm+a+m+o+n+a?s?\b/i,
        /\bm+a+m+a+n+d+o\b/i,
        /\bm+a+m+a+r\b/i,
        /\bm+a+m+a+l+[oa]\b/i,

        // Marica / Maricon
        /\bm+a+r+i+c+[oa]n?s?\b/i,
        /\bm+a+r+i+k+[oa]n?s?\b/i,
        /\bm+a+r+i+q+u+i+t+a?s?\b/i,
        /\bmaric0n\b/i,

        // Zorra / Perra
        /\bz+o+r+r+[a-z]*\b/i,

        // Insults
        /\bi+d+i+o+t+[a-z]*\b/i,
        /\be+s+t+u+p+i+d+[a-z]*\b/i,
        /\bi+m+b+e+c+i+l+e?s?\b/i,
        /\bb+a+s+t+a+r+d+[oa]s?\b/i,
        /\bmalparid+[oa]s?\b/i,

        // Acronyms
        /\bal[vu]\b/i,
        /\bctm\b/i,
        /\bhdp\b/i
      ];

      this.compactExactRoots = [
        'puto', 'puta', 'putazo', 'putito', 'putona', 'puteria',
        'huevo', 'huevos', 'huevon', 'ueuo', 'ueuos', 'uebo', 'uebos', 'uevon', 'uebon', 'wevo', 'wevos',
        'verga', 'uerga', 'vergas', 'uergas', 'vergazo', 'vrga',
        'pendejo', 'pendeja', 'pendejos', 'pendejas', 'pndjo', 'pndja',
        'pinche', 'pinches',
        'cabron', 'cabrona', 'cabrones', 'cbrn',
        'mierda', 'mierdas', 'mrda',
        'chinga', 'chingas', 'chingon', 'chingada', 'chingado',
        'culero', 'culera', 'culazo', 'culito',
        'mamada', 'mamadas', 'mamon', 'mamona',
        'marica', 'maricas', 'maricon', 'maricones',
        'zorra', 'zorras', 'estupido', 'estupida', 'idiota', 'idiotas', 'imbecil'
      ];
    }

    normalizeText(text) {
      if (!text) return '';
      // 1. Remove accents (NFD)
      let norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      // 2. 10 -> to
      norm = norm.replace(/10/g, 'to');
      // 3. Leet substitutions
      let mapped = '';
      for (let i = 0; i < norm.length; i++) {
        const ch = norm[i];
        mapped += this.leetMap[ch] || ch;
      }
      return mapped;
    }

    isProfane(rawText) {
      if (!rawText || !rawText.trim()) return false;
      const norm = this.normalizeText(rawText);

      // Strategy 1: Test with punctuation turned into spaces
      const wordsSpaced = norm.replace(/[^a-z0-9]+/g, ' ');
      for (const pat of this.wordPatterns) {
        if (pat.test(wordsSpaced)) return true;
      }

      // Strategy 2: Test with collapsed consecutive characters per word
      const words = wordsSpaced.trim().split(/\s+/);
      const collapsedWords = words.map((w) => w.replace(/(.)\1+/g, '$1')).join(' ');
      for (const pat of this.wordPatterns) {
        if (pat.test(collapsedWords)) return true;
      }

      // Strategy 3: Check stripped non-alphanumeric text and separated characters (e.g. p.u.t.o, h u e v o s)
      const pureStripped = norm.replace(/[^a-z0-9]/g, '');
      const pureCollapsed = pureStripped.replace(/(.)\1+/g, '$1');

      for (const root of this.compactExactRoots) {
        if (pureStripped === root || pureCollapsed === root) return true;

        // Check if root characters appear separated by non-alphanumeric chars
        const sepPattern = new RegExp('(^|[^a-z0-9])' + root.split('').join('[\\s\\.\\-_*]*') + '($|[^a-z0-9])', 'i');
        if (sepPattern.test(norm)) return true;
      }

      return false;
    }
  }

  /* ==========================================================================
     4. MAIN APP STATE & CONTROLLER
     ========================================================================== */

  class MinecraftGalleryApp {
    constructor() {
      this.sound = new SoundFXEngine();
      this.profanityFilter = new ProfanityFilter();
      this.houses = this.loadHouses();
      this.comments = this.loadComments();
      this.userFavorites = this.loadFavorites();
      this.userLikes = this.loadUserLikes();
      this.userCommentLikes = this.loadUserCommentLikes();
      this.adminRole = localStorage.getItem(STORAGE_KEYS.ADMIN_ROLE) || 'none';
      this.firebaseUnsubscribe = null;
      this.firebaseLikesUnsubscribe = null;
      this.isFirebaseConnected = false;
      
      this.currentCategory = 'all';
      this.currentSearch = '';
      this.currentSort = 'newest';
      this.currentView = 'grid';
      this.activeModalHouse = null;
      this.currentModalImgIndex = 0;

      // Zoom & stage state
      this.zoomLevel = 1.0;
      this.gridActive = false;

      this.cacheDOMElements();
      this.initTheme();
      this.initEventListeners();
      this.updateCommentAuthorUI();
      this.render();
      this.renderComments();
      this.updateStats();

      // Initialize Firebase Firestore real-time sync
      this.initFirebaseSync();

      // Initialize Ambient Particles
      new AmbientParticles('particleCanvas');
    }

    /* ------------------------------------------------------------------------
       Data Load & Save
       ------------------------------------------------------------------------ */

    loadHouses() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.HOUSES);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Merge existing saved with latest INITIAL_HOUSES metadata
            const merged = INITIAL_HOUSES.map((init) => {
              const found = parsed.find((h) => h.id === init.id);
              if (found) {
                return {
                  ...init,
                  likes: typeof found.likes === 'number' ? found.likes : init.likes,
                  isFavorite: !!found.isFavorite
                };
              }
              return { ...init };
            });
            return merged;
          }
        }
      } catch (e) {
        console.warn('Error reading stored houses:', e);
      }
      return JSON.parse(JSON.stringify(INITIAL_HOUSES));
    }

    saveHouses() {
      try {
        localStorage.setItem(STORAGE_KEYS.HOUSES, JSON.stringify(this.houses));
      } catch (e) {
        console.warn('Error saving houses:', e);
      }
    }

    loadComments() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.COMMENTS);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      } catch (e) {
        console.warn('Error reading stored comments:', e);
      }
      return JSON.parse(JSON.stringify(INITIAL_COMMENTS));
    }

    saveComments() {
      try {
        localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(this.comments));
      } catch (e) {
        console.warn('Error saving comments:', e);
      }
    }

    loadFavorites() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveFavorites() {
      try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(this.userFavorites));
      } catch (e) {
        // Ignore
      }
    }

    loadUserLikes() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.USER_LIKES);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveUserLikes() {
      try {
        localStorage.setItem(STORAGE_KEYS.USER_LIKES, JSON.stringify(this.userLikes));
      } catch (e) {
        // Ignore
      }
    }

    loadUserCommentLikes() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.USER_COMMENT_LIKES);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveUserCommentLikes() {
      try {
        localStorage.setItem(STORAGE_KEYS.USER_COMMENT_LIKES, JSON.stringify(this.userCommentLikes));
      } catch (e) {
        // Ignore
      }
    }

    initFirebaseSync() {
      const setupBridge = () => {
        if (!window.FirebaseCommentsBridge || !window.FirebaseCommentsBridge.isReady) return;

        // 1. Comments real-time sync
        if (this.firebaseUnsubscribe) {
          this.firebaseUnsubscribe();
        }

        this.firebaseUnsubscribe = window.FirebaseCommentsBridge.subscribe(
          (snapshot) => {
            this.isFirebaseConnected = true;
            const loaded = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              const author = data.autor || data.author || 'Anónimo';
              const text = data.texto || data.text || '';
              const houseRef = data.houseRef || 'General';
              const role = data.role || (author.toLowerCase() === 'loanrey17' ? 'creator' : (author.toLowerCase() === 'danna' ? 'co-creator' : null));
              const likes = typeof data.likes === 'number' ? data.likes : 0;
              const likedByUser = this.userCommentLikes.includes(doc.id);
              const date = this.formatCommentDate(data.fecha);

              loaded.push({
                id: doc.id,
                author,
                text,
                houseRef,
                role,
                likes,
                likedByUser,
                date,
                timestamp: data.fecha && data.fecha.seconds ? data.fecha.seconds * 1000 : Date.now()
              });
            });

            this.comments = loaded;
            this.saveComments();
            this.renderComments();
          },
          (error) => {
            console.warn('Firebase Firestore Snapshot error:', error);
            this.isFirebaseConnected = false;
          }
        );

        // 2. House likes real-time sync (corazones actualizados en vivo para todos los usuarios)
        if (typeof window.FirebaseCommentsBridge.subscribeHouseLikes === 'function') {
          if (this.firebaseLikesUnsubscribe) {
            this.firebaseLikesUnsubscribe();
          }

          this.firebaseLikesUnsubscribe = window.FirebaseCommentsBridge.subscribeHouseLikes((snapshot) => {
            let hasChanges = false;
            snapshot.forEach((doc) => {
              const data = doc.data();
              const house = this.houses.find((h) => h.id === doc.id);
              if (house && typeof data.likes === 'number' && house.likes !== data.likes) {
                house.likes = Math.max(0, data.likes);
                hasChanges = true;
              }
            });

            if (hasChanges) {
              this.saveHouses();
              this.render();
              this.updateStats();
            }
          });
        }
      };

      if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady) {
        setupBridge();
      } else {
        window.addEventListener('firebase-bridge-ready', () => setupBridge(), { once: true });
      }
    }

    formatCommentDate(fecha) {
      if (!fecha) return 'Hace unos momentos';
      let d = null;
      if (typeof fecha.toDate === 'function') {
        d = fecha.toDate();
      } else if (fecha && typeof fecha.seconds === 'number') {
        d = new Date(fecha.seconds * 1000);
      } else if (typeof fecha === 'number') {
        d = new Date(fecha);
      } else if (typeof fecha === 'string') {
        d = new Date(fecha);
      }

      if (!d || isNaN(d.getTime())) return 'Hace unos momentos';

      const diffMs = Date.now() - d.getTime();
      const diffSec = Math.floor(diffMs / 1000);
      const diffMin = Math.floor(diffSec / 60);
      const diffHrs = Math.floor(diffMin / 60);
      const diffDays = Math.floor(diffHrs / 24);

      if (diffSec < 45) return 'Hace unos momentos';
      if (diffMin < 60) return `Hace ${diffMin} min`;
      if (diffHrs < 24) return `Hace ${diffHrs} h`;
      if (diffDays === 1) return 'Ayer';
      if (diffDays < 7) return `Hace ${diffDays} d`;

      return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
    }

    /* ------------------------------------------------------------------------
       DOM Caching
       ------------------------------------------------------------------------ */

    cacheDOMElements() {
      // Header & Navigation
      this.hamburgerBtn = document.getElementById('hamburgerBtn');
      this.sideDrawer = document.getElementById('sideDrawer');
      this.drawerBackdrop = document.getElementById('drawerBackdrop');
      this.closeDrawerBtn = document.getElementById('closeDrawerBtn');
      this.soundFxBtn = document.getElementById('soundFxBtn');
      this.themeToggleBtn = document.getElementById('themeToggleBtn');
      this.openCommentsBtn = document.getElementById('openCommentsBtn');
      this.drawerSortPopularBtn = document.getElementById('drawerSortPopularBtn');

      // Search & Filters
      this.searchInput = document.getElementById('searchInput');
      this.clearSearchBtn = document.getElementById('clearSearchBtn');
      this.categoryTabs = document.getElementById('categoryTabs');
      this.sortSelect = document.getElementById('sortSelect');
      this.viewModeToggle = document.getElementById('viewModeToggle');
      this.filterSummaryBar = document.getElementById('filterSummaryBar');
      this.filterSummaryText = document.getElementById('filterSummaryText');
      this.resetFiltersBtn = document.getElementById('resetFiltersBtn');

      // Counts
      this.countAll = document.getElementById('countAll');
      this.countVotadas = document.getElementById('countVotadas');
      this.countCerezo = document.getElementById('countCerezo');
      this.countPlaya = document.getElementById('countPlaya');
      this.countModerna = document.getElementById('countModerna');
      this.countFavs = document.getElementById('countFavs');

      // Cards Grid & Empty State
      this.cardsGrid = document.getElementById('cardsGrid');
      this.emptyState = document.getElementById('emptyState');
      this.emptyResetBtn = document.getElementById('emptyResetBtn');

      // Comments Section
      this.commentsSection = document.getElementById('commentsSection');
      this.commentForm = document.getElementById('commentForm');
      this.commentAuthor = document.getElementById('commentAuthor');
      this.commentAuthorGroup = document.getElementById('commentAuthorGroup');
      this.commentAuthBadgeGroup = document.getElementById('commentAuthBadgeGroup');
      this.authCommenterCard = document.getElementById('authCommenterCard');
      this.commentHouseRef = document.getElementById('commentHouseRef');
      this.commentText = document.getElementById('commentText');
      this.charCounter = document.getElementById('charCounter');
      this.commentsList = document.getElementById('commentsList');
      this.commentsCount = document.getElementById('commentsCount');

      // Detail Modal
      this.detailModal = document.getElementById('detailModal');
      this.closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
      this.stageImageContainer = document.getElementById('stageImageContainer');
      this.detailModalImg = document.getElementById('detailModalImg');
      this.modalPrevImgBtn = document.getElementById('modalPrevImgBtn');
      this.modalNextImgBtn = document.getElementById('modalNextImgBtn');
      this.modalImgCounter = document.getElementById('modalImgCounter');
      this.stageThumbnailsContainer = document.getElementById('stageThumbnailsContainer');
      this.blueprintGridOverlay = document.getElementById('blueprintGridOverlay');
      this.zoomInBtn = document.getElementById('zoomInBtn');
      this.zoomOutBtn = document.getElementById('zoomOutBtn');
      this.zoomResetBtn = document.getElementById('zoomResetBtn');
      this.toggleBlueprintGridBtn = document.getElementById('toggleBlueprintGridBtn');
      this.downloadDetailImgBtn = document.getElementById('downloadDetailImgBtn');

      this.detailCategoryBadge = document.getElementById('detailCategoryBadge');
      this.detailDiffBadge = document.getElementById('detailDiffBadge');
      this.detailTitle = document.getElementById('detailTitle');
      this.detailBiome = document.getElementById('detailBiome');
      this.detailDescription = document.getElementById('detailDescription');
      this.detailTime = document.getElementById('detailTime');
      this.detailMaterialsList = document.getElementById('detailMaterialsList');
      this.copyMaterialsBtn = document.getElementById('copyMaterialsBtn');
      this.detailLikeBtn = document.getElementById('detailLikeBtn');
      this.detailLikesCount = document.getElementById('detailLikesCount');
      this.detailShareBtn = document.getElementById('detailShareBtn');
      this.detailCreatorName = document.getElementById('detailCreatorName');

      // Footer Stats
      this.totalLikesCount = document.getElementById('totalLikesCount');
      this.totalBuildsCount = document.getElementById('totalBuildsCount');
      this.paypalDonationBtn = document.getElementById('paypalDonationBtn');

      // Donation Modal
      this.donationModal = document.getElementById('donationModal');
      this.closeDonationModalBtn = document.getElementById('closeDonationModalBtn');
      this.donationModalOkBtn = document.getElementById('donationModalOkBtn');

      // Auth Decoy Modal
      this.logoGroup = document.querySelector('.logo-group');
      this.authModal = document.getElementById('authModal');
      this.closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
      this.authDecoyForm = document.getElementById('authDecoyForm');
      this.authPasswordInput = document.getElementById('authPasswordInput');
      this.toggleAuthPassBtn = document.getElementById('toggleAuthPassBtn');

      // Toast Container
      this.toastContainer = document.getElementById('toastContainer');
    }

    /* ------------------------------------------------------------------------
       Theme & Sound Initialization
       ------------------------------------------------------------------------ */

    initTheme() {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.updateThemeIcon(savedTheme);

      this.updateSoundBtnUI();
    }

    updateThemeIcon(theme) {
      if (!this.themeToggleBtn) return;
      const icon = this.themeToggleBtn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
    }

    updateSoundBtnUI() {
      if (!this.soundFxBtn) return;
      const icon = this.soundFxBtn.querySelector('i');
      if (icon) {
        icon.className = this.sound.enabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
      }
      this.soundFxBtn.classList.toggle('active', this.sound.enabled);
    }

    /* ------------------------------------------------------------------------
       Event Listeners
       ------------------------------------------------------------------------ */

    initEventListeners() {
      // 1. Hamburger Side Drawer
      if (this.hamburgerBtn) {
        this.hamburgerBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.toggleDrawer();
        });
      }

      if (this.closeDrawerBtn) {
        this.closeDrawerBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDrawer();
        });
      }

      if (this.drawerBackdrop) {
        this.drawerBackdrop.addEventListener('click', () => {
          this.closeDrawer();
        });
      }

      if (this.drawerSortPopularBtn) {
        this.drawerSortPopularBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDrawer();
          this.currentCategory = 'mas_votadas';
          this.currentSort = 'popular';
          if (this.sortSelect) this.sortSelect.value = 'popular';

          document.querySelectorAll('.tab-btn').forEach((b) => {
            b.classList.toggle('active', b.getAttribute('data-category') === 'mas_votadas');
          });

          this.render();
          if (this.cardsGrid) {
            this.cardsGrid.scrollIntoView({ behavior: 'smooth' });
          }
          this.showToast('🔥 Mostrando solo las construcciones más votadas', 'info');
        });
      }

      // Close drawer on link click inside drawer
      const drawerLinks = document.querySelectorAll('.drawer-menu-list a, .ddev-insta-link');
      drawerLinks.forEach((link) => {
        link.addEventListener('click', () => {
          this.closeDrawer();
        });
      });

      // 2. Sound FX Toggle
      if (this.soundFxBtn) {
        this.soundFxBtn.addEventListener('click', () => {
          const enabled = this.sound.toggle();
          this.updateSoundBtnUI();
          this.showToast(enabled ? 'Sonido activado 🔊' : 'Sonido desactivado 🔇', 'info');
          if (enabled) this.sound.playPop();
        });
      }

      // 3. Theme Toggle
      if (this.themeToggleBtn) {
        this.themeToggleBtn.addEventListener('click', () => {
          this.sound.playPop();
          const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
          this.updateThemeIcon(newTheme);
          this.showToast(`Tema cambiado a: ${newTheme === 'dark' ? 'Netherite Noche 🌙' : 'Overworld Día ☀️'}`);
        });
      }

      // 4. Quick button "Comentarios" in header
      if (this.openCommentsBtn) {
        this.openCommentsBtn.addEventListener('click', () => {
          this.sound.playPop();
          if (this.commentsSection) {
            this.commentsSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              if (this.commentAuthor) this.commentAuthor.focus();
            }, 600);
          }
        });
      }

      // PayPal Donation Button & Modal
      if (this.paypalDonationBtn) {
        this.paypalDonationBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.openDonationModal();
        });
      }

      if (this.closeDonationModalBtn) {
        this.closeDonationModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDonationModal();
        });
      }

      if (this.donationModalOkBtn) {
        this.donationModalOkBtn.addEventListener('click', () => {
          this.sound.playSuccess();
          this.closeDonationModal();
        });
      }

      if (this.donationModal) {
        this.donationModal.addEventListener('click', (e) => {
          if (e.target === this.donationModal) {
            this.sound.playPop();
            this.closeDonationModal();
          }
        });
      }

      // 5. Logo 1-Click Detection (Opens Secret Popup immediately)
      if (this.logoGroup) {
        this.logoGroup.addEventListener('click', () => {
          this.sound.playPop();
          this.openAuthModal();
        });
      }

      // Auth Modal Close & Submit
      if (this.closeAuthModalBtn) {
        this.closeAuthModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeAuthModal();
        });
      }

      if (this.authModal) {
        this.authModal.addEventListener('click', (e) => {
          if (e.target === this.authModal) {
            this.closeAuthModal();
          }
        });
      }

      if (this.toggleAuthPassBtn && this.authPasswordInput) {
        this.toggleAuthPassBtn.addEventListener('click', () => {
          const isPass = this.authPasswordInput.type === 'password';
          this.authPasswordInput.type = isPass ? 'text' : 'password';
          const icon = this.toggleAuthPassBtn.querySelector('i');
          if (icon) {
            icon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
          }
        });
      }

      if (this.authDecoyForm) {
        this.authDecoyForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleAuthSubmit();
        });
      }

      // 6. Search Bar & Debounce
      if (this.searchInput) {
        this.searchInput.addEventListener('input', (e) => {
          this.currentSearch = e.target.value.trim().toLowerCase();
          if (this.clearSearchBtn) {
            this.clearSearchBtn.style.display = this.currentSearch ? 'block' : 'none';
          }
          this.render();
        });
      }

      if (this.clearSearchBtn) {
        this.clearSearchBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.searchInput.value = '';
          this.currentSearch = '';
          this.clearSearchBtn.style.display = 'none';
          this.searchInput.focus();
          this.render();
        });
      }

      // Popular tag chips
      const quickChips = document.querySelectorAll('.chip-tag');
      quickChips.forEach((chip) => {
        chip.addEventListener('click', () => {
          this.sound.playPop();
          const searchTerm = chip.getAttribute('data-search') || '';
          this.searchInput.value = searchTerm;
          this.currentSearch = searchTerm.toLowerCase();
          if (this.clearSearchBtn) this.clearSearchBtn.style.display = 'block';
          this.render();
        });
      });

      // 6. Category Tabs
      if (this.categoryTabs) {
        this.categoryTabs.addEventListener('click', (e) => {
          const tabBtn = e.target.closest('.tab-btn');
          if (!tabBtn) return;
          this.sound.playPop();

          document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
          tabBtn.classList.add('active');

          this.currentCategory = tabBtn.getAttribute('data-category') || 'all';
          this.render();
        });
      }

      // 7. Sort Dropdown
      if (this.sortSelect) {
        this.sortSelect.addEventListener('change', (e) => {
          this.sound.playPop();
          this.currentSort = e.target.value;
          this.render();
        });
      }

      // 8. View Mode Switcher (Grid / Masonry)
      if (this.viewModeToggle) {
        this.viewModeToggle.addEventListener('click', (e) => {
          const btn = e.target.closest('.view-btn');
          if (!btn) return;
          this.sound.playPop();

          document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          this.currentView = btn.getAttribute('data-view') || 'grid';
          if (this.cardsGrid) {
            this.cardsGrid.className = `cards-grid ${this.currentView}-mode`;
          }
        });
      }

      // 9. Reset Filters Button
      if (this.resetFiltersBtn) {
        this.resetFiltersBtn.addEventListener('click', () => {
          this.resetAllFilters();
        });
      }

      if (this.emptyResetBtn) {
        this.emptyResetBtn.addEventListener('click', () => {
          this.resetAllFilters();
        });
      }

      // 10. Comment Form & Char Counter
      if (this.commentText && this.charCounter) {
        this.commentText.addEventListener('input', (e) => {
          const count = e.target.value.length;
          this.charCounter.textContent = `${count} / 500`;
        });
      }

      if (this.commentForm) {
        this.commentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleCommentSubmit();
        });
      }

      // 11. Modal Controls
      if (this.closeDetailModalBtn) {
        this.closeDetailModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeModal();
        });
      }

      if (this.detailModal) {
        this.detailModal.addEventListener('click', (e) => {
          if (e.target === this.detailModal) {
            this.closeModal();
          }
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
          this.closeDrawer();
          this.closeAuthModal();
          this.closeDonationModal();
        } else if (this.activeModalHouse && (e.key === 'ArrowLeft' || e.key === 'ArrowUp')) {
          this.prevModalImage();
        } else if (this.activeModalHouse && (e.key === 'ArrowRight' || e.key === 'ArrowDown')) {
          this.nextModalImage();
        }
      });

      // Gallery Stage Prev / Next Buttons
      if (this.modalPrevImgBtn) {
        this.modalPrevImgBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.prevModalImage();
        });
      }

      if (this.modalNextImgBtn) {
        this.modalNextImgBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.nextModalImage();
        });
      }

      // Zoom Controls in Modal
      if (this.zoomInBtn) {
        this.zoomInBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.adjustZoom(0.2);
        });
      }

      if (this.zoomOutBtn) {
        this.zoomOutBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.adjustZoom(-0.2);
        });
      }

      if (this.zoomResetBtn) {
        this.zoomResetBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.resetZoom();
        });
      }

      // Blueprint Grid Overlay Toggle
      if (this.toggleBlueprintGridBtn) {
        this.toggleBlueprintGridBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.gridActive = !this.gridActive;
          this.blueprintGridOverlay.classList.toggle('active', this.gridActive);
          this.toggleBlueprintGridBtn.classList.toggle('active', this.gridActive);
          this.showToast(this.gridActive ? 'Cuadrícula de bloques activada' : 'Cuadrícula desactivada', 'info');
        });
      }

      // Download Detail Image HD (Current active photo)
      if (this.downloadDetailImgBtn) {
        this.downloadDetailImgBtn.addEventListener('click', () => {
          if (!this.activeModalHouse) return;
          this.sound.playSuccess();
          const imgUrl = this.getCurrentModalImage() || this.activeModalHouse.image;
          this.downloadImage(imgUrl, `${this.activeModalHouse.id}_foto${this.currentModalImgIndex + 1}_HD.jpg`);
        });
      }

      // Modal Tabs (Overview / Materials)
      const detailTabBtns = document.querySelectorAll('.dtab-btn');
      detailTabBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          this.sound.playPop();
          const targetTab = btn.getAttribute('data-dtab');

          detailTabBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          document.querySelectorAll('.dtab-content').forEach((c) => c.classList.remove('active'));
          const activeContent = document.getElementById(`dtab-${targetTab}`);
          if (activeContent) activeContent.classList.add('active');
        });
      });

      // Copy Materials List
      if (this.copyMaterialsBtn) {
        this.copyMaterialsBtn.addEventListener('click', () => {
          if (!this.activeModalHouse) return;
          this.sound.playSuccess();
          this.copyMaterialsList(this.activeModalHouse);
        });
      }

      // Modal Like Button
      if (this.detailLikeBtn) {
        this.detailLikeBtn.addEventListener('click', () => {
          if (!this.activeModalHouse) return;
          this.toggleHouseLike(this.activeModalHouse.id);
        });
      }

      // Modal Share Button
      if (this.detailShareBtn) {
        this.detailShareBtn.addEventListener('click', () => {
          if (!this.activeModalHouse) return;
          this.sound.playPop();
          this.shareHouse(this.activeModalHouse);
        });
      }
    }

    /* ------------------------------------------------------------------------
       Drawer Methods
       ------------------------------------------------------------------------ */

    toggleDrawer() {
      const isOpen = this.sideDrawer.classList.contains('open');
      if (isOpen) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    }

    openDrawer() {
      if (this.hamburgerBtn) this.hamburgerBtn.classList.add('open');
      if (this.sideDrawer) {
        this.sideDrawer.classList.add('open');
        this.sideDrawer.setAttribute('aria-hidden', 'false');
      }
      if (this.drawerBackdrop) {
        this.drawerBackdrop.classList.add('active');
        this.drawerBackdrop.setAttribute('aria-hidden', 'false');
      }
      document.body.style.overflow = 'hidden';
    }

    closeDrawer() {
      if (this.hamburgerBtn) this.hamburgerBtn.classList.remove('open');
      if (this.sideDrawer) {
        this.sideDrawer.classList.remove('open');
        this.sideDrawer.setAttribute('aria-hidden', 'true');
      }
      if (this.drawerBackdrop) {
        this.drawerBackdrop.classList.remove('active');
        this.drawerBackdrop.setAttribute('aria-hidden', 'true');
      }
      document.body.style.overflow = '';
    }

    /* ------------------------------------------------------------------------
       Filter & Sort Logic
       ------------------------------------------------------------------------ */

    getFilteredHouses() {
      return this.houses.filter((house) => {
        // Category match
        if (this.currentCategory === 'cerezo') {
          if (house.category !== 'cerezo' && !house.tags.includes('cerezo') && !house.tags.includes('sakura')) return false;
        } else if (this.currentCategory === 'playa') {
          if (house.category !== 'playa' && !house.tags.includes('playa')) return false;
        } else if (this.currentCategory === 'moderna') {
          if (house.category !== 'moderna' && !house.tags.includes('moderna')) return false;
        } else if (this.currentCategory === 'favoritos') {
          if (!this.userFavorites.includes(house.id)) return false;
        } else if (this.currentCategory === 'mas_votadas') {
          const maxLikes = Math.max(0, ...this.houses.map((h) => h.likes || 0));
          if (maxLikes > 0) {
            if ((house.likes || 0) <= 0) return false;
          }
        }

        // Search match
        if (this.currentSearch) {
          const matchTitle = house.title.toLowerCase().includes(this.currentSearch);
          const matchBiome = house.biome.toLowerCase().includes(this.currentSearch);
          const matchDesc = house.description.toLowerCase().includes(this.currentSearch);
          const matchMaterials = house.materials.some((m) => m.toLowerCase().includes(this.currentSearch));
          const matchTags = house.tags.some((t) => t.toLowerCase().includes(this.currentSearch));

          if (!matchTitle && !matchBiome && !matchDesc && !matchMaterials && !matchTags) {
            return false;
          }
        }

        return true;
      });
    }

    getSortedHouses(filteredList) {
      const list = [...filteredList];
      if (this.currentCategory === 'mas_votadas' || this.currentSort === 'popular') {
        return list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      }
      switch (this.currentSort) {
        case 'difficulty':
          return list.sort((a, b) => b.difficultyLevel - a.difficultyLevel);
        case 'name':
          return list.sort((a, b) => a.title.localeCompare(b.title));
        case 'newest':
        default:
          return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    }

    resetAllFilters() {
      this.sound.playPop();
      this.currentCategory = 'all';
      this.currentSearch = '';
      if (this.searchInput) this.searchInput.value = '';
      if (this.clearSearchBtn) this.clearSearchBtn.style.display = 'none';

      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
      });

      this.render();
      this.showToast('Filtros restablecidos');
    }

    /* ------------------------------------------------------------------------
       Rendering House Cards
       ------------------------------------------------------------------------ */

    render() {
      const filtered = this.getFilteredHouses();
      const sorted = this.getSortedHouses(filtered);

      this.updateCounters();
      this.renderSummaryBar(filtered.length);

      if (!this.cardsGrid) return;

      if (sorted.length === 0) {
        this.cardsGrid.innerHTML = '';
        if (this.emptyState) {
          this.emptyState.style.display = 'block';
          const title = this.emptyState.querySelector('.empty-title');
          const text = this.emptyState.querySelector('.empty-text');
          if (this.currentCategory === 'mas_votadas') {
            if (title) title.textContent = 'Aún no hay votos registrados';
            if (text) text.textContent = '¡Sé el primero en dar corazón ❤️ a una de las construcciones para que aparezca aquí!';
          } else if (this.currentCategory === 'favoritos') {
            if (title) title.textContent = 'No tienes casas favoritas guardadas';
            if (text) text.textContent = 'Haz clic en el icono de marcador ⭐ en cualquier tarjeta para guardarla.';
          } else {
            if (title) title.textContent = 'No se encontraron construcciones';
            if (text) text.textContent = 'No hay casas que coincidan con tu búsqueda o filtro seleccionado.';
          }
        }
        return;
      }

      if (this.emptyState) this.emptyState.style.display = 'none';

      this.cardsGrid.innerHTML = sorted.map((house) => this.createCardHTML(house)).join('');

      this.attachCardEventListeners();
    }

    createCardHTML(house) {
      const isFav = this.userFavorites.includes(house.id);
      const isLiked = this.userLikes.includes(house.id);

      const diffBadgeClass = house.difficultyLevel === 3 ? 'diff-hard' : 'diff-med';

      const categoryIcons = {
        cerezo: '<i class="fa-solid fa-tree"></i> CEREZO',
        playa: '<i class="fa-solid fa-umbrella-beach"></i> PLAYA',
        moderna: '<i class="fa-solid fa-city"></i> MODERNA'
      };
      const catBadge = categoryIcons[house.category] || `<i class="fa-solid fa-cube"></i> ${house.category.toUpperCase()}`;

      const photoCountBadge = house.gallery && house.gallery.length > 1
        ? `<span class="badge-photo-count"><i class="fa-solid fa-images"></i> ${house.gallery.length} fotos</span>`
        : '';

      const creatorRole = house.creatorRole || (house.category === 'cerezo' || house.creator === 'Co-creadora' ? 'Co-creadora' : 'Creador');
      const creatorDisplay = house.creatorDisplay || house.creator || 'Co-creadora';

      const igBannerHTML = house.instagram
        ? `
          <a href="${house.instagram.url}" target="_blank" rel="noopener noreferrer" class="card-ig-banner" data-action="instagram" title="Instagram de ${house.instagram.name}" aria-label="Abrir Instagram de ${house.instagram.name}">
            <div class="card-ig-logo-wrap">
              <img src="./instagram_logo.png" alt="Logo Instagram" class="card-ig-logo-img" onerror="window.handleImgFallback(this, 'instagram_logo')">
            </div>
            <div class="card-ig-info">
              <span class="card-ig-subtitle"><i class="fa-solid fa-crown creator-crown"></i> ${creatorRole}</span>
              <span class="card-ig-handle">${creatorDisplay} <span class="card-ig-at">@${house.instagram.name}</span></span>
            </div>
            <div class="card-ig-badge-action">
              <span>Instagram</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </a>
        `
        : '';

      return `
        <article class="house-card" data-house-id="${house.id}" tabindex="0" role="button" aria-label="Ver detalles de ${house.title}">
          <div class="card-image-wrap">
            <img src="${house.image}" alt="${house.title}" class="card-img" loading="lazy" onerror="window.handleImgFallback(this, '${house.id}')">
            <div class="card-overlay-gradient"></div>
            
            <div class="card-top-badges">
              <span class="badge-category">${catBadge}</span>
              <div class="card-badges-right">
                ${photoCountBadge}
                <span class="badge-diff ${diffBadgeClass}">${house.difficulty}</span>
              </div>
            </div>

            <button class="card-fav-btn ${isFav ? 'active' : ''}" data-action="favorite" data-id="${house.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </button>
          </div>

          <div class="card-body">
            <div class="card-biome"><i class="fa-solid fa-location-dot"></i> ${house.biome}</div>
            <h3 class="card-title">${house.title}</h3>
            <p class="card-desc">${house.description}</p>

            ${igBannerHTML}

            <div class="card-footer-row">
              <button class="btn-card-like ${isLiked ? 'liked has-likes' : ''}" data-action="like" data-id="${house.id}" title="${isLiked ? 'Quitar like' : 'Dar like (1 por usuario)'}">
                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                <span class="likes-number">${house.likes}</span>
              </button>

              <div class="card-action-btns">
                <button class="btn-card-details" data-action="details" data-id="${house.id}">
                  <i class="fa-solid fa-eye"></i> Ver Ficha
                </button>
                <button class="btn-card-download" data-action="download" data-id="${house.id}" title="Descargar imagen">
                  <i class="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    attachCardEventListeners() {
      const cards = this.cardsGrid.querySelectorAll('.house-card');

      cards.forEach((card) => {
        const houseId = card.getAttribute('data-house-id');

        // Main card click -> open detail modal
        card.addEventListener('click', (e) => {
          // If clicked on specific action buttons, don't trigger full card click
          if (e.target.closest('[data-action]')) return;
          this.sound.playPop();
          this.openModal(houseId, 'materials');
        });

        // Keyboard navigation (Enter or Space)
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('[data-action]')) return;
            e.preventDefault();
            this.sound.playPop();
            this.openModal(houseId);
          }
        });

        // Instagram button
        const igBtn = card.querySelector('[data-action="instagram"]');
        if (igBtn) {
          igBtn.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        }

        // Favorite button
        const favBtn = card.querySelector('[data-action="favorite"]');
        if (favBtn) {
          favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(houseId);
          });
        }

        // Like button
        const likeBtn = card.querySelector('[data-action="like"]');
        if (likeBtn) {
          likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleHouseLike(houseId);
          });
        }

        // Details button
        const detailsBtn = card.querySelector('[data-action="details"]');
        if (detailsBtn) {
          detailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.sound.playPop();
            this.openModal(houseId);
          });
        }

        // Download button
        const downloadBtn = card.querySelector('[data-action="download"]');
        if (downloadBtn) {
          downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const house = this.houses.find((h) => h.id === houseId);
            if (house) {
              this.sound.playSuccess();
              this.downloadImage(house.image, `${house.id}.jpg`);
            }
          });
        }
      });
    }

    /* ------------------------------------------------------------------------
       Counters & Summary
       ------------------------------------------------------------------------ */

    updateCounters() {
      const totalAll = this.houses.length;
      const totalVotadas = this.houses.filter((h) => (h.likes || 0) > 0).length;
      const totalCerezo = this.houses.filter((h) => h.category === 'cerezo' || h.tags.includes('cerezo') || h.tags.includes('sakura')).length;
      const totalPlaya = this.houses.filter((h) => h.category === 'playa' || h.tags.includes('playa')).length;
      const totalModerna = this.houses.filter((h) => h.category === 'moderna' || h.tags.includes('moderna')).length;
      const totalFavs = this.houses.filter((h) => this.userFavorites.includes(h.id)).length;

      if (this.countAll) this.countAll.textContent = totalAll;
      if (this.countVotadas) this.countVotadas.textContent = totalVotadas;
      if (this.countCerezo) this.countCerezo.textContent = totalCerezo;
      if (this.countPlaya) this.countPlaya.textContent = totalPlaya;
      if (this.countModerna) this.countModerna.textContent = totalModerna;
      if (this.countFavs) this.countFavs.textContent = totalFavs;
    }

    renderSummaryBar(filteredCount) {
      if (!this.filterSummaryBar) return;
      const hasFilter = this.currentSearch !== '' || this.currentCategory !== 'all';

      if (hasFilter) {
        this.filterSummaryBar.style.display = 'flex';
        let text = `Mostrando ${filteredCount} construcción${filteredCount === 1 ? '' : 'es'}`;
        if (this.currentCategory === 'mas_votadas') {
          text = `🔥 Mostrando ${filteredCount} construcción${filteredCount === 1 ? '' : 'es'} más votada${filteredCount === 1 ? '' : 's'}`;
        } else if (this.currentCategory !== 'all') {
          text += ` en categoría "${this.currentCategory}"`;
        }
        if (this.currentSearch) {
          text += ` para "${this.currentSearch}"`;
        }
        if (this.filterSummaryText) this.filterSummaryText.textContent = text;
      } else {
        this.filterSummaryBar.style.display = 'none';
      }
    }

    updateStats() {
      const totalLikes = this.houses.reduce((sum, h) => sum + (h.likes || 0), 0);
      if (this.totalLikesCount) this.totalLikesCount.textContent = totalLikes;
      if (this.totalBuildsCount) this.totalBuildsCount.textContent = this.houses.length;
    }

    /* ------------------------------------------------------------------------
       House Actions (Likes & Favorites)
       ------------------------------------------------------------------------ */

    async toggleHouseLike(houseId) {
      const house = this.houses.find((h) => h.id === houseId);
      if (!house) return;

      const alreadyLiked = this.userLikes.includes(houseId);
      let delta = 1;

      if (alreadyLiked) {
        // Toggle OFF like (1 per user)
        this.sound.playPop();
        this.userLikes = this.userLikes.filter((id) => id !== houseId);
        house.likes = Math.max(0, (house.likes || 0) - 1);
        delta = -1;
        this.showToast(`Like eliminado de ${house.title} 🤍`, 'info');
      } else {
        // Toggle ON like (1 per user)
        this.sound.playHeart();
        this.userLikes.push(houseId);
        house.likes = (house.likes || 0) + 1;
        delta = 1;
        this.showToast(`¡Te ha gustado ${house.title}! ❤️`, 'success');
      }

      this.saveUserLikes();
      this.saveHouses();
      this.render();
      this.updateStats();

      // If modal is open for this house, update modal like counter and active state
      if (this.activeModalHouse && this.activeModalHouse.id === houseId) {
        if (this.detailLikesCount) this.detailLikesCount.textContent = house.likes;
        if (this.detailLikeBtn) {
          const nowLiked = this.userLikes.includes(houseId);
          this.detailLikeBtn.classList.toggle('liked', nowLiked);
          const icon = this.detailLikeBtn.querySelector('i');
          if (icon) {
            icon.className = nowLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
          }
        }
      }

      // Sync with Firebase Firestore in real-time
      if (window.FirebaseCommentsBridge && typeof window.FirebaseCommentsBridge.toggleHouseLike === 'function') {
        try {
          await window.FirebaseCommentsBridge.toggleHouseLike(houseId, delta);
        } catch (err) {
          console.warn('Error syncing house like with Firebase:', err);
        }
      }
    }

    toggleFavorite(houseId) {
      const idx = this.userFavorites.indexOf(houseId);
      if (idx > -1) {
        this.sound.playPop();
        this.userFavorites.splice(idx, 1);
        this.showToast('Eliminado de tus favoritos', 'info');
      } else {
        this.sound.playSuccess();
        this.userFavorites.push(houseId);
        this.showToast('Guardado en tus favoritos ⭐', 'success');
      }

      this.saveFavorites();
      this.render();
    }

    /* ------------------------------------------------------------------------
       Detail Modal Logic
       ------------------------------------------------------------------------ */

    openModal(houseId, defaultTab = 'materials') {
      const house = this.houses.find((h) => h.id === houseId);
      if (!house) return;

      this.activeModalHouse = house;
      this.currentModalImgIndex = 0;
      this.resetZoom();

      const gallery = house.gallery && house.gallery.length > 0
        ? house.gallery
        : [{ url: house.image, caption: house.title }];

      this.renderModalGallery(gallery);

      if (this.detailTitle) this.detailTitle.textContent = house.title;
      if (this.detailBiome) {
        this.detailBiome.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> Bioma: <span>${house.biome}</span>`;
      }
      if (this.detailCategoryBadge) {
        const categoryIcons = {
          cerezo: '<i class="fa-solid fa-tree"></i> CEREZO / SAKURA',
          playa: '<i class="fa-solid fa-umbrella-beach"></i> PLAYA',
          moderna: '<i class="fa-solid fa-city"></i> MODERNA'
        };
        this.detailCategoryBadge.innerHTML = categoryIcons[house.category] || `<i class="fa-solid fa-cube"></i> ${house.category.toUpperCase()}`;
      }
      if (this.detailDiffBadge) {
        this.detailDiffBadge.textContent = `${'⭐'.repeat(house.difficultyLevel)} ${house.difficulty}`;
      }
      if (this.detailDescription) this.detailDescription.textContent = house.description;
      if (this.detailTime) this.detailTime.textContent = house.time;

      const isLiked = this.userLikes.includes(house.id);
      if (this.detailLikesCount) this.detailLikesCount.textContent = house.likes;
      if (this.detailLikeBtn) {
        this.detailLikeBtn.classList.toggle('liked', isLiked);
        const icon = this.detailLikeBtn.querySelector('i');
        if (icon) {
          icon.className = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        }
      }

      // Populate Creator Name & Instagram
      const creatorRole = house.creatorRole || (house.category === 'cerezo' || house.creator === 'Co-creadora' ? 'Co-creadora' : 'Creador');
      const creatorDisplay = house.creatorDisplay || house.creator || 'Co-creadora';

      if (this.detailCreatorName) {
        this.detailCreatorName.textContent = creatorDisplay;
      }

      const detailCreatorIgWrap = document.getElementById('detailCreatorIgWrap');
      if (detailCreatorIgWrap) {
        if (house.instagram) {
          detailCreatorIgWrap.innerHTML = `
            <a href="${house.instagram.url}" target="_blank" rel="noopener noreferrer" class="detail-ig-banner-box" title="Instagram de ${house.instagram.name}" aria-label="Instagram de ${house.instagram.name}">
              <div class="detail-ig-logo-wrap">
                <img src="./instagram_logo.png" alt="Instagram ${house.instagram.name}" class="detail-ig-logo-img" onerror="window.handleImgFallback(this, 'instagram_logo')">
              </div>
              <div class="detail-ig-info-col">
                <span class="detail-ig-role"><i class="fa-solid fa-crown"></i> ${creatorRole} Oficial</span>
                <span class="detail-ig-username">${creatorDisplay} <span class="detail-ig-handle-pill">@${house.instagram.name}</span></span>
              </div>
              <div class="detail-ig-follow-btn">
                <span>Seguir</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
          `;
          detailCreatorIgWrap.style.display = 'flex';
        } else {
          detailCreatorIgWrap.innerHTML = '';
          detailCreatorIgWrap.style.display = 'none';
        }
      }

      // Populate Materials Checklist (NO quantities, only clean block names)
      if (this.detailMaterialsList) {
        this.detailMaterialsList.innerHTML = house.materials
          .map(
            (mat, idx) => `
          <label class="material-check-item">
            <input type="checkbox" id="mat-check-${idx}">
            <span class="custom-checkbox"><i class="fa-solid fa-check"></i></span>
            <span class="material-name"><i class="fa-solid fa-cube mat-icon"></i> ${mat}</span>
          </label>
        `
          )
          .join('');
      }

      // Set active tab (defaults to 'materials' as requested)
      document.querySelectorAll('.dtab-btn').forEach((b) => b.classList.remove('active'));
      const activeTabBtn = document.querySelector(`.dtab-btn[data-dtab="${defaultTab}"]`) || document.querySelector('.dtab-btn[data-dtab="materials"]');
      if (activeTabBtn) activeTabBtn.classList.add('active');

      document.querySelectorAll('.dtab-content').forEach((c) => c.classList.remove('active'));
      const activeContent = document.getElementById(`dtab-${defaultTab}`) || document.getElementById('dtab-materials');
      if (activeContent) activeContent.classList.add('active');

      // Show Modal
      if (this.detailModal) {
        this.detailModal.classList.add('active');
        this.detailModal.classList.add('open');
        this.detailModal.setAttribute('aria-hidden', 'false');
      }
      document.body.style.overflow = 'hidden';
    }

    renderModalGallery(gallery) {
      if (!this.activeModalHouse) return;
      const total = gallery.length;

      // Update main stage image
      const activeItem = gallery[this.currentModalImgIndex] || gallery[0];
      const activeUrl = typeof activeItem === 'string' ? activeItem : activeItem.url;
      const activeCaption = typeof activeItem === 'string' ? this.activeModalHouse.title : (activeItem.caption || this.activeModalHouse.title);

      if (this.detailModalImg) {
        this.detailModalImg.src = activeUrl;
        this.detailModalImg.alt = activeCaption;
        this.detailModalImg.dataset.retryStep = '0';
        this.detailModalImg.onerror = () => window.handleImgFallback(this.detailModalImg, this.activeModalHouse.id);
      }

      // Update image counter
      if (this.modalImgCounter) {
        this.modalImgCounter.textContent = `Foto ${this.currentModalImgIndex + 1} de ${total}`;
        this.modalImgCounter.style.display = total > 1 ? 'block' : 'none';
      }

      // Show/hide navigation arrows
      if (this.modalPrevImgBtn) {
        this.modalPrevImgBtn.style.display = total > 1 ? 'flex' : 'none';
      }
      if (this.modalNextImgBtn) {
        this.modalNextImgBtn.style.display = total > 1 ? 'flex' : 'none';
      }

      // Render thumbnail strip
      if (this.stageThumbnailsContainer) {
        if (total > 1) {
          this.stageThumbnailsContainer.style.display = 'flex';
          this.stageThumbnailsContainer.innerHTML = gallery.map((item, idx) => {
            const url = typeof item === 'string' ? item : item.url;
            const cap = typeof item === 'string' ? `Foto ${idx + 1}` : (item.caption || `Foto ${idx + 1}`);
            const isActive = idx === this.currentModalImgIndex;
            return `
              <button class="stage-thumb-btn ${isActive ? 'active' : ''}" data-idx="${idx}" title="${cap}" aria-label="Ver ${cap}">
                <img src="${url}" alt="${cap}" loading="lazy" onerror="window.handleImgFallback(this, '${this.activeModalHouse.id}')">
                <span class="thumb-lbl">${cap}</span>
              </button>
            `;
          }).join('');

          // Attach thumbnail listeners
          const thumbs = this.stageThumbnailsContainer.querySelectorAll('.stage-thumb-btn');
          thumbs.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              this.sound.playPop();
              const idx = parseInt(btn.getAttribute('data-idx') || '0', 10);
              this.setModalImageIndex(idx);
            });
          });
        } else {
          this.stageThumbnailsContainer.style.display = 'none';
          this.stageThumbnailsContainer.innerHTML = '';
        }
      }
    }

    setModalImageIndex(index) {
      if (!this.activeModalHouse) return;
      const gallery = this.activeModalHouse.gallery && this.activeModalHouse.gallery.length > 0
        ? this.activeModalHouse.gallery
        : [{ url: this.activeModalHouse.image, caption: this.activeModalHouse.title }];
      if (index < 0) index = gallery.length - 1;
      if (index >= gallery.length) index = 0;
      this.currentModalImgIndex = index;
      this.resetZoom();
      this.renderModalGallery(gallery);
    }

    prevModalImage() {
      if (!this.activeModalHouse) return;
      this.sound.playPop();
      this.setModalImageIndex(this.currentModalImgIndex - 1);
    }

    nextModalImage() {
      if (!this.activeModalHouse) return;
      this.sound.playPop();
      this.setModalImageIndex(this.currentModalImgIndex + 1);
    }

    getCurrentModalImage() {
      if (!this.activeModalHouse) return '';
      const gallery = this.activeModalHouse.gallery && this.activeModalHouse.gallery.length > 0
        ? this.activeModalHouse.gallery
        : [{ url: this.activeModalHouse.image, caption: this.activeModalHouse.title }];
      const item = gallery[this.currentModalImgIndex] || gallery[0];
      return typeof item === 'string' ? item : item.url;
    }

    closeModal() {
      if (this.detailModal) {
        this.detailModal.classList.remove('active');
        this.detailModal.classList.remove('open');
        this.detailModal.setAttribute('aria-hidden', 'true');
      }
      this.activeModalHouse = null;
      document.body.style.overflow = '';
    }

    adjustZoom(delta) {
      this.zoomLevel = Math.max(0.8, Math.min(2.5, this.zoomLevel + delta));
      if (this.detailModalImg) {
        this.detailModalImg.style.transform = `scale(${this.zoomLevel})`;
      }
    }

    resetZoom() {
      this.zoomLevel = 1.0;
      if (this.detailModalImg) {
        this.detailModalImg.style.transform = 'scale(1)';
      }
    }

    copyMaterialsList(house) {
      const text = `📋 Lista de Materiales para ${house.title} (${house.biome}):\n` +
        house.materials.map((m) => `• ${m}`).join('\n') +
        '\n\nConstruido en Minecraft Studio';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('¡Lista de materiales copiada al portapapeles! 📋', 'success');
        });
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.showToast('¡Lista de materiales copiada! 📋', 'success');
      }
    }

    shareHouse(house) {
      const shareData = {
        title: `${house.title} - Minecraft Architect`,
        text: `Mira este diseño de Minecraft: ${house.title} (${house.biome})`,
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            this.showToast('¡Enlace de la galería copiado! 🔗', 'success');
          });
        } else {
          this.showToast('¡Enlace copiado! 🔗', 'success');
        }
      }
    }

    downloadImage(url, filename) {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || 'minecraft-casa.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showToast('Descargando imagen HD... 💾', 'success');
    }

    /* ------------------------------------------------------------------------
       Donation Modal Methods
       ------------------------------------------------------------------------ */

    openDonationModal() {
      if (this.donationModal) {
        this.donationModal.classList.add('active');
        this.donationModal.classList.add('open');
        this.donationModal.setAttribute('aria-hidden', 'false');
      }
    }

    closeDonationModal() {
      if (this.donationModal) {
        this.donationModal.classList.remove('active');
        this.donationModal.classList.remove('open');
        this.donationModal.setAttribute('aria-hidden', 'true');
      }
    }

    /* ------------------------------------------------------------------------
       Creator Authentication & Decoy Methods
       ------------------------------------------------------------------------ */

    openAuthModal() {
      if (this.authModal) {
        if (this.authPasswordInput) {
          this.authPasswordInput.value = '';
          this.authPasswordInput.type = 'password';
        }
        if (this.toggleAuthPassBtn) {
          const icon = this.toggleAuthPassBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-eye';
        }
        this.authModal.classList.add('active');
        this.authModal.classList.add('open');
        this.authModal.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
          if (this.authPasswordInput) this.authPasswordInput.focus();
        }, 150);
      }
    }

    closeAuthModal() {
      if (this.authModal) {
        this.authModal.classList.remove('active');
        this.authModal.classList.remove('open');
        this.authModal.setAttribute('aria-hidden', 'true');
      }
    }

    /* ------------------------------------------------------------------------
       Comment Author Dynamic UI for Authenticated Roles
       ------------------------------------------------------------------------ */

    updateCommentAuthorUI() {
      const authorGroup = document.getElementById('commentAuthorGroup');
      const authBadgeGroup = document.getElementById('commentAuthBadgeGroup');
      const authCard = document.getElementById('authCommenterCard');

      if (this.adminRole === 'creator') {
        if (this.commentAuthor) {
          this.commentAuthor.value = 'Josue';
          this.commentAuthor.required = false;
        }
        if (authorGroup) authorGroup.style.display = 'none';
        if (authBadgeGroup) authBadgeGroup.style.display = 'block';
        if (authCard) {
          authCard.innerHTML = `
            <div class="auth-commenter-badge creator-auth-badge">
              <div class="auth-badge-avatar creator-avatar"><i class="fa-solid fa-crown"></i></div>
              <div class="auth-badge-text">
                <span class="auth-badge-name">Josue</span>
                <span class="auth-badge-role"><i class="fa-solid fa-shield-halved"></i> Desarrollador Oficial</span>
              </div>
              <button type="button" class="btn-logout-role" id="btnLogoutRole" title="Cerrar sesión de desarrollador">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          `;
          const logoutBtn = authCard.querySelector('#btnLogoutRole');
          if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
              this.logoutRole();
            });
          }
        }
      } else if (this.adminRole === 'co-creator') {
        if (this.commentAuthor) {
          this.commentAuthor.value = 'Danna';
          this.commentAuthor.required = false;
        }
        if (authorGroup) authorGroup.style.display = 'none';
        if (authBadgeGroup) authBadgeGroup.style.display = 'block';
        if (authCard) {
          authCard.innerHTML = `
            <div class="auth-commenter-badge cocreator-auth-badge">
              <div class="auth-badge-avatar cocreator-avatar"><i class="fa-solid fa-crown"></i></div>
              <div class="auth-badge-text">
                <span class="auth-badge-name">Danna</span>
                <span class="auth-badge-role"><i class="fa-solid fa-crown"></i> Creadora Oficial</span>
              </div>
              <button type="button" class="btn-logout-role" id="btnLogoutRole" title="Cerrar sesión de creadora">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          `;
          const logoutBtn = authCard.querySelector('#btnLogoutRole');
          if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
              this.logoutRole();
            });
          }
        }
      } else {
        if (this.commentAuthor) {
          if (this.commentAuthor.value === 'Josue' || this.commentAuthor.value === 'Danna') {
            this.commentAuthor.value = '';
          }
          this.commentAuthor.required = true;
        }
        if (authorGroup) authorGroup.style.display = 'block';
        if (authBadgeGroup) authBadgeGroup.style.display = 'none';
        if (authCard) authCard.innerHTML = '';
      }
    }

    logoutRole() {
      this.sound.playPop();
      this.adminRole = 'none';
      localStorage.removeItem(STORAGE_KEYS.ADMIN_ROLE);
      this.updateCommentAuthorUI();
      this.renderComments();
      this.showToast('Sesión cerrada', 'info');
    }

    handleAuthSubmit() {
      const pass = this.authPasswordInput ? this.authPasswordInput.value.trim() : '';

      if (pass === '385178Hbr') {
        // DESARROLLADOR PRINCIPAL (Josue)
        this.sound.playSuccess();
        this.adminRole = 'creator';
        localStorage.setItem(STORAGE_KEYS.ADMIN_ROLE, 'creator');
        this.closeAuthModal();
        this.updateCommentAuthorUI();
        this.showToast('👑 ¡Modo Desarrollador activado! Publicando como Josue', 'success');
        this.renderComments();
      } else if (pass === '160409dn') {
        // CREADORA OFICIAL (Danna)
        this.sound.playSuccess();
        this.adminRole = 'co-creator';
        localStorage.setItem(STORAGE_KEYS.ADMIN_ROLE, 'co-creator');
        this.closeAuthModal();
        this.updateCommentAuthorUI();
        this.showToast('👑 ¡Modo Creadora activado! Publicando como Danna', 'success');
        this.renderComments();
      } else if (pass === '12345') {
        // TRAMPA / DESPISTE (Muestra mensaje falso de éxito, pero NO asigna distintivos)
        this.sound.playPop();
        this.adminRole = 'none';
        localStorage.removeItem(STORAGE_KEYS.ADMIN_ROLE);
        this.closeAuthModal();
        this.updateCommentAuthorUI();
        this.showToast('¡Modo Creador activado!', 'success');
        this.renderComments();
      } else {
        // Contraseña incorrecta
        this.sound.playPop();
        this.showToast('Contraseña incorrecta', 'error');
      }
    }

    /* ------------------------------------------------------------------------
       Community Comments Logic (Firebase Realtime + Profanity Filter)
       ------------------------------------------------------------------------ */

    async handleCommentSubmit() {
      let author = this.commentAuthor ? this.commentAuthor.value.trim() : '';
      const houseRef = this.commentHouseRef ? this.commentHouseRef.value : 'General';
      const text = this.commentText ? this.commentText.value.trim() : '';

      if (this.adminRole === 'creator') {
        author = 'Josue';
      } else if (this.adminRole === 'co-creator') {
        author = 'Danna';
      }

      if (!author || !text) {
        this.showToast('Por favor completa todos los campos requeridos', 'error');
        return;
      }

      // Anti-Profanity & Leetspeak Check for Author Name
      if (this.adminRole === 'none' && this.profanityFilter.isProfane(author)) {
        this.sound.playPop();
        if (this.commentAuthor) {
          this.commentAuthor.classList.add('input-error-shake');
          setTimeout(() => {
            if (this.commentAuthor) this.commentAuthor.classList.remove('input-error-shake');
          }, 650);
          this.commentAuthor.focus();
        }
        this.showToast('⚠️ Tu nombre de usuario contiene lenguaje no permitido o inapropiado.', 'error');
        return;
      }

      // Anti-Profanity & Leetspeak Check for Comment Text
      if (this.profanityFilter.isProfane(text)) {
        this.sound.playPop();
        if (this.commentText) {
          this.commentText.classList.add('input-error-shake');
          setTimeout(() => {
            if (this.commentText) this.commentText.classList.remove('input-error-shake');
          }, 650);
          this.commentText.focus();
        }
        this.showToast('⚠️ Tu comentario contiene palabras inapropiadas o lenguaje no permitido.', 'error');
        return;
      }

      const submitBtn = document.getElementById('submitCommentBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Publicando...';
      }

      const assignedRole = this.adminRole !== 'none' ? this.adminRole : (author.toLowerCase() === 'josue' || author.toLowerCase() === 'loanrey17' ? 'creator' : (author.toLowerCase() === 'danna' ? 'co-creator' : null));

      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady) {
          await window.FirebaseCommentsBridge.addComment({
            author,
            text,
            houseRef,
            role: assignedRole
          });
        } else {
          // Local fallback if offline
          const newComment = {
            id: 'comm-' + Date.now(),
            author: author,
            houseRef: houseRef,
            text: text,
            date: 'Hace unos momentos',
            likes: 0,
            likedByUser: false,
            role: assignedRole,
            timestamp: Date.now()
          };
          this.comments.unshift(newComment);
          this.saveComments();
          this.renderComments();
        }

        this.sound.playSuccess();
        if (this.commentText) this.commentText.value = '';
        if (this.charCounter) this.charCounter.textContent = '0 / 500';
        this.showToast('¡Comentario publicado en tiempo real! 🎉', 'success');
      } catch (err) {
        console.error('Error enviando comentario a Firebase:', err);
        this.sound.playPop();
        this.showToast('Ocurrió un error al enviar el comentario a Firebase.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Publicar Comentario';
        }
      }
    }

    renderComments() {
      if (!this.commentsList) return;

      if (this.commentsCount) {
        this.commentsCount.textContent = this.comments.length;
      }

      if (this.comments.length === 0) {
        this.commentsList.innerHTML = `
          <div class="empty-comments-box">
            <i class="fa-regular fa-comment-dots"></i>
            <p>Sé el primero en dejar un comentario o sugerencia de construcción.</p>
          </div>
        `;
        return;
      }

      this.commentsList.innerHTML = this.comments
        .map((comm) => {
          const isCreator = comm.role === 'creator' || comm.isCreator || (comm.author && (comm.author.toLowerCase() === 'josue' || comm.author.toLowerCase() === 'loanrey17'));
          const isCoCreator = comm.role === 'co-creator' || (comm.author && comm.author.toLowerCase() === 'danna');
          const isAdminUser = this.adminRole === 'creator' || this.adminRole === 'co-creator';

          let cardClass = 'comment-card animate-slide-in';
          let avatarClass = 'comment-avatar';
          let avatarContent = comm.author ? comm.author.charAt(0).toUpperCase() : 'M';
          let roleBadge = '';

          if (isCreator) {
            cardClass += ' gold-verified-card';
            avatarClass += ' creator-golden-avatar';
            avatarContent = '<i class="fa-solid fa-crown"></i>';
            roleBadge = '<span class="creator-crown-pill"><i class="fa-solid fa-crown"></i> Desarrollador</span>';
          } else if (isCoCreator) {
            cardClass += ' neon-pink-verified-card';
            avatarClass += ' co-creator-pink-avatar';
            avatarContent = '<i class="fa-solid fa-crown"></i>';
            roleBadge = '<span class="co-creator-pink-pill"><i class="fa-solid fa-crown"></i> Creadora</span>';
          }

          // Trash button only for authenticated Administrators
          const trashBtn = isAdminUser
            ? `<button class="btn-comment-trash" data-comment-action="delete" data-id="${comm.id}" title="Eliminar comentario (Solo Administrador)" aria-label="Eliminar comentario">
                <i class="fa-solid fa-trash-can"></i>
               </button>`
            : '';

          return `
          <article class="${cardClass}" data-comment-id="${comm.id}">
            <div class="${avatarClass}">${avatarContent}</div>
            <div class="comment-content">
              <div class="comment-header-row">
                <div class="comment-author-info">
                  <span class="comment-author-name">${this.escapeHTML(comm.author)}</span>
                  ${roleBadge}
                  <span class="comment-ref-badge"><i class="fa-solid fa-cube"></i> ${this.escapeHTML(comm.houseRef || 'General')}</span>
                </div>
                <span class="comment-date"><i class="fa-regular fa-clock"></i> ${comm.date || 'Hace unos momentos'}</span>
              </div>
              <p class="comment-text-body">${this.escapeHTML(comm.text)}</p>
              <div class="comment-actions">
                <button class="btn-comment-like ${comm.likedByUser ? 'liked' : ''}" data-comment-action="like" data-id="${comm.id}" title="${comm.likedByUser ? 'Quitar me gusta' : 'Dar me gusta'}">
                  <i class="${comm.likedByUser ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                  <span>${comm.likes || 0}</span>
                </button>
                ${trashBtn}
              </div>
            </div>
          </article>
        `;
        })
        .join('');

      this.attachCommentEventListeners();
    }

    attachCommentEventListeners() {
      // Like buttons
      const likeBtns = this.commentsList.querySelectorAll('[data-comment-action="like"]');
      likeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const commId = btn.getAttribute('data-id');
          this.toggleCommentLike(commId);
        });
      });

      // Admin delete buttons
      const deleteBtns = this.commentsList.querySelectorAll('[data-comment-action="delete"]');
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const commId = btn.getAttribute('data-id');
          this.deleteComment(commId);
        });
      });
    }

    async deleteComment(commId) {
      if (this.adminRole !== 'creator' && this.adminRole !== 'co-creator') {
        this.showToast('No tienes permisos de administrador', 'error');
        return;
      }

      const commentIndex = this.comments.findIndex((c) => c.id === commId);
      const authorName = commentIndex !== -1 ? (this.comments[commentIndex].author || 'Usuario') : 'Comentario';

      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !commId.startsWith('comm-')) {
          await window.FirebaseCommentsBridge.deleteComment(commId);
        }
        if (commentIndex !== -1) {
          this.comments.splice(commentIndex, 1);
          this.saveComments();
          this.renderComments();
        }
        this.sound.playPop();
        this.showToast(`Comentario de "${authorName}" eliminado 🗑️`, 'info');
      } catch (err) {
        console.error('Error eliminando comentario en Firebase:', err);
        this.showToast('Error al eliminar comentario de Firebase', 'error');
      }
    }

    async toggleCommentLike(commId) {
      const comment = this.comments.find((c) => c.id === commId);
      if (!comment) return;

      this.sound.playHeart();
      const alreadyLiked = this.userCommentLikes.includes(commId);
      let delta = 1;

      if (alreadyLiked) {
        this.userCommentLikes = this.userCommentLikes.filter((id) => id !== commId);
        comment.likes = Math.max(0, (comment.likes || 0) - 1);
        comment.likedByUser = false;
        delta = -1;
      } else {
        this.userCommentLikes.push(commId);
        comment.likes = (comment.likes || 0) + 1;
        comment.likedByUser = true;
        delta = 1;
      }

      this.saveUserCommentLikes();
      this.renderComments();

      if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !commId.startsWith('comm-')) {
        try {
          await window.FirebaseCommentsBridge.toggleLike(commId, delta);
        } catch (err) {
          console.warn('Error actualizando like en Firebase:', err);
        }
      }
    }

    /* ------------------------------------------------------------------------
       Toast Notification System
       ------------------------------------------------------------------------ */

    showToast(message, type = 'success') {
      if (!this.toastContainer) return;

      const toast = document.createElement('div');
      toast.className = `toast-item toast-${type}`;

      let icon = '<i class="fa-solid fa-circle-check"></i>';
      if (type === 'error') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
      if (type === 'info') icon = '<i class="fa-solid fa-circle-info"></i>';

      toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-msg">${message}</div>
      `;

      this.toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 20);

      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 300);
      }, 3200);
    }

    escapeHTML(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  /* ==========================================================================
     5. BOOTSTRAP APPLICATION
     ========================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    window.minecraftApp = new MinecraftGalleryApp();
  });
})();
