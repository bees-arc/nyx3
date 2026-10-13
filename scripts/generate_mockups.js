const fs = require('fs');
const path = require('path');

const publicProjectsDir = path.join(__dirname, '../public/images/projects');
if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
}

function getBase64(filename) {
  const filePath = path.join(publicProjectsDir, filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath).toString('base64');
  }
  return '';
}

// 1. HOTEL: The Grand Haven Hotel & Resort
const hotelB64 = getBase64('hotel-haven.jpg');
const hotelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0B0C10" stop-opacity="0.3"/>
      <stop offset="55%" stop-color="#0B0C10" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0B0C10" stop-opacity="1"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#090A0D"/>

  <!-- Browser Chrome -->
  <rect width="100%" height="46" fill="#13151C"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#1D212C"/>
  <text x="116" y="27" fill="#8E95A5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">https://www.grandhaven-resort.com</text>

  <!-- Header Nav -->
  <rect y="46" width="100%" height="64" fill="rgba(10, 11, 15, 0.95)"/>
  <text x="36" y="86" fill="#EAE5D9" font-family="Georgia, serif" font-size="20" font-weight="bold" letter-spacing="3">THE GRAND HAVEN</text>
  <text x="440" y="83" fill="#A8ADB8" font-family="sans-serif" font-size="13">Suites &amp; Villas</text>
  <text x="550" y="83" fill="#A8ADB8" font-family="sans-serif" font-size="13">Culinary</text>
  <text x="630" y="83" fill="#A8ADB8" font-family="sans-serif" font-size="13">Wellness Spa</text>
  <text x="730" y="83" fill="#A8ADB8" font-family="sans-serif" font-size="13">Offers</text>
  <rect x="795" y="62" width="75" height="32" rx="16" fill="#D4AF37"/>
  <text x="815" y="82" fill="#0A0B0E" font-family="sans-serif" font-size="11" font-weight="bold">BOOK</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${hotelB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#hotelGrad)"/>

    <rect x="36" y="220" width="180" height="26" rx="13" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.4)"/>
    <text x="50" y="237" fill="#E5C365" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="2">★ 5-STAR LUXURY RESORT</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="Georgia, serif" font-size="44" font-weight="normal">Where Architectural Stillness</text>
    <text x="36" y="348" fill="#FFFFFF" font-family="Georgia, serif" font-size="44" font-weight="normal">Meets The Ocean Horizon.</text>
    <text x="36" y="392" fill="#C5CAD4" font-family="sans-serif" font-size="15">Cliffside infinity villas, bespoke thermal rituals, and Michelin-starred dining on the Mediterranean.</text>

    <!-- Booking Floating Bar -->
    <rect x="36" y="450" width="828" height="88" rx="14" fill="#141722" stroke="rgba(212,175,55,0.25)" filter="url(#cardShadow)"/>
    <text x="60" y="482" fill="#848B9E" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="1">CHECK-IN</text>
    <text x="60" y="510" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Thu, Nov 12</text>
    
    <line x1="240" y1="466" x2="240" y2="522" stroke="rgba(255,255,255,0.1)"/>
    <text x="264" y="482" fill="#848B9E" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="1">CHECK-OUT</text>
    <text x="264" y="510" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Tue, Nov 17</text>

    <line x1="450" y1="466" x2="450" y2="522" stroke="rgba(255,255,255,0.1)"/>
    <text x="474" y="482" fill="#848B9E" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="1">GUESTS &amp; ROOM</text>
    <text x="474" y="510" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">2 Adults · 1 Cliff Villa</text>

    <rect x="670" y="468" width="174" height="52" rx="10" fill="#D4AF37"/>
    <text x="704" y="500" fill="#0A0B0E" font-family="sans-serif" font-size="14" font-weight="bold">Check Rates →</text>
  </g>

  <!-- Showcase Cards -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#D4AF37" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="3">ACCOMMODATIONS</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="Georgia, serif" font-size="26">Curated Suites &amp; Residences</text>

    <!-- Room 1 -->
    <rect x="0" y="80" width="260" height="340" rx="14" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="0" y="80" width="260" height="170" rx="14" fill="#1B1F2D"/>
    <text x="18" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">Cliff Horizon Villa</text>
    <text x="18" y="302" fill="#8B92A2" font-family="sans-serif" font-size="13">Private infinity plunge &amp; terrace</text>
    <text x="18" y="348" fill="#E5C365" font-family="sans-serif" font-size="17" font-weight="bold">$1,150</text>
    <text x="78" y="348" fill="#667085" font-family="sans-serif" font-size="12">/ night</text>
    <rect x="175" y="328" width="70" height="30" rx="6" fill="rgba(212,175,55,0.15)" stroke="#D4AF37"/>
    <text x="194" y="348" fill="#D4AF37" font-family="sans-serif" font-size="11" font-weight="bold">Reserve</text>

    <!-- Room 2 -->
    <rect x="284" y="80" width="260" height="340" rx="14" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="284" y="80" width="260" height="170" rx="14" fill="#202534"/>
    <text x="302" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">Azure Ocean Pavilion</text>
    <text x="302" y="302" fill="#8B92A2" font-family="sans-serif" font-size="13">Direct beach access &amp; open lounge</text>
    <text x="302" y="348" fill="#E5C365" font-family="sans-serif" font-size="17" font-weight="bold">$1,620</text>
    <text x="362" y="348" fill="#667085" font-family="sans-serif" font-size="12">/ night</text>
    <rect x="459" y="328" width="70" height="30" rx="6" fill="rgba(212,175,55,0.15)" stroke="#D4AF37"/>
    <text x="478" y="348" fill="#D4AF37" font-family="sans-serif" font-size="11" font-weight="bold">Reserve</text>

    <!-- Room 3 -->
    <rect x="568" y="80" width="260" height="340" rx="14" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="568" y="80" width="260" height="170" rx="14" fill="#191D28"/>
    <text x="586" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">The Presidential Suite</text>
    <text x="586" y="302" fill="#8B92A2" font-family="sans-serif" font-size="13">3,400 sq ft duplex with personal chef</text>
    <text x="586" y="348" fill="#E5C365" font-family="sans-serif" font-size="17" font-weight="bold">$3,200</text>
    <text x="646" y="348" fill="#667085" font-family="sans-serif" font-size="12">/ night</text>
    <rect x="743" y="328" width="70" height="30" rx="6" fill="rgba(212,175,55,0.15)" stroke="#D4AF37"/>
    <text x="762" y="348" fill="#D4AF37" font-family="sans-serif" font-size="11" font-weight="bold">Reserve</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicProjectsDir, 'grand-haven-hotel.svg'), hotelSvg);

// 2. MEDICAL: Nexus Medical Center & Aesthetics
const medicalB64 = getBase64('nexus-medical.jpg');
const medicalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="medGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#081018" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#081018" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#081018" stop-opacity="1"/>
    </linearGradient>
    <filter id="medShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#070C12"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#0C1520"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#132132"/>
  <text x="116" y="27" fill="#67B0E8" font-family="sans-serif" font-size="12">https://www.nexus-medical.health</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(8, 16, 24, 0.95)"/>
  <circle cx="52" cy="78" r="14" fill="#0284C7"/>
  <path d="M52 70 v16 M44 78 h16" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  <text x="76" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="19" font-weight="bold" letter-spacing="1">NEXUS HEALTH</text>
  
  <text x="430" y="83" fill="#93C5FD" font-family="sans-serif" font-size="13">Specialties</text>
  <text x="525" y="83" fill="#93C5FD" font-family="sans-serif" font-size="13">Our Physicians</text>
  <text x="640" y="83" fill="#93C5FD" font-family="sans-serif" font-size="13">Technology</text>
  <text x="740" y="83" fill="#93C5FD" font-family="sans-serif" font-size="13">Patient Portal</text>
  <rect x="795" y="62" width="78" height="32" rx="6" fill="#0284C7"/>
  <text x="806" y="82" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">CONSULT</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${medicalB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#medGrad)"/>

    <rect x="36" y="220" width="220" height="26" rx="13" fill="rgba(2, 132, 199, 0.2)" stroke="rgba(56, 189, 248, 0.5)"/>
    <text x="50" y="237" fill="#38BDF8" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.5">● LEADING CLINICAL EXCELLENCE</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="bold">Advanced Medicine.</text>
    <text x="36" y="348" fill="#38BDF8" font-family="sans-serif" font-size="44" font-weight="bold">Compassionate Care.</text>
    <text x="36" y="392" fill="#BFDBFE" font-family="sans-serif" font-size="15">Pioneering diagnostic technology, world-class specialists, and personalized aesthetic healthcare.</text>

    <!-- Quick Appointment Booking Box -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#0F1D2F" stroke="rgba(56, 189, 248, 0.3)" filter="url(#medShadow)"/>
    <text x="60" y="478" fill="#7DD3FC" font-family="sans-serif" font-size="11" font-weight="bold">SELECT CLINICAL DEPARTMENT</text>
    <text x="60" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Aesthetic &amp; Regenerative Medicine</text>
    
    <line x1="380" y1="462" x2="380" y2="520" stroke="rgba(255,255,255,0.12)"/>
    <text x="405" y="478" fill="#7DD3FC" font-family="sans-serif" font-size="11" font-weight="bold">PREFERRED DATE</text>
    <text x="405" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Mon, Oct 19 · Morning Slot</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#0284C7"/>
    <text x="696" y="497" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Book Consultation →</text>
  </g>

  <!-- Clinical Pillars -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#38BDF8" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">CENTERS OF EXCELLENCE</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="sans-serif" font-size="26" font-weight="bold">Comprehensive Healthcare Services</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#0D1927" stroke="rgba(56,189,248,0.15)"/>
    <rect x="20" y="105" width="44" height="44" rx="8" fill="rgba(2,132,199,0.2)"/>
    <text x="32" y="134" fill="#38BDF8" font-family="sans-serif" font-size="22">🔬</text>
    <text x="20" y="185" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Advanced Diagnostics</text>
    <text x="20" y="215" fill="#94A3B8" font-family="sans-serif" font-size="13">High-resolution MRI, AI pathology, and same-day lab workups with zero wait times.</text>
    <text x="20" y="340" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#0D1927" stroke="rgba(56,189,248,0.15)"/>
    <rect x="304" y="105" width="44" height="44" rx="8" fill="rgba(2,132,199,0.2)"/>
    <text x="316" y="134" fill="#38BDF8" font-family="sans-serif" font-size="22">✨</text>
    <text x="304" y="185" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Aesthetic Dermatology</text>
    <text x="304" y="215" fill="#94A3B8" font-family="sans-serif" font-size="13">Non-invasive laser therapies, dermal contouring, and medical-grade skin restoration.</text>
    <text x="304" y="340" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#0D1927" stroke="rgba(56,189,248,0.15)"/>
    <rect x="588" y="105" width="44" height="44" rx="8" fill="rgba(2,132,199,0.2)"/>
    <text x="600" y="134" fill="#38BDF8" font-family="sans-serif" font-size="22">🧬</text>
    <text x="588" y="185" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Longevity &amp; Vitality</text>
    <text x="588" y="215" fill="#94A3B8" font-family="sans-serif" font-size="13">Metabolic optimization, peptide protocols, and preventative genetic screenings.</text>
    <text x="588" y="340" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicProjectsDir, 'nexus-medical-center.svg'), medicalSvg);

// 3. RESTAURANT: Kuro Fine Dining & Lounge
const restaurantB64 = getBase64('kuro-dining.jpg');
const restaurantSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="restGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#080706" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#080706" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#080706" stop-opacity="1"/>
    </linearGradient>
    <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#D97706" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#0A0908"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#141210"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#1F1C18"/>
  <text x="116" y="27" fill="#999" font-family="sans-serif" font-size="12">https://www.kuro-finedining.com</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(10, 9, 8, 0.95)"/>
  <text x="36" y="86" fill="#F3EAD8" font-family="Georgia, serif" font-size="22" font-weight="bold" letter-spacing="4">KURO · 玄</text>
  
  <text x="440" y="83" fill="#D1C7B7" font-family="sans-serif" font-size="13">Tasting Menu</text>
  <text x="545" y="83" fill="#D1C7B7" font-family="sans-serif" font-size="13">Wine Cellar</text>
  <text x="640" y="83" fill="#D1C7B7" font-family="sans-serif" font-size="13">Private Dining</text>
  <text x="745" y="83" fill="#D1C7B7" font-family="sans-serif" font-size="13">Story</text>
  <rect x="795" y="62" width="75" height="32" rx="4" fill="#C2410C"/>
  <text x="806" y="82" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">RESERVE</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${restaurantB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#restGrad)"/>

    <text x="36" y="235" fill="#F59E0B" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="3">✦ TWO MICHELIN STARS 2026</text>
    <text x="36" y="295" fill="#FFF8F0" font-family="Georgia, serif" font-size="46">Fire, Smoke &amp; The Art</text>
    <text x="36" y="350" fill="#FFF8F0" font-family="Georgia, serif" font-size="46">of Modern Gastronomy.</text>
    <text x="36" y="395" fill="#D4C9BC" font-family="sans-serif" font-size="15">A 14-course omakase culinary symphony crafted from rare seasonal harvests and wood-fired mastery.</text>

    <!-- Table Reservation Widget -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#161311" stroke="rgba(245, 158, 11, 0.25)" filter="url(#goldGlow)"/>
    <text x="60" y="478" fill="#A89F91" font-family="sans-serif" font-size="11" font-weight="bold">DATE &amp; SEATING</text>
    <text x="60" y="506" fill="#FFF8F0" font-family="sans-serif" font-size="15" font-weight="bold">Tonight · 8:30 PM (Chef's Counter)</text>
    
    <line x1="380" y1="462" x2="380" y2="520" stroke="rgba(255,255,255,0.1)"/>
    <text x="405" y="478" fill="#A89F91" font-family="sans-serif" font-size="11" font-weight="bold">NUMBER OF GUESTS</text>
    <text x="405" y="506" fill="#FFF8F0" font-family="sans-serif" font-size="15" font-weight="bold">2 Guests · Wine Pairing Included</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#C2410C"/>
    <text x="696" y="497" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Book A Table →</text>
  </g>

  <!-- Tasting Menu Highlights -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#F59E0B" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">AUTUMN TASTING ODYSSEY</text>
    <text x="0" y="56" fill="#FFF8F0" font-family="Georgia, serif" font-size="26">Signature Culinary Creations</text>

    <!-- Course 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#14110E" stroke="rgba(255,255,255,0.06)"/>
    <rect x="0" y="80" width="260" height="170" rx="12" fill="#1D1914"/>
    <text x="18" y="278" fill="#FFF8F0" font-family="Georgia, serif" font-size="17">A5 Miyazaki Wagyu</text>
    <text x="18" y="302" fill="#9E9484" font-family="sans-serif" font-size="13">Binchotan grilled with black winter truffle</text>
    <text x="18" y="348" fill="#F59E0B" font-family="sans-serif" font-size="15" font-weight="bold">Course 08</text>
    <text x="85" y="348" fill="#666" font-family="sans-serif" font-size="12">· Grand Tasting</text>

    <!-- Course 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#14110E" stroke="rgba(255,255,255,0.06)"/>
    <rect x="284" y="80" width="260" height="170" rx="12" fill="#241E18"/>
    <text x="302" y="278" fill="#FFF8F0" font-family="Georgia, serif" font-size="17">Hokkaido Sea Urchin</text>
    <text x="302" y="302" fill="#9E9484" font-family="sans-serif" font-size="13">Smoked dashi foam and Oscietra caviar</text>
    <text x="302" y="348" fill="#F59E0B" font-family="sans-serif" font-size="15" font-weight="bold">Course 04</text>
    <text x="370" y="348" fill="#666" font-family="sans-serif" font-size="12">· Grand Tasting</text>

    <!-- Course 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#14110E" stroke="rgba(255,255,255,0.06)"/>
    <rect x="568" y="80" width="260" height="170" rx="12" fill="#1E1913"/>
    <text x="586" y="278" fill="#FFF8F0" font-family="Georgia, serif" font-size="17">Valrhona Smoked Ganache</text>
    <text x="586" y="302" fill="#9E9484" font-family="sans-serif" font-size="13">Japanese whiskey gelato &amp; gold leaf</text>
    <text x="586" y="348" fill="#F59E0B" font-family="sans-serif" font-size="15" font-weight="bold">Course 14</text>
    <text x="655" y="348" fill="#666" font-family="sans-serif" font-size="12">· Dessert Finish</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicProjectsDir, 'kuro-dining-lounge.svg'), restaurantSvg);

// 4. CLEANING: PureSpark Eco Cleaning Co
const cleanB64 = getBase64('pure-clean.jpg');
const cleanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="cleanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#04120C" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#04120C" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#04120C" stop-opacity="1"/>
    </linearGradient>
    <filter id="greenGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#10B981" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#05120B"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#0A1D13"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#11291B"/>
  <text x="116" y="27" fill="#6EE7B7" font-family="sans-serif" font-size="12">https://www.purespark-cleaning.com</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(5, 18, 11, 0.95)"/>
  <text x="36" y="86" fill="#ECFDF5" font-family="sans-serif" font-size="20" font-weight="bold" letter-spacing="1">✨ PURESPARK</text>
  
  <text x="440" y="83" fill="#A7F3D0" font-family="sans-serif" font-size="13">Residential</text>
  <text x="540" y="83" fill="#A7F3D0" font-family="sans-serif" font-size="13">Commercial</text>
  <text x="645" y="83" fill="#A7F3D0" font-family="sans-serif" font-size="13">Eco Products</text>
  <text x="745" y="83" fill="#A7F3D0" font-family="sans-serif" font-size="13">Pricing</text>
  <rect x="795" y="62" width="78" height="32" rx="6" fill="#10B981"/>
  <text x="809" y="82" fill="#04120C" font-family="sans-serif" font-size="11" font-weight="bold">GET QUOTE</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${cleanB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#cleanGrad)"/>

    <rect x="36" y="220" width="220" height="26" rx="13" fill="rgba(16, 185, 129, 0.2)" stroke="rgba(52, 211, 153, 0.5)"/>
    <text x="50" y="237" fill="#34D399" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.5">🌱 100% NON-TOXIC &amp; ORGANIC</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="bold">Pristine Spaces.</text>
    <text x="36" y="348" fill="#34D399" font-family="sans-serif" font-size="44" font-weight="bold">Zero Harsh Chemicals.</text>
    <text x="36" y="392" fill="#D1FAE5" font-family="sans-serif" font-size="15">Five-star luxury residential and commercial cleaning with plant-based botanical sanitization.</text>

    <!-- Instant Pricing Calculator -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#0D2518" stroke="rgba(16, 185, 129, 0.3)" filter="url(#greenGlow)"/>
    <text x="60" y="478" fill="#6EE7B7" font-family="sans-serif" font-size="11" font-weight="bold">PROPERTY TYPE</text>
    <text x="60" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Luxury Apartment (3 Beds · 2 Baths)</text>
    
    <line x1="380" y1="462" x2="380" y2="520" stroke="rgba(255,255,255,0.12)"/>
    <text x="405" y="478" fill="#6EE7B7" font-family="sans-serif" font-size="11" font-weight="bold">FREQUENCY</text>
    <text x="405" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Weekly Deep Clean · Save 20%</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#10B981"/>
    <text x="696" y="497" fill="#04120C" font-family="sans-serif" font-size="14" font-weight="bold">Instant Estimate →</text>
  </g>

  <!-- Service Guarantees -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#34D399" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">THE PURESPARK PROMISE</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="sans-serif" font-size="26" font-weight="bold">Hospital-Grade Clean, Plant-Powered</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#0A1D13" stroke="rgba(16,185,129,0.15)"/>
    <text x="20" y="130" fill="#34D399" font-family="sans-serif" font-size="24">🌿</text>
    <text x="20" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Safe For Children &amp; Pets</text>
    <text x="20" y="205" fill="#A7F3D0" font-family="sans-serif" font-size="13">Zero synthetic perfumes, no sulfates, and allergen-free bio-enzymatic cleansing agents.</text>
    <text x="20" y="340" fill="#34D399" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#0A1D13" stroke="rgba(16,185,129,0.15)"/>
    <text x="304" y="130" fill="#34D399" font-family="sans-serif" font-size="24">🛡️</text>
    <text x="304" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Vetted &amp; Insured Staff</text>
    <text x="304" y="205" fill="#A7F3D0" font-family="sans-serif" font-size="13">Comprehensive background checks, $5M liability insurance, and 120-point quality checklist.</text>
    <text x="304" y="340" fill="#34D399" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#0A1D13" stroke="rgba(16,185,129,0.15)"/>
    <text x="588" y="130" fill="#34D399" font-family="sans-serif" font-size="24">💯</text>
    <text x="588" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">100% Sparkle Guarantee</text>
    <text x="588" y="205" fill="#A7F3D0" font-family="sans-serif" font-size="13">Not 100% satisfied? We return and reclean any area within 24 hours at zero additional charge.</text>
    <text x="588" y="340" fill="#34D399" font-family="sans-serif" font-size="13" font-weight="bold">Learn More →</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicProjectsDir, 'purespark-cleaning.svg'), cleanSvg);

// 5. FITNESS: Vanguard Athletic Club
const gymB64 = getBase64('gym-fitness.jpg');
const gymSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="gymGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#08080A" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#08080A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#08080A" stop-opacity="1"/>
    </linearGradient>
    <filter id="gymGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#EF4444" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#08080A"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#131317"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#1E1E24"/>
  <text x="116" y="27" fill="#F87171" font-family="sans-serif" font-size="12">https://www.vanguard-athletics.com</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(8, 8, 10, 0.95)"/>
  <text x="36" y="86" fill="#FFFFFF" font-family="Impact, sans-serif" font-size="24" letter-spacing="2">VANGUARD CLUB</text>
  
  <text x="440" y="83" fill="#E2E8F0" font-family="sans-serif" font-size="13">Programs</text>
  <text x="530" y="83" fill="#E2E8F0" font-family="sans-serif" font-size="13">Trainers</text>
  <text x="615" y="83" fill="#E2E8F0" font-family="sans-serif" font-size="13">Facilities</text>
  <text x="705" y="83" fill="#E2E8F0" font-family="sans-serif" font-size="13">Memberships</text>
  <rect x="795" y="62" width="75" height="32" rx="4" fill="#EF4444"/>
  <text x="806" y="82" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">JOIN NOW</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${gymB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#gymGrad)"/>

    <rect x="36" y="220" width="190" height="26" rx="13" fill="rgba(239, 68, 68, 0.2)" stroke="rgba(239, 68, 68, 0.5)"/>
    <text x="50" y="237" fill="#F87171" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">⚡ ELITE PERFORMANCE</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="Impact, sans-serif" font-size="48" letter-spacing="1">FORGE YOUR PEAK STATE.</text>
    <text x="36" y="348" fill="#EF4444" font-family="Impact, sans-serif" font-size="48" letter-spacing="1">UNCOMPROMISING FITNESS.</text>
    <text x="36" y="392" fill="#CBD5E1" font-family="sans-serif" font-size="15">State-of-the-art biohacking suites, Olympic lifting arenas, and world-class athletic coaches.</text>

    <!-- Trial Booking Widget -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#141419" stroke="rgba(239, 68, 68, 0.3)" filter="url(#gymGlow)"/>
    <text x="60" y="478" fill="#F87171" font-family="sans-serif" font-size="11" font-weight="bold">LOCATION</text>
    <text x="60" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Downtown Flagship · 5th Ave</text>
    
    <line x1="380" y1="462" x2="380" y2="520" stroke="rgba(255,255,255,0.1)"/>
    <text x="405" y="478" fill="#F87171" font-family="sans-serif" font-size="11" font-weight="bold">TRAINING GOAL</text>
    <text x="405" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Strength &amp; Hypertrophy</text>

    <rect x="670" y="465" width="174" height="52" rx="6" fill="#EF4444"/>
    <text x="700" y="497" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Claim Free Day Pass →</text>
  </g>

  <!-- Programs -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#EF4444" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">TRAINING DISCIPLINES</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="Impact, sans-serif" font-size="28" letter-spacing="1">MASTER EVERY ATHLETIC ATTRIBUTE</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#121217" stroke="rgba(255,255,255,0.06)"/>
    <text x="20" y="130" fill="#EF4444" font-family="sans-serif" font-size="24">🏋️</text>
    <text x="20" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Olympic Powerlifting</text>
    <text x="20" y="205" fill="#94A3B8" font-family="sans-serif" font-size="13">Calibrated Eleiko bars, competition platforms, and video bar-path velocity analysis.</text>
    <text x="20" y="340" fill="#EF4444" font-family="sans-serif" font-size="13" font-weight="bold">View Schedule →</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#121217" stroke="rgba(255,255,255,0.06)"/>
    <text x="304" y="130" fill="#EF4444" font-family="sans-serif" font-size="24">❄️</text>
    <text x="304" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Contrast Recovery Spa</text>
    <text x="304" y="205" fill="#94A3B8" font-family="sans-serif" font-size="13">Sub-zero cryo-chambers, Finnish wood saunas, and magnesium mineral cold plunges.</text>
    <text x="304" y="340" fill="#EF4444" font-family="sans-serif" font-size="13" font-weight="bold">View Schedule →</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#121217" stroke="rgba(255,255,255,0.06)"/>
    <text x="588" y="130" fill="#EF4444" font-family="sans-serif" font-size="24">⏱️</text>
    <text x="588" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">HIIT &amp; Metabolic Conditioning</text>
    <text x="588" y="205" fill="#94A3B8" font-family="sans-serif" font-size="13">Heart-rate mapped sprint tracks, assault bikes, and team endurance challenges.</text>
    <text x="588" y="340" fill="#EF4444" font-family="sans-serif" font-size="13" font-weight="bold">View Schedule →</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(publicProjectsDir, 'vanguard-athletics.svg'), gymSvg);

// 6. REAL ESTATE: Elysian Living & Estates
const realEstateB64 = getBase64('real-estate.jpg');
const estateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="estateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0A0B0E" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#0A0B0E" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#0A0B0E" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="#0A0B0E"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#14161C"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#1C1F28"/>
  <text x="116" y="27" fill="#C5A059" font-family="sans-serif" font-size="12">https://www.elysian-estates.luxury</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(10, 11, 14, 0.95)"/>
  <text x="36" y="86" fill="#FFFFFF" font-family="Georgia, serif" font-size="21" font-weight="bold" letter-spacing="3">ELYSIAN ESTATES</text>
  
  <text x="440" y="83" fill="#D1D5DB" font-family="sans-serif" font-size="13">Exclusive Listings</text>
  <text x="560" y="83" fill="#D1D5DB" font-family="sans-serif" font-size="13">Penthouses</text>
  <text x="660" y="83" fill="#D1D5DB" font-family="sans-serif" font-size="13">Private Islands</text>
  <text x="770" y="83" fill="#D1D5DB" font-family="sans-serif" font-size="13">Advisory</text>
  <rect x="800" y="62" width="70" height="32" rx="4" fill="#C5A059"/>
  <text x="812" y="82" fill="#0A0B0E" font-family="sans-serif" font-size="11" font-weight="bold">INQUIRE</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${realEstateB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#estateGrad)"/>

    <rect x="36" y="220" width="230" height="26" rx="13" fill="rgba(197, 160, 89, 0.2)" stroke="rgba(197, 160, 89, 0.5)"/>
    <text x="50" y="237" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.5">◆ ULTRA-LUXURY ARCHITECTURAL HOMES</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="Georgia, serif" font-size="44">Extraordinary Living.</text>
    <text x="36" y="348" fill="#E2C58F" font-family="Georgia, serif" font-size="44">Iconic Addresses.</text>
    <text x="36" y="392" fill="#D1D5DB" font-family="sans-serif" font-size="15">Curating the world's most distinguished private residential compounds and waterfront estates.</text>

    <!-- Property Search Bar -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#141722" stroke="rgba(197, 160, 89, 0.3)"/>
    <text x="60" y="478" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="bold">LOCATION / METRO</text>
    <text x="60" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Beverly Hills &amp; Malibu Coastal</text>
    
    <line x1="380" y1="462" x2="380" y2="520" stroke="rgba(255,255,255,0.1)"/>
    <text x="405" y="478" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="bold">PRICE RANGE</text>
    <text x="405" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">$10,000,000 — $45,000,000</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#C5A059"/>
    <text x="702" y="497" fill="#0A0B0E" font-family="sans-serif" font-size="14" font-weight="bold">Explore Estates →</text>
  </g>

  <!-- Showcase Cards -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#C5A059" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">PRIVATE COLLECTION</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="Georgia, serif" font-size="26">Featured Architectural Masterpieces</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="0" y="80" width="260" height="170" rx="12" fill="#1E2330"/>
    <text x="18" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">The Bel Air Promontory</text>
    <text x="18" y="302" fill="#9CA3AF" font-family="sans-serif" font-size="13">6 Beds · 9 Baths · 14,200 sq ft</text>
    <text x="18" y="348" fill="#E2C58F" font-family="sans-serif" font-size="17" font-weight="bold">$28,500,000</text>
    <rect x="175" y="328" width="70" height="30" rx="4" fill="rgba(197, 160, 89, 0.2)" stroke="#C5A059"/>
    <text x="194" y="348" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="bold">View</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="284" y="80" width="260" height="170" rx="12" fill="#222838"/>
    <text x="302" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">Malibu Glass Pavilion</text>
    <text x="302" y="302" fill="#9CA3AF" font-family="sans-serif" font-size="13">Direct Beach Access · Infinity Pool</text>
    <text x="302" y="348" fill="#E2C58F" font-family="sans-serif" font-size="17" font-weight="bold">$19,750,000</text>
    <rect x="459" y="328" width="70" height="30" rx="4" fill="rgba(197, 160, 89, 0.2)" stroke="#C5A059"/>
    <text x="478" y="348" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="bold">View</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#131620" stroke="rgba(255,255,255,0.06)"/>
    <rect x="568" y="80" width="260" height="170" rx="12" fill="#1A1E29"/>
    <text x="586" y="278" fill="#FFFFFF" font-family="Georgia, serif" font-size="18">Tribeca Duplex Penthouse</text>
    <text x="586" y="302" fill="#9CA3AF" font-family="sans-serif" font-size="13">Private Rooftop Pool &amp; 360° Views</text>
    <text x="586" y="348" fill="#E2C58F" font-family="sans-serif" font-size="17" font-weight="bold">$24,000,000</text>
    <rect x="743" y="328" width="70" height="30" rx="4" fill="rgba(197, 160, 89, 0.2)" stroke="#C5A059"/>
    <text x="762" y="348" fill="#E2C58F" font-family="sans-serif" font-size="11" font-weight="bold">View</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(publicProjectsDir, 'elysian-estates.svg'), estateSvg);

// 7. CAFE & BAKERY: Velvet Roast Coffee & Bakery
const cafeB64 = getBase64('cafe-roast.jpg');
const cafeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="cafeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#140C07" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#140C07" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#140C07" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="#120A05"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#1E120A"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#2C1A10"/>
  <text x="116" y="27" fill="#D97706" font-family="sans-serif" font-size="12">https://www.velvetroast-cafe.com</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(18, 10, 5, 0.95)"/>
  <text x="36" y="86" fill="#FEF3C7" font-family="Georgia, serif" font-size="21" font-weight="bold" letter-spacing="2">☕ VELVET ROAST</text>
  
  <text x="440" y="83" fill="#E5D5C5" font-family="sans-serif" font-size="13">Single Origin Beans</text>
  <text x="575" y="83" fill="#E5D5C5" font-family="sans-serif" font-size="13">Artisan Pastries</text>
  <text x="685" y="83" fill="#E5D5C5" font-family="sans-serif" font-size="13">Brew Bar</text>
  <rect x="785" y="62" width="85" height="32" rx="16" fill="#D97706"/>
  <text x="802" y="82" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">ORDER NOW</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${cafeB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#cafeGrad)"/>

    <rect x="36" y="220" width="220" height="26" rx="13" fill="rgba(217, 119, 6, 0.2)" stroke="rgba(217, 119, 6, 0.5)"/>
    <text x="50" y="237" fill="#FBBF24" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.5">☕ SMALL-BATCH ARTISAN ROASTERY</text>

    <text x="36" y="295" fill="#FFFBEB" font-family="Georgia, serif" font-size="44">Ethically Sourced.</text>
    <text x="36" y="348" fill="#FBBF24" font-family="Georgia, serif" font-size="44">Masterfully Roasted.</text>
    <text x="36" y="392" fill="#E5D5C5" font-family="sans-serif" font-size="15">Savor wild Ethiopian natural beans paired with slow-fermented French sourdough pastries.</text>

    <!-- Quick Order Bar -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#20130A" stroke="rgba(217, 119, 6, 0.3)"/>
    <text x="60" y="478" fill="#FBBF24" font-family="sans-serif" font-size="11" font-weight="bold">SIGNATURE COFFEE SUBSCRIPTION</text>
    <text x="60" y="506" fill="#FFFBEB" font-family="sans-serif" font-size="15" font-weight="bold">Gesha Village Lot 74 · Filter Roast (250g)</text>
    
    <line x1="420" y1="462" x2="420" y2="520" stroke="rgba(255,255,255,0.1)"/>
    <text x="445" y="478" fill="#FBBF24" font-family="sans-serif" font-size="11" font-weight="bold">DELIVERY FREQUENCY</text>
    <text x="445" y="506" fill="#FFFBEB" font-family="sans-serif" font-size="15" font-weight="bold">Fresh Roasted Every 2 Weeks</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#D97706"/>
    <text x="702" y="497" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Subscribe $22/bag →</text>
  </g>

  <!-- Bakery & Coffee Highlights -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#FBBF24" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">ROASTERY PICKS</text>
    <text x="0" y="56" fill="#FFFBEB" font-family="Georgia, serif" font-size="26">Handcrafted Mornings</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#1C1008" stroke="rgba(255,255,255,0.06)"/>
    <text x="20" y="130" fill="#FBBF24" font-family="sans-serif" font-size="24">☕</text>
    <text x="20" y="175" fill="#FFFBEB" font-family="Georgia, serif" font-size="18">Ethiopian Yirgacheffe</text>
    <text x="20" y="205" fill="#BFA796" font-family="sans-serif" font-size="13">Jasmine flower, bergamot, and sweet peach nectar notes.</text>
    <text x="20" y="340" fill="#FBBF24" font-family="sans-serif" font-size="14" font-weight="bold">$24 / 250g</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#1C1008" stroke="rgba(255,255,255,0.06)"/>
    <text x="304" y="130" fill="#FBBF24" font-family="sans-serif" font-size="24">🥐</text>
    <text x="304" y="175" fill="#FFFBEB" font-family="Georgia, serif" font-size="18">Isigny Butter Croissant</text>
    <text x="304" y="205" fill="#BFA796" font-family="sans-serif" font-size="13">72-hour lamination with French Normandy cultured butter.</text>
    <text x="304" y="340" fill="#FBBF24" font-family="sans-serif" font-size="14" font-weight="bold">$6.50 / piece</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#1C1008" stroke="rgba(255,255,255,0.06)"/>
    <text x="588" y="130" fill="#FBBF24" font-family="sans-serif" font-size="24">🍵</text>
    <text x="588" y="175" fill="#FFFBEB" font-family="Georgia, serif" font-size="18">Ceremonial Uji Matcha</text>
    <text x="588" y="205" fill="#BFA796" font-family="sans-serif" font-size="13">Stone-ground Kyoto green tea whisked with creamy oat milk.</text>
    <text x="588" y="340" fill="#FBBF24" font-family="sans-serif" font-size="14" font-weight="bold">$7.50 / cup</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(publicProjectsDir, 'velvet-roast-cafe.svg'), cafeSvg);

// 8. DENTAL: Radiance Dental Studio
const dentalB64 = getBase64('dental-clinic.jpg');
const dentalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200">
  <defs>
    <linearGradient id="dentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#081418" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#081418" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#081418" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="#071317"/>

  <!-- Browser Header -->
  <rect width="100%" height="46" fill="#0E2127"/>
  <circle cx="28" cy="23" r="5" fill="#FF5F56"/>
  <circle cx="46" cy="23" r="5" fill="#FFBD2E"/>
  <circle cx="64" cy="23" r="5" fill="#27C93F"/>
  <rect x="96" y="11" width="708" height="24" rx="6" fill="#16313A"/>
  <text x="116" y="27" fill="#2DD4BF" font-family="sans-serif" font-size="12">https://www.radiance-dental.studio</text>

  <!-- Navigation Bar -->
  <rect y="46" width="100%" height="64" fill="rgba(7, 19, 23, 0.95)"/>
  <text x="36" y="86" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold" letter-spacing="1">✨ RADIANCE DENTAL</text>
  
  <text x="440" y="83" fill="#99F6E4" font-family="sans-serif" font-size="13">Cosmetic Smile</text>
  <text x="560" y="83" fill="#99F6E4" font-family="sans-serif" font-size="13">Invisalign</text>
  <text x="650" y="83" fill="#99F6E4" font-family="sans-serif" font-size="13">Laser Whitening</text>
  <rect x="785" y="62" width="85" height="32" rx="6" fill="#14B8A6"/>
  <text x="800" y="82" fill="#042F2E" font-family="sans-serif" font-size="11" font-weight="bold">BOOK VISIT</text>

  <!-- Hero Section -->
  <g transform="translate(0, 110)">
    <image href="data:image/jpeg;base64,${dentalB64}" width="900" height="580" preserveAspectRatio="xMidYMid slice"/>
    <rect width="900" height="580" fill="url(#dentGrad)"/>

    <rect x="36" y="220" width="220" height="26" rx="13" fill="rgba(20, 184, 166, 0.2)" stroke="rgba(45, 212, 191, 0.5)"/>
    <text x="50" y="237" fill="#2DD4BF" font-family="sans-serif" font-size="11" font-weight="600" letter-spacing="1.5">💎 BOUTIQUE COSMETIC DENTISTRY</text>

    <text x="36" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="bold">The Modern Art of</text>
    <text x="36" y="348" fill="#2DD4BF" font-family="sans-serif" font-size="44" font-weight="bold">Flawless Smiles.</text>
    <text x="36" y="392" fill="#CCFBF1" font-family="sans-serif" font-size="15">Pain-free 3D digital smile design, porcelain veneers, and luxury spa-like dental comfort.</text>

    <!-- Consultation Bar -->
    <rect x="36" y="445" width="828" height="92" rx="12" fill="#0F2830" stroke="rgba(45, 212, 191, 0.3)"/>
    <text x="60" y="478" fill="#2DD4BF" font-family="sans-serif" font-size="11" font-weight="bold">TREATMENT INTEREST</text>
    <text x="60" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">Custom Porcelain Veneers &amp; Smile Design</text>
    
    <line x1="420" y1="462" x2="420" y2="520" stroke="rgba(255,255,255,0.1)"/>
    <text x="445" y="478" fill="#2DD4BF" font-family="sans-serif" font-size="11" font-weight="bold">EXAM DATE</text>
    <text x="445" y="506" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold">This Week · Complimentary 3D Scan</text>

    <rect x="670" y="465" width="174" height="52" rx="8" fill="#14B8A6"/>
    <text x="702" y="497" fill="#042F2E" font-family="sans-serif" font-size="14" font-weight="bold">Free Consultation →</text>
  </g>

  <!-- Dental Services -->
  <g transform="translate(36, 730)">
    <text x="0" y="24" fill="#2DD4BF" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2">ADVANCED SMILE SOLUTIONS</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="sans-serif" font-size="26" font-weight="bold">Gentle Care, Dramatic Results</text>

    <!-- Card 1 -->
    <rect x="0" y="80" width="260" height="340" rx="12" fill="#0E232A" stroke="rgba(45,212,191,0.15)"/>
    <text x="20" y="130" fill="#2DD4BF" font-family="sans-serif" font-size="24">✨</text>
    <text x="20" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Handcrafted Veneers</text>
    <text x="20" y="205" fill="#99F6E4" font-family="sans-serif" font-size="13">Ultra-thin feldspathic porcelain designed to mimic natural enamel light refraction.</text>
    <text x="20" y="340" fill="#2DD4BF" font-family="sans-serif" font-size="13" font-weight="bold">Explore Veneers →</text>

    <!-- Card 2 -->
    <rect x="284" y="80" width="260" height="340" rx="12" fill="#0E232A" stroke="rgba(45,212,191,0.15)"/>
    <text x="304" y="130" fill="#2DD4BF" font-family="sans-serif" font-size="24">🦷</text>
    <text x="304" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Clear Aligners</text>
    <text x="304" y="205" fill="#99F6E4" font-family="sans-serif" font-size="13">Discreet orthodontic alignment with 3D digital progress tracking every week.</text>
    <text x="304" y="340" fill="#2DD4BF" font-family="sans-serif" font-size="13" font-weight="bold">Explore Aligners →</text>

    <!-- Card 3 -->
    <rect x="568" y="80" width="260" height="340" rx="12" fill="#0E232A" stroke="rgba(45,212,191,0.15)"/>
    <text x="588" y="130" fill="#2DD4BF" font-family="sans-serif" font-size="24">⚡</text>
    <text x="588" y="175" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold">Laser Teeth Whitening</text>
    <text x="588" y="205" fill="#99F6E4" font-family="sans-serif" font-size="13">Up to 8 shades whiter in a single 45-minute gentle session with zero sensitivity.</text>
    <text x="588" y="340" fill="#2DD4BF" font-family="sans-serif" font-size="13" font-weight="bold">Explore Whitening →</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(publicProjectsDir, 'radiance-dental.svg'), dentalSvg);

console.log('Successfully generated all mockups!');
