// ================================
// CONFIGURACIÓN - PERSONALIZA AQUÍ
// ================================

// Fecha de inicio de la relación (año, mes-1, día)
const startDate = new Date(2016, 8, 5); // Ejemplo: 5 de septiembre de 2016 (mes es 0-indexado)

// Razones por las que la amas (puedes agregar más)
const reasons = [
    {
        number: 1,
        title: "Tu sonrisa",
        description: "Ilumina cada uno de mis días y hace que todo valga la pena",
        emoji: "😊",
        image: "photos/reason1.jpg"
    },
    {
        number: 2,
        title: "Tu risa",
        description: "Es la melodía más hermosa que he escuchado, me hace feliz solo con escucharla",
        emoji: "😄",
        image: "photos/reason2.jpg"
    },
    {
        number: 3,
        title: "Tu forma de ser",
        description: "Auténtica, genuina y única. No cambiaría nada de ti",
        emoji: "💖",
        image: "photos/reason3.jpg"
    },
    {
        number: 4,
        title: "Cómo me entiendes",
        description: "Sabes exactamente lo que pienso y siento, incluso sin palabras",
        emoji: "🤝",
        image: "photos/reason4.jpg"
    },
    {
        number: 5,
        title: "Tu apoyo",
        description: "Siempre estás ahí cuando más te necesito, eres mi fortaleza",
        emoji: "💪",
        image: "photos/reason5.jpg"
    },
    {
        number: 6,
        title: "Tus abrazos",
        description: "Son mi lugar favorito en el mundo, donde todo tiene sentido",
        emoji: "🤗",
        image: "photos/reason6.jpg"
    },
    {
        number: 7,
        title: "Tu inteligencia",
        description: "Me fascina cómo piensas y ves el mundo de forma única",
        emoji: "🧠",
        image: "photos/reason7.jpg"
    },
    {
        number: 8,
        title: "Tus ojos",
        description: "Podría perderme en ellos por horas, cuentan historias hermosas",
        emoji: "👀",
        image: "photos/reason8.jpg"
    },
    {
        number: 9,
        title: "Tu bondad",
        description: "Tu corazón es tan grande y hermoso, siempre piensas en los demás",
        emoji: "❤️",
        image: "photos/reason9.jpg"
    },
    {
        number: 10,
        title: "Tu cabello",
        description: "Me encanta cómo se siente y cómo huele, es simplemente perfecto",
        emoji: "💇‍♀️",
        image: "photos/reason10.jpg"
    },
    {
        number: 11,
        title: "Tu complejidad",
        description: "Eres un ser lleno de matices y profundidades que me fascinan cada día más. Eso creo...",
        emoji: "🌌",
        image: "photos/reason11.jpg"
    },
    {
        number: 12,
        title: "Tu persistencia",
        description: "Admiro cómo nunca te rindes y siempre luchas por lo que quieres",
        emoji: "🏆",
        image: "photos/reason12.jpg"
    }
];

// Timeline de la relación
const timelineEvents = [
    {
        date: "05 Sep 2016",
        title: "El comienzo de todo",
        description: "Ese día mágico que dio inicio a esta hermosa historia de amor",
        image: "photos/timeline1.png"
    },
    {
        date: "Nov 2016",
        title: "Los primeros regalos que nos dimos",
        description: "Pequeños detalles que significaron mucho para ambos y marcaron el inicio de nuestra tradición de regalar con amor",
        image: "photos/timeline2.png"
    },
    {
        date: "Dic 2016",
        title: "Nuestra primera salida solos",
        description: "Una fecha inolvidable con muchos nervios y sonrisas cómplices",
        image: "photos/timeline3.png"
    },
    {
        date: "14 Feb 2017",
        title: "Nuestra primera celebración de San Valentín",
        description: "Aún recuerdo el regalo que te dí y tu cara de sorpresa, fue tan especial",
        image: "photos/timeline4.png"
    },
    {
        date: "2019",
        title: "Año maravilloso",
        description: "Año donde fuimos al cine, comimos en el centro de Lima y tuvimos momentos inolvidables juntos",
        image: "photos/timeline5.png"
    },
    {
        date: "2022 - Presente",
        title: "Aquí y ahora",
        description: "Cada año que pasa me doy cuenta de lo afortunado que soy de tenerte a mi lado, y no puedo esperar para seguir creando más recuerdos juntos",
        image: "photos/timeline6.png"
    }
];

// Fotos para la galería
const galleryPhotos = [
    { src: "photos/gallery1.jpeg", caption: "Días en la escaleras" },
    { src: "photos/gallery2.jpeg", caption: "Días en mi casa" },
    { src: "photos/gallery3.jpeg", caption: "Días en tu casa" },
    { src: "photos/gallery4.jpeg", caption: "La sorpresa inesperada" },
    { src: "photos/gallery5.jpeg", caption: "Tú sonrisa hermosa" },
    { src: "photos/gallery6.jpeg", caption: "Mi primer logro a tu lado" },
    { src: "photos/gallery7.jpeg", caption: "Recuerdos hermosos en Ica" },
    { src: "photos/gallery8.jpeg", caption: "Eventos nocturnos a tu lado" },
    { src: "photos/gallery9.jpeg", caption: "Viajes juntos" },
    { src: "photos/gallery10.jpeg", caption: "Nuestro amor" },
    { src: "photos/gallery11.jpeg", caption: "Siempre juntos" },
    { src: "photos/gallery12.jpeg", caption: "Eres mi todo" },
    { src: "photos/gallery13.jpeg", caption: "Momentos mágicos" },
    { src: "photos/gallery14.jpeg", caption: "Cambios y crecimiento" },
    { src: "photos/gallery15.jpeg", caption: "Nuestra celebración" },
    { src: "photos/gallery16.jpeg", caption: "Nuestra salidas juntos" },
    { src: "photos/gallery17.jpeg", caption: "Nuestras celebraciones juntos" },
    { src: "photos/gallery18.jpeg", caption: "Nuestro futuro" },
    { src: "photos/gallery19.jpeg", caption: "Los momentos de risas" },
    { src: "photos/gallery20.jpeg", caption: "Los momentos de tranquilidad" }
];

// Carta de amor (cada elemento es un párrafo)
const letterParagraphs = [
    "Mi amor, escribir esto no es fácil. Me cuesta porque me deja vulnerable, porque me obliga a aceptar que hemos pasado momentos complicados que me han dolido más de lo que a veces sé expresar. A veces me he sentido inseguro, confundido, incluso un poco humillado por seguir intentando cuando mi orgullo me dice que debería alejarme.",
    
    "He tratado de entender todo lo que hemos vivido. Entenderte a ti, entenderme a mí, entender por qué incluso cuando veo cosas que me lastiman sigo aquí. Y a veces me enojo conmigo mismo por eso. Me odio un poco por no ser más fuerte, por no ser más frío, por no irme cuando algo duele. Pero no puedo mentirme: sigo aquí porque te amo.",
    
    "No es un amor perfecto ni tranquilo. Es un amor real, con miedos, con dudas, con heridas abiertas. Cuando intento hablar de lo que me incomoda o de lo que quisiera cambiar, no lo hago desde el control ni desde la toxicidad. Sé que a veces puedo parecer intenso, pero mi intención no es limitarte ni señalarte, sino construir algo mejor, crear nuevos hábitos que nos hagan bien y no repetir cosas que nos lastimen.",
    
    "Me duele cuando siento que mis intentos de mejorar lo nuestro se interpretan como algo negativo. Porque en el fondo lo único que quiero es sentirnos seguros, tranquilos, elegidos. No quiero perderme en el proceso, no quiero dejar de ser yo, pero tampoco quiero dejar de intentar contigo.",
    
    "A pesar de todo, a pesar del dolor que a veces cargo por dentro, igualmente decido estar contigo. Decido quedarme no por costumbre ni por miedo, sino porque mi corazón todavía te elige. Y aunque duela, aunque me sienta vulnerable, aunque a veces me sienta pequeño… te amo. Y sigo aquí."
];

// Cupones canjeables
const loveCoupons = [
    {
        title: "Cena Romántica",
        emoji: "🍽️",
        description: "Una cena en el restaurante que tú elijas, con toda la atención del mundo para ti",
        validUntil: "31 Dic 2026",
        code: "AMOR001"
    },
    {
        title: "Cine o Película",
        emoji: "🎬",
        description: "Ida al cine a ver la película que quieras o una noche de películas en casa",
        validUntil: "31 Dic 2026",
        code: "AMOR002"
    },
    {
        title: "Día de Spa",
        emoji: "💆‍♀️",
        description: "Una tarde de spa, masajes o tratamiento de belleza que te mereces",
        validUntil: "31 Dic 2026",
        code: "AMOR003"
    },
    {
        title: "Perfume Aruma",
        emoji: "🌸",
        description: "El perfume que te gusta o cualquier producto de Aruma que elijas",
        validUntil: "31 Dic 2026",
        code: "AMOR004"
    },
    {
        title: "Salida a Bailar",
        emoji: "💃",
        description: "Una noche de fiesta y baile en el lugar que tú prefieras",
        validUntil: "31 Dic 2026",
        code: "AMOR005"
    },
    {
        title: "Helados o Postres",
        emoji: "🍦",
        description: "Salida a tu heladería favorita o ese antojo dulce que tanto quieres",
        validUntil: "31 Dic 2026",
        code: "AMOR006"
    },
    {
        title: "Escapada de Fin de Semana",
        emoji: "✈️",
        description: "Un viaje corto a la playa, montaña o cualquier destino que elijas",
        validUntil: "31 Dic 2026",
        code: "AMOR007"
    },
    {
        title: "Sesión de Fotos",
        emoji: "📸",
        description: "Una sesión de fotos juntos para crear recuerdos hermosos",
        validUntil: "31 Dic 2026",
        code: "AMOR008"
    },
    {
        title: "Concierto o Evento",
        emoji: "🎵",
        description: "Entradas para el concierto, evento o show que quieras ir",
        validUntil: "31 Dic 2026",
        code: "AMOR009"
    },
    {
        title: "Compra Especial",
        emoji: "🛍️",
        description: "Ese outfit, accesorio o cosa que has estado queriendo comprar",
        validUntil: "31 Dic 2026",
        code: "AMOR010"
    },
    {
        title: "Paseo o Actividad",
        emoji: "🎡",
        description: "Un día de parque, feria, museo, o la actividad que se te antoje hacer juntos",
        validUntil: "31 Dic 2026",
        code: "AMOR011"
    },
    {
        title: "Vale por lo que Quieras",
        emoji: "💝",
        description: "Vale libre para lo que tú decidas. Sin límites, sin preguntas.",
        validUntil: "31 Dic 2026",
        code: "AMOR012"
    }
];

// ================================
// FUNCIONALIDAD - NO MODIFICAR
// ================================

// Navegación entre tabs
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to selected tab and button
        document.getElementById(tabId).classList.add('active');
        button.classList.add('active');
    });
});

// Contador de días
function updateDaysCounter() {
    const today = new Date(2026, 1, 14); // Fecha actual (14 de febrero de 2026)
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const counterElement = document.getElementById('daysCounter');
    animateCounter(counterElement, 0, diffDays, 2000);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Crear tarjetas de razones
function createReasonCards() {
    const grid = document.getElementById('cardsGrid');
    
    reasons.forEach(reason => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="card-front">
                <div class="card-number">#${reason.number}</div>
                <div class="card-icon">${reason.emoji}</div>
                <div class="card-title">${reason.title}</div>
                <p style="color: #999; margin-top: 10px;">Click para ver más</p>
            </div>
            <div class="card-back">
                <div class="card-description">${reason.description}</div>
                ${reason.image ? `<img src="${reason.image}" alt="${reason.title}" class="card-image" onerror="this.style.display='none'">` : ''}
            </div>
        `;
        
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        grid.appendChild(card);
    });
}

// Crear timeline
function createTimeline() {
    const timeline = document.getElementById('timelineContent');
    
    timelineEvents.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-description">${event.description}</div>
                ${event.image ? `<img src="${event.image}" alt="${event.title}" class="timeline-image" onerror="this.style.display='none'" onclick="openModal(this, '${event.title}')">` : ''}
            </div>
            <div class="timeline-dot"></div>
        `;
        timeline.appendChild(item);
    });
}

// Crear galería
function createGallery() {
    const grid = document.getElementById('photoGrid');
    
    galleryPhotos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" onerror="this.parentElement.style.display='none'" onclick="openModal(this, '${photo.caption}')">
            <div class="photo-overlay">
                <div class="photo-caption">${photo.caption}</div>
            </div>
        `;
        grid.appendChild(item);
    });
}

// Crear carta
function createLetter() {
    const letterContent = document.getElementById('letterText');
    
    letterParagraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        letterContent.appendChild(p);
    });
}

// Crear cupones
function createCoupons() {
    const grid = document.getElementById('couponsGrid');
    
    loveCoupons.forEach((coupon, index) => {
        const ticket = document.createElement('div');
        ticket.className = 'coupon-ticket';
        ticket.innerHTML = `
            <div class="coupon-header">
                <div class="coupon-title">${coupon.title}</div>
                <span class="coupon-emoji">${coupon.emoji}</span>
            </div>
            <div class="coupon-body">
                <div class="coupon-description">${coupon.description}</div>
                <div class="coupon-footer">
                    <div class="coupon-code">CÓDIGO: ${coupon.code}</div>
                    <div class="coupon-validity">Válido hasta: ${coupon.validUntil}</div>
                </div>
            </div>
        `;
        
        // Agregar evento de clic para marcar como usado
        //ticket.addEventListener('click', () => {
        //    ticket.classList.toggle('coupon-used');
        //});
        
        grid.appendChild(ticket);
    });
}

// Descargar cupones como PDF
function downloadCouponsAsPDF() {
    const button = document.getElementById('downloadPdfBtn');
    const originalText = button.textContent;
    button.textContent = '⏳ Generando PDF...';
    button.disabled = true;
    
    // Crear contenedor temporal para el PDF
    const pdfContainer = document.createElement('div');
    pdfContainer.style.width = '190mm';
    pdfContainer.style.padding = '0';
    pdfContainer.style.background = 'white';
    pdfContainer.style.fontFamily = 'Arial, sans-serif';
    
    // Crear páginas con 2 cupones cada una
    loveCoupons.forEach((coupon, index) => {
        const couponDiv = document.createElement('div');
        couponDiv.style.width = '100%';
        couponDiv.style.height = '130mm';
        couponDiv.style.padding = '10mm';
        couponDiv.style.boxSizing = 'border-box';
        couponDiv.style.pageBreakInside = 'avoid';
        
        couponDiv.innerHTML = `
            <div style="background: white; border: 3px dashed #ff6b9d; border-radius: 12px; height: 100%; display: flex; flex-direction: column;">
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; position: relative;">
                    <h2 style="font-size: 22px; margin: 5px 0; font-weight: bold;">${coupon.title}</h2>
                    <div style="font-size: 40px; margin: 8px 0;">${coupon.emoji}</div>
                </div>
                <div style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="font-size: 16px; color: #2c1a1d; margin: 0; text-align: center; line-height: 1.5;">${coupon.description}</p>
                    <div style="text-align: center; padding: 12px 0; border-top: 2px dashed #ffc2d1; margin-top: 15px;">
                        <div style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: bold; color: #ff6b9d; letter-spacing: 2px; margin-bottom: 5px;">CÓDIGO: ${coupon.code}</div>
                        <div style="font-size: 12px; color: #999;">Válido hasta: ${coupon.validUntil}</div>
                    </div>
                </div>
            </div>
        `;
        
        pdfContainer.appendChild(couponDiv);
        
        // Agregar salto de página cada 2 cupones
        if ((index + 1) % 2 === 0 && index < loveCoupons.length - 1) {
            const pageBreak = document.createElement('div');
            pageBreak.style.pageBreakAfter = 'always';
            pageBreak.style.height = '0';
            pdfContainer.appendChild(pageBreak);
        }
    });
    
    document.body.appendChild(pdfContainer);
    
    const opt = {
        margin: [5, 10, 5, 10],
        filename: 'Cupones-de-Amor.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css'] }
    };
    
    html2pdf().set(opt).from(pdfContainer).save().then(() => {
        document.body.removeChild(pdfContainer);
        button.textContent = originalText;
        button.disabled = false;
    });
}

// Modal para imágenes
function openModal(img, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.textContent = caption;
}

document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
});

document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
        document.getElementById('imageModal').style.display = 'none';
    }
});

// Animación de corazones flotantes
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 500);
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    updateDaysCounter();
    createReasonCards();
    createTimeline();
    createGallery();
    createCoupons();
    createLetter();
    createFloatingHearts();
    
    // Event listener para descargar PDF
    document.getElementById('downloadPdfBtn').addEventListener('click', downloadCouponsAsPDF);
});
