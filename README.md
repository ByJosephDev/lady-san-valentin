# 💝 Proyecto San Valentín - Sitio Web Romántico

¡Tu sitio web personalizado de San Valentín está listo! 🎉

## 🚀 Cómo usar

1. **Abre el archivo** `index.html` en tu navegador
2. **Personaliza el contenido** en `script.js`
3. **Agrega tus fotos** en la carpeta `photos/`

## 📸 Agregar tus fotos

Guarda tus fotos en la carpeta `photos/` con estos nombres:

### Foto principal:
- `main.jpg` - La foto principal de la página de inicio

### Razones (9 fotos):
- `reason1.jpg` hasta `reason9.jpg` - Una foto para cada razón

### Timeline (5 fotos):
- `timeline1.jpg` hasta `timeline5.jpg` - Fotos de momentos importantes

### Galería (9 fotos):
- `gallery1.jpg` hasta `gallery9.jpg` - Fotos para la galería

**Nota:** Si no tienes todas las fotos, no hay problema. Las que falten simplemente no se mostrarán.

## ✏️ Personalizar el contenido

Abre `script.js` y edita la sección de **CONFIGURACIÓN** al inicio del archivo:

### 1. Fecha de inicio de la relación
```javascript
const startDate = new Date(2024, 0, 15); // (año, mes-1, día)
```

### 2. Razones por las que la amas
Edita el array `reasons` con tus propias razones

### 3. Timeline de eventos
Edita el array `timelineEvents` con momentos importantes de su relación

### 4. Fotos de la galería
Edita el array `galleryPhotos` con las descripciones de tus fotos

### 5. Carta de amor
Edita el array `letterParagraphs` con tu mensaje personal

### 6. Cupones de Amor
Edita el array `loveCoupons` para agregar o modificar los cupones canjeables. Cada cupón incluye:
- `title`: Título del cupón
- `emoji`: Emoji representativo
- `description`: Descripción de qué se puede canjear
- `validUntil`: Fecha de validez
- `code`: Código único del cupón

## 🎨 Secciones incluidas

- **Inicio**: Foto principal y contador de días juntos
- **Razones**: Tarjetas interactivas que se voltean al hacer clic
- **Nuestra Historia**: Timeline hermoso de su relación
- **Galería**: Cuadrícula de fotos con descripciones
- **Cupones**: 12 cupones canjeables con opción de descarga en PDF
- **Carta**: Tu mensaje personal con efecto de escritura

## 💡 Características

✨ Animación de corazones flotantes en el fondo
🎯 Diseño responsive (se ve bien en móvil y computadora)
🔄 Tarjetas que se voltean al hacer clic
🖼️ Modal para ver las fotos en grande
📱 Navegación intuitiva entre secciones
💖 Colores y gradientes románticos
🎫 12 cupones de amor personalizables y descargables en PDF
🖱️ Click en los cupones para marcarlos como "canjeados"

## 🎁 Cómo usar los Cupones

1. **Personaliza** los cupones editando el array `loveCoupons` en `script.js`
2. **Descarga** todos los cupones en PDF usando el botón de descarga
3. **Imprime** el PDF o compártelo digitalmente
4. **Canjea** los cupones cuando quieras - haz clic en ellos para marcarlos como usados
5. **Disfruta** los momentos especiales juntos 💝

Ideas para cupones:
- Citas románticas
- Actividades juntos
- Eventos especiales
- Viajes o escapadas
- Favores especiales
- Sorpresas personalizadas

## 🎁 Tips adicionales

- Usa fotos de buena calidad para mejor resultado
- Los formatos JPG, PNG y JPEG funcionan perfectamente
- Puedes agregar más razones, eventos o fotos duplicando los objetos en los arrays
- El contador de días se calcula automáticamente desde la fecha que pongas

## 🌐 Compartir

Para compartir este sitio:
1. **Sube todo a GitHub Pages** (gratis)
2. **Usa Netlify o Vercel** para hosting gratuito
3. O simplemente **abre el index.html** directamente desde tu computadora

---

¡Hecho con ❤️ para tu persona especial!
