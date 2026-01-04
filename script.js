/* ============================================
   PostureCoach - Main JavaScript
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    fr: {
        // Announcement
        announcement: "🚀 LIVRAISON OFFERTE + Garantie 30 jours satisfait ou remboursé",
        
        // Navigation
        nav_cta: "Commander",
        
        // Hero
        hero_badge: "✨ Le 1er correcteur INTELLIGENT avec App",
        hero_title_1: "Votre coach posture",
        hero_title_2: "dans votre poche.",
        hero_subtitle: "Le correcteur de posture intelligent qui vibre quand vous vous tenez mal. App Bluetooth, cours de posture, jeux interactifs. Résultats en 21 jours.",
        hero_cta: "Découvrir PostureCoach",
        price_badge: "-44%",
        trust_1: "Livraison gratuite",
        trust_2: "App iOS & Android",
        trust_3: "Capteurs intelligents",
        placeholder_hero: "Image produit hero",
        
        // Problem
        problem_tag: "Le problème",
        problem_title: "Les correcteurs classiques ne marchent pas",
        problem_subtitle: "Les sangles inconfortables ne corrigent rien. Votre corps a besoin d'apprendre, pas d'être forcé.",
        problem_1_title: "Sangles inconfortables",
        problem_1_desc: "Les correcteurs classiques compriment et irritent. Impossible de les porter longtemps.",
        problem_2_title: "Pas de feedback",
        problem_2_desc: "Comment savoir si vous vous tenez bien ? Sans retour, pas de progrès.",
        problem_3_title: "Pas de motivation",
        problem_3_desc: "Sans suivi ni objectifs, on abandonne après quelques jours.",
        
        // Solution
        solution_tag: "La révolution",
        solution_title: "PostureCoach : Le correcteur qui vous apprend",
        solution_desc: "Des capteurs intelligents détectent votre posture en temps réel. Une vibration douce vous rappelle de vous redresser. L'app suit vos progrès et vous motive.",
        feature_1: "Capteur intelligent avec vibration 5-20°",
        feature_2: "App Bluetooth iOS & Android incluse",
        feature_3: "Cours de posture professionnels",
        feature_4: "Jeux interactifs pour rester motivé",
        solution_cta: "Je veux PostureCoach",
        placeholder_product: "Image produit porté",
        
        // How it works
        how_tag: "Comment ça marche",
        how_title: "Votre transformation en 3 étapes",
        how_1_title: "Connectez l'app",
        how_1_desc: "Téléchargez l'app PostureCoach, connectez via Bluetooth en 10 secondes.",
        how_2_title: "Portez & apprenez",
        how_2_desc: "PostureCoach vibre quand vous vous tenez mal. Suivez les cours de posture.",
        how_3_title: "21 jours = nouvelle posture",
        how_3_desc: "L'app suit vos progrès. En 21 jours, vous avez une posture naturellement droite.",
        
        // Transformation
        transform_tag: "Pour toute la famille",
        transform_title: "Adultes et enfants, au bureau ou à la maison",
        placeholder_before: "Lifestyle",
        placeholder_after: "Lifestyle",
        before_label: "Discret et élégant",
        after_label: "Pour tous les âges",
        
        // Reviews
        reviews_tag: "Avis clients",
        reviews_title: "Ce qu'ils disent d'PostureCoach",
        reviews_summary: "4.8/5 basé sur 2,847 avis",
        verified: "✓ Achat vérifié",
        review_1: "\"L'app fait toute la différence ! La vibration m'a vraiment appris à me tenir droit. Après 3 semaines, je n'ai presque plus besoin de le porter.\"",
        review_2: "\"Les jeux de posture sont addictifs ! Ma fille de 12 ans l'adore aussi. On fait des concours de score en famille.\"",
        review_3: "\"J'ai essayé les correcteurs à sangles pendant des années. PostureCoach est la première solution qui marche vraiment car elle APPREND à mon corps.\"",
        review_4: "\"Produit tech vraiment bien pensé. L'app est intuitive, la vibration n'est pas gênante. Livraison un peu longue mais ça vaut le coup.\"",
        
        // Order
        order_tag: "Offre de lancement",
        order_title: "Obtenez PostureCoach Smart Coach",
        order_savings: "Vous économisez 50€ !",
        benefit_1: "Livraison GRATUITE",
        benefit_2: "App iOS & Android incluse",
        benefit_3: "Garantie 30 jours",
        benefit_4: "Support client 7j/7",
        size_label: "Choisissez votre version :",
        size_guide: "Adulte : taille unique ajustable | Enfant : 6-14 ans",
        order_cta: "Commander maintenant - 69,99€",
        payment_secure: "Paiement sécurisé par Stripe",
        urgency_text: "Stock limité : Plus que <strong>23</strong> unités disponibles",
        placeholder_order: "Image produit",
        
        // FAQ
        faq_tag: "FAQ",
        faq_title: "Questions fréquentes",
        faq_1_q: "Comment fonctionne la détection de posture ?",
        faq_1_a: "PostureCoach contient un capteur de mouvement haute précision. Quand vous vous penchez de plus de 5-20° (réglable), il émet une vibration douce pour vous rappeler de vous redresser.",
        faq_2_q: "L'app est-elle vraiment incluse ?",
        faq_2_a: "Oui ! L'app PostureCoach est 100% gratuite sur iOS et Android. Elle inclut : suivi de posture en temps réel, cours professionnels, jeux interactifs, et statistiques quotidiennes.",
        faq_3_q: "Combien de temps tient la batterie ?",
        faq_3_a: "La batterie dure environ 7 jours en utilisation normale. La charge complète prend 1h30 via USB-C (câble inclus).",
        faq_4_q: "Y a-t-il une version pour enfants ?",
        faq_4_a: "Oui ! Nous proposons une version Enfant (6-14 ans) en rose ou bleu, spécialement conçue pour les plus jeunes avec les mêmes fonctionnalités.",
        faq_5_q: "Quels sont les délais de livraison ?",
        faq_5_a: "La livraison prend 8-15 jours ouvrés pour la France et l'Europe, 10-20 jours pour le reste du monde. Vous recevrez un numéro de suivi par email.",
        faq_6_q: "Comment fonctionne la garantie ?",
        faq_6_a: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas satisfait, contactez-nous et nous vous rembourserons intégralement, sans question.",
        
        // Final CTA
        final_title: "Prêt à transformer votre posture ?",
        final_subtitle: "Rejoignez +50,000 personnes qui ont appris à se tenir droit avec PostureCoach.",
        final_cta: "Commander PostureCoach - 69,99€",
        
        // Footer
        footer_tagline: "Redressez votre posture. Transformez votre vie.",
        footer_cgv: "Conditions générales",
        footer_privacy: "Confidentialité",
        footer_mentions: "Mentions légales",
        footer_contact: "Contact",
        footer_rights: "Tous droits réservés."
    },
    en: {
        // Announcement
        announcement: "🚀 FREE SHIPPING + 30-day money-back guarantee",
        
        // Navigation
        nav_cta: "Order Now",
        
        // Hero
        hero_badge: "✨ The 1st SMART Posture Corrector with App",
        hero_title_1: "Your posture coach",
        hero_title_2: "in your pocket.",
        hero_subtitle: "The intelligent posture corrector that vibrates when you slouch. Bluetooth app, posture courses, interactive games. Results in 21 days.",
        hero_cta: "Discover PostureCoach",
        price_badge: "-44%",
        trust_1: "Free shipping",
        trust_2: "iOS & Android App",
        trust_3: "Smart sensors",
        placeholder_hero: "Hero product image",
        
        // Problem
        problem_tag: "The problem",
        problem_title: "Traditional correctors don't work",
        problem_subtitle: "Uncomfortable straps don't fix anything. Your body needs to learn, not be forced.",
        problem_1_title: "Uncomfortable straps",
        problem_1_desc: "Classic correctors compress and irritate. Impossible to wear for long.",
        problem_2_title: "No feedback",
        problem_2_desc: "How do you know if you're standing right? Without feedback, no progress.",
        problem_3_title: "No motivation",
        problem_3_desc: "Without tracking or goals, you give up after a few days.",
        
        // Solution
        solution_tag: "The revolution",
        solution_title: "PostureCoach: The corrector that teaches you",
        solution_desc: "Smart sensors detect your posture in real-time. A gentle vibration reminds you to straighten up. The app tracks your progress and keeps you motivated.",
        feature_1: "Smart sensor with 5-20° vibration",
        feature_2: "Bluetooth iOS & Android app included",
        feature_3: "Professional posture courses",
        feature_4: "Interactive games to stay motivated",
        solution_cta: "I want PostureCoach",
        placeholder_product: "Product worn image",
        
        // How it works
        how_tag: "How it works",
        how_title: "Your transformation in 3 steps",
        how_1_title: "Connect the app",
        how_1_desc: "Download the PostureCoach app, connect via Bluetooth in 10 seconds.",
        how_2_title: "Wear & learn",
        how_2_desc: "PostureCoach vibrates when you slouch. Follow the posture courses.",
        how_3_title: "21 days = new posture",
        how_3_desc: "The app tracks your progress. In 21 days, you have naturally straight posture.",
        
        // Transformation
        transform_tag: "For the whole family",
        transform_title: "Adults and kids, at the office or at home",
        placeholder_before: "Lifestyle",
        placeholder_after: "Lifestyle",
        before_label: "Discreet and elegant",
        after_label: "For all ages",
        
        // Reviews
        reviews_tag: "Customer reviews",
        reviews_title: "What they say about PostureCoach",
        reviews_summary: "4.8/5 based on 2,847 reviews",
        verified: "✓ Verified purchase",
        review_1: "\"The app makes all the difference! The vibration really taught me to stand straight. After 3 weeks, I barely need to wear it anymore.\"",
        review_2: "\"The posture games are addictive! My 12-year-old loves it too. We have score competitions as a family.\"",
        review_3: "\"I tried strap correctors for years. PostureCoach is the first solution that actually works because it TEACHES my body.\"",
        review_4: "\"Really well-designed tech product. The app is intuitive, the vibration isn't annoying. Shipping a bit long but worth it.\"",
        
        // Order
        order_tag: "Launch offer",
        order_title: "Get PostureCoach Smart Coach",
        order_savings: "You save $60!",
        benefit_1: "FREE Shipping",
        benefit_2: "iOS & Android App included",
        benefit_3: "30-day guarantee",
        benefit_4: "24/7 customer support",
        size_label: "Choose your version:",
        size_guide: "Adult: one size fits all | Kids: 6-14 years",
        order_cta: "Order now - $79.99",
        payment_secure: "Secure payment by Stripe",
        urgency_text: "Limited stock: Only <strong>23</strong> units left",
        placeholder_order: "Product image",
        
        // FAQ
        faq_tag: "FAQ",
        faq_title: "Frequently asked questions",
        faq_1_q: "How does posture detection work?",
        faq_1_a: "PostureCoach contains a high-precision motion sensor. When you lean more than 5-20° (adjustable), it emits a gentle vibration to remind you to straighten up.",
        faq_2_q: "Is the app really included?",
        faq_2_a: "Yes! The PostureCoach app is 100% free on iOS and Android. It includes: real-time posture tracking, professional courses, interactive games, and daily statistics.",
        faq_3_q: "How long does the battery last?",
        faq_3_a: "The battery lasts about 7 days with normal use. Full charge takes 1.5 hours via USB-C (cable included).",
        faq_4_q: "Is there a version for kids?",
        faq_4_a: "Yes! We offer a Kids version (6-14 years) in pink or blue, specially designed for younger users with the same features.",
        faq_5_q: "What are the delivery times?",
        faq_5_a: "Delivery takes 8-15 business days for the US and Europe, 10-20 days for the rest of the world. You'll receive a tracking number by email.",
        faq_6_q: "How does the guarantee work?",
        faq_6_a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us and we'll refund you in full, no questions asked.",
        
        // Final CTA
        final_title: "Ready to transform your posture?",
        final_subtitle: "Join +50,000 people who learned to stand straight with PostureCoach.",
        final_cta: "Order PostureCoach - $79.99",
        
        // Footer
        footer_tagline: "Fix your posture. Transform your life.",
        footer_cgv: "Terms of Service",
        footer_privacy: "Privacy Policy",
        footer_mentions: "Legal Notice",
        footer_contact: "Contact",
        footer_rights: "All rights reserved."
    }
};

// Current language
let currentLang = 'fr';

// ============================================
// LANGUAGE TOGGLE
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateLanguage();
    
    // Update button text
    document.querySelector('.lang-current').textContent = currentLang.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    document.documentElement.dataset.lang = currentLang;
    
    // Update prices based on language
    updatePrices();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function updatePrices() {
    // Update price displays based on language/currency
    const priceOld = document.querySelectorAll('.price-old, .order-price-old');
    const priceNew = document.querySelectorAll('.price-new, .order-price-new');
    
    if (currentLang === 'en') {
        priceOld.forEach(el => el.textContent = '$139.99');
        priceNew.forEach(el => el.textContent = '$79.99');
    } else {
        priceOld.forEach(el => el.textContent = '119,99€');
        priceNew.forEach(el => el.textContent = '69,99€');
    }
}

// ============================================
// VERSION SELECTOR
// ============================================
let selectedSize = 'adult-black';

const versionNames = {
    'adult-black': { fr: 'Adulte Noir', en: 'Adult Black' },
    'adult-red': { fr: 'Adulte Rouge', en: 'Adult Red' },
    'kid-pink': { fr: 'Enfant Rose', en: 'Kids Pink' },
    'kid-blue': { fr: 'Enfant Bleu', en: 'Kids Blue' }
};

// Image mapping for each version
const versionImages = {
    'adult-black': 'images/product-black.png',
    'adult-red': 'images/product-red.png',
    'kid-pink': 'images/product-pink.png',
    'kid-blue': 'images/product-blue.png'
};

function updateProductImage(version) {
    const productImage = document.querySelector('.order-product-image');
    if (productImage && versionImages[version]) {
        // Add fade effect
        productImage.style.opacity = '0';
        productImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            productImage.src = versionImages[version];
            productImage.alt = versionNames[version]?.[currentLang] || version;
            productImage.style.opacity = '1';
            productImage.style.transform = 'scale(1)';
        }, 150);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-option');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedSize = this.dataset.size;
            
            // Update product image when version changes
            updateProductImage(selectedSize);
        });
    });
    
    // Add transition to product image
    const productImage = document.querySelector('.order-product-image');
    if (productImage) {
        productImage.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    }
});

// ============================================
// FAQ TOGGLE
// ============================================
function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked one if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ============================================
// CHECKOUT - STRIPE PAYMENT LINKS
// ============================================
// Configure your Stripe Payment Links here (create them in Stripe Dashboard)
const PAYMENT_LINKS = {
    // EUR Payment Links - PRODUCTION
    'adult-black': {
        eur: 'https://buy.stripe.com/bJe14m2zFetvgKCdW3dMI03',
        usd: 'https://buy.stripe.com/bJe14m2zFetvgKCdW3dMI03'
    },
    'adult-red': {
        eur: 'https://buy.stripe.com/dRm00i6PV5WZ8e6dW3dMI02',
        usd: 'https://buy.stripe.com/dRm00i6PV5WZ8e6dW3dMI02'
    },
    'kid-pink': {
        eur: 'https://buy.stripe.com/8x2dR88Y399bcum4ltdMI01',
        usd: 'https://buy.stripe.com/8x2dR88Y399bcum4ltdMI01'
    },
    'kid-blue': {
        eur: 'https://buy.stripe.com/4gM28qcaffxzame3hpdMI00',
        usd: 'https://buy.stripe.com/4gM28qcaffxzame3hpdMI00'
    }
};

function checkout() {
    const currency = currentLang === 'en' ? 'usd' : 'eur';
    const price = currentLang === 'en' ? 79.99 : 69.99;
    const paymentLink = PAYMENT_LINKS[selectedSize]?.[currency];
    
    // Track InitiateCheckout event for ads platforms
    trackCheckoutEvent(selectedSize, price, currency);
    
    if (paymentLink && !paymentLink.includes('REPLACE_WITH')) {
        // Redirect to Stripe hosted checkout (secure!)
        window.location.href = paymentLink;
    } else {
        // Fallback to custom checkout page (for testing/demo)
        const orderData = {
            size: selectedSize,
            sizeName: versionNames[selectedSize]?.[currentLang] || selectedSize,
            language: currentLang,
            price: price,
            currency: currency
        };
        sessionStorage.setItem('alignd_order', JSON.stringify(orderData));
        window.location.href = 'checkout.html';
    }
}

// ============================================
// TRACKING EVENTS (Google Analytics + Meta Pixel)
// ============================================
function trackCheckoutEvent(productVariant, price, currency) {
    // Google Analytics 4 - Begin Checkout
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            currency: currency.toUpperCase(),
            value: price,
            items: [{
item_id: 'posturecoach-' + productVariant,
            item_name: 'PostureCoach Smart - ' + (versionNames[productVariant]?.[currentLang] || productVariant),
                price: price,
                quantity: 1
            }]
        });
        console.log('📊 GA4: begin_checkout tracked');
    }
    
    // Meta Pixel - InitiateCheckout
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_ids: ['posturecoach-' + productVariant],
            content_type: 'product',
            value: price,
            currency: currency.toUpperCase()
        });
        console.log('📊 Meta Pixel: InitiateCheckout tracked');
    }
    
    // TikTok Pixel - InitiateCheckout
    if (typeof ttq !== 'undefined') {
        ttq.track('InitiateCheckout', {
            content_id: 'posturecoach-' + productVariant,
            content_type: 'product',
            value: price,
            currency: currency.toUpperCase()
        });
        console.log('📊 TikTok Pixel: InitiateCheckout tracked');
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// URGENCY COUNTER (Randomize stock)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const stockCount = Math.floor(Math.random() * 12) + 8; // 8-19
    const urgencyText = document.querySelector('.urgency-bar strong');
    if (urgencyText) {
        urgencyText.textContent = stockCount;
    }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const animatedElements = document.querySelectorAll('.problem-card, .how-card, .testimonial-card, .faq-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// ============================================
// DETECT BROWSER LANGUAGE (Optional auto-switch)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment to auto-detect language
    // const browserLang = navigator.language || navigator.userLanguage;
    // if (browserLang && !browserLang.startsWith('fr')) {
    //     currentLang = 'en';
    //     updateLanguage();
    //     document.querySelector('.lang-current').textContent = 'EN';
    //     document.documentElement.lang = 'en';
    //     updatePrices();
    // }
});

console.log('🚀 PostureCoach.co loaded successfully');
