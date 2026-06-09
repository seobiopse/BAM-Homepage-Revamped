const fs = require('fs');
const path = require('path');
const ProductCatalog = require('./assets/data.js');

const categoryTemplatePath = path.join(__dirname, 'templates', 'category-template.html');
const productTemplatePath = path.join(__dirname, 'templates', 'product-template.html');
const indexTemplatePath = path.join(__dirname, 'templates', 'index-template.html');

const categoryTemplate = fs.readFileSync(categoryTemplatePath, 'utf8');
const productTemplate = fs.readFileSync(productTemplatePath, 'utf8');
const indexTemplate = fs.readFileSync(indexTemplatePath, 'utf8');

console.log('Starting compilation of static pages...');

// Helper to compile breadcrumbs
function compileBreadcrumbs(list, rootPath = '../') {
    return list.map((item, idx) => {
        if (idx === list.length - 1) {
            return `<li><span aria-current="page">${item}</span></li>`;
        }
        if (item === 'Home') {
            return `<li><a href="${rootPath}index.html" title="Go back to the homepage" aria-label="Navigate to home page">Home</a></li>`;
        }
        // Map category name to filename
        const categorySlug = Object.keys(ProductCatalog.categories).find(
            key => ProductCatalog.categories[key].name === item
        );
        return `<li><a href="${rootPath}categories/${categorySlug}.html" title="Go back to ${item} collection" aria-label="Navigate to ${item} page">${item}</a></li>`;
    }).join('\n');
}

// Unified Schema Generator incorporating shared business entities, return policy, shipping settings, and Q&As
function compileUnifiedSchema(pageType, pageData) {
    const organization = {
        "@type": "Organization",
        "@id": "https://www.badgestore.com.au/#organization",
        "name": "BadgeStore",
        "legalName": "BadgeStore Australia",
        "url": "https://www.badgestore.com.au/",
        "logo": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/content/img/badgestore logo new-01.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61-1300-862-637",
            "contactType": "customer service",
            "email": "admin@badgestore.com.au",
            "areaServed": "AU",
            "availableLanguage": "en"
        }
    };

    const localBusiness = {
        "@type": "LocalBusiness",
        "@id": "https://www.badgestore.com.au/#localbusiness",
        "name": "BadgeStore Office",
        "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/carousel/18/banner-3.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "56 Prospect Rd",
            "addressLocality": "Prospect",
            "addressRegion": "SA",
            "postalCode": "5082",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.8912,
            "longitude": 138.5991
        },
        "telephone": "1300862637"
    };

    const returnPolicy = {
        "@type": "MerchantReturnPolicy",
        "@id": "https://www.badgestore.com.au/#returnpolicy",
        "name": "BadgeStore Returns Policy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "refundType": "https://schema.org/RefundFull"
    };

    const shippingPolicy = {
        "@type": "ShippingRateSettings",
        "@id": "https://www.badgestore.com.au/#shippingpolicy",
        "name": "Standard Shipping Flat Rate",
        "freeShippingThreshold": {
            "@type": "MonetaryAmount",
            "value": 100,
            "currency": "AUD"
        },
        "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 12.50,
            "currency": "AUD"
        }
    };

    const graph = [organization, localBusiness, returnPolicy, shippingPolicy];

    if (pageType === 'category') {
        const cat = pageData;
        graph.push({
            "@type": "CollectionPage",
            "@id": `https://www.badgestore.com.au/categories/${cat.slug}.html#collection`,
            "name": cat.heading,
            "description": cat.metaDesc,
            "url": `https://www.badgestore.com.au/categories/${cat.slug}.html`
        });
        graph.push({
            "@type": "ItemList",
            "itemListElement": cat.products.map((pRef, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "url": `https://www.badgestore.com.au/products/${pRef.id}.html`,
                "name": pRef.name
            }))
        });
        if (cat.faqs && cat.faqs.length > 0) {
            graph.push({
                "@type": "FAQPage",
                "@id": `https://www.badgestore.com.au/categories/${cat.slug}.html#faq`,
                "mainEntity": cat.faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            });
        }
    } else if (pageType === 'product') {
        const prod = pageData;
        graph.push({
            "@type": "Product",
            "@id": `https://www.badgestore.com.au/products/${prod.id}.html#product`,
            "name": prod.name,
            "image": prod.image,
            "description": prod.description,
            "sku": prod.sku,
            "brand": {
                "@type": "Brand",
                "name": "BadgeStore"
            },
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "AUD",
                "lowPrice": prod.priceBrackets[prod.priceBrackets.length - 1].price.toFixed(2),
                "highPrice": prod.basePrice.toFixed(2),
                "offerCount": prod.priceBrackets.length,
                "url": `https://www.badgestore.com.au/products/${prod.id}.html`,
                "priceValidUntil": "2027-12-31"
            }
        });
        if (prod.faqs && prod.faqs.length > 0) {
            graph.push({
                "@type": "FAQPage",
                "@id": `https://www.badgestore.com.au/products/${prod.id}.html#faq`,
                "mainEntity": prod.faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            });
        }
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// Programmatic Semantic Guide Builder to scale page content length to 1000+ words
function compileSemanticGuide(cat) {
    const name = cat.name;
    const isLanyard = name.toLowerCase().includes('lanyard');
    const isMachine = name.toLowerCase().includes('machine');
    const isBadge = name.toLowerCase().includes('badge');

    let specificText = '';
    if (isLanyard) {
        specificText = `When ordering custom lanyards, width selection is key for legibility and comfort. We offer 10mm, 15mm, 20mm, and 25mm polyester and woven options. Our default safety breakaway clips snap open under tension to prevent choking hazards in hospital, retail, or warehouse zones.`;
    } else if (isMachine) {
        specificText = `Our industrial button maker machines are machined from high-grade carbon steel with robust alloy dies. Ideal for school fundraisers, corporate marketing, and retail merchandising, each machine supports interchangeable dies to stamp 25mm, 32mm, or 57mm pins.`;
    } else if (isBadge) {
        specificText = `Every personalized name badge is available with dual neodymium magnets or heavy-duty safety pins. The double magnetic backing clamps tightly without damaging shirt threads, making it the perfect option for corporate attire, though employees with pacemakers should utilize traditional pins.`;
    } else {
        specificText = `Our premium commercial signage and identification collections are manufactured to strict industrial standards to ensure high legibility and scanability in professional reception desks, administrative suites, or business boardrooms.`;
    }

    return `
    <div class="seo-semantic-guide" style="margin-top: 40px; border-top: 1px solid var(--color-border); padding-top: 40px; text-align: left;">
        <h3 style="font-size: 1.4rem; color: var(--color-secondary); margin-bottom: 16px;">Comprehensive B2B Ordering &amp; Specifications Guide</h3>
        
        <div class="guide-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 24px;">
            <div class="guide-col">
                <h4 style="font-size: 1.05rem; color: var(--color-secondary); margin-bottom: 10px;">1. Professional Manufacture &amp; Material Specs</h4>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
                    At BadgeStore Australia, our corporate badges and identification items are crafted using commercial-grade raw materials. ${specificText} Laser engraving utilizes precise CO2 lasers for crisp, high-contrast borders and lettering, while full-color prints are protected under scratch-resistant domes.
                </p>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
                    Wood products are finished using organic Adelaide beeswax to bring out natural mahogany and walnut timber grains. Anodised metals and acrylic plates utilize UV-resistant inks preventing color degradation over time under direct exposure.
                </p>
            </div>
            
            <div class="guide-col">
                <h4 style="font-size: 1.05rem; color: var(--color-secondary); margin-bottom: 10px;">2. Corporate Purchase Orders &amp; Invoicing</h4>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
                    We support streamlined accounts workflows for larger enterprises and public institutions. BadgeStore accepts official Purchase Orders (PO) with net-30 billing cycles from Australian schools, hospitals, local councils, and federal government offices.
                </p>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
                    Our programmatic static database supports bulk pricing scaling. Simply select your wholesale tiers during configuration, or submit an email query to our support desk for custom franchise quotes.
                </p>
            </div>
        </div>

        <div class="guide-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <div class="guide-col">
                <h4 style="font-size: 1.05rem; color: var(--color-secondary); margin-bottom: 10px;">3. Safety Compliance &amp; Attachment Options</h4>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
                    Safety is paramount in busy team environments. Neodymium magnets offer high clamping force without damaging garments, but traditional pins, pocket alligator clips, and swivel loops are also provided as secure alternatives. Safety breakaway neck clips are pre-fitted on all custom lanyards to ensure immediate release under sudden tension.
                </p>
            </div>
            
            <div class="guide-col">
                <h4 style="font-size: 1.05rem; color: var(--color-secondary); margin-bottom: 10px;">4. Adelaide Local Dispatch &amp; Logistics</h4>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
                    Orders are manufactured and dispatched from our local facility in Prospect, South Australia. Deliveries are processed through Australia Post and local couriers. Timelines exclude Sundays: Local Adelaide Metro (1-2 days priority, 2-3 days standard), East Coast Metro (2-3 days express, 4-5 days standard), and Remote WA/NT/TAS (3-5 days express, 6-8 days standard).
                </p>
            </div>
        </div>
    </div>
    `;
}

// Helper to convert absolute links to local relative ones
function cleanCategoryHtml(html, rootPath) {
    if (!html) return '';
    // Replace absolute links to badgestore.com.au with relative links
    let cleaned = html.replace(/https:\/\/www\.badgestore\.com\.au\/([a-zA-Z0-9\-]+)\/?/g, (match, slug) => {
        if (ProductCatalog.categories[slug]) {
            return `${rootPath}categories/${slug}.html`;
        }
        if (ProductCatalog.products[slug]) {
            return `${rootPath}products/${slug}.html`;
        }
        // Default fallbacks
        if (slug === 'categories') return `${rootPath}index.html`;
        return `${rootPath}categories/${slug}.html`;
    });
    // Replace home links
    cleaned = cleaned.replace(/https:\/\/www\.badgestore\.com\.au\/?/g, `${rootPath}index.html`);
    return cleaned;
}

// Redesign sub-page descriptions into responsive premium elements using scraped HTML data
function redesignCategoryDesc(cat, rootPath) {
    if (!cat.categoryDescHtml) {
        // Fallback default redesign for parent categories that don't have scraped raw sublistings
        const firstProdRef = cat.products[0];
        const firstProd = firstProdRef ? ProductCatalog.products[firstProdRef.id] : null;
        const imageUrl = firstProd ? firstProd.image : '';
        
        return `
        <div class="redesigned-seo-container">
            <div class="seo-hero-block">
                <div class="seo-hero-image">
                    <img src="${imageUrl}" alt="${cat.name}">
                </div>
                <div class="seo-hero-content">
                    <h2>Premium ${cat.name} Collection</h2>
                    <p>${cat.desc}</p>
                    <div class="bulk-discount-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span>Wholesale Bulk Pricing Active</span>
                    </div>
                </div>
            </div>
            
            <div class="seo-contact-cta">
                <h3>Need Custom Assistance for ${cat.name}?</h3>
                <p>Get in touch with our expert Adelaide customer care team. We design and manufacture all items locally to meet your deadline.</p>
                <div class="contact-methods">
                    <a href="tel:1300862637" class="contact-method-card">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-right: 6px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call 1300 862 637
                    </a>
                    <a href="mailto:admin@badgestore.com.au" class="contact-method-card">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-right: 6px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        Email admin@badgestore.com.au
                    </a>
                </div>
            </div>
        </div>
        `;
    }
    
    const rawHtml = cat.categoryDescHtml;
    
    // 1. Extract main showcase image
    const allImgUrls = [];
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let imgMatch;
    while ((imgMatch = imgRegex.exec(rawHtml)) !== null) {
        const src = imgMatch[1];
        if (!src.includes('clip-pin') && !src.includes('magnet-clip') && !src.includes('clip-bulldog') && !src.includes('clip-swivel') && (src.includes('narrow') || src.includes('prod') || src.includes('badge'))) {
            allImgUrls.push(src);
        }
    }
    
    // Fallback showcase image
    let mainImage = allImgUrls[0] || '';
    if (!mainImage) {
        const firstProdRef = cat.products[0];
        const firstProd = firstProdRef ? ProductCatalog.products[firstProdRef.id] : null;
        mainImage = firstProd ? firstProd.image : '';
    }
    
    // 2. Extract swatches
    const swatches = [];
    const swatchRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']+)["'][^>]*>/gi;
    let swatchMatch;
    while ((swatchMatch = swatchRegex.exec(rawHtml)) !== null) {
        const src = swatchMatch[1];
        const alt = swatchMatch[2];
        const isExcluded = ['clip-pin', 'magnet-clip', 'clip-bulldog', 'clip-swivel', 'narrow', 'banner', 'logo'].some(keyword => src.includes(keyword));
        if (!isExcluded && src.includes('/uploaded_images/')) {
            swatches.push({ src, name: alt });
        }
    }
    
    // 3. Extract clips
    const clips = [];
    const tableMatch = rawHtml.match(/<table[\s\S]*?<\/table>/i);
    if (tableMatch) {
        const tableHtml = tableMatch[0];
        const tdImgMatches = tableHtml.match(/src=["']([^"']+)["']/gi) || [];
        const imgUrls = tdImgMatches.map(m => m.match(/src=["']([^"']+)["']/i)[1]);
        
        const tdRegex = /<td[\s\S]*?>([\s\S]*?)<\/td>/gi;
        let tdMatch;
        const tdTexts = [];
        while ((tdMatch = tdRegex.exec(tableHtml)) !== null) {
            const text = tdMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
            if (text && !text.includes('.jpg') && !text.includes('.png')) {
                tdTexts.push(text);
            }
        }
        
        const clipNames = ["Standard Safety Pin", "Magnetic Fastener Backing", "Bulldog Pocket Clip", "Swivel Clip Attachment"];
        for (let i = 0; i < imgUrls.length; i++) {
            clips.push({
                img: imgUrls[i],
                name: clipNames[i] || "Attachment Option",
                desc: tdTexts[i] || "Secure fastener backing choice."
            });
        }
    }
    
    // 4. Extract headings and paragraphs from cleaned content to avoid clip styles and other raw inline layouts
    let textOnly = rawHtml;
    // Remove tables
    textOnly = textOnly.replace(/<table[\s\S]*?<\/table>/gi, '');
    // Remove all images
    textOnly = textOnly.replace(/<img[^>]*>/gi, '');
    // Remove empty elements
    textOnly = textOnly.replace(/<(h[1-6]|p)[^>]*>\s*<\/\1>/gi, '');
    // Remove non-breaking spaces and clean whitespace
    textOnly = textOnly.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');

    const elements = [];
    const elementRegex = /<(h[1-6]|p)[\s\S]*?>([\s\S]*?)<\/\1>/gi;
    let elMatch;
    while ((elMatch = elementRegex.exec(textOnly)) !== null) {
        const tag = elMatch[1].toLowerCase();
        const text = elMatch[2].replace(/<[^>]*>/g, '').trim();
        if (text && 
            !text.includes('BULK DISCOUNTS') && 
            !text.includes('Prices can be viewed') && 
            !text.includes('To learn more') && 
            !text.includes('Available Colours') && 
            !text.includes('Clip Styles') && 
            !text.includes('Choose Below') && 
            !text.includes('admin@badgestore') && 
            !text.includes('1300 862')) {
            elements.push({ tag, text });
        }
    }
    
    // Check if the last element is a heading tag (which is typically the category heading at the bottom of the raw list)
    let lastHeadingHtml = '';
    if (elements.length > 0 && elements[elements.length - 1].tag.startsWith('h')) {
        const lastEl = elements.pop();
        lastHeadingHtml = `<h3>${lastEl.text}</h3>`;
    }

    // Build editorial left-aligned layout instead of a grid
    let editorialHtml = '';
    elements.forEach(el => {
        if (el.tag.startsWith('h')) {
            editorialHtml += `<h3>${el.text}</h3>`;
        } else if (el.tag === 'p') {
            editorialHtml += `<p>${el.text}</p>`;
        }
    });
    
    // 5. Generate final HTML
    let swatchesHtml = '';
    if (swatches.length > 0) {
        swatchesHtml = `
        <div class="seo-swatches-section">
            <h3>Available Color Options</h3>
            <div class="swatches-grid">
                ${swatches.map(s => `
                <div class="swatch-chip" data-tooltip="${s.name}">
                    <img src="${s.src}" alt="${s.name}" loading="lazy">
                </div>
                `).join('')}
            </div>
        </div>
        `;
    }
    
    let clipsHtml = '';
    if (clips.length > 0) {
        clipsHtml = `
        <div class="seo-clips-section">
            <h3>Premium Fastener Backings</h3>
            <div class="clips-grid">
                ${clips.map(c => `
                <div class="clip-card">
                    <div class="clip-card-image">
                        <img src="${c.img}" alt="${c.name}" loading="lazy">
                    </div>
                    <h4>${c.name}</h4>
                    <p>${c.desc}</p>
                </div>
                `).join('')}
            </div>
        </div>
        `;
    }
    
    const introText = (elements.length > 0 && elements[0].tag === 'p') ? elements[0].text : `${cat.name} are designed and custom-manufactured in Australia to professional standards.`;
    
    return `
    <div class="redesigned-seo-container">
        <!-- Hero Feature Section -->
        <div class="seo-hero-block">
            <div class="seo-hero-image">
                <img src="${mainImage}" alt="${cat.name}">
            </div>
            <div class="seo-hero-content">
                <h2>Choose Premium ${cat.name}</h2>
                <p>${cleanCategoryHtml(introText, rootPath)}</p>
                <div class="bulk-discount-badge">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <span>Bulk Discounts Available - Check Product Details</span>
                </div>
            </div>
        </div>
        
        <!-- Swatches Section -->
        ${swatchesHtml}
        
        <!-- Backing Clips Section -->
        ${clipsHtml}
        
        <!-- Editorial Text Grid -->
        ${editorialHtml ? `
        <div class="seo-editorial-grid">
            ${editorialHtml}
        </div>
        ` : ''}
        
        <!-- Contact Callout -->
        <div class="seo-contact-cta">
            <h3>Have Questions About ${cat.name}?</h3>
            <p>Get in touch with our expert Adelaide team today. We provide rapid turnarounds, custom design proofs, and Express Post shipping Australia-wide.</p>
            <div class="contact-methods">
                <a href="tel:1300862637" class="contact-method-card">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-right: 6px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call 1300 862 637
                </a>
                <a href="mailto:admin@badgestore.com.au" class="contact-method-card">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-right: 6px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Email admin@badgestore.com.au
                </a>
            </div>
        </div>

        <!-- Trailing Heading -->
        ${lastHeadingHtml ? `
        <div class="seo-editorial-grid" style="margin-top: 32px;">
            ${lastHeadingHtml}
        </div>
        ` : ''}
    </div>
    `;
}

// Helper to compile header navigation
function compileNavigation(rootPath) {
    let html = `
    <nav class="nav-menu" role="navigation" aria-label="Main Navigation">
        <ul class="nav-list">`;
    
    // Filter only top-level categories (those without a parent)
    const topLevelCats = Object.keys(ProductCatalog.categories).filter(catKey => {
        return !ProductCatalog.categories[catKey].parent;
    });

    topLevelCats.forEach(catKey => {
        const cat = ProductCatalog.categories[catKey];
        
        // Find if this category has sub-categories
        const subCats = Object.keys(ProductCatalog.categories).filter(subKey => {
            return ProductCatalog.categories[subKey].parent === cat.slug;
        }).map(subKey => ProductCatalog.categories[subKey]);

        if (subCats.length > 0) {
            // Renders with dropdown chevron and dropdown menu
            html += `
            <li class="nav-item has-dropdown">
                <a href="${rootPath}categories/${cat.slug}.html" class="nav-link" title="Explore custom ${cat.name} range" aria-label="Browse the ${cat.name} collection">
                    ${cat.name}
                    <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <ul class="dropdown-menu">`;
            
            subCats.forEach(sub => {
                html += `
                    <li><a href="${rootPath}categories/${sub.slug}.html" title="Explore custom ${sub.name}" aria-label="Explore the ${sub.name} sub-category">${sub.name}</a></li>`;
            });
            
            html += `
                    <li class="dropdown-divider" style="border-top: 1px solid var(--color-border); margin: 6px 0; list-style: none;"></li>
                    <li><a href="${rootPath}categories/${cat.slug}.html" class="view-all-link" title="Shop all custom ${cat.name} products" aria-label="View the entire ${cat.name} selection" style="font-weight: 700; color: var(--color-primary);">Shop All ${cat.name} &rarr;</a></li>
                </ul>
            </li>`;
        } else {
            // Renders as a simple direct link, NO dropdown
            html += `
            <li class="nav-item">
                <a href="${rootPath}categories/${cat.slug}.html" class="nav-link" title="Shop custom ${cat.name}" aria-label="Browse the ${cat.name} collection">
                    ${cat.name}
                </a>
            </li>`;
        }
    });
    
    html += `
        </ul>
    </nav>`;
    return html;
}

// Helper to compile mobile drawer navigation
function compileMobileNavigation(rootPath) {
    let html = `
    <ul class="mobile-drawer-list">`;
    
    // Filter only top-level categories (those without a parent)
    const topLevelCats = Object.keys(ProductCatalog.categories).filter(catKey => {
        return !ProductCatalog.categories[catKey].parent;
    });

    topLevelCats.forEach(catKey => {
        const cat = ProductCatalog.categories[catKey];
        html += `
        <li class="mobile-nav-item">
            <a href="${rootPath}categories/${cat.slug}.html" class="mobile-nav-link" title="Explore custom ${cat.name} range" aria-label="Browse the ${cat.name} collection">${cat.name}</a>
        </li>`;
    });
    
    html += `
        <li><a href="${rootPath}index.html#designer" class="btn btn-primary" title="Launch custom BadgeStore Interactive Designer tool" aria-label="Launch interactive designer tool" style="margin-top: 10px; color: #FFFFFF;">Launch Configurator</a></li>
    </ul>`;
    return html;
}

// Helper to compile category grid for homepage
function compileCategoryGrid() {
    let gridHtml = '';
    Object.keys(ProductCatalog.categories).forEach(catKey => {
        const cat = ProductCatalog.categories[catKey];
        if (cat.parent) return; // Skip sub-categories on homepage grid
        const firstProdRef = cat.products[0];
        const firstProd = firstProdRef ? ProductCatalog.products[firstProdRef.id] : null;
        const imageUrl = firstProd ? firstProd.image : '';
        gridHtml += `
        <div class="category-card">
            <div class="cat-image-holder" style="height: 180px; padding: 24px; background-color: var(--color-bg-surface); display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--color-border); overflow: hidden;">
                <img src="${imageUrl}" alt="Browse custom range of ${cat.name} online" title="${cat.name} - BadgeStore Australia" class="category-grid-img" loading="lazy" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: var(--transition-smooth);">
            </div>
            <div class="cat-body" style="padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1;">
                <h3 style="font-size: 1.2rem;">${cat.name}</h3>
                <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5;">${cat.desc}</p>
                <a href="categories/${cat.slug}.html" class="cat-link" title="Shop custom ${cat.name} collection" aria-label="Browse the entire ${cat.name} category" style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-primary); margin-top: auto; display: inline-flex; align-items: center;">Shop ${cat.name} &rarr;</a>
            </div>
        </div>
        `;
    });
    return gridHtml;
}

// Helper to compile gallery thumbnails for product pages
function compileGalleryThumbnails(prod) {
    let galleryThumbnailsHtml = '';
    if (prod.gallery && prod.gallery.length > 0) {
        galleryThumbnailsHtml += `<div class="gallery-thumbnails-row" style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 30px;">`;
        prod.gallery.forEach((imgUrl, idx) => {
            let label = `Angle ${idx + 1}`;
            if (imgUrl.includes('magnet')) label = 'Magnet Back';
            else if (imgUrl.includes('pin')) label = 'Safety Pin';
            else if (imgUrl.includes('bulldog') || imgUrl.includes('clip-swivel') || imgUrl.includes('clip-pin') || imgUrl.includes('crocodile') || imgUrl.includes('attachment')) label = 'Attachment Clip';
            
            galleryThumbnailsHtml += `
            <button class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" data-large-url="${imgUrl}" type="button" aria-label="View product photo ${idx + 1}" style="width: 60px; height: 60px; border-radius: var(--border-radius-sm); border: 2px solid ${idx === 0 ? 'var(--color-primary)' : 'var(--color-border)'}; padding: 4px; background: #FFF; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition-smooth); cursor: pointer;">
                <img src="${imgUrl}" alt="${label}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </button>`;
        });
        galleryThumbnailsHtml += `</div>`;
    }
    return galleryThumbnailsHtml;
}

// 1. GENERATE CATEGORY PAGES
Object.keys(ProductCatalog.categories).forEach(catKey => {
    const cat = ProductCatalog.categories[catKey];
    console.log(`Compiling category page: ${cat.slug}.html`);

    let html = categoryTemplate;

    // Head / Meta
    html = html.replace(/{{metaTitle}}/g, cat.metaTitle);
    html = html.replace(/{{metaDesc}}/g, cat.metaDesc);

    // Navigation Menus
    html = html.replace(/{{navMenu}}/g, compileNavigation('../'));
    html = html.replace(/{{mobileNavMenu}}/g, compileMobileNavigation('../'));

    // Breadcrumbs
    html = html.replace(/{{breadcrumbs}}/g, compileBreadcrumbs(cat.breadcrumbs));

    // Heading
    html = html.replace(/{{categoryHeading}}/g, cat.heading);

    // Results tally
    html = html.replace(/{{resultsTally}}/g, `Showing ${cat.products.length} premium styles`);

    // Sidebar Filters
    let sidebarFiltersHtml = '';
    cat.filterGroups.forEach(group => {
        sidebarFiltersHtml += `
        <div class="filter-group">
            <h4 class="filter-title">${group.title}</h4>
            <ul class="filter-options">
        `;
        group.options.forEach((opt, oIdx) => {
            sidebarFiltersHtml += `
                <li>
                    <label class="filter-check-wrap">
                        <input type="checkbox" ${oIdx === 0 ? 'checked' : ''}>
                        <span>${opt}</span>
                    </label>
                </li>
            `;
        });
        sidebarFiltersHtml += `
            </ul>
        </div>
        `;
    });
    html = html.replace(/{{sidebarFilters}}/g, sidebarFiltersHtml);

    // Product Grid
    let productGridHtml = '';
    cat.products.forEach(prodRef => {
        const prod = ProductCatalog.products[prodRef.id];
        if (!prod) return;

        productGridHtml += `
        <article class="card">
            <div class="card-image-holder" style="height: 180px; padding: 16px; background-color: var(--color-bg-surface); display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--color-border); overflow: hidden;">
                <img src="${prod.image}" alt="Buy Custom ${prod.name} online from BadgeStore" title="${prod.name} | BadgeStore Australia" class="product-card-image" loading="lazy" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: var(--transition-smooth);">
            </div>
            <div class="card-body">
                <h3 class="card-title"><a href="../products/${prod.id}.html" title="Configure and customize your own ${prod.name}" aria-label="Configure ${prod.name}">${prod.name}</a></h3>
                <div class="card-price-row">
                    <span class="price-val">${prod.priceRange}</span>
                    <a href="../products/${prod.id}.html" class="btn btn-secondary btn-sm" title="Configure custom ${prod.name} layout" aria-label="Start custom configuration tool for ${prod.name}">Configure</a>
                </div>
            </div>
        </article>
        `;
    });
    html = html.replace(/{{productGrid}}/g, productGridHtml);

    // Get showcase image for OG tags
    const firstProdRef = cat.products[0];
    const firstProd = firstProdRef ? ProductCatalog.products[firstProdRef.id] : null;
    const showcaseImg = firstProd ? firstProd.image : 'https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/carousel/18/banner-3.jpg';

    // Populate SEO / Canonical / OG / Twitter Card Placeholders
    html = html.replace(/{{canonicalUrl}}/g, `https://www.badgestore.com.au/categories/${cat.slug}.html`);
    html = html.replace(/{{ogType}}/g, 'website');
    html = html.replace(/{{ogImage}}/g, showcaseImg);
    html = html.replace(/{{ogImageAlt}}/g, `Premium Custom ${cat.name} range by BadgeStore Australia`);

    // SEO Rich Article + Semantic B2B specifications guide (scaling word count past 1000 words)
    let seoArticleHtml = redesignCategoryDesc(cat, '../');
    seoArticleHtml += compileSemanticGuide(cat);
    html = html.replace(/{{seoArticle}}/g, seoArticleHtml);

    // Comparison Table
    let comparisonTableHtml = `
        <h3>${cat.comparisonGuide.title}</h3>
        <table class="seo-comparison-table">
            <thead>
                <tr>
    `;
    cat.comparisonGuide.headers.forEach(h => {
        comparisonTableHtml += `<th>${h}</th>`;
    });
    comparisonTableHtml += `
                </tr>
            </thead>
            <tbody>
    `;
    cat.comparisonGuide.rows.forEach(row => {
        comparisonTableHtml += `<tr>`;
        row.forEach(cell => {
            comparisonTableHtml += `<td>${cell}</td>`;
        });
        comparisonTableHtml += `</tr>`;
    });
    comparisonTableHtml += `
            </tbody>
        </table>
    `;
    html = html.replace(/{{comparisonTable}}/g, comparisonTableHtml);

    // FAQs list
    let faqListHtml = '';
    cat.faqs.forEach((faq, fIdx) => {
        faqListHtml += `
        <div class="accordion-item">
            <h3>
                <button class="accordion-header" aria-expanded="false" aria-controls="faq-${fIdx}">
                    <span>${faq.q}</span>
                    <svg class="accordion-icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </h3>
            <div class="accordion-content" id="faq-${fIdx}" aria-hidden="true">
                <p>${faq.a}</p>
            </div>
        </div>
        `;
    });
    html = html.replace(/{{faqList}}/g, faqListHtml);

    // Dynamic Unified Schema Graph (Organization + LocalBusiness + FAQPage + CollectionPage + ItemList)
    const unifiedSchema = compileUnifiedSchema('category', cat);
    html = html.replace(/{{schemaGraph}}/g, JSON.stringify(unifiedSchema, null, 2));

    // Save final html
    const categoryDir = path.join(__dirname, 'categories');
    if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
    }
    fs.writeFileSync(path.join(categoryDir, `${cat.slug}.html`), html, 'utf8');
});

// 2. GENERATE PRODUCT PAGES
Object.keys(ProductCatalog.products).forEach(prodKey => {
    const prod = ProductCatalog.products[prodKey];
    const cat = ProductCatalog.categories[prod.categorySlug];
    console.log(`Compiling product page: ${prod.id}.html`);

    let html = productTemplate;

    // Head / Meta
    html = html.replace(/{{metaTitle}}/g, prod.metaTitle);
    html = html.replace(/{{metaDesc}}/g, prod.metaDesc);
    html = html.replace(/{{canonicalUrl}}/g, `https://www.badgestore.com.au/products/${prod.id}.html`);
    html = html.replace(/{{ogType}}/g, 'product');
    html = html.replace(/{{ogImage}}/g, prod.image);
    html = html.replace(/{{ogImageAlt}}/g, `Configure and Buy Custom ${prod.name} online from BadgeStore Australia`);

    // Navigation Menus
    html = html.replace(/{{navMenu}}/g, compileNavigation('../'));
    html = html.replace(/{{mobileNavMenu}}/g, compileMobileNavigation('../'));

    // Dynamic IDs
    html = html.replace(/{{productId}}/g, prod.id);
    html = html.replace(/{{basePrice}}/g, prod.basePrice.toFixed(2));

    // Breadcrumbs
    const breadcrumbsList = ["Home", cat.name, prod.name];
    html = html.replace(/{{breadcrumbs}}/g, compileBreadcrumbs(breadcrumbsList));

    // Gallery Thumbnails
    html = html.replace(/{{galleryThumbnails}}/g, compileGalleryThumbnails(prod));

    // Details
    html = html.replace(/{{productName}}/g, prod.name);
    html = html.replace(/{{priceRange}}/g, prod.priceRange);
    html = html.replace(/{{description}}/g, prod.description);

    // Specs table
    let specsTableHtml = '';
    prod.specs.forEach(spec => {
        specsTableHtml += `
        <tr>
            <th>${spec[0]}</th>
            <td>${spec[1]}</td>
        </tr>
        `;
    });
    html = html.replace(/{{specsTable}}/g, specsTableHtml);

    // FAQs
    let productFaqsHtml = '';
    prod.faqs.forEach((faq, fIdx) => {
        productFaqsHtml += `
        <div class="accordion-item">
            <h3>
                <button class="accordion-header" aria-expanded="false" aria-controls="p-faq-${fIdx}">
                    <span>${faq.q}</span>
                    <svg class="accordion-icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </h3>
            <div class="accordion-content" id="p-faq-${fIdx}" aria-hidden="true">
                <p>${faq.a}</p>
            </div>
        </div>
        `;
    });
    html = html.replace(/{{productFaqs}}/g, productFaqsHtml);

    // Configurator Forms & Canvas Preview Shapes
    let formControlsHtml = '';
    let previewerMarkupHtml = '';

    if (prod.configuratorType === 'badge') {
        formControlsHtml = `
        <!-- Inputs -->
        <div class="form-section-group">
            <h4 class="form-section-title">1. Employee Text Inputs</h4>
            <div class="config-row">
                <div class="input-group">
                    <label for="employee-name">Name (Line 1):</label>
                    <input type="text" id="employee-name" placeholder="Courtney Henry" maxlength="28">
                </div>
                <div class="input-group">
                    <label for="employee-title">Job Title / Role (Line 2):</label>
                    <input type="text" id="employee-title" placeholder="Sales Associate" maxlength="35">
                </div>
            </div>
        </div>

        <!-- Typography Fonts -->
        <div class="form-section-group">
            <h4 class="form-section-title">2. Select Font Typography</h4>
            <div class="input-group">
                <label for="font-select" class="visually-hidden">Choose badge font</label>
                <select id="font-select">
                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans (Modern Sans)</option>
                    <option value="'Inter', sans-serif">Inter (Corporate Flat)</option>
                    <option value="Georgia, serif">Georgia (Traditional Serif)</option>
                    <option value="monospace">Courier Code (Technical/Industrial)</option>
                </select>
            </div>
        </div>

        <!-- Fastening selection -->
        <div class="form-section-group">
            <h4 class="form-section-title">3. Badge Fastener Style</h4>
            <div class="toggle-option-grid">
                <label class="toggle-option">
                    <input type="radio" name="fastener" value="magnetic" checked>
                    <div class="toggle-card">
                        <strong>Magnetic Attachment</strong>
                        <span>Highly recommended (Garment Safe)</span>
                    </div>
                </label>
                <label class="toggle-option">
                    <input type="radio" name="fastener" value="pin">
                    <div class="toggle-card">
                        <strong>Traditional Safety Pin</strong>
                        <span>Low cost alternative</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Logo file upload -->
        <div class="form-section-group">
            <h4 class="form-section-title">4. Business Logo (Optional)</h4>
            <div class="input-group">
                <label for="logo-upload">Upload Logo (AI, SVG, PDF, PNG):</label>
                <input type="file" id="logo-upload" accept=".svg,.ai,.pdf,.png,.jpg">
            </div>
        </div>
        `;

        // Default layout skin class for canvas previewer
        let defaultSkin = 'skin-white-domed';
        if (prod.id.includes('silver')) {
            defaultSkin = 'skin-silver-metal';
        } else if (prod.id.includes('gold')) {
            defaultSkin = 'skin-gold-metal';
        } else if (prod.id.includes('wood') || prod.id.includes('walnut')) {
            defaultSkin = 'skin-mahogany-wood';
        }

        previewerMarkupHtml = `
        <div id="live-badge" class="badge-preview-box ${defaultSkin} has-border" style="width:300px; height:130px; box-shadow: 0 8px 16px rgba(0,0,0,0.06);">
            <div class="badge-inner-shadow"></div>
            <div class="badge-texture"></div>
            
            <div class="badge-layout-grid">
                <div class="badge-logo-holder">
                    <svg viewBox="0 0 100 100" width="38" height="38" id="badge-preview-logo" style="color:var(--color-primary)">
                        <path fill="currentColor" d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" />
                        <path fill="#FFFFFF" d="M35 40 L65 40 L65 50 L35 50 Z M35 60 L65 60 L65 65 L35 65 Z" />
                    </svg>
                </div>
                <div class="badge-text-holder">
                    <div id="preview-name" class="preview-text-name" style="font-family:'Plus Jakarta Sans',sans-serif;">COURTNEY HENRY</div>
                    <div id="preview-title" class="preview-text-title" style="font-family:'Inter',sans-serif;">Sales Associate</div>
                </div>
            </div>
            
            <div class="fastener-indicator">
                <span class="indicator-dot"></span>
                <span id="fastener-type-label">Magnetic Fastener Attached</span>
            </div>
        </div>
        `;
    } else if (prod.configuratorType === 'desk-plate') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. Plate Text Details</h4>
            <div class="config-row">
                <div class="input-group">
                    <label for="employee-name">Name (Line 1):</label>
                    <input type="text" id="employee-name" placeholder="Courtney Henry" value="COURTNEY HENRY" maxlength="28">
                </div>
                <div class="input-group">
                    <label for="employee-title">Job Title (Line 2):</label>
                    <input type="text" id="employee-title" placeholder="Managing Director" value="Managing Director" maxlength="35">
                </div>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Select Font</h4>
            <div class="input-group">
                <select id="font-select">
                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans</option>
                    <option value="Georgia, serif">Georgia Serif</option>
                </select>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">3. Track / Base Style</h4>
            <div class="toggle-option-grid">
                <label class="toggle-option">
                    <input type="radio" name="base-style" value="silver-track" checked>
                    <div class="toggle-card">
                        <strong>Silver Track Base</strong>
                        <span>Anodised metal channel</span>
                    </div>
                </label>
                <label class="toggle-option">
                    <input type="radio" name="base-style" value="timber-wedge">
                    <div class="toggle-card">
                        <strong>Timber Wedge Block</strong>
                        <span>Solid hardwood base</span>
                    </div>
                </label>
            </div>
        </div>
        `;

        previewerMarkupHtml = `
        <div id="live-badge" class="desk-plate-preview skin-mahogany-wood" style="width:340px; height:100px; border-radius:4px; display:flex; justify-content:center; align-items:center; color:#FFF; font-weight:bold; position:relative; box-shadow:0 8px 16px rgba(0,0,0,0.15); border: 2px solid #5a200a;">
            <div class="desk-plate-shine" style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%);"></div>
            <div style="text-align:center; padding:10px;">
                <div id="preview-name" style="font-size:1.3rem; letter-spacing:1px; text-transform:uppercase;">COURTNEY HENRY</div>
                <div id="preview-title" style="font-size:0.75rem; opacity:0.8; font-weight:normal; margin-top:2px;">Managing Director</div>
            </div>
        </div>
        `;
    } else if (prod.configuratorType === 'plaque') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. Plaque Inscription Text</h4>
            <div class="input-group">
                <label for="employee-name">Main Heading Text:</label>
                <input type="text" id="employee-name" placeholder="IN COMMEMORATION" value="IN COMMEMORATION" maxlength="30">
            </div>
            <div class="input-group" style="margin-top:12px;">
                <label for="employee-title">Description Inscription:</label>
                <textarea id="employee-title" rows="3" style="padding:10px; border:1px solid var(--color-border); border-radius:var(--border-radius-sm); font-size:0.9rem; font-family:inherit; outline:none; resize:none;">Engraved Text Details Here</textarea>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Plaque Dimensions</h4>
            <div class="input-group">
                <select id="plaque-size">
                    <option value="A4">A4 Dimensions (297x210mm)</option>
                    <option value="A5">A5 Dimensions (210x148mm)</option>
                </select>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">3. Corner Mounting Screws</h4>
            <label class="filter-check-wrap">
                <input type="checkbox" checked id="toggle-border">
                <span>Add corner pre-drilled screw holes</span>
            </label>
        </div>
        `;

        previewerMarkupHtml = `
        <div id="live-badge" class="plaque-preview skin-silver-metal" style="width:280px; height:200px; border-radius:4px; display:flex; flex-direction:column; justify-content:space-between; padding:20px; box-shadow:0 8px 16px rgba(0,0,0,0.1); border: 2.5px double #475569;">
            <div style="display:flex; justify-content:space-between; width:100%;" id="plaque-screw-row-top">
                <span class="plaque-screw" style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                <span class="plaque-screw" style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
            </div>
            <div style="text-align:center;">
                <h4 id="preview-name" style="font-size:1.1rem; margin-bottom:6px; font-weight:800; text-transform:uppercase;">IN COMMEMORATION</h4>
                <p id="preview-title" style="font-size:0.75rem; color:#444; white-space:pre-wrap;">Engraved Text Details Here</p>
            </div>
            <div style="display:flex; justify-content:space-between; width:100%;" id="plaque-screw-row-bottom">
                <span class="plaque-screw" style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                <span class="plaque-screw" style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
            </div>
        </div>
        `;
    } else if (prod.configuratorType === 'id-card') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. ID Card Profile</h4>
            <div class="input-group">
                <label for="employee-name">Staff Name:</label>
                <input type="text" id="employee-name" placeholder="STAFF MEMBER" value="STAFF MEMBER" maxlength="28">
            </div>
            <div class="input-group" style="margin-top:12px;">
                <label for="employee-title">Department / Code:</label>
                <input type="text" id="employee-title" placeholder="DEPARTMENT" value="DEPARTMENT" maxlength="30">
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Employee Face Photo</h4>
            <div class="input-group">
                <label for="photo-upload">Upload Photo (PNG/JPG):</label>
                <input type="file" id="photo-upload" accept=".png,.jpg,.jpeg">
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">3. Safety Breakaway Lanyard</h4>
            <label class="filter-check-wrap">
                <input type="checkbox" checked id="toggle-border">
                <span>Include safety breakaway lanyards</span>
            </label>
        </div>
        `;

        previewerMarkupHtml = `
        <div id="live-badge" class="id-card-preview skin-white-domed" style="width:200px; height:300px; border-radius:8px; border:2px solid #231F20; padding:15px; display:flex; flex-direction:column; align-items:center; justify-content:space-between; position:relative; box-shadow:0 8px 16px rgba(0,0,0,0.08);">
            <div style="width:100%; border-bottom:3px solid var(--color-primary); padding-bottom:5px; text-align:center; font-weight:800; font-size:0.8rem; letter-spacing:1px; color:var(--color-secondary);">BADGESTORE</div>
            <div style="width:80px; height:95px; background:#e2e8f0; border:1px solid #cbd5e1; border-radius:4px; display:flex; justify-content:center; align-items:center; font-size:0.6rem; color:#888; overflow:hidden;" id="photo-preview-box">PHOTO</div>
            <div style="text-align:center; margin-top:5px;">
                <div id="preview-name" style="font-size:0.95rem; font-weight:800; text-transform:uppercase; color:var(--color-secondary);">STAFF MEMBER</div>
                <div id="preview-title" style="font-size:0.7rem; color:var(--color-text-muted); margin-top:2px;">DEPARTMENT</div>
            </div>
            <div style="width:100%; text-align:center; font-size:0.6rem; color:#aaa; border-top:1px solid #eee; padding-top:5px;">BARCODE ID: 1000101</div>
        </div>
        `;
    } else if (prod.configuratorType === 'lapel-pin') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. Pin Text Markings</h4>
            <div class="input-group">
                <label for="employee-name">Pin Text Label:</label>
                <input type="text" id="employee-name" placeholder="CUSTOM PIN" value="CUSTOM PIN" maxlength="15">
            </div>
            <div class="input-group" style="margin-top:12px;">
                <label for="employee-title">Subtext / Vibe:</label>
                <input type="text" id="employee-title" placeholder="LOGO HERE" value="LOGO HERE" maxlength="15">
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Pin Base Dimension</h4>
            <div class="input-group">
                <select id="pin-size-select">
                    <option value="25mm">25mm Circular Diameter</option>
                    <option value="20mm">20mm Circular Diameter</option>
                    <option value="30mm">30mm Circular Diameter</option>
                </select>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">3. Design Vector File</h4>
            <div class="input-group">
                <label for="logo-upload">Upload Graphic Outlines (AI/SVG/PDF):</label>
                <input type="file" id="logo-upload" accept=".ai,.svg,.pdf,.png">
            </div>
        </div>
        `;

        previewerMarkupHtml = `
        <div id="live-badge" class="lapel-pin-preview skin-gold-metal" style="width:140px; height:140px; border-radius:50%; border:3px solid #854d0e; display:flex; justify-content:center; align-items:center; text-align:center; font-weight:800; font-size:0.65rem; color:#451a03; box-shadow:0 8px 16px rgba(0,0,0,0.1); position:relative;">
            <div style="position:absolute; inset:5px; border:1px dashed #854d0e; border-radius:50%;"></div>
            <div style="padding:10px; z-index:2;">
                <span id="preview-name">CUSTOM PIN</span><br>
                <span id="preview-title" style="font-size:0.55rem; font-weight:normal; opacity:0.8;">LOGO HERE</span>
            </div>
        </div>
        `;
    } else if (prod.configuratorType === 'badge-machine') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. Machine Specifications</h4>
            <div class="input-group">
                <label for="badge-machine-size">Circular Die Size:</label>
                <select id="badge-machine-size">
                    <option value="25mm" ${prod.id.includes('25mm') ? 'selected' : ''}>25mm circular die set</option>
                    <option value="57mm" ${prod.id.includes('57mm') ? 'selected' : ''}>57mm circular die set</option>
                </select>
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Bundle Kit Choices</h4>
            <div class="toggle-option-grid" style="grid-template-columns:1fr;">
                <label class="toggle-option">
                    <input type="radio" name="fastener" value="starter-kit" checked>
                    <div class="toggle-card">
                        <strong>Press Machine Kit bundle</strong>
                        <span>Includes die cutter & 100 component packages</span>
                    </div>
                </label>
            </div>
        </div>
        `;

        const pressLabel = prod.id.includes('25mm') ? '25MM PRESS' : '57MM PRESS';

        previewerMarkupHtml = `
        <div id="live-badge" class="badge-machine-preview" style="width:200px; height:200px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#f1f5f9; border:1px solid var(--color-border); border-radius:var(--border-radius-md);">
            <svg viewBox="0 0 100 100" width="100" height="100" style="color:var(--color-primary);">
                <path fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" d="M30 90 L70 90 M50 90 L50 40 M50 40 L20 60 M50 30 L50 10 M35 15 L65 15" />
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2"/>
            </svg>
            <strong style="font-size:0.8rem; margin-top:8px; color:var(--color-secondary);" id="preview-name">${pressLabel}</strong>
            <span style="font-size:0.65rem; color:var(--color-text-muted);" id="preview-title">Starter Kit Pack</span>
        </div>
        `;
    } else if (prod.configuratorType === 'pet-tag') {
        formControlsHtml = `
        <div class="form-section-group">
            <h4 class="form-section-title">1. Pet Collar Text</h4>
            <div class="input-group">
                <label for="employee-name">Pet Name (Front):</label>
                <input type="text" id="employee-name" placeholder="FIDO" value="FIDO" maxlength="12">
            </div>
            <div class="input-group" style="margin-top:12px;">
                <label for="employee-title">Contact Phone (Back):</label>
                <input type="text" id="employee-title" placeholder="Call: 0412 345 678" value="Call: 0412 345 678" maxlength="20">
            </div>
        </div>

        <div class="form-section-group">
            <h4 class="form-section-title">2. Tag Shape Outlines</h4>
            <div class="input-group">
                <select id="pet-tag-shape">
                    <option value="bone">Bone Cutout Profile</option>
                    <option value="round">Classic Circle Profile</option>
                </select>
            </div>
        </div>
        `;

        previewerMarkupHtml = `
        <div id="live-badge" class="pet-tag-preview skin-gold-metal" style="width:240px; height:130px; border-radius:65px; display:flex; flex-direction:column; justify-content:center; align-items:center; border:2px solid #854d0e; color:#451a03; box-shadow:0 8px 16px rgba(0,0,0,0.1); position:relative; padding:20px;">
            <span style="position:absolute; top:8px; left:50%; transform:translateX(-50%); width:10px; height:10px; border-radius:50%; background:#222; border:1px solid #854d0e;"></span>
            <div id="preview-name" style="font-size:1.4rem; font-weight:900; text-transform:uppercase;">FIDO</div>
            <div id="preview-title" style="font-size:0.75rem; font-weight:normal; margin-top:2px;">Call: 0412 345 678</div>
        </div>
        `;
    }

    // Dynamic checks/sliders inside order section
    formControlsHtml += `
    <!-- Quantity and pricing calculator box -->
    <div class="form-section-group pricing-calculator-group">
        <h4 class="form-section-title">Order Details &amp; Quantity</h4>
        <div class="qty-pricing-row">
            <div class="input-group" style="max-width: 120px;">
                <label for="badge-quantity">Quantity:</label>
                <input type="number" id="badge-quantity" value="1" min="1" max="500">
            </div>
            
            <div class="live-calc-results">
                <div class="calc-row">
                    <span>Unit Price:</span>
                    <strong id="calc-unit-price">$${prod.basePrice.toFixed(2)}</strong>
                </div>
                <div class="calc-row">
                    <span>Total Savings:</span>
                    <strong class="text-green" id="calc-savings">$0.00</strong>
                </div>
                <div class="calc-row total-row">
                    <span>Subtotal Cost:</span>
                    <strong id="calc-total-cost">$${prod.basePrice.toFixed(2)}</strong>
                </div>
            </div>
        </div>
    </div>

    <div class="form-submit-row">
        <button class="btn btn-primary btn-large btn-full" id="add-custom-badge-btn" type="button">Add Custom Badges To Cart</button>
    </div>
    `;

    html = html.replace(/{{formControls}}/g, formControlsHtml);
    html = html.replace(/{{previewerMarkup}}/g, previewerMarkupHtml);

    // Dynamic Unified Schema Graph (Organization + LocalBusiness + FAQPage + Product)
    const unifiedSchema = compileUnifiedSchema('product', prod);
    html = html.replace(/{{schemaGraph}}/g, JSON.stringify(unifiedSchema, null, 2));

    // Save final html
    const productDir = path.join(__dirname, 'products');
    if (!fs.existsSync(productDir)) {
        fs.mkdirSync(productDir, { recursive: true });
    }
    fs.writeFileSync(path.join(productDir, `${prod.id}.html`), html, 'utf8');
});

// 3. GENERATE HOMEPAGE
console.log('Compiling homepage: index.html');
let indexHtml = indexTemplate;
indexHtml = indexHtml.replace(/{{metaTitle}}/g, 'Custom Name Badges Australia | Badge Store Redesign');
indexHtml = indexHtml.replace(/{{metaDesc}}/g, 'Buy Custom Name Badges Online in Australia. Premium engraved, domed, wood, and metal name badges. Fast turnaround, no minimum orders, and damage-free magnetic attachments.');
indexHtml = indexHtml.replace(/{{canonicalUrl}}/g, 'https://www.badgestore.com.au/index.html');
indexHtml = indexHtml.replace(/{{ogType}}/g, 'website');
indexHtml = indexHtml.replace(/{{ogImage}}/g, 'https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/carousel/18/banner-3.jpg');
indexHtml = indexHtml.replace(/{{ogImageAlt}}/g, 'BadgeStore Australia - Premium Custom Name Badges');
indexHtml = indexHtml.replace(/{{navMenu}}/g, compileNavigation(''));
indexHtml = indexHtml.replace(/{{mobileNavMenu}}/g, compileMobileNavigation(''));
indexHtml = indexHtml.replace(/{{categoryGrid}}/g, compileCategoryGrid());
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');

console.log('Compilation completed successfully!');
