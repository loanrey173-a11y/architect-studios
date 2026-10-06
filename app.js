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
    COMMENTS: 'mc_comments_v15',
    DELETED_COMMENTS: 'mc_deleted_comments_v15',
    USER_COMMENT_LIKES: 'mc_user_comm_likes_v15',
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
      creator: 'dann_yaz1',
      creatorDisplay: 'dann_yaz1',
      creatorRole: 'Instagram',
      instagram: {
        name: 'dann_yaz1',
        url: 'https://www.instagram.com/dann_yaz1/?hl=es'
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
      creator: 'dann_yaz1',
      creatorDisplay: 'dann_yaz1',
      creatorRole: 'Instagram',
      instagram: {
        name: 'dann_yaz1',
        url: 'https://www.instagram.com/dann_yaz1/?hl=es'
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
      creator: 'dann_yaz1',
      creatorDisplay: 'dann_yaz1',
      creatorRole: 'Instagram',
      instagram: {
        name: 'dann_yaz1',
        url: 'https://www.instagram.com/dann_yaz1/?hl=es'
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
      creator: 'dann_yaz1',
      creatorDisplay: 'dann_yaz1',
      creatorRole: 'Instagram',
      instagram: {
        name: 'dann_yaz1',
        url: 'https://www.instagram.com/dann_yaz1/?hl=es'
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
      creator: 'loanrey17',
      creatorDisplay: 'loanrey17',
      creatorRole: 'Desarrollador',
      instagram: {
        name: 'loanrey17',
        url: 'https://www.instagram.com/loanrey17'
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
      creator: 'loanrey17',
      creatorDisplay: 'loanrey17',
      creatorRole: 'Desarrollador',
      instagram: {
        name: 'loanrey17',
        url: 'https://www.instagram.com/loanrey17'
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

  const INITIAL_COMMENTS = [];

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
      if (this.adminRole === 'co-creator') {
        this.adminRole = 'none';
        localStorage.removeItem(STORAGE_KEYS.ADMIN_ROLE);
      }
      this.currentUser = null;
      this.pendingAuthUser = null;
      this.firebaseUnsubscribe = null;
      this.firebaseLikesUnsubscribe = null;
      this.isFirebaseConnected = false;
      
      this.expandedThreads = new Set();
      this.activeReplyParentId = null;
      this.activeReplyTargetAuthor = null;
      
      this.currentCategory = 'all';
      this.currentSearch = '';
      this.currentSort = 'newest';
      this.currentView = 'grid';
      this.activeModalHouse = null;
      this.currentModalImgIndex = 0;

      // Zoom & stage state
      this.zoomLevel = 1.0;
      this.gridActive = false;
      this.imageObserver = null;

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

      // Preloader dismiss trigger once DOM and initial app state is rendered
      if (typeof window.hidePagePreloader === 'function') {
        setTimeout(() => window.hidePagePreloader(), 250);
      }
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
        const deleted = this.loadDeletedComments();
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed.filter((c) => !deleted.includes(c.id));
          }
        }
      } catch (e) {
        console.warn('Error reading stored comments:', e);
      }
      return [];
    }

    saveComments() {
      try {
        localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(this.comments));
      } catch (e) {
        console.warn('Error saving comments:', e);
      }
    }

    loadDeletedComments() {
      try {
        const saved = localStorage.getItem(STORAGE_KEYS.DELETED_COMMENTS);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveDeletedComment(commId) {
      try {
        const deleted = this.loadDeletedComments();
        if (!deleted.includes(commId)) {
          deleted.push(commId);
          localStorage.setItem(STORAGE_KEYS.DELETED_COMMENTS, JSON.stringify(deleted));
        }
      } catch (e) {
        // Ignore
      }
    }

    loadFavorites() {
      try {
        if (this.currentUser && this.currentUser.email) {
          const userKey = 'minecraft_favs_' + this.currentUser.email.toLowerCase().trim();
          const userSaved = localStorage.getItem(userKey);
          if (userSaved) return JSON.parse(userSaved);
        }
        const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveFavorites() {
      try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(this.userFavorites));
        if (this.currentUser && this.currentUser.email) {
          const userKey = 'minecraft_favs_' + this.currentUser.email.toLowerCase().trim();
          localStorage.setItem(userKey, JSON.stringify(this.userFavorites));
        }
        if (this.currentUser && this.currentUser.uid && window.FirebaseCommentsBridge && typeof window.FirebaseCommentsBridge.saveUserFavorites === 'function') {
          window.FirebaseCommentsBridge.saveUserFavorites(this.currentUser.uid, this.userFavorites);
        }
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
              const author = data.author || data.autor || 'Anónimo';
              const text = data.text || data.texto || '';
              const houseRef = data.houseRef || 'General';
              const isDev = this.isDeveloperAccount({ author, email, role: data.role });
              const spec = data.especialidad || data.titulo || (data.role === 'engineer' ? 'Ingeniero' : (isDev ? 'Desarrollador' : 'Arquitecto'));
              const role = isDev ? 'creator' : (spec.toLowerCase().includes('ingenier') ? 'engineer' : 'architect');
              const likes = typeof data.likes === 'number' ? data.likes : 0;
              const likedByUser = this.userCommentLikes.includes(doc.id);
              const date = this.formatCommentDate(data.fecha || data.createdAtMs);
              const timestamp = (data.fecha && data.fecha.seconds) ? data.fecha.seconds * 1000 : (data.createdAtMs || (data.timestamp || Date.now()));
              const uid = data.uid || null;
              const email = data.email || null;
              const userPhoto = data.userPhoto || null;

              // If legacy mock comment was in Firestore, delete it from Firestore
              if (doc.id === 'comm-1' || doc.id === 'comm-2' || (author && (author.toLowerCase().includes('alex_builder') || author.toLowerCase().includes('craftmaster')))) {
                if (window.FirebaseCommentsBridge && typeof window.FirebaseCommentsBridge.deleteComment === 'function') {
                  window.FirebaseCommentsBridge.deleteComment(doc.id).catch(() => {});
                }
                return;
              }

              const rawReplies = Array.isArray(data.replies) ? data.replies : [];
              const replies = rawReplies
                .filter((r) => r.id !== 'rep-1-1')
                .map((r) => {
                  const rAuthor = r.author || r.autor || 'Anónimo';
                  const isRDev = this.isDeveloperAccount({ author: rAuthor, email: r.email, role: r.role });
                  const rSpec = r.especialidad || r.titulo || (r.role === 'engineer' ? 'Ingeniero' : (isRDev ? 'Desarrollador' : 'Arquitecto'));
                  const rRole = isRDev ? 'creator' : (rSpec.toLowerCase().includes('ingenier') ? 'engineer' : 'architect');
                  const rId = r.id || ('rep-' + Math.random().toString(36).substr(2, 9));
                  return {
                    id: rId,
                    author: rAuthor,
                    uid: r.uid || null,
                    email: r.email || null,
                    userPhoto: r.userPhoto || null,
                    text: r.text || r.texto || '',
                    replyTo: r.replyTo || null,
                    role: rRole,
                    especialidad: rSpec,
                    likes: typeof r.likes === 'number' ? r.likes : 0,
                    likedByUser: this.userCommentLikes.includes(rId),
                    date: this.formatCommentDate(r.fecha || r.createdAtMs || r.timestamp),
                    timestamp: (r.fecha && r.fecha.seconds) ? r.fecha.seconds * 1000 : (r.createdAtMs || (r.timestamp || Date.now()))
                  };
                });

              loaded.push({
                id: doc.id,
                author,
                uid,
                email,
                userPhoto,
                text,
                houseRef,
                role,
                especialidad: spec,
                likes,
                likedByUser,
                date,
                timestamp,
                replies
              });
            });

            const deletedIds = this.loadDeletedComments();
            const commentMap = new Map();

            // A. Insert all Firestore comments (not marked as deleted)
            loaded.forEach((comm) => {
              if (!deletedIds.includes(comm.id)) {
                commentMap.set(comm.id, comm);
              }
            });

            // B. Preserve any local in-memory comments that haven't been deleted
            this.comments.forEach((comm) => {
              if (!commentMap.has(comm.id) && !deletedIds.includes(comm.id)) {
                commentMap.set(comm.id, comm);
              }
            });

            // C. Convert back to array sorted newest first
            this.comments = Array.from(commentMap.values()).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
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

        // 3. Firebase Auth State Listener & User Profile Loader
        if (typeof window.FirebaseCommentsBridge.onAuthStateChanged === 'function') {
          window.FirebaseCommentsBridge.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
              try {
                const profile = await window.FirebaseCommentsBridge.getUserProfile(firebaseUser.uid);
                if (profile && profile.username) {
                  this.currentUser = profile;
                  this.pendingAuthUser = null;

                  // Cargar y sincronizar favoritos del usuario desde Firestore y LocalStorage
                  this.userFavorites = this.loadFavorites();
                  if (typeof window.FirebaseCommentsBridge.getUserFavorites === 'function') {
                    const remoteFavs = await window.FirebaseCommentsBridge.getUserFavorites(firebaseUser.uid);
                    if (Array.isArray(remoteFavs) && remoteFavs.length > 0) {
                      const merged = Array.from(new Set([...this.userFavorites, ...remoteFavs]));
                      this.userFavorites = merged;
                    }
                  }
                  this.saveFavorites();

                  this.updateAuthUI();
                  this.renderProfileModal();
                  this.render();
                  this.renderComments();
                } else {
                  // User signed in with Google for first time: show Gamertag registration modal!
                  this.currentUser = null;
                  this.pendingAuthUser = firebaseUser;
                  this.updateAuthUI();
                  this.openGamertagModal(firebaseUser);
                }
              } catch (err) {
                console.warn('Error fetching user profile from Firestore:', err);
              }
            } else {
              this.currentUser = null;
              this.pendingAuthUser = null;
              this.userFavorites = this.loadFavorites();
              this.updateAuthUI();
              this.renderProfileModal();
              this.render();
              this.renderComments();
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

      // Comments Section & Google Auth
      this.commentsSection = document.getElementById('commentsSection');
      this.commentAuthWrapper = document.getElementById('commentAuthWrapper');
      this.commentAuthPrompt = document.getElementById('commentAuthPrompt');
      this.commentGoogleSignInBtn = document.getElementById('commentGoogleSignInBtn');
      this.commentForm = document.getElementById('commentForm');
      this.commentAuthUserBar = document.getElementById('commentAuthUserBar');
      this.commentUserAvatarImg = document.getElementById('commentUserAvatarImg');
      this.commentUserAvatarFallback = document.getElementById('commentUserAvatarFallback');
      this.commentUserGamertag = document.getElementById('commentUserGamertag');
      this.commentDevCrownPill = document.getElementById('commentDevCrownPill');
      this.commentArchitectPill = document.getElementById('commentArchitectPill');
      this.commentEngineerPill = document.getElementById('commentEngineerPill');
      this.commentUserEmail = document.getElementById('commentUserEmail');
      this.commentSignOutBtn = document.getElementById('commentSignOutBtn');
      this.commentHouseRef = document.getElementById('commentHouseRef');
      this.commentText = document.getElementById('commentText');
      this.charCounter = document.getElementById('charCounter');
      this.commentsList = document.getElementById('commentsList');
      this.commentsCount = document.getElementById('commentsCount');

      // Gamertag Modal Elements
      this.gamertagModal = document.getElementById('gamertagModal');
      this.closeGamertagModalBtn = document.getElementById('closeGamertagModalBtn');
      this.cancelGamertagBtn = document.getElementById('cancelGamertagBtn');
      this.gamertagForm = document.getElementById('gamertagForm');
      this.gamertagInput = document.getElementById('gamertagInput');
      this.gamertagGoogleAvatar = document.getElementById('gamertagGoogleAvatar');
      this.gamertagAvatarFallback = document.getElementById('gamertagAvatarFallback');
      this.gamertagGoogleName = document.getElementById('gamertagGoogleName');
      this.gamertagGoogleEmail = document.getElementById('gamertagGoogleEmail');
      this.gamertagFeedback = document.getElementById('gamertagFeedback');
      this.saveGamertagBtn = document.getElementById('saveGamertagBtn');
      this.gamertagCharCounter = document.getElementById('gamertagCharCounter');

      // Detail Modal
      this.detailModal = document.getElementById('detailModal');
      this.closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
      this.stageImageContainer = document.getElementById('stageImageContainer');
      this.detailModalImg = document.getElementById('detailModalImg');
      this.modalPrevImgBtn = document.getElementById('modalPrevImgBtn');
      this.modalNextImgBtn = document.getElementById('modalNextImgBtn');
      this.modalImgCounter = document.getElementById('modalImgCounter');
      this.modalFloatingPrevBtn = document.getElementById('modalFloatingPrevBtn');
      this.modalFloatingNextBtn = document.getElementById('modalFloatingNextBtn');
      this.modalFloatingImgCounter = document.getElementById('modalFloatingImgCounter');
      this.stageThumbnailsContainer = document.getElementById('stageThumbnailsContainer');
      this.blueprintGridOverlay = document.getElementById('blueprintGridOverlay');
      this.zoomInBtn = document.getElementById('zoomInBtn');
      this.zoomOutBtn = document.getElementById('zoomOutBtn');
      this.zoomResetBtn = document.getElementById('zoomResetBtn');
      this.toggleBlueprintGridBtn = document.getElementById('toggleBlueprintGridBtn');
      this.fullscreenImgBtn = document.getElementById('fullscreenImgBtn');
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
      this.detailFavBtn = document.getElementById('detailFavBtn');
      this.detailFavText = document.getElementById('detailFavText');
      this.detailShareBtn = document.getElementById('detailShareBtn');
      this.detailCreatorName = document.getElementById('detailCreatorName');

      // Footer Stats
      this.totalLikesCount = document.getElementById('totalLikesCount');
      this.totalBuildsCount = document.getElementById('totalBuildsCount');

      // Tutorials Notice Modal & Drawer Button
      this.drawerTutorialsBtn = document.getElementById('drawerTutorialsBtn');
      this.tutorialsNoticeModal = document.getElementById('tutorialsNoticeModal');
      this.closeTutorialsModalBtn = document.getElementById('closeTutorialsModalBtn');
      this.tutorialsModalOkBtn = document.getElementById('tutorialsModalOkBtn');

      // User Profile & Favorites Modal Elements
      this.drawerProfileBtn = document.getElementById('drawerProfileBtn');
      this.profileModal = document.getElementById('profileModal');
      this.closeProfileModalBtn = document.getElementById('closeProfileModalBtn');
      this.profileGuestView = document.getElementById('profileGuestView');
      this.profileGoogleLoginBtn = document.getElementById('profileGoogleLoginBtn');
      this.profileUserView = document.getElementById('profileUserView');
      this.profileUserAvatarImg = document.getElementById('profileUserAvatarImg');
      this.profileUserAvatarFallback = document.getElementById('profileUserAvatarFallback');
      this.profileGamertag = document.getElementById('profileGamertag');
      this.profileRoleBadgeSlot = document.getElementById('profileRoleBadgeSlot');
      this.profileUserEmail = document.getElementById('profileUserEmail');
      this.profileFavCount = document.getElementById('profileFavCount');
      this.profileFavsPill = document.getElementById('profileFavsPill');
      this.profileFavoritesGrid = document.getElementById('profileFavoritesGrid');
      this.profileLogoutBtn = document.getElementById('profileLogoutBtn');
      this.deleteAccountBtn = document.getElementById('deleteAccountBtn');
      this.deleteAccountConfirmModal = document.getElementById('deleteAccountConfirmModal');
      this.cancelDeleteAccountBtn = document.getElementById('cancelDeleteAccountBtn');
      this.confirmDeleteAccountBtn = document.getElementById('confirmDeleteAccountBtn');

      // Auth Decoy Modal
      this.logoGroup = document.querySelector('.logo-group');
      this.authModal = document.getElementById('authModal');
      this.closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
      this.authDecoyForm = document.getElementById('authDecoyForm');
      this.authPasswordInput = document.getElementById('authPasswordInput');
      this.toggleAuthPassBtn = document.getElementById('toggleAuthPassBtn');

      // Submit Idea / Postulaciones Modal
      this.openSubmitIdeaBtn = document.getElementById('openSubmitIdeaBtn');
      this.drawerSubmitIdeaBtn = document.getElementById('drawerSubmitIdeaBtn');
      this.commentsSectionSubmitIdeaBtn = document.getElementById('commentsSectionSubmitIdeaBtn');
      this.submitIdeaModal = document.getElementById('submitIdeaModal');
      this.closeSubmitIdeaModalBtn = document.getElementById('closeSubmitIdeaModalBtn');
      this.cancelSubmitIdeaBtn = document.getElementById('cancelSubmitIdeaBtn');
      this.submitIdeaForm = document.getElementById('submitIdeaForm');
      this.sendIdeaBtn = document.getElementById('sendIdeaBtn');
      this.ideaTitle = document.getElementById('ideaTitle');
      this.ideaCreator = document.getElementById('ideaCreator');
      this.ideaInstagram = document.getElementById('ideaInstagram');
      this.ideaCategory = document.getElementById('ideaCategory');
      this.ideaVersion = document.getElementById('ideaVersion');
      this.ideaShaders = document.getElementById('ideaShaders');
      this.ideaImageLink = document.getElementById('ideaImageLink');
      this.ideaDescription = document.getElementById('ideaDescription');
      this.ideaCharCounter = document.getElementById('ideaCharCounter');
      this.openHowToIgModalBtn = document.getElementById('openHowToIgModalBtn');
      this.howToInstagramModal = document.getElementById('howToInstagramModal');
      this.closeHowToIgModalBtn = document.getElementById('closeHowToIgModalBtn');
      this.gotItHowToIgBtn = document.getElementById('gotItHowToIgBtn');
      this.submitIdeaSuccessView = document.getElementById('submitIdeaSuccessView');
      this.copyIdeaMessageBtn = document.getElementById('copyIdeaMessageBtn');
      this.ideaMessagePreviewText = document.getElementById('ideaMessagePreviewText');
      this.finishSubmitIdeaBtn = document.getElementById('finishSubmitIdeaBtn');

      // Quejas o Sugerencias Elements
      this.tabBtnBuild = document.getElementById('tabBtnBuild');
      this.tabBtnFeedback = document.getElementById('tabBtnFeedback');
      this.paneSubmitBuild = document.getElementById('paneSubmitBuild');
      this.paneSubmitFeedback = document.getElementById('paneSubmitFeedback');
      this.feedbackForm = document.getElementById('feedbackForm');
      this.feedbackType = document.getElementById('feedbackType');
      this.feedbackName = document.getElementById('feedbackName');
      this.feedbackInstagram = document.getElementById('feedbackInstagram');
      this.feedbackSubject = document.getElementById('feedbackSubject');
      this.feedbackMessage = document.getElementById('feedbackMessage');
      this.feedbackCharCounter = document.getElementById('feedbackCharCounter');
      this.cancelFeedbackBtn = document.getElementById('cancelFeedbackBtn');
      this.sendFeedbackBtn = document.getElementById('sendFeedbackBtn');
      this.feedbackSuccessView = document.getElementById('feedbackSuccessView');
      this.copyFeedbackMessageBtn = document.getElementById('copyFeedbackMessageBtn');
      this.feedbackMessagePreviewText = document.getElementById('feedbackMessagePreviewText');
      this.finishFeedbackBtn = document.getElementById('finishFeedbackBtn');

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
        this.drawerBackdrop.addEventListener('touchmove', (e) => {
          e.preventDefault();
        }, { passive: false });
      }

      if (this.sideDrawer) {
        this.sideDrawer.addEventListener('touchmove', (e) => {
          e.stopPropagation();
        }, { passive: true });
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
              if (this.commentText) this.commentText.focus();
            }, 600);
          }
        });
      }



      // Profile Drawer Button & Modal Listeners
      if (this.drawerProfileBtn) {
        this.drawerProfileBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDrawer();
          this.openProfileModal();
        });
      }

      if (this.closeProfileModalBtn) {
        this.closeProfileModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeProfileModal();
        });
      }

      if (this.profileGoogleLoginBtn) {
        this.profileGoogleLoginBtn.addEventListener('click', () => {
          this.handleGoogleSignIn();
        });
      }

      if (this.profileLogoutBtn) {
        this.profileLogoutBtn.addEventListener('click', () => {
          this.handleGoogleSignOut();
          this.renderProfileModal();
        });
      }

      if (this.deleteAccountBtn) {
        this.deleteAccountBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.openDeleteAccountModal();
        });
      }

      if (this.cancelDeleteAccountBtn) {
        this.cancelDeleteAccountBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDeleteAccountModal();
        });
      }

      if (this.confirmDeleteAccountBtn) {
        this.confirmDeleteAccountBtn.addEventListener('click', () => {
          this.handleDeleteAccount();
        });
      }

      if (this.profileModal) {
        this.profileModal.addEventListener('click', (e) => {
          if (e.target === this.profileModal) {
            this.sound.playPop();
            this.closeProfileModal();
          }
        });
      }

      if (this.deleteAccountConfirmModal) {
        this.deleteAccountConfirmModal.addEventListener('click', (e) => {
          if (e.target === this.deleteAccountConfirmModal) {
            this.sound.playPop();
            this.closeDeleteAccountModal();
          }
        });
      }

      // Tutorials Button & Modal Listeners
      if (this.drawerTutorialsBtn) {
        this.drawerTutorialsBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeDrawer();
          this.openTutorialsModal();
        });
      }

      if (this.closeTutorialsModalBtn) {
        this.closeTutorialsModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeTutorialsModal();
        });
      }

      if (this.tutorialsModalOkBtn) {
        this.tutorialsModalOkBtn.addEventListener('click', () => {
          this.sound.playSuccess();
          this.closeTutorialsModal();
        });
      }

      if (this.tutorialsNoticeModal) {
        this.tutorialsNoticeModal.addEventListener('click', (e) => {
          if (e.target === this.tutorialsNoticeModal) {
            this.sound.playPop();
            this.closeTutorialsModal();
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

      // Submit Idea Button & Modal Listeners
      const openSubmitIdeaHandlers = [this.openSubmitIdeaBtn, this.drawerSubmitIdeaBtn, this.commentsSectionSubmitIdeaBtn];
      openSubmitIdeaHandlers.forEach((btn) => {
        if (btn) {
          btn.addEventListener('click', () => {
            this.sound.playPop();
            this.openSubmitIdeaModal();
          });
        }
      });

      if (this.closeSubmitIdeaModalBtn) {
        this.closeSubmitIdeaModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeSubmitIdeaModal();
        });
      }

      if (this.cancelSubmitIdeaBtn) {
        this.cancelSubmitIdeaBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeSubmitIdeaModal();
        });
      }

      if (this.finishSubmitIdeaBtn) {
        this.finishSubmitIdeaBtn.addEventListener('click', () => {
          this.sound.playSuccess();
          this.closeSubmitIdeaModal();
        });
      }

      if (this.submitIdeaModal) {
        this.submitIdeaModal.addEventListener('click', (e) => {
          if (e.target === this.submitIdeaModal) {
            this.sound.playPop();
            this.closeSubmitIdeaModal();
          }
        });
      }

      if (this.ideaDescription && this.ideaCharCounter) {
        this.ideaDescription.addEventListener('input', (e) => {
          const len = e.target.value.length;
          this.ideaCharCounter.textContent = `${len} / 800`;
        });
      }

      if (this.submitIdeaForm) {
        this.submitIdeaForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSubmitIdeaForm();
        });
      }

      if (this.copyIdeaMessageBtn && this.ideaMessagePreviewText) {
        this.copyIdeaMessageBtn.addEventListener('click', () => {
          const textToCopy = this.ideaMessagePreviewText.textContent;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(() => {
              this.sound.playPop();
              const origHtml = this.copyIdeaMessageBtn.innerHTML;
              this.copyIdeaMessageBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
              setTimeout(() => {
                this.copyIdeaMessageBtn.innerHTML = origHtml;
              }, 2000);
            });
          }
        });
      }

      // Instagram How-To Guide Modal Listeners
      if (this.openHowToIgModalBtn) {
        this.openHowToIgModalBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.sound.playPop();
          this.openHowToInstagramModal();
        });
      }

      if (this.closeHowToIgModalBtn) {
        this.closeHowToIgModalBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeHowToInstagramModal();
        });
      }

      if (this.gotItHowToIgBtn) {
        this.gotItHowToIgBtn.addEventListener('click', () => {
          this.sound.playSuccess();
          this.closeHowToInstagramModal();
          if (this.ideaInstagram) {
            this.ideaInstagram.focus();
          }
        });
      }

      if (this.howToInstagramModal) {
        this.howToInstagramModal.addEventListener('click', (e) => {
          if (e.target === this.howToInstagramModal) {
            this.sound.playPop();
            this.closeHowToInstagramModal();
          }
        });
      }

      // Tab Switching in Modal (Postular vs Quejas / Sugerencias)
      if (this.tabBtnBuild && this.tabBtnFeedback) {
        this.tabBtnBuild.addEventListener('click', () => {
          this.sound.playPop();
          this.switchSubmitModalTab('build');
        });
        this.tabBtnFeedback.addEventListener('click', () => {
          this.sound.playPop();
          this.switchSubmitModalTab('feedback');
        });
      }

      // Feedback Form Listeners
      if (this.feedbackMessage && this.feedbackCharCounter) {
        this.feedbackMessage.addEventListener('input', (e) => {
          const len = e.target.value.length;
          this.feedbackCharCounter.textContent = `${len} / 700`;
        });
      }

      if (this.feedbackForm) {
        this.feedbackForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleFeedbackSubmit();
        });
      }

      if (this.cancelFeedbackBtn) {
        this.cancelFeedbackBtn.addEventListener('click', () => {
          this.sound.playPop();
          this.closeSubmitIdeaModal();
        });
      }

      if (this.finishFeedbackBtn) {
        this.finishFeedbackBtn.addEventListener('click', () => {
          this.sound.playSuccess();
          this.closeSubmitIdeaModal();
        });
      }

      if (this.copyFeedbackMessageBtn && this.feedbackMessagePreviewText) {
        this.copyFeedbackMessageBtn.addEventListener('click', () => {
          const textToCopy = this.feedbackMessagePreviewText.textContent;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(() => {
              this.sound.playPop();
              const origHtml = this.copyFeedbackMessageBtn.innerHTML;
              this.copyFeedbackMessageBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
              setTimeout(() => {
                this.copyFeedbackMessageBtn.innerHTML = origHtml;
              }, 2000);
            });
          }
        });
      }

      // Escape key to close modals
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (this.submitIdeaModal && this.submitIdeaModal.classList.contains('open')) {
            this.closeSubmitIdeaModal();
          }
          if (this.profileModal && this.profileModal.classList.contains('open')) {
            this.closeProfileModal();
          }
          if (this.deleteAccountConfirmModal && this.deleteAccountConfirmModal.classList.contains('open')) {
            this.closeDeleteAccountModal();
          }
        }
      });

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

      // Google Sign-In button in comment section
      if (this.commentGoogleSignInBtn) {
        this.commentGoogleSignInBtn.addEventListener('click', () => {
          this.handleGoogleSignIn();
        });
      }

      // Google Sign-Out button in comment user bar
      if (this.commentSignOutBtn) {
        this.commentSignOutBtn.addEventListener('click', () => {
          this.handleGoogleSignOut();
        });
      }

      // Gamertag Registration Form & Modal Listeners
      if (this.gamertagForm) {
        this.gamertagForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleGamertagSubmit();
        });
      }

      if (this.gamertagInput && this.gamertagCharCounter) {
        this.gamertagInput.addEventListener('input', (e) => {
          const val = e.target.value;
          this.gamertagCharCounter.textContent = `${val.length}/20`;
          if (this.gamertagFeedback) {
            this.gamertagFeedback.style.display = 'none';
          }
        });
      }

      // Gamertag specialty selection options
      const specialtyCards = document.querySelectorAll('.specialty-option-card');
      specialtyCards.forEach((card) => {
        card.addEventListener('click', () => {
          this.sound.playPop();
          specialtyCards.forEach((c) => c.classList.remove('active'));
          card.classList.add('active');
          const radio = card.querySelector('input[type="radio"]');
          if (radio) radio.checked = true;
        });
      });

      if (this.closeGamertagModalBtn) {
        this.closeGamertagModalBtn.addEventListener('click', () => {
          this.closeGamertagModal();
        });
      }

      if (this.cancelGamertagBtn) {
        this.cancelGamertagBtn.addEventListener('click', () => {
          this.closeGamertagModal();
        });
      }

      if (this.gamertagModal) {
        this.gamertagModal.addEventListener('click', (e) => {
          if (e.target === this.gamertagModal) {
            this.closeGamertagModal();
          }
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
          if (this.stageImageContainer && this.stageImageContainer.classList.contains('is-fullscreen')) {
            this.toggleFullscreenImage();
            return;
          }
          this.closeModal();
          this.closeDrawer();
          this.closeAuthModal();
          this.closeTutorialsModal();
          this.closeSubmitIdeaModal();
          this.closeHowToInstagramModal();
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

      // Floating Photo Nav Arrows (Directly on Image)
      if (this.modalFloatingPrevBtn) {
        this.modalFloatingPrevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.prevModalImage();
        });
      }

      if (this.modalFloatingNextBtn) {
        this.modalFloatingNextBtn.addEventListener('click', (e) => {
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

      // Fullscreen Image Toggle
      if (this.fullscreenImgBtn) {
        this.fullscreenImgBtn.addEventListener('click', () => {
          this.toggleFullscreenImage();
        });
      }

      // Click or Double-click on Modal Image to toggle Zoom / Fullscreen
      if (this.detailModalImg) {
        this.detailModalImg.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            this.toggleFullscreenImage();
          }
        });
        this.detailModalImg.addEventListener('dblclick', (e) => {
          e.preventDefault();
          this.toggleFullscreenImage();
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

      // Modal Favorite Button
      if (this.detailFavBtn) {
        this.detailFavBtn.addEventListener('click', () => {
          if (!this.activeModalHouse) return;
          this.toggleFavorite(this.activeModalHouse.id);
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
        this.drawerBackdrop.classList.add('open');
        this.drawerBackdrop.setAttribute('aria-hidden', 'false');
      }
      document.body.classList.add('drawer-open');
      document.documentElement.classList.add('drawer-open');
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
        this.drawerBackdrop.classList.remove('open');
        this.drawerBackdrop.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('drawer-open');
      document.documentElement.classList.remove('drawer-open');
      document.body.style.overflow = '';
      if (typeof this.syncBodyModalLock === 'function') {
        this.syncBodyModalLock();
      }
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
      this.initLazyLoading();
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

      const creatorRole = house.creatorRole || 'Desarrollador';
      const creatorDisplay = house.creatorDisplay || house.creator || '';
      const isDeveloper = creatorRole === 'Desarrollador' || house.creator === 'loanrey17';
      const crownIcon = isDeveloper
        ? '<i class="fa-solid fa-crown creator-crown" style="color: var(--gold); font-size: 0.72rem; margin-right: 0.25rem;"></i>'
        : '';

      const igBannerHTML = house.instagram
        ? `
          <a href="${house.instagram.url}" target="_blank" rel="noopener noreferrer" class="card-ig-banner" data-action="instagram" title="Instagram de ${house.instagram.name}" aria-label="Abrir Instagram de ${house.instagram.name}">
            <div class="card-ig-logo-wrap">
              <img src="./instagram_logo.png" alt="Logo Instagram" class="card-ig-logo-img" onerror="window.handleImgFallback(this, 'instagram_logo')">
            </div>
            <div class="card-ig-info">
              <span class="card-ig-subtitle">${crownIcon}${creatorRole}</span>
              <span class="card-ig-handle">${creatorDisplay} <span class="card-ig-at">@${house.instagram.name}</span></span>
            </div>
            <div class="card-ig-badge-action">
              <span>Instagram</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </a>
        `
        : '';

      // SVG placeholder to prevent early downloads and ensure zero layout shift (CLS)
      const placeholderSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3C/svg%3E";

      return `
        <article class="house-card" data-house-id="${house.id}" tabindex="0" role="button" aria-label="Ver detalles de ${house.title}">
          <div class="card-image-wrap">
            <div class="card-skeleton-shimmer"></div>
            <img 
              src="${placeholderSVG}" 
              data-src="${house.image}" 
              alt="${house.title}" 
              class="card-img lazy-img" 
              loading="lazy" 
              decoding="async" 
              onload="this.classList.add('loaded'); const s = this.previousElementSibling; if (s && s.classList.contains('card-skeleton-shimmer')) s.style.opacity = '0';" 
              onerror="window.handleImgFallback(this, '${house.id}')"
            >
            <div class="card-overlay-gradient"></div>
            
            <div class="card-top-badges">
              <span class="badge-category">${catBadge}</span>
              <div class="card-badges-right">
                ${photoCountBadge}
                <span class="badge-diff ${diffBadgeClass}">${house.difficulty}</span>
              </div>
            </div>
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

    initLazyLoading() {
      if (this.imageObserver) {
        this.imageObserver.disconnect();
      }

      if (!this.cardsGrid) return;
      const lazyImages = this.cardsGrid.querySelectorAll('.lazy-img[data-src]');
      if (!lazyImages || lazyImages.length === 0) return;

      if ('IntersectionObserver' in window) {
        this.imageObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target;
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                  img.src = dataSrc;
                  img.removeAttribute('data-src');
                }
                observer.unobserve(img);
              }
            });
          },
          {
            root: null,
            rootMargin: '180px 0px', // Precarga suave 180px antes de entrar a la pantalla
            threshold: 0.01
          }
        );

        lazyImages.forEach((img) => this.imageObserver.observe(img));
      } else {
        // Fallback para navegadores antiguos sin IntersectionObserver
        lazyImages.forEach((img) => {
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
          }
        });
      }
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
      const isNowFav = idx === -1;
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
      this.updateModalFavButton(houseId, isNowFav);
      this.render();
      if (this.profileModal && this.profileModal.classList.contains('open')) {
        this.renderProfileModal();
      }
    }

    updateModalFavButton(houseId, isFav) {
      if (this.activeModalHouse && this.activeModalHouse.id === houseId && this.detailFavBtn) {
        this.detailFavBtn.classList.toggle('active', isFav);
        this.detailFavBtn.classList.toggle('favorited', isFav);
        this.detailFavBtn.title = isFav ? 'Quitar de favoritos' : 'Guardar en favoritos';
        const icon = this.detailFavBtn.querySelector('i');
        if (icon) {
          icon.className = isFav ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
        }
        if (this.detailFavText) {
          this.detailFavText.textContent = isFav ? 'En Favoritos' : 'Guardar en Favoritos';
        }
      }
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

      const isFav = this.userFavorites.includes(house.id);
      this.updateModalFavButton(house.id, isFav);

      // Populate Creator Name & Instagram
      const detailCreatorBanner = document.getElementById('detailCreatorBanner');
      if (detailCreatorBanner) {
        if (house.creator || house.creatorDisplay) {
          detailCreatorBanner.style.display = 'flex';
          const creatorRole = house.creatorRole || 'Desarrollador';
          const creatorDisplay = house.creatorDisplay || house.creator;
          const isDev = creatorRole === 'Desarrollador' || house.creator === 'loanrey17';

          if (this.detailCreatorName) {
            this.detailCreatorName.textContent = creatorDisplay;
          }

          const creatorBadgeAvatar = detailCreatorBanner.querySelector('.creator-badge-avatar');
          if (creatorBadgeAvatar) {
            creatorBadgeAvatar.innerHTML = isDev ? '<i class="fa-solid fa-crown"></i>' : '<i class="fa-solid fa-cube"></i>';
          }

          const detailCreatorIgWrap = document.getElementById('detailCreatorIgWrap');
          if (detailCreatorIgWrap) {
            if (house.instagram) {
              const devCrown = isDev ? '<i class="fa-solid fa-crown" style="color: var(--gold); font-size: 0.72rem; margin-right: 0.25rem;"></i>' : '';
              detailCreatorIgWrap.innerHTML = `
                <a href="${house.instagram.url}" target="_blank" rel="noopener noreferrer" class="detail-ig-banner-box" title="Instagram de ${house.instagram.name}" aria-label="Instagram de ${house.instagram.name}">
                  <div class="detail-ig-logo-wrap">
                    <img src="./instagram_logo.png" alt="Instagram ${house.instagram.name}" class="detail-ig-logo-img" onerror="window.handleImgFallback(this, 'instagram_logo')">
                  </div>
                  <div class="detail-ig-info-col">
                    <span class="detail-ig-role">${devCrown}${isDev ? 'Desarrollador Oficial' : (creatorRole || 'Instagram')}</span>
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
        } else {
          detailCreatorBanner.style.display = 'none';
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
        this.detailModalImg.classList.remove('loaded');
        this.detailModalImg.decoding = 'async';
        this.detailModalImg.src = activeUrl;
        this.detailModalImg.alt = activeCaption;
        this.detailModalImg.dataset.retryStep = '0';
        this.detailModalImg.onload = () => this.detailModalImg.classList.add('loaded');
        this.detailModalImg.onerror = () => window.handleImgFallback(this.detailModalImg, this.activeModalHouse.id);
      }

      // Update image counter
      if (this.modalImgCounter) {
        this.modalImgCounter.textContent = `Foto ${this.currentModalImgIndex + 1} de ${total}`;
        this.modalImgCounter.style.display = total > 1 ? 'block' : 'none';
      }
      if (this.modalFloatingImgCounter) {
        this.modalFloatingImgCounter.textContent = `${this.currentModalImgIndex + 1} / ${total}`;
        this.modalFloatingImgCounter.style.display = total > 1 ? 'inline-flex' : 'none';
      }

      // Show/hide navigation arrows
      if (this.modalPrevImgBtn) {
        this.modalPrevImgBtn.style.display = total > 1 ? 'flex' : 'none';
      }
      if (this.modalNextImgBtn) {
        this.modalNextImgBtn.style.display = total > 1 ? 'flex' : 'none';
      }
      if (this.modalFloatingPrevBtn) {
        this.modalFloatingPrevBtn.style.display = total > 1 ? 'grid' : 'none';
      }
      if (this.modalFloatingNextBtn) {
        this.modalFloatingNextBtn.style.display = total > 1 ? 'grid' : 'none';
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
      if (this.stageImageContainer) {
        this.stageImageContainer.classList.remove('is-fullscreen');
        if (this.fullscreenImgBtn) {
          const icon = this.fullscreenImgBtn.querySelector('i');
          const text = this.fullscreenImgBtn.querySelector('.tool-text');
          if (icon) icon.className = 'fa-solid fa-expand';
          if (text) text.textContent = 'Pantalla Completa';
        }
      }
      if (this.detailModal) {
        this.detailModal.classList.remove('active');
        this.detailModal.classList.remove('open');
        this.detailModal.setAttribute('aria-hidden', 'true');
      }
      this.activeModalHouse = null;
      document.body.style.overflow = '';
    }

    toggleFullscreenImage() {
      if (!this.stageImageContainer) return;
      this.sound.playPop();
      const isFull = this.stageImageContainer.classList.toggle('is-fullscreen');
      if (isFull) {
        this.showToast('Pantalla completa activada (Presiona ESC o doble clic para salir) 🔍', 'info');
      }
      if (this.fullscreenImgBtn) {
        const icon = this.fullscreenImgBtn.querySelector('i');
        const text = this.fullscreenImgBtn.querySelector('.tool-text');
        if (icon) icon.className = isFull ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
        if (text) text.textContent = isFull ? 'Salir' : 'Pantalla Completa';
      }
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
       Modal Body Scroll Lock Helper
       ------------------------------------------------------------------------ */

    syncBodyModalLock() {
      const anyActive = document.querySelector('.modal-backdrop.active, .modal-backdrop.open');
      if (anyActive) {
        document.body.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    }

    /* ------------------------------------------------------------------------
       Tutorials Notice Modal Methods
       ------------------------------------------------------------------------ */

    openTutorialsModal() {
      if (this.tutorialsNoticeModal) {
        this.tutorialsNoticeModal.classList.add('active');
        this.tutorialsNoticeModal.classList.add('open');
        this.tutorialsNoticeModal.setAttribute('aria-hidden', 'false');
        this.syncBodyModalLock();
      }
    }

    closeTutorialsModal() {
      if (this.tutorialsNoticeModal) {
        this.tutorialsNoticeModal.classList.remove('active');
        this.tutorialsNoticeModal.classList.remove('open');
        this.tutorialsNoticeModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
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
        this.syncBodyModalLock();
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
        this.syncBodyModalLock();
      }
    }

    /* ------------------------------------------------------------------------
       Google Authentication & Gamertag Methods
       ------------------------------------------------------------------------ */

    isDeveloperAccount(entity) {
      if (!entity) return false;
      const email = (entity.email || '').toString().toLowerCase().trim();
      const role = (entity.role || '').toString().toLowerCase().trim();

      // Únicamente loanrey173@gmail.com (o sesión de administrador con contraseña) es Desarrollador
      if (email === 'loanrey173@gmail.com' || email === 'loanrey173@gamil.com') {
        return true;
      }
      if (this.adminRole === 'creator' && (!entity.email || entity.email === 'loanrey173@gmail.com' || entity.email === 'loanrey173@gamil.com')) {
        return true;
      }
      if (role === 'creator' && (email === 'loanrey173@gmail.com' || email === 'loanrey173@gamil.com' || !entity.email)) {
        return true;
      }
      return false;
    }

    updateAuthUI() {
      const isAuth = !!(this.currentUser && this.currentUser.username);

      if (this.commentAuthPrompt) {
        this.commentAuthPrompt.style.display = isAuth ? 'none' : 'flex';
      }

      if (this.commentForm) {
        this.commentForm.style.display = isAuth ? 'block' : 'none';
      }

      if (isAuth) {
        if (this.commentUserGamertag) {
          this.commentUserGamertag.textContent = this.currentUser.username;
        }

        if (this.commentUserEmail) {
          this.commentUserEmail.textContent = this.currentUser.email || '';
        }

        if (this.currentUser.photoURL && this.commentUserAvatarImg) {
          this.commentUserAvatarImg.src = this.currentUser.photoURL;
          this.commentUserAvatarImg.style.display = 'block';
          if (this.commentUserAvatarFallback) this.commentUserAvatarFallback.style.display = 'none';
        } else {
          if (this.commentUserAvatarImg) this.commentUserAvatarImg.style.display = 'none';
          if (this.commentUserAvatarFallback) this.commentUserAvatarFallback.style.display = 'grid';
        }

        const isDev = this.isDeveloperAccount(this.currentUser);
        const spec = (this.currentUser && (this.currentUser.especialidad || this.currentUser.titulo || this.currentUser.role || 'Arquitecto')).toString().toLowerCase();
        const isEngineer = !isDev && (spec.includes('ingenier') || spec.includes('engineer'));

        if (this.commentDevCrownPill) {
          this.commentDevCrownPill.style.display = isDev ? 'inline-flex' : 'none';
        }
        if (this.commentArchitectPill) {
          this.commentArchitectPill.style.display = (!isDev && !isEngineer) ? 'inline-flex' : 'none';
        }
        if (this.commentEngineerPill) {
          this.commentEngineerPill.style.display = (!isDev && isEngineer) ? 'inline-flex' : 'none';
        }
      }

      this.updateCommentAuthorUI();
    }

    async handleGoogleSignIn() {
      this.sound.playPop();
      if (!window.FirebaseCommentsBridge || !window.FirebaseCommentsBridge.isReady) {
        alert('Firebase aún no está listo. Por favor espera un momento.');
        return;
      }

      try {
        await window.FirebaseCommentsBridge.signInWithGoogle();
        this.sound.playSuccess();
      } catch (err) {
        if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
          console.warn('Error iniciando sesión con Google:', err);
          alert('Hubo un error al iniciar sesión con Google: ' + (err.message || err));
        }
      }
    }

    async handleGoogleSignOut() {
      this.sound.playPop();
      if (window.FirebaseCommentsBridge && typeof window.FirebaseCommentsBridge.signOutUser === 'function') {
        try {
          await window.FirebaseCommentsBridge.signOutUser();
        } catch (e) {}
      }
      this.currentUser = null;
      this.pendingAuthUser = null;
      this.updateAuthUI();
      this.renderComments();
      this.showToast('Sesión de Google cerrada', 'info');
    }

    openGamertagModal(user) {
      if (!this.gamertagModal || !user) return;

      if (this.gamertagGoogleName) {
        this.gamertagGoogleName.textContent = user.displayName || 'Jugador';
      }
      if (this.gamertagGoogleEmail) {
        this.gamertagGoogleEmail.textContent = user.email || '';
      }

      if (user.photoURL && this.gamertagGoogleAvatar) {
        this.gamertagGoogleAvatar.src = user.photoURL;
        this.gamertagGoogleAvatar.style.display = 'block';
        if (this.gamertagAvatarFallback) this.gamertagAvatarFallback.style.display = 'none';
      } else {
        if (this.gamertagGoogleAvatar) this.gamertagGoogleAvatar.style.display = 'none';
        if (this.gamertagAvatarFallback) this.gamertagAvatarFallback.style.display = 'grid';
      }

      if (this.gamertagInput) {
        // Pre-fill suggested Gamertag from displayName (sanitized)
        const rawSuggested = (user.displayName || '').replace(/[^a-zA-Z0-9_]/g, '');
        this.gamertagInput.value = rawSuggested.substring(0, 20);
        if (this.gamertagCharCounter) {
          this.gamertagCharCounter.textContent = `${this.gamertagInput.value.length}/20`;
        }
      }

      if (this.gamertagFeedback) {
        this.gamertagFeedback.style.display = 'none';
        this.gamertagFeedback.innerHTML = '';
      }

      // Reset role selection cards
      const specialtyCards = document.querySelectorAll('.specialty-option-card');
      specialtyCards.forEach((c) => {
        const isArch = c.getAttribute('data-specialty') === 'Arquitecto';
        c.classList.toggle('active', isArch);
        const r = c.querySelector('input[type="radio"]');
        if (r) r.checked = isArch;
      });

      if (this.saveGamertagBtn) {
        this.saveGamertagBtn.disabled = false;
        this.saveGamertagBtn.innerHTML = '<i class="fa-solid fa-check"></i> Guardar y Continuar';
      }

      this.gamertagModal.classList.add('active');
      this.gamertagModal.classList.add('open');
      this.gamertagModal.setAttribute('aria-hidden', 'false');
      this.gamertagModal.scrollTop = 0;
      const diag = this.gamertagModal.querySelector('.modal-dialog');
      if (diag) diag.scrollTop = 0;
      this.syncBodyModalLock();

      setTimeout(() => {
        if (this.gamertagInput) this.gamertagInput.focus();
      }, 150);
    }

    closeGamertagModal() {
      if (this.gamertagModal) {
        this.gamertagModal.classList.remove('active');
        this.gamertagModal.classList.remove('open');
        this.gamertagModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
      }
      // If closing without completing Gamertag registration, sign out
      if (!this.currentUser && window.FirebaseCommentsBridge && typeof window.FirebaseCommentsBridge.signOutUser === 'function') {
        window.FirebaseCommentsBridge.signOutUser().catch(() => {});
        this.pendingAuthUser = null;
        this.updateAuthUI();
      }
    }

    showGamertagFeedback(message, type = 'error') {
      if (!this.gamertagFeedback) return;
      this.gamertagFeedback.className = `gamertag-feedback-box ${type}`;
      let icon = '<i class="fa-solid fa-circle-exclamation"></i>';
      if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
      if (type === 'loading') icon = '<i class="fa-solid fa-spinner fa-spin"></i>';
      this.gamertagFeedback.innerHTML = `${icon} <span>${message}</span>`;
      this.gamertagFeedback.style.display = 'flex';
    }

    async handleGamertagSubmit() {
      if (!this.pendingAuthUser) return;
      const tag = this.gamertagInput ? this.gamertagInput.value.trim() : '';

      if (!tag) {
        this.showGamertagFeedback('Por favor ingresa un Gamertag', 'error');
        return;
      }

      if (tag.length < 3 || tag.length > 20) {
        this.showGamertagFeedback('El Gamertag debe tener entre 3 y 20 caracteres.', 'error');
        return;
      }

      if (!/^[a-zA-Z0-9_]{3,20}$/.test(tag)) {
        this.showGamertagFeedback('Solo se permiten letras (a-z, A-Z), números (0-9) y guión bajo (_). Sin espacios.', 'error');
        return;
      }

      if (this.profanityFilter.isProfane(tag)) {
        this.showGamertagFeedback('⚠️ Este nombre contiene palabras o términos no permitidos.', 'error');
        return;
      }

      if (this.saveGamertagBtn) {
        this.saveGamertagBtn.disabled = true;
        this.saveGamertagBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verificando disponibilidad...';
      }

      this.showGamertagFeedback('Verificando disponibilidad...', 'loading');

      try {
        // Verificar en la colección usuarios que ningún otro usuario tenga ese mismo nombre
        const isTaken = await window.FirebaseCommentsBridge.isGamertagTaken(tag, this.pendingAuthUser.uid);
        if (isTaken) {
          this.sound.playPop();
          this.showGamertagFeedback(`⚠️ El Gamertag "${tag}" ya está en uso por otro jugador. Por favor elige otro.`, 'error');
          if (this.saveGamertagBtn) {
            this.saveGamertagBtn.disabled = false;
            this.saveGamertagBtn.innerHTML = '<i class="fa-solid fa-check"></i> Guardar Gamertag y Continuar';
          }
          if (this.gamertagInput) this.gamertagInput.focus();
          return;
        }

        const selectedRadio = document.querySelector('input[name="userSpecialty"]:checked');
        const specialty = selectedRadio ? selectedRadio.value : 'Arquitecto';

        // Guardar el perfil en la colección usuarios en Firestore con su especialidad
        const profile = await window.FirebaseCommentsBridge.registerGamertag(this.pendingAuthUser, tag, specialty);
        this.currentUser = profile;
        this.pendingAuthUser = null;

        this.sound.playSuccess();
        this.showGamertagFeedback(`¡${specialty} "${tag}" registrado con éxito!`, 'success');

        setTimeout(() => {
          if (this.gamertagModal) {
            this.gamertagModal.classList.remove('active');
            this.gamertagModal.classList.remove('open');
            this.gamertagModal.setAttribute('aria-hidden', 'true');
          }
          this.updateAuthUI();
          this.renderComments();
          this.showToast(`¡Bienvenido, ${tag} (${specialty})! 🎮`, 'success');
        }, 600);

      } catch (err) {
        console.warn('Error registrando Gamertag:', err);
        this.sound.playPop();
        this.showGamertagFeedback(err.message || 'Error al guardar el Gamertag en Firebase.', 'error');
        if (this.saveGamertagBtn) {
          this.saveGamertagBtn.disabled = false;
          this.saveGamertagBtn.innerHTML = '<i class="fa-solid fa-check"></i> Guardar y Continuar';
        }
      }
    }

    /* ------------------------------------------------------------------------
       User Profile & Favorites Modal Methods
       ------------------------------------------------------------------------ */

    openProfileModal() {
      if (!this.profileModal) return;
      this.renderProfileModal();
      this.profileModal.classList.add('active');
      this.profileModal.classList.add('open');
      this.profileModal.setAttribute('aria-hidden', 'false');
      this.profileModal.scrollTop = 0;
      const diag = this.profileModal.querySelector('.modal-dialog');
      if (diag) diag.scrollTop = 0;
      this.syncBodyModalLock();
    }

    closeProfileModal() {
      if (this.profileModal) {
        this.profileModal.classList.remove('active');
        this.profileModal.classList.remove('open');
        this.profileModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
      }
    }

    renderProfileModal() {
      if (!this.profileModal) return;

      if (!this.currentUser) {
        if (this.profileGuestView) this.profileGuestView.style.display = 'block';
        if (this.profileUserView) this.profileUserView.style.display = 'none';
        return;
      }

      if (this.profileGuestView) this.profileGuestView.style.display = 'none';
      if (this.profileUserView) this.profileUserView.style.display = 'block';

      // 1. User avatar & metadata
      if (this.currentUser.photoURL && this.profileUserAvatarImg) {
        this.profileUserAvatarImg.src = this.currentUser.photoURL;
        this.profileUserAvatarImg.style.display = 'block';
        if (this.profileUserAvatarFallback) this.profileUserAvatarFallback.style.display = 'none';
      } else {
        if (this.profileUserAvatarImg) this.profileUserAvatarImg.style.display = 'none';
        if (this.profileUserAvatarFallback) this.profileUserAvatarFallback.style.display = 'grid';
      }

      if (this.profileGamertag) {
        this.profileGamertag.textContent = this.currentUser.username || this.currentUser.displayName || 'Jugador';
      }
      if (this.profileUserEmail) {
        this.profileUserEmail.textContent = this.currentUser.email || '';
      }

      // 2. Role Badge
      const isDev = this.isDeveloperAccount(this.currentUser);
      const spec = (this.currentUser.especialidad || this.currentUser.titulo || this.currentUser.role || 'Arquitecto').toString().toLowerCase();
      const isEngineer = !isDev && (spec.includes('ingenier') || spec.includes('engineer'));

      if (this.profileRoleBadgeSlot) {
        if (isDev) {
          this.profileRoleBadgeSlot.innerHTML = '<span class="creator-crown-pill"><i class="fa-solid fa-crown"></i> Desarrollador</span>';
        } else if (isEngineer) {
          this.profileRoleBadgeSlot.innerHTML = '<span class="engineer-role-pill"><i class="fa-solid fa-gear"></i> Ingeniero</span>';
        } else {
          this.profileRoleBadgeSlot.innerHTML = '<span class="architect-role-pill"><i class="fa-solid fa-compass-drafting"></i> Arquitecto</span>';
        }
      }

      // 3. Render Favorites
      const favHouses = this.houses.filter((h) => this.userFavorites.includes(h.id));
      if (this.profileFavCount) {
        this.profileFavCount.textContent = favHouses.length;
      }
      if (this.profileFavsPill) {
        this.profileFavsPill.textContent = `${favHouses.length} ${favHouses.length === 1 ? 'casa' : 'casas'}`;
      }

      if (this.profileFavoritesGrid) {
        if (favHouses.length === 0) {
          this.profileFavoritesGrid.innerHTML = `
            <div class="profile-favs-empty">
              <i class="fa-regular fa-bookmark"></i>
              <p>Aún no tienes casas guardadas en tus favoritos. Explora la galería y haz clic en "Guardar en Favoritos" dentro de cualquier casa para verla aquí.</p>
            </div>
          `;
        } else {
          this.profileFavoritesGrid.innerHTML = favHouses.map((house) => {
            const categoryIcons = {
              cerezo: '<i class="fa-solid fa-tree"></i> Cerezo',
              playa: '<i class="fa-solid fa-umbrella-beach"></i> Playa',
              moderna: '<i class="fa-solid fa-city"></i> Moderna'
            };
            const catBadge = categoryIcons[house.category] || `<i class="fa-solid fa-cube"></i> ${house.category}`;

            return `
              <div class="fav-card-item" data-house-id="${house.id}">
                <div class="fav-card-thumb-wrap">
                  <img src="${this.escapeHTML(house.image)}" alt="${this.escapeHTML(house.title)}" class="fav-card-thumb" onerror="window.handleImgFallback(this, '${house.id}')">
                  <span class="fav-card-category-badge">${catBadge}</span>
                </div>
                <div class="fav-card-body">
                  <h6 class="fav-card-title" title="${this.escapeHTML(house.title)}">${this.escapeHTML(house.title)}</h6>
                  <div class="fav-card-actions">
                    <button type="button" class="btn-fav-view" data-action="view-fav" data-house-id="${house.id}">
                      <i class="fa-solid fa-eye"></i> Ver Diseño
                    </button>
                    <button type="button" class="btn-fav-remove" data-action="remove-fav" data-house-id="${house.id}" title="Quitar de favoritos">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('');

          // Attach click listeners to favorite card buttons
          const viewBtns = this.profileFavoritesGrid.querySelectorAll('[data-action="view-fav"]');
          viewBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
              const hId = btn.getAttribute('data-house-id');
              this.sound.playPop();
              this.closeProfileModal();
              this.openModal(hId);
            });
          });

          const removeBtns = this.profileFavoritesGrid.querySelectorAll('[data-action="remove-fav"]');
          removeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
              const hId = btn.getAttribute('data-house-id');
              this.toggleFavorite(hId);
              this.renderProfileModal();
            });
          });
        }
      }
    }

    openDeleteAccountModal() {
      if (this.deleteAccountConfirmModal) {
        this.deleteAccountConfirmModal.classList.add('active');
        this.deleteAccountConfirmModal.classList.add('open');
        this.deleteAccountConfirmModal.setAttribute('aria-hidden', 'false');
        this.syncBodyModalLock();
      }
    }

    closeDeleteAccountModal() {
      if (this.deleteAccountConfirmModal) {
        this.deleteAccountConfirmModal.classList.remove('active');
        this.deleteAccountConfirmModal.classList.remove('open');
        this.deleteAccountConfirmModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
      }
    }

    async handleDeleteAccount() {
      if (!this.confirmDeleteAccountBtn) return;
      this.sound.playPop();

      if (!window.FirebaseCommentsBridge || typeof window.FirebaseCommentsBridge.deleteCurrentUserAccount !== 'function') {
        alert('Firebase no está disponible en este momento.');
        return;
      }

      this.confirmDeleteAccountBtn.disabled = true;
      this.confirmDeleteAccountBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Eliminando cuenta...';

      try {
        const emailDeleted = this.currentUser ? this.currentUser.email : '';
        await window.FirebaseCommentsBridge.deleteCurrentUserAccount();

        // Clear user session & favorites locally
        this.currentUser = null;
        this.pendingAuthUser = null;
        this.userFavorites = [];
        this.saveFavorites();

        this.closeDeleteAccountModal();
        this.closeProfileModal();
        this.updateAuthUI();
        this.render();
        this.renderComments();

        this.sound.playSuccess();
        this.showToast(`Tu cuenta (${emailDeleted}) ha sido eliminada permanentemente de Firebase 🗑️`, 'info');

      } catch (err) {
        console.error('Error eliminando cuenta en Firebase:', err);
        this.sound.playPop();
        if (err.code === 'auth/requires-recent-login') {
          alert('Por seguridad de Google, debes haber iniciado sesión recientemente para eliminar tu cuenta. Por favor vuelve a iniciar sesión e inténtalo de nuevo.');
        } else {
          alert('No se pudo eliminar la cuenta: ' + (err.message || err));
        }
      } finally {
        if (this.confirmDeleteAccountBtn) {
          this.confirmDeleteAccountBtn.disabled = false;
          this.confirmDeleteAccountBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i> Sí, Eliminar mi Cuenta';
        }
      }
    }

    /* ------------------------------------------------------------------------
       Comment Author Dynamic UI for Authenticated Roles
       ------------------------------------------------------------------------ */

    updateCommentAuthorUI() {
      const authBadgeGroup = document.getElementById('commentAuthBadgeGroup');
      const authCard = document.getElementById('authCommenterCard');

      if (this.adminRole === 'creator') {
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
      } else {
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
        // DESARROLLADOR PRINCIPAL (Josue / loanrey17)
        this.sound.playSuccess();
        this.adminRole = 'creator';
        localStorage.setItem(STORAGE_KEYS.ADMIN_ROLE, 'creator');
        this.closeAuthModal();
        this.updateCommentAuthorUI();
        this.renderComments();
      } else if (pass === '12345') {
        // TRAMPA / DESPISTE (Muestra mensaje falso de éxito, pero NO asigna distintivos)
        this.sound.playPop();
        this.adminRole = 'none';
        localStorage.removeItem(STORAGE_KEYS.ADMIN_ROLE);
        this.closeAuthModal();
        this.updateCommentAuthorUI();
        this.renderComments();
      } else {
        // Contraseña incorrecta
        this.sound.playPop();
      }
    }

    /* ------------------------------------------------------------------------
       Submit Idea Modal & Processing Engine (Moderation & Feedback System)
       ------------------------------------------------------------------------ */

    switchSubmitModalTab(tab = 'build') {
      if (tab === 'build') {
        if (this.tabBtnBuild) this.tabBtnBuild.classList.add('active');
        if (this.tabBtnFeedback) this.tabBtnFeedback.classList.remove('active');
        if (this.paneSubmitBuild) this.paneSubmitBuild.style.display = 'block';
        if (this.paneSubmitFeedback) this.paneSubmitFeedback.style.display = 'none';
      } else {
        if (this.tabBtnBuild) this.tabBtnBuild.classList.remove('active');
        if (this.tabBtnFeedback) this.tabBtnFeedback.classList.add('active');
        if (this.paneSubmitBuild) this.paneSubmitBuild.style.display = 'none';
        if (this.paneSubmitFeedback) this.paneSubmitFeedback.style.display = 'block';
        if (this.feedbackForm && this.feedbackSuccessView && this.feedbackSuccessView.style.display !== 'flex') {
          this.feedbackForm.style.display = 'flex';
        }
      }
    }

    openSubmitIdeaModal(defaultTab = 'build') {
      if (this.submitIdeaModal) {
        // Reset build form
        if (this.submitIdeaForm) {
          this.submitIdeaForm.reset();
          this.submitIdeaForm.style.display = 'flex';
        }
        if (this.submitIdeaSuccessView) {
          this.submitIdeaSuccessView.style.display = 'none';
        }
        if (this.ideaCharCounter) {
          this.ideaCharCounter.textContent = '0 / 800';
        }
        if (this.sendIdeaBtn) {
          this.sendIdeaBtn.disabled = false;
          this.sendIdeaBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Postulación';
        }

        // Reset feedback form
        if (this.feedbackForm) {
          this.feedbackForm.reset();
          this.feedbackForm.style.display = 'flex';
        }
        if (this.feedbackSuccessView) {
          this.feedbackSuccessView.style.display = 'none';
        }
        if (this.feedbackCharCounter) {
          this.feedbackCharCounter.textContent = '0 / 700';
        }
        if (this.sendFeedbackBtn) {
          this.sendFeedbackBtn.disabled = false;
          this.sendFeedbackBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Mensaje';
        }

        this.switchSubmitModalTab(defaultTab);

        this.submitIdeaModal.classList.add('active');
        this.submitIdeaModal.classList.add('open');
        this.submitIdeaModal.setAttribute('aria-hidden', 'false');
        this.syncBodyModalLock();

        setTimeout(() => {
          if (defaultTab === 'build' && this.ideaTitle) {
            this.ideaTitle.focus();
          } else if (defaultTab === 'feedback' && this.feedbackName) {
            this.feedbackName.focus();
          }
        }, 150);
      }
    }

    closeSubmitIdeaModal() {
      if (this.submitIdeaModal) {
        this.submitIdeaModal.classList.remove('active');
        this.submitIdeaModal.classList.remove('open');
        this.submitIdeaModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
      }
      this.closeHowToInstagramModal();
    }

    openHowToInstagramModal() {
      if (this.howToInstagramModal) {
        this.howToInstagramModal.classList.add('active');
        this.howToInstagramModal.classList.add('open');
        this.howToInstagramModal.setAttribute('aria-hidden', 'false');
        this.syncBodyModalLock();
      }
    }

    closeHowToInstagramModal() {
      if (this.howToInstagramModal) {
        this.howToInstagramModal.classList.remove('active');
        this.howToInstagramModal.classList.remove('open');
        this.howToInstagramModal.setAttribute('aria-hidden', 'true');
        this.syncBodyModalLock();
      }
    }

    async handleFeedbackSubmit() {
      const tipo = this.feedbackType ? this.feedbackType.value : '💡 Sugerencia para el Sitio';
      const nombre = this.feedbackName ? this.feedbackName.value.trim() : '';
      const rawIg = this.feedbackInstagram ? this.feedbackInstagram.value.trim().replace(/^@+/, '') : '';
      const instagram = rawIg ? `@${rawIg}` : 'No especificado';
      const asunto = this.feedbackSubject ? this.feedbackSubject.value.trim() : '';
      const mensaje = this.feedbackMessage ? this.feedbackMessage.value.trim() : '';

      if (!nombre || !asunto || !mensaje) {
        this.sound.playPop();
        alert('⚠️ Por favor completa todos los campos requeridos con asterisco (*).');
        return;
      }

      // Profanity Filter
      if (this.profanityFilter.isProfane(nombre) || this.profanityFilter.isProfane(asunto) || this.profanityFilter.isProfane(mensaje)) {
        this.sound.playPop();
        if (this.feedbackMessage) {
          this.feedbackMessage.classList.add('input-error-shake');
          setTimeout(() => {
            if (this.feedbackMessage) this.feedbackMessage.classList.remove('input-error-shake');
          }, 650);
        }
        alert('⚠️ Tu mensaje contiene lenguaje inapropiado y no puede ser enviado.');
        return;
      }

      if (this.sendFeedbackBtn) {
        this.sendFeedbackBtn.disabled = true;
        this.sendFeedbackBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando a Firebase...';
      }

      const structuredMessage = 
`📢 NUEVA QUEJA / SUGERENCIA RECIBIDA 📢

🏷️ Tipo: ${tipo}
👤 De: ${nombre} (${instagram})
📌 Asunto: ${asunto}
📝 Mensaje:
${mensaje}

✅ Estado: REGISTRADO EN BUZÓN DE COMUNIDAD`;

      // Save to Firebase Firestore under collection 'quejas_sugerencias'
      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && typeof window.FirebaseCommentsBridge.submitQuejaSugerencia === 'function') {
          await window.FirebaseCommentsBridge.submitQuejaSugerencia({
            tipo,
            nombre,
            instagram: rawIg,
            asunto,
            mensaje
          });
        }
      } catch (err) {
        console.warn('Error registrando queja/sugerencia en Firebase:', err);
      }

      // Save locally as backup
      try {
        const localSaved = JSON.parse(localStorage.getItem('mc_quejas_v1') || '[]');
        localSaved.unshift({
          tipo,
          nombre,
          instagram,
          asunto,
          mensaje,
          date: new Date().toISOString()
        });
        localStorage.setItem('mc_quejas_v1', JSON.stringify(localSaved));
      } catch (e) {
        // Ignore local storage error
      }

      this.sound.playSuccess();

      // Show formatted preview in success view
      if (this.feedbackMessagePreviewText) {
        this.feedbackMessagePreviewText.textContent = structuredMessage;
      }

      if (this.feedbackForm) {
        this.feedbackForm.style.display = 'none';
      }
      if (this.feedbackSuccessView) {
        this.feedbackSuccessView.style.display = 'flex';
      }
    }

    async handleSubmitIdeaForm() {
      const titulo = this.ideaTitle ? this.ideaTitle.value.trim() : '';
      const creador = this.ideaCreator ? this.ideaCreator.value.trim() : '';
      const rawIg = this.ideaInstagram ? this.ideaInstagram.value.trim() : '';
      let instagram = 'No especificado';
      if (rawIg) {
        if (/^https?:\/\//i.test(rawIg)) {
          instagram = rawIg;
        } else if (rawIg.includes('instagram.com/')) {
          instagram = `https://${rawIg.replace(/^https?:\/\//i, '')}`;
        } else {
          instagram = `@${rawIg.replace(/^@+/, '')}`;
        }
      }
      const categoria = this.ideaCategory ? this.ideaCategory.value : 'General';
      const version = this.ideaVersion ? this.ideaVersion.value : 'Java Edition';
      const shaders = this.ideaShaders ? (this.ideaShaders.value.trim() || 'Vanilla / Predeterminado') : 'Vanilla';
      const imagenesUrl = this.ideaImageLink ? this.ideaImageLink.value.trim() : '';
      const descripcion = this.ideaDescription ? this.ideaDescription.value.trim() : '';

      if (!titulo || !creador || !imagenesUrl || !descripcion) {
        this.sound.playPop();
        alert('⚠️ Por favor completa todos los campos requeridos con asterisco (*).');
        return;
      }

      // Profanity and Spam Moderation Check
      if (this.profanityFilter.isProfane(titulo) || this.profanityFilter.isProfane(creador) || this.profanityFilter.isProfane(descripcion)) {
        this.sound.playPop();
        if (this.ideaDescription) {
          this.ideaDescription.classList.add('input-error-shake');
          setTimeout(() => {
            if (this.ideaDescription) this.ideaDescription.classList.remove('input-error-shake');
          }, 650);
        }
        alert('⚠️ Tu postulación contiene palabras o lenguaje inapropiado y no puede ser enviada.');
        return;
      }

      // Validate Image Link
      if (!/^https?:\/\/.+/i.test(imagenesUrl)) {
        this.sound.playPop();
        if (this.ideaImageLink) {
          this.ideaImageLink.classList.add('input-error-shake');
          setTimeout(() => {
            if (this.ideaImageLink) this.ideaImageLink.classList.remove('input-error-shake');
          }, 650);
          this.ideaImageLink.focus();
        }
        alert('⚠️ Por favor ingresa un enlace web válido (ej: https://imgur.com/... o enlace de Drive/Discord) para las imágenes.');
        return;
      }

      if (this.sendIdeaBtn) {
        this.sendIdeaBtn.disabled = true;
        this.sendIdeaBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Registrando en Firebase...';
      }

      // Format Structured Review Message for Instagram
      const structuredMessage = 
`📩 NUEVA CONSTRUCCIÓN RECIBIDA 📩

📌 Título: ${titulo}
🏗️ Creador: ${creador} (${instagram})
🏷️ Categoría: ${categoria} | Versión: ${version}
🎨 Shaders/Texturas: ${shaders}
📝 Descripción: ${descripcion}
🖼️ Enlace de imágenes: ${imagenesUrl}

✅ Estado: PENDIENTE DE REVISIÓN`;

      // Save to Firebase Firestore under collection 'postulaciones'
      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && typeof window.FirebaseCommentsBridge.submitPostulacion === 'function') {
          await window.FirebaseCommentsBridge.submitPostulacion({
            titulo,
            creador,
            instagram: rawIg,
            categoria,
            version,
            shaders,
            descripcion,
            imagenesUrl
          });
        }
      } catch (err) {
        console.warn('Error registrando postulación en Firebase:', err);
      }

      // Save locally as backup
      try {
        const localSaved = JSON.parse(localStorage.getItem('mc_postulaciones_v1') || '[]');
        localSaved.unshift({
          titulo,
          creador,
          instagram,
          categoria,
          version,
          shaders,
          descripcion,
          imagenesUrl,
          status: 'PENDIENTE DE REVISIÓN',
          date: new Date().toISOString()
        });
        localStorage.setItem('mc_postulaciones_v1', JSON.stringify(localSaved));
      } catch (e) {
        // Ignore local storage error
      }

      this.sound.playSuccess();

      // Show formatted preview in success view
      if (this.ideaMessagePreviewText) {
        this.ideaMessagePreviewText.textContent = structuredMessage;
      }

      if (this.submitIdeaForm) {
        this.submitIdeaForm.style.display = 'none';
      }
      if (this.submitIdeaSuccessView) {
        this.submitIdeaSuccessView.style.display = 'flex';
      }
    }

    /* ------------------------------------------------------------------------
       Community Comments Logic (Firebase Realtime + Profanity Filter)
       ------------------------------------------------------------------------ */

    async handleCommentSubmit() {
      if (!this.currentUser || !this.currentUser.username) {
        this.sound.playPop();
        this.showToast('Por favor inicia sesión con Google para comentar', 'info');
        this.handleGoogleSignIn();
        return;
      }

      const author = this.currentUser.username;
      const uid = this.currentUser.uid;
      const email = this.currentUser.email || '';
      const userPhoto = this.currentUser.photoURL || '';
      const houseRef = this.commentHouseRef ? this.commentHouseRef.value : 'General';
      const text = this.commentText ? this.commentText.value.trim() : '';

      if (!text) {
        this.showToast('Por favor escribe tu comentario', 'error');
        if (this.commentText) this.commentText.focus();
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

      const isDev = this.isDeveloperAccount({ author, email, role: this.adminRole });
      const currentSpecialty = this.currentUser ? (this.currentUser.especialidad || this.currentUser.titulo || 'Arquitecto') : 'Arquitecto';
      const assignedRole = isDev ? 'creator' : (currentSpecialty.toLowerCase().includes('ingenier') ? 'engineer' : 'architect');

      // Optimistically add comment to memory and UI so all comments stay present
      const tempId = 'comm-' + Date.now();
      const optimisticComment = {
        id: tempId,
        author: author,
        uid: uid,
        email: email,
        userPhoto: userPhoto,
        houseRef: houseRef,
        text: text,
        date: 'Hace unos momentos',
        likes: 0,
        likedByUser: false,
        role: assignedRole,
        especialidad: isDev ? 'Desarrollador' : currentSpecialty,
        timestamp: Date.now(),
        replies: []
      };

      this.comments.unshift(optimisticComment);
      this.saveComments();
      this.renderComments();

      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady) {
          const docRef = await window.FirebaseCommentsBridge.addComment({
            author,
            uid,
            email,
            userPhoto,
            text,
            houseRef,
            role: assignedRole,
            especialidad: isDev ? 'Desarrollador' : currentSpecialty
          });
          if (docRef && docRef.id) {
            const found = this.comments.find((c) => c.id === tempId);
            if (found) {
              found.id = docRef.id;
              this.saveComments();
            }
          }
        }

        this.sound.playSuccess();
        if (this.commentText) this.commentText.value = '';
        if (this.charCounter) this.charCounter.textContent = '0 / 500';
        this.showToast('¡Comentario publicado con éxito! 🎉', 'success');
      } catch (err) {
        console.error('Error enviando comentario a Firebase:', err);
        this.sound.playSuccess();
        if (this.commentText) this.commentText.value = '';
        if (this.charCounter) this.charCounter.textContent = '0 / 500';
        this.showToast('Comentario guardado localmente 🎉', 'success');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Publicar Comentario';
        }
      }
    }

    renderComments() {
      if (!this.commentsList) return;

      // Unconditionally filter out any mock/test comments from rendering
      this.comments = (this.comments || []).filter((comm) => {
        if (!comm) return false;
        const aut = (comm.author || comm.autor || '').toString().toLowerCase();
        const txt = (comm.text || comm.texto || '').toString().toLowerCase();
        return comm.id !== 'comm-1' &&
               comm.id !== 'comm-2' &&
               !aut.includes('alex_builder') &&
               !aut.includes('craftmaster') &&
               !txt.includes('pilotes') &&
               !txt.includes('ventanales');
      });

      // Count total main comments + all replies
      let totalCount = 0;
      this.comments.forEach((c) => {
        totalCount += 1;
        if (Array.isArray(c.replies)) totalCount += c.replies.length;
      });

      if (this.commentsCount) {
        this.commentsCount.textContent = totalCount;
      }

      if (this.comments.length === 0) {
        this.commentsList.innerHTML = `
          <div class="empty-comments-box">
            <i class="fa-regular fa-comment-dots"></i>
            <p>Sé el primero en dejar un comentario con tu Gamertag.</p>
          </div>
        `;
        return;
      }

      this.commentsList.innerHTML = this.comments
        .map((comm) => {
          const isDev = this.isDeveloperAccount(comm);
          const rawSpec = (comm.especialidad || comm.titulo || comm.role || '').toString().toLowerCase();
          const isEngineer = !isDev && (rawSpec.includes('ingenier') || rawSpec.includes('engineer'));
          const isAdminUser = this.adminRole === 'creator' || (this.currentUser && this.isDeveloperAccount(this.currentUser));

          let cardClass = 'comment-card animate-slide-in';
          let avatarClass = 'comment-avatar';
          let avatarContent = '';
          let roleBadge = '';

          if (comm.userPhoto) {
            avatarContent = `<img src="${this.escapeHTML(comm.userPhoto)}" alt="${this.escapeHTML(comm.author)}" class="comment-avatar-img" onerror="this.style.display='none'">`;
          } else if (isDev) {
            cardClass += ' gold-verified-card';
            avatarClass += ' creator-golden-avatar';
            avatarContent = '<i class="fa-solid fa-crown"></i>';
          } else if (isEngineer) {
            avatarClass += ' engineer-avatar';
            avatarContent = '<i class="fa-solid fa-gear"></i>';
          } else {
            avatarClass += ' architect-avatar';
            avatarContent = comm.author ? comm.author.charAt(0).toUpperCase() : '<i class="fa-solid fa-compass-drafting"></i>';
          }

          if (isDev) {
            cardClass += ' gold-verified-card';
            roleBadge = '<span class="creator-crown-pill"><i class="fa-solid fa-crown"></i> Desarrollador</span>';
          } else if (isEngineer) {
            roleBadge = '<span class="engineer-role-pill"><i class="fa-solid fa-gear"></i> Ingeniero</span>';
          } else {
            roleBadge = '<span class="architect-role-pill"><i class="fa-solid fa-compass-drafting"></i> Arquitecto</span>';
          }

          // Trash button EXCLUSIVELY for Developer (loanrey173@gmail.com)
          const trashBtn = isAdminUser
            ? `<button class="btn-comment-trash" data-comment-action="delete" data-id="${comm.id}" title="Eliminar comentario" aria-label="Eliminar comentario">
                <i class="fa-solid fa-trash-can"></i>
               </button>`
            : '';

          const replies = Array.isArray(comm.replies) ? comm.replies : [];
          const hasReplies = replies.length > 0;
          const isExpanded = this.expandedThreads.has(comm.id);
          const isReplyBoxOpen = this.activeReplyParentId === comm.id;

          // TikTok-style replies thread
          let repliesSectionHTML = '';
          if (hasReplies) {
            const repliesToggleBtn = `
              <button class="btn-toggle-replies ${isExpanded ? 'expanded' : ''}" data-comment-action="toggle-replies" data-id="${comm.id}">
                <span class="thread-dash">──</span> 
                <span class="replies-toggle-label">${isExpanded ? 'Ocultar respuestas' : `Ver ${replies.length} ${replies.length === 1 ? 'respuesta' : 'respuestas'}`}</span> 
                <i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
              </button>
            `;

            const repliesItemsHTML = replies.map((reply) => {
              const isRepDev = this.isDeveloperAccount(reply);
              const repRawSpec = (reply.especialidad || reply.titulo || reply.role || '').toString().toLowerCase();
              const isRepEngineer = !isRepDev && (repRawSpec.includes('ingenier') || repRawSpec.includes('engineer'));
              let repAvatarClass = isRepDev ? 'reply-avatar creator-golden-avatar' : (isRepEngineer ? 'reply-avatar engineer-avatar' : 'reply-avatar architect-avatar');
              let repAvatarContent = '';

              if (reply.userPhoto) {
                repAvatarContent = `<img src="${this.escapeHTML(reply.userPhoto)}" alt="${this.escapeHTML(reply.author)}" class="reply-avatar-img" onerror="this.style.display='none'">`;
              } else if (isRepDev) {
                repAvatarContent = '<i class="fa-solid fa-crown"></i>';
              } else if (isRepEngineer) {
                repAvatarContent = '<i class="fa-solid fa-gear"></i>';
              } else {
                repAvatarContent = reply.author ? reply.author.charAt(0).toUpperCase() : 'A';
              }

              let repRoleBadge = '';
              if (isRepDev) {
                repRoleBadge = '<span class="creator-crown-pill"><i class="fa-solid fa-crown"></i> Desarrollador</span>';
              } else if (isRepEngineer) {
                repRoleBadge = '<span class="engineer-role-pill"><i class="fa-solid fa-gear"></i> Ingeniero</span>';
              } else {
                repRoleBadge = '<span class="architect-role-pill"><i class="fa-solid fa-compass-drafting"></i> Arquitecto</span>';
              }
              const repToBadge = reply.replyTo ? `<span class="reply-to-tag">▶ @${this.escapeHTML(reply.replyTo)}</span>` : '';
              
              const repTrashBtn = isAdminUser
                ? `<button class="btn-reply-trash" data-reply-action="delete" data-parent-id="${comm.id}" data-id="${reply.id}" title="Eliminar respuesta">
                    <i class="fa-solid fa-trash-can"></i>
                   </button>`
                : '';

              return `
                <div class="reply-item ${isRepDev ? 'gold-verified-reply' : ''}" data-reply-id="${reply.id}">
                  <div class="${repAvatarClass}">${repAvatarContent}</div>
                  <div class="reply-body">
                    <div class="reply-header-row">
                      <span class="reply-author-name">${this.escapeHTML(reply.author)}</span>
                      ${repRoleBadge}
                      ${repToBadge}
                      <span class="reply-date"><i class="fa-regular fa-clock"></i> ${reply.date || 'Hace unos momentos'}</span>
                    </div>
                    <p class="reply-text">${this.escapeHTML(reply.text)}</p>
                    <div class="reply-actions">
                      <button class="btn-reply-like ${reply.likedByUser ? 'liked' : ''}" data-reply-action="like" data-parent-id="${comm.id}" data-id="${reply.id}" title="${reply.likedByUser ? 'Quitar me gusta' : 'Dar me gusta'}">
                        <i class="${reply.likedByUser ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        <span>${reply.likes || 0}</span>
                      </button>
                      <button class="btn-reply-subreply" data-comment-action="reply-to-user" data-parent-id="${comm.id}" data-author="${this.escapeHTML(reply.author)}" title="Responder a @${this.escapeHTML(reply.author)}">
                        <i class="fa-solid fa-reply"></i> Responder
                      </button>
                      ${repTrashBtn}
                    </div>
                  </div>
                </div>
              `;
            }).join('');

            repliesSectionHTML = `
              <div class="tiktok-replies-wrapper">
                ${repliesToggleBtn}
                ${isExpanded ? `<div class="comment-replies-list" id="repliesList-${comm.id}">${repliesItemsHTML}</div>` : ''}
              </div>
            `;
          }

          // Inline TikTok reply input box
          const targetAuthor = this.activeReplyTargetAuthor || comm.author;
          const replyBoxHTML = isReplyBoxOpen
            ? `
              <div class="reply-input-box" id="replyBox-${comm.id}">
                <div class="replying-to-header">
                  <span><i class="fa-solid fa-reply"></i> Respondiendo a <strong class="reply-target-author">@${this.escapeHTML(targetAuthor)}</strong></span>
                  <button type="button" class="btn-cancel-reply" data-comment-action="cancel-reply" data-id="${comm.id}" title="Cancelar respuesta">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <form class="reply-form" data-parent-id="${comm.id}" data-reply-to="${this.escapeHTML(targetAuthor)}">
                  <div class="reply-input-row">
                    <textarea class="reply-textarea" placeholder="Escribe tu respuesta a @${this.escapeHTML(targetAuthor)}..." rows="1" maxlength="400" required></textarea>
                    <button type="submit" class="btn-send-reply" title="Publicar respuesta">
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            `
            : '';

          return `
          <article class="${cardClass}" data-comment-id="${comm.id}">
            <div class="${avatarClass}">${avatarContent}</div>
            <div class="comment-content" style="flex: 1; min-width: 0;">
              <div class="comment-header-row">
                <div class="comment-author-info">
                  <span class="comment-author-name">${this.escapeHTML(comm.author)}</span>
                  <span class="verified-gamertag-pill" title="Gamertag verificado"><i class="fa-solid fa-circle-check"></i></span>
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
                <button class="btn-comment-reply" data-comment-action="reply" data-id="${comm.id}" data-author="${this.escapeHTML(comm.author)}" title="Responder a este comentario">
                  <i class="fa-solid fa-reply"></i>
                  <span>Responder</span>
                </button>
                ${trashBtn}
              </div>
              
              ${repliesSectionHTML}
              ${replyBoxHTML}
            </div>
          </article>
        `;
        })
        .join('');

      this.attachCommentEventListeners();

      // Auto-focus active reply textarea if open
      if (this.activeReplyParentId) {
        const activeTextarea = this.commentsList.querySelector(`.reply-form[data-parent-id="${this.activeReplyParentId}"] .reply-textarea`);
        if (activeTextarea) {
          activeTextarea.focus();
        }
      }
    }

    attachCommentEventListeners() {
      // Main Comment Like buttons
      const likeBtns = this.commentsList.querySelectorAll('[data-comment-action="like"]');
      likeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const commId = btn.getAttribute('data-id');
          this.toggleCommentLike(commId);
        });
      });

      // Admin / Owner Comment delete buttons
      const deleteBtns = this.commentsList.querySelectorAll('[data-comment-action="delete"]');
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const commId = btn.getAttribute('data-id');
          this.deleteComment(commId);
        });
      });

      // Toggle replies button
      const toggleBtns = this.commentsList.querySelectorAll('[data-comment-action="toggle-replies"]');
      toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const commId = btn.getAttribute('data-id');
          this.sound.playPop();
          if (this.expandedThreads.has(commId)) {
            this.expandedThreads.delete(commId);
          } else {
            this.expandedThreads.add(commId);
          }
          this.renderComments();
        });
      });

      // "Responder" on main comment
      const replyBtns = this.commentsList.querySelectorAll('[data-comment-action="reply"]');
      replyBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          if (!this.currentUser || !this.currentUser.username) {
            this.sound.playPop();
            this.showToast('Inicia sesión con Google para responder', 'info');
            this.handleGoogleSignIn();
            return;
          }
          const commId = btn.getAttribute('data-id');
          const author = btn.getAttribute('data-author') || 'Usuario';
          this.sound.playPop();
          this.activeReplyParentId = commId;
          this.activeReplyTargetAuthor = author;
          this.expandedThreads.add(commId);
          this.renderComments();
        });
      });

      // "Responder" to sub-reply
      const subreplyBtns = this.commentsList.querySelectorAll('[data-comment-action="reply-to-user"]');
      subreplyBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          if (!this.currentUser || !this.currentUser.username) {
            this.sound.playPop();
            this.showToast('Inicia sesión con Google para responder', 'info');
            this.handleGoogleSignIn();
            return;
          }
          const parentId = btn.getAttribute('data-parent-id');
          const author = btn.getAttribute('data-author') || 'Usuario';
          this.sound.playPop();
          this.activeReplyParentId = parentId;
          this.activeReplyTargetAuthor = author;
          this.expandedThreads.add(parentId);
          this.renderComments();
        });
      });

      // Cancel reply
      const cancelBtns = this.commentsList.querySelectorAll('[data-comment-action="cancel-reply"]');
      cancelBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          this.sound.playPop();
          this.activeReplyParentId = null;
          this.activeReplyTargetAuthor = null;
          this.renderComments();
        });
      });

      // Reply form submissions
      const replyForms = this.commentsList.querySelectorAll('.reply-form');
      replyForms.forEach((form) => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const parentId = form.getAttribute('data-parent-id');
          const replyTo = form.getAttribute('data-reply-to') || '';
          const textarea = form.querySelector('.reply-textarea');
          const text = textarea ? textarea.value.trim() : '';
          if (text) {
            this.handleReplySubmit(parentId, text, replyTo);
          }
        });
      });

      // Reply Likes
      const replyLikeBtns = this.commentsList.querySelectorAll('[data-reply-action="like"]');
      replyLikeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const parentId = btn.getAttribute('data-parent-id');
          const replyId = btn.getAttribute('data-id');
          this.toggleReplyLike(parentId, replyId);
        });
      });

      // Admin / Owner Reply Deletes
      const replyTrashBtns = this.commentsList.querySelectorAll('[data-reply-action="delete"]');
      replyTrashBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const parentId = btn.getAttribute('data-parent-id');
          const replyId = btn.getAttribute('data-id');
          this.deleteReply(parentId, replyId);
        });
      });
    }

    async handleReplySubmit(parentId, text, replyTo) {
      if (!this.currentUser || !this.currentUser.username) {
        this.sound.playPop();
        this.showToast('Inicia sesión con Google para responder', 'info');
        this.handleGoogleSignIn();
        return;
      }

      const comment = this.comments.find((c) => c.id === parentId);
      if (!comment) return;

      if (!text) {
        return;
      }

      // Profanity check
      if (this.profanityFilter.isProfane(text)) {
        this.sound.playPop();
        const textarea = this.commentsList.querySelector(`.reply-form[data-parent-id="${parentId}"] .reply-textarea`);
        if (textarea) {
          textarea.classList.add('input-error-shake');
          setTimeout(() => textarea.classList.remove('input-error-shake'), 650);
        }
        return;
      }

      const author = this.currentUser.username;
      const uid = this.currentUser.uid;
      const email = this.currentUser.email || '';
      const userPhoto = this.currentUser.photoURL || '';
      const isDev = this.isDeveloperAccount({ author, email, role: this.adminRole });
      const currentSpecialty = this.currentUser ? (this.currentUser.especialidad || this.currentUser.titulo || 'Arquitecto') : 'Arquitecto';
      const assignedRole = isDev ? 'creator' : (currentSpecialty.toLowerCase().includes('ingenier') ? 'engineer' : 'architect');

      const replyId = 'rep-' + Date.now();
      const newReply = {
        id: replyId,
        author: author,
        uid: uid,
        email: email,
        userPhoto: userPhoto,
        text: text,
        replyTo: replyTo || null,
        role: assignedRole,
        especialidad: isDev ? 'Desarrollador' : currentSpecialty,
        likes: 0,
        likedByUser: false,
        date: 'Hace unos momentos',
        timestamp: Date.now()
      };

      if (!Array.isArray(comment.replies)) {
        comment.replies = [];
      }

      comment.replies.push(newReply);
      this.expandedThreads.add(parentId);
      this.activeReplyParentId = null;
      this.activeReplyTargetAuthor = null;

      this.sound.playSuccess();
      this.saveComments();
      this.renderComments();

      // Firebase Sync
      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !parentId.startsWith('comm-')) {
          if (typeof window.FirebaseCommentsBridge.addReply === 'function') {
            await window.FirebaseCommentsBridge.addReply(parentId, newReply);
          } else if (typeof window.FirebaseCommentsBridge.updateReplies === 'function') {
            await window.FirebaseCommentsBridge.updateReplies(parentId, comment.replies);
          }
        }
      } catch (err) {
        console.warn('Error enviando respuesta a Firebase:', err);
      }
    }

    async toggleReplyLike(parentId, replyId) {
      const comment = this.comments.find((c) => c.id === parentId);
      if (!comment || !Array.isArray(comment.replies)) return;

      const reply = comment.replies.find((r) => r.id === replyId);
      if (!reply) return;

      this.sound.playHeart();
      const alreadyLiked = this.userCommentLikes.includes(replyId);

      if (alreadyLiked) {
        this.userCommentLikes = this.userCommentLikes.filter((id) => id !== replyId);
        reply.likes = Math.max(0, (reply.likes || 0) - 1);
        reply.likedByUser = false;
      } else {
        this.userCommentLikes.push(replyId);
        reply.likes = (reply.likes || 0) + 1;
        reply.likedByUser = true;
      }

      this.saveUserCommentLikes();
      this.saveComments();
      this.renderComments();

      if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !parentId.startsWith('comm-')) {
        try {
          if (typeof window.FirebaseCommentsBridge.updateReplies === 'function') {
            await window.FirebaseCommentsBridge.updateReplies(parentId, comment.replies);
          }
        } catch (err) {
          console.warn('Error actualizando like de respuesta en Firebase:', err);
        }
      }
    }

    async deleteReply(parentId, replyId) {
      const isDev = this.adminRole === 'creator' || (this.currentUser && this.isDeveloperAccount(this.currentUser));
      if (!isDev) return;

      const comment = this.comments.find((c) => c.id === parentId);
      if (!comment || !Array.isArray(comment.replies)) return;

      const repIndex = comment.replies.findIndex((r) => r.id === replyId);
      if (repIndex === -1) return;

      comment.replies.splice(repIndex, 1);
      this.sound.playPop();
      this.saveComments();
      this.renderComments();

      if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !parentId.startsWith('comm-')) {
        try {
          if (typeof window.FirebaseCommentsBridge.updateReplies === 'function') {
            await window.FirebaseCommentsBridge.updateReplies(parentId, comment.replies);
          }
        } catch (err) {
          console.warn('Error eliminando respuesta en Firebase:', err);
        }
      }
    }

    async deleteComment(commId) {
      const isDev = this.adminRole === 'creator' || (this.currentUser && this.isDeveloperAccount(this.currentUser));
      if (!isDev) {
        return;
      }

      const commentIndex = this.comments.findIndex((c) => c.id === commId);
      const authorName = commentIndex !== -1 ? (this.comments[commentIndex].author || 'Usuario') : 'Comentario';

      // Persist as deleted so it never reappears
      this.saveDeletedComment(commId);

      if (commentIndex !== -1) {
        this.comments.splice(commentIndex, 1);
        this.saveComments();
        this.renderComments();
      }

      try {
        if (window.FirebaseCommentsBridge && window.FirebaseCommentsBridge.isReady && !commId.startsWith('comm-')) {
          await window.FirebaseCommentsBridge.deleteComment(commId);
        }
        this.sound.playPop();
        this.showToast(`Comentario de "${authorName}" eliminado 🗑️`, 'info');
      } catch (err) {
        console.error('Error eliminando comentario en Firebase:', err);
        this.sound.playPop();
        this.showToast(`Comentario de "${authorName}" eliminado localmente 🗑️`, 'info');
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
       Toast Notification System (Disabled per user request)
       ------------------------------------------------------------------------ */

    showToast(message, type = 'success') {
      // Disabled: user actions execute silently without floating text popups
      return;
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
