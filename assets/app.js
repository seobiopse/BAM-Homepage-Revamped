(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        /* ==========================================================================
           1. Mobile Navigation Hamburger & Drawer Menu
           ========================================================================== */
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        const mobileDrawer = document.getElementById('mobile-drawer');

        if (mobileToggle && mobileDrawer) {
            mobileToggle.addEventListener('click', () => {
                const isActive = mobileToggle.classList.contains('active');
                if (isActive) {
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mobileDrawer.classList.remove('active');
                    mobileDrawer.setAttribute('aria-hidden', 'true');
                } else {
                    mobileToggle.classList.add('active');
                    mobileToggle.setAttribute('aria-expanded', 'true');
                    mobileDrawer.classList.add('active');
                    mobileDrawer.setAttribute('aria-hidden', 'false');
                }
            });
        }


        /* ==========================================================================
           2. Scoped Interactive Configurator Inputs
           ========================================================================== */
        const nameInput = document.getElementById('employee-name');
        const titleInput = document.getElementById('employee-title');
        const previewName = document.getElementById('preview-name');
        const previewTitle = document.getElementById('preview-title');
        
        const liveBadge = document.getElementById('live-badge');
        const materialBtns = document.querySelectorAll('.material-btn');
        const fontSelect = document.getElementById('font-select');
        const fastenerRadios = document.querySelectorAll('input[name="fastener"], input[name="fastener-badge"]');
        const fastenerLabel = document.getElementById('fastener-type-label');
        const toggleBorderCheckbox = document.getElementById('toggle-border') || document.getElementById('toggle-border-badge') || document.getElementById('toggle-screws-plaque');
        
        const badgeLogo = document.getElementById('badge-preview-logo');

        // Sync name input to preview
        function bindTextSync(input, preview, defaultVal) {
            if (input && preview) {
                input.addEventListener('input', (e) => {
                    const value = e.target.value.trim();
                    preview.textContent = value !== "" ? value : defaultVal;
                });
            }
        }

        bindTextSync(nameInput, previewName, "YOUR NAME HERE");
        if (titleInput && previewTitle) {
            titleInput.addEventListener('input', (e) => {
                const value = e.target.value.trim();
                previewTitle.textContent = value !== "" ? value : "Job Title or Department";
            });
        }

        // Font family switcher
        if (fontSelect && previewName && previewTitle) {
            fontSelect.addEventListener('change', (e) => {
                const selectedFont = e.target.value;
                previewName.style.fontFamily = selectedFont;
                previewTitle.style.fontFamily = selectedFont;
            });
        }

        // Material switcher
        if (materialBtns && liveBadge) {
            materialBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active from all in this group
                    const parent = btn.parentElement;
                    parent.querySelectorAll('.material-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const skinClass = btn.getAttribute('data-skin');
                    const logoColor = btn.getAttribute('data-logo-color');

                    // Reset skin classes on badge
                    liveBadge.className = liveBadge.className.replace(/skin-\S+/g, '');
                    liveBadge.classList.add(skinClass);

                    if (badgeLogo && logoColor) {
                        badgeLogo.style.color = logoColor;
                    }
                });
            });
        }

        // Fastener radio button change
        if (fastenerRadios && fastenerLabel) {
            fastenerRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        if (e.target.value === 'magnetic') {
                            fastenerLabel.textContent = "Magnetic Fastener Attached";
                        } else {
                            fastenerLabel.textContent = "Safety Pin Attachment Attached";
                        }
                    }
                });
            });
        }

        // Border checkbox
        if (toggleBorderCheckbox && liveBadge) {
            toggleBorderCheckbox.addEventListener('change', (e) => {
                const isPlaque = liveBadge.classList.contains('plaque-preview');
                if (isPlaque) {
                    // Toggle screw caps display
                    const screwRowTop = document.getElementById('plaque-screw-row-top');
                    const screwRowBottom = document.getElementById('plaque-screw-row-bottom');
                    if (e.target.checked) {
                        if (screwRowTop) screwRowTop.style.display = 'flex';
                        if (screwRowBottom) screwRowBottom.style.display = 'flex';
                        liveBadge.style.borderStyle = 'double';
                    } else {
                        if (screwRowTop) screwRowTop.style.display = 'none';
                        if (screwRowBottom) screwRowBottom.style.display = 'none';
                        liveBadge.style.borderStyle = 'solid';
                    }
                } else {
                    if (e.target.checked) {
                        liveBadge.classList.add('has-border');
                    } else {
                        liveBadge.classList.remove('has-border');
                    }
                }
            });
        }

        // Upload picture for ID photo
        const photoUpload = document.getElementById('photo-upload') || document.getElementById('photo-upload-id');
        const photoPreviewBox = document.getElementById('photo-preview-box');
        if (photoUpload && photoPreviewBox) {
            photoUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        photoPreviewBox.innerHTML = `<img src="${event.target.result}" style="width:100%; height:100%; object-fit:cover;">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }


        /* ==========================================================================
           3. Dynamic Price Tier Calculator
           ========================================================================== */
        const qtyInput = document.getElementById('badge-quantity');
        const qtyValBubble = document.getElementById('qty-val');
        const unitPriceEl = document.getElementById('calc-unit-price');
        const savingsEl = document.getElementById('calc-savings');
        const totalCostEl = document.getElementById('calc-total-cost');
        const tierBadges = document.querySelectorAll('.wholesale-tiers .tier-badge');
        const customizerForm = document.getElementById('customizer-form');

        // Look up pricing structures from data registry
        let activeProduct = null;
        if (customizerForm) {
            const prodId = customizerForm.getAttribute('data-product-id');
            if (prodId && window.ProductCatalog && window.ProductCatalog.products[prodId]) {
                activeProduct = window.ProductCatalog.products[prodId];
            }
        }

        function updatePriceCalculation() {
            if (!qtyInput) return;

            const qty = parseInt(qtyInput.value, 10) || 1;
            if (qtyValBubble) qtyValBubble.textContent = qty;

            let unitPrice = 15.00;
            let basePrice = 15.00;
            let brackets = [
                { min: 1, max: 9, price: 15.00 },
                { min: 10, max: 49, price: 12.50 },
                { min: 50, max: 99, price: 9.90 },
                { min: 100, max: 9999, price: 7.50 }
            ];

            if (activeProduct) {
                brackets = activeProduct.priceBrackets;
                basePrice = activeProduct.basePrice;
            }

            // Find current bracket
            let activeBracketIndex = 0;
            brackets.forEach((b, idx) => {
                if (qty >= b.min && qty <= b.max) {
                    unitPrice = b.price;
                    activeBracketIndex = idx;
                }
            });

            const totalCost = qty * unitPrice;
            const baseCost = qty * basePrice;
            const totalSavings = Math.max(0, baseCost - totalCost);

            if (unitPriceEl) unitPriceEl.textContent = `$${unitPrice.toFixed(2)}`;
            if (savingsEl) savingsEl.textContent = `$${totalSavings.toFixed(2)}`;
            if (totalCostEl) totalCostEl.textContent = `$${totalCost.toFixed(2)}`;

            // Highlight active wholesale bracket on homepage calculator
            if (tierBadges) {
                tierBadges.forEach((badge, idx) => {
                    if (idx === activeBracketIndex) {
                        badge.classList.add('active-tier');
                    } else {
                        badge.classList.remove('active-tier');
                    }
                });
            }

            // Update Add to Cart Button Text
            const ctaBtn = document.getElementById('add-custom-badge-btn');
            if (ctaBtn) {
                const isFormCta = customizerForm !== null;
                ctaBtn.textContent = isFormCta 
                    ? `Add Custom Badges To Cart - $${totalCost.toFixed(2)}`
                    : `Add Custom Badge - $${totalCost.toFixed(2)}`;
            }
        }

        if (qtyInput) {
            qtyInput.addEventListener('input', updatePriceCalculation);
            qtyInput.addEventListener('change', updatePriceCalculation);
            updatePriceCalculation();
        }


        /* ==========================================================================
           4. Homepage Hero Tab Selector (Multi-Product Configurator)
           ========================================================================== */
        const tabBtns = document.querySelectorAll('.hero-designer-tabs .tab-btn');
        const tabContents = document.querySelectorAll('.hero-widget-card .tab-content');

        if (tabBtns && tabContents && liveBadge) {
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active classes
                    tabBtns.forEach(b => {
                        b.classList.remove('active');
                        b.setAttribute('aria-selected', 'false');
                    });
                    tabContents.forEach(c => {
                        c.style.display = 'none';
                        c.classList.remove('active');
                    });

                    // Add active class to clicked button
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');

                    const tabId = btn.getAttribute('data-tab');
                    const activeContent = document.getElementById(`controls-${tabId}`);
                    if (activeContent) {
                        activeContent.style.display = 'block';
                        activeContent.classList.add('active');
                    }

                    // Reset canvas preview shape & details
                    liveBadge.className = 'badge-preview-box';
                    
                    // Clear custom inline styling properties
                    liveBadge.style.width = '';
                    liveBadge.style.height = '';
                    liveBadge.style.borderRadius = '';
                    liveBadge.style.borderStyle = '';
                    liveBadge.style.flexDirection = '';
                    liveBadge.style.padding = '';
                    liveBadge.style.alignItems = '';
                    liveBadge.style.justifyContent = '';

                    const screwRowTop = document.getElementById('plaque-screw-row-top');
                    const screwRowBottom = document.getElementById('plaque-screw-row-bottom');
                    if (screwRowTop) screwRowTop.style.display = 'none';
                    if (screwRowBottom) screwRowBottom.style.display = 'none';

                    if (tabId === 'badge') {
                        liveBadge.classList.add('skin-silver-metal', 'has-border');
                        liveBadge.innerHTML = `
                            <div class="badge-inner-shadow"></div>
                            <div class="badge-texture"></div>
                            <div class="badge-layout-grid">
                                <div class="badge-logo-holder">
                                    <svg viewBox="0 0 100 100" width="38" height="38" id="badge-preview-logo" style="color:#231F20;">
                                        <path fill="currentColor" d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" />
                                        <path fill="#FFFFFF" d="M35 40 L65 40 L65 50 L35 50 Z M35 60 L65 60 L65 65 L35 65 Z" />
                                    </svg>
                                </div>
                                <div class="badge-text-holder">
                                    <div id="preview-name" class="preview-text-name">YOUR NAME HERE</div>
                                    <div id="preview-title" class="preview-text-title">Job Title or Department</div>
                                </div>
                            </div>
                            <div class="fastener-indicator">
                                <span class="indicator-dot"></span>
                                <span id="fastener-type-label">Magnetic Fastener Attached</span>
                            </div>
                        `;
                    } else if (tabId === 'desk-plate') {
                        liveBadge.classList.add('desk-plate-preview', 'skin-mahogany-wood');
                        liveBadge.style.width = '340px';
                        liveBadge.style.height = '100px';
                        liveBadge.style.borderRadius = '4px';
                        liveBadge.style.display = 'flex';
                        liveBadge.style.justifyContent = 'center';
                        liveBadge.style.alignItems = 'center';
                        liveBadge.style.color = '#FFF';
                        liveBadge.style.border = '2px solid #5a200a';
                        liveBadge.innerHTML = `
                            <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%);"></div>
                            <div style="text-align:center; padding:10px;">
                                <div id="preview-name" style="font-size:1.3rem; letter-spacing:1px; text-transform:uppercase;">YOUR NAME HERE</div>
                                <div id="preview-title" style="font-size:0.75rem; opacity:0.8; font-weight:normal; margin-top:2px;">Job Title or Department</div>
                            </div>
                        `;
                    } else if (tabId === 'plaque') {
                        liveBadge.classList.add('plaque-preview', 'skin-silver-metal');
                        liveBadge.style.width = '280px';
                        liveBadge.style.height = '200px';
                        liveBadge.style.borderRadius = '4px';
                        liveBadge.style.display = 'flex';
                        liveBadge.style.flexDirection = 'column';
                        liveBadge.style.justifyContent = 'space-between';
                        liveBadge.style.padding = '20px';
                        liveBadge.style.border = '2.5px double #475569';
                        liveBadge.innerHTML = `
                            <div style="display:flex; justify-content:space-between; width:100%;" id="plaque-screw-row-top">
                                <span style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                                <span style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                            </div>
                            <div style="text-align:center;">
                                <h4 id="preview-name" style="font-size:1.1rem; margin-bottom:6px; font-weight:800; text-transform:uppercase;">IN COMMEMORATION</h4>
                                <p id="preview-title" style="font-size:0.75rem; color:#444;">Engraved Text Details Here</p>
                            </div>
                            <div style="display:flex; justify-content:space-between; width:100%;" id="plaque-screw-row-bottom">
                                <span style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                                <span style="width:8px; height:8px; border-radius:50%; background:#888; border:1px solid #444; display:block;"></span>
                            </div>
                        `;
                    } else if (tabId === 'id-card') {
                        liveBadge.classList.add('id-card-preview', 'skin-white-domed');
                        liveBadge.style.width = '200px';
                        liveBadge.style.height = '300px';
                        liveBadge.style.borderRadius = '8px';
                        liveBadge.style.border = '2px solid #231F20';
                        liveBadge.style.padding = '15px';
                        liveBadge.style.display = 'flex';
                        liveBadge.style.flexDirection = 'column';
                        liveBadge.style.alignItems = 'center';
                        liveBadge.style.justifyContent = 'space-between';
                        liveBadge.innerHTML = `
                            <div style="width:100%; border-bottom:3px solid var(--color-primary); padding-bottom:5px; text-align:center; font-weight:800; font-size:0.8rem; letter-spacing:1px; color:#231F20;">BADGESTORE</div>
                            <div style="width:80px; height:95px; background:#e2e8f0; border:1px solid #cbd5e1; border-radius:4px; display:flex; justify-content:center; align-items:center; font-size:0.6rem; color:#888; overflow:hidden;" id="photo-preview-box">PHOTO</div>
                            <div style="text-align:center; margin-top:5px;">
                                <div id="preview-name" style="font-size:0.95rem; font-weight:800; text-transform:uppercase; color:#231F20;">YOUR NAME HERE</div>
                                <div id="preview-title" style="font-size:0.7rem; color:var(--color-text-muted); margin-top:2px;">Job Title or Department</div>
                            </div>
                            <div style="width:100%; text-align:center; font-size:0.6rem; color:#aaa; border-top:1px solid #eee; padding-top:5px;">BARCODE ID: 1000101</div>
                        `;
                    } else if (tabId === 'pet-tag') {
                        liveBadge.classList.add('pet-tag-preview', 'skin-gold-metal');
                        liveBadge.style.width = '240px';
                        liveBadge.style.height = '130px';
                        liveBadge.style.borderRadius = '65px';
                        liveBadge.style.display = 'flex';
                        liveBadge.style.flexDirection = 'column';
                        liveBadge.style.justifyContent = 'center';
                        liveBadge.style.alignItems = 'center';
                        liveBadge.style.border = '2px solid #854d0e';
                        liveBadge.style.color = '#451a03';
                        liveBadge.innerHTML = `
                            <span style="position:absolute; top:8px; left:50%; transform:translateX(-50%); width:10px; height:10px; border-radius:50%; background:#222; border:1px solid #854d0e;"></span>
                            <div id="preview-name" style="font-size:1.4rem; font-weight:900; text-transform:uppercase;">FIDO</div>
                            <div id="preview-title" style="font-size:0.75rem; font-weight:normal; margin-top:2px;">Call: 0412 345 678</div>
                        `;
                    }

                    // Re-bind text inputs inside the active content block
                    const tabNameInput = activeContent.querySelector('input[type="text"]');
                    const tabTitleInput = activeContent.querySelector('input[type="text"]:nth-of-type(2), textarea');
                    const innerPreviewName = document.getElementById('preview-name');
                    const innerPreviewTitle = document.getElementById('preview-title');

                    if (tabNameInput && innerPreviewName) {
                        bindTextSync(tabNameInput, innerPreviewName, tabId === 'pet-tag' ? 'FIDO' : 'YOUR NAME HERE');
                        innerPreviewName.textContent = tabNameInput.value.trim() !== "" ? tabNameInput.value.trim() : (tabId === 'pet-tag' ? 'FIDO' : 'YOUR NAME HERE');
                    }
                    if (tabTitleInput && innerPreviewTitle) {
                        tabTitleInput.addEventListener('input', (e) => {
                            const value = e.target.value.trim();
                            innerPreviewTitle.textContent = value !== "" ? value : (tabId === 'pet-tag' ? 'Call: 0412 345 678' : 'Job Title or Department');
                        });
                        innerPreviewTitle.textContent = tabTitleInput.value.trim() !== "" ? tabTitleInput.value.trim() : (tabId === 'pet-tag' ? 'Call: 0412 345 678' : 'Job Title or Department');
                    }

                    // Sync photo upload if on ID tab
                    const tabPhotoUpload = activeContent.querySelector('input[type="file"]');
                    const innerPhotoPreview = document.getElementById('photo-preview-box');
                    if (tabPhotoUpload && innerPhotoPreview) {
                        tabPhotoUpload.addEventListener('change', (e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                    innerPhotoPreview.innerHTML = `<img src="${event.target.result}" style="width:100%; height:100%; object-fit:cover;">`;
                                };
                                reader.readAsDataURL(file);
                            }
                        });
                    }

                    // Sync material selector on active tab if visible
                    const tabMaterialBtns = activeContent.querySelectorAll('.material-btn');
                    if (tabMaterialBtns) {
                        tabMaterialBtns.forEach(btn => {
                            btn.addEventListener('click', () => {
                                activeContent.querySelectorAll('.material-btn').forEach(b => b.classList.remove('active'));
                                btn.classList.add('active');

                                const skinClass = btn.getAttribute('data-skin');
                                liveBadge.className = liveBadge.className.replace(/skin-\S+/g, '');
                                liveBadge.classList.add(skinClass);
                            });
                        });
                    }

                    // Sync border checkbox toggle
                    const tabBorderCheck = activeContent.querySelector('input[type="checkbox"]');
                    if (tabBorderCheck) {
                        tabBorderCheck.addEventListener('change', (e) => {
                            if (tabId === 'plaque') {
                                const screwT = document.getElementById('plaque-screw-row-top');
                                const screwB = document.getElementById('plaque-screw-row-bottom');
                                if (e.target.checked) {
                                    if (screwT) screwT.style.display = 'flex';
                                    if (screwB) screwB.style.display = 'flex';
                                    liveBadge.style.borderStyle = 'double';
                                } else {
                                    if (screwT) screwT.style.display = 'none';
                                    if (screwB) screwB.style.display = 'none';
                                    liveBadge.style.borderStyle = 'solid';
                                }
                            } else {
                                if (e.target.checked) {
                                    liveBadge.classList.add('has-border');
                                } else {
                                    liveBadge.classList.remove('has-border');
                                }
                            }
                        });
                    }
                });
            });
        }


        /* ==========================================================================
           5. Unified Postcode Delivery Calculator
           ========================================================================== */
        const postcodeBtn = document.getElementById('postcode-calc-btn');
        const postcodeVal = document.getElementById('postcode-input');
        const errorMsg = document.getElementById('postcode-error');
        const resultsArea = document.getElementById('postcode-results');

        const priorityDaysEl = document.getElementById('priority-days');
        const priorityArrivalEl = document.getElementById('priority-arrival');
        const expressDaysEl = document.getElementById('express-days');
        const expressArrivalEl = document.getElementById('express-arrival');
        const standardDaysEl = document.getElementById('standard-days');
        const standardArrivalEl = document.getElementById('standard-arrival');

        function addDaysExcludingSundays(startDate, daysToAdd) {
            const resultDate = new Date(startDate.getTime());
            let addedDays = 0;
            while (addedDays < daysToAdd) {
                resultDate.setDate(resultDate.getDate() + 1);
                if (resultDate.getDay() !== 0) { // 0 is Sunday
                    addedDays++;
                }
            }
            return resultDate;
        }

        function formatDisplayDate(date) {
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-AU', options);
        }

        if (postcodeBtn && postcodeVal) {
            postcodeBtn.addEventListener('click', () => {
                const postcodeStr = postcodeVal.value.trim();
                const postcode = parseInt(postcodeStr, 10);
                
                if (postcodeStr.length !== 4 || isNaN(postcode)) {
                    if (errorMsg) errorMsg.style.display = 'block';
                    if (resultsArea) resultsArea.style.display = 'none';
                    return;
                }

                if (errorMsg) errorMsg.style.display = 'none';

                let priorityOffset = 1;
                let expressOffset = 2;
                let standardOffset = 3;

                // Zone Offset Selection Logic
                if (postcode >= 5000 && postcode <= 5999) {
                    // SA Local
                    priorityOffset = 1;
                    expressOffset = 2;
                    standardOffset = 3;
                } else if (
                    (postcode >= 2000 && postcode <= 2999) || // NSW Metro
                    (postcode >= 3000 && postcode <= 3999) || // VIC Metro
                    (postcode >= 4000 && postcode <= 4299)    // QLD Metro
                ) {
                    // East Coast Metro
                    priorityOffset = 2;
                    expressOffset = 3;
                    standardOffset = 5;
                } else {
                    // Regional & Remote
                    priorityOffset = 3;
                    expressOffset = 5;
                    standardOffset = 8;
                }

                const today = new Date();

                const priorityArrival = addDaysExcludingSundays(today, priorityOffset);
                const expressArrival = addDaysExcludingSundays(today, expressOffset);
                const standardArrival = addDaysExcludingSundays(today, standardOffset);

                if (priorityDaysEl) priorityDaysEl.textContent = `Priority Dispatch (${priorityOffset}d)`;
                if (priorityArrivalEl) priorityArrivalEl.textContent = `Arrives: ${formatDisplayDate(priorityArrival)}`;

                if (expressDaysEl) expressDaysEl.textContent = `Express Post (${expressOffset}d)`;
                if (expressArrivalEl) expressArrivalEl.textContent = `Arrives: ${formatDisplayDate(expressArrival)}`;

                if (standardDaysEl) standardDaysEl.textContent = `Standard Post (${standardOffset}d)`;
                if (standardArrivalEl) standardArrivalEl.textContent = `Arrives: ${formatDisplayDate(standardArrival)}`;

                // Update simplified table if it is loaded on product pages
                const simpleExpress = document.getElementById('express-arrival');
                const simpleStandard = document.getElementById('standard-arrival');
                if (simpleExpress) simpleExpress.textContent = `${formatDisplayDate(expressArrival)} (${expressOffset}d)`;
                if (simpleStandard) simpleStandard.textContent = `${formatDisplayDate(standardArrival)} (${standardOffset}d)`;

                if (resultsArea) {
                    resultsArea.style.display = 'block';
                    resultsArea.setAttribute('aria-hidden', 'false');
                }
            });

            postcodeVal.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    postcodeBtn.click();
                }
            });
        }


        /* ==========================================================================
           6. Accessible Accordion FAQs
           ========================================================================== */
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement.parentElement; // accordion-item
                const content = item.querySelector('.accordion-content');
                const isActive = item.classList.contains('active');

                // Collapse other siblings
                const parentAccordionList = item.parentElement;
                parentAccordionList.querySelectorAll('.accordion-item').forEach(sibling => {
                    if (sibling === item) return;
                    sibling.classList.remove('active');
                    const sibHeader = sibling.querySelector('.accordion-header');
                    const sibContent = sibling.querySelector('.accordion-content');
                    if (sibHeader) sibHeader.setAttribute('aria-expanded', 'false');
                    if (sibContent) {
                        sibContent.style.maxHeight = '0px';
                        sibContent.setAttribute('aria-hidden', 'true');
                    }
                });

                // Toggle selected
                if (!isActive) {
                    item.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.setAttribute('aria-hidden', 'false');
                } else {
                    item.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = '0px';
                    content.setAttribute('aria-hidden', 'true');
                }
            });
        });


        /* ==========================================================================
           7. Newsletter Form Handling
           ========================================================================== */
        const newsletterForm = document.getElementById('newsletter-form');
        const newsletterMsg = document.getElementById('newsletter-msg');

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const email = emailInput.value.trim();

                if (email !== "") {
                    emailInput.value = "";
                    if (newsletterMsg) {
                        newsletterMsg.textContent = `Thank you! We've sent a 10% welcome coupon code to ${email}`;
                        newsletterMsg.style.display = 'block';
                        setTimeout(() => {
                            newsletterMsg.style.display = 'none';
                        }, 5000);
                    }
                }
            });
        }

        /* ==========================================================================
           8. Product Gallery Views (Interactive vs Photos) & Thumbnails Toggles
           ========================================================================== */
        const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
        const galleryViews = document.querySelectorAll('.gallery-view-content');
        const activeGalleryImage = document.getElementById('active-gallery-image');
        const galleryThumbBtns = document.querySelectorAll('.gallery-thumb-btn');

        if (galleryTabBtns && galleryViews) {
            galleryTabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const targetView = btn.getAttribute('data-view');
                    
                    galleryTabBtns.forEach(b => {
                        b.classList.remove('active');
                        b.setAttribute('aria-selected', 'false');
                        b.style.backgroundColor = 'transparent';
                        b.style.color = 'var(--color-text-muted)';
                    });

                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');
                    btn.style.backgroundColor = 'var(--color-primary-light)';
                    btn.style.color = 'var(--color-primary)';

                    galleryViews.forEach(view => {
                        if (view.id === `${targetView}-view`) {
                            view.style.display = 'block';
                            view.classList.add('active');
                        } else {
                            view.style.display = 'none';
                            view.classList.remove('active');
                        }
                    });
                });
            });
        }

        if (galleryThumbBtns && activeGalleryImage) {
            // Initialize with the first thumbnail image if empty
            const firstThumb = document.querySelector('.gallery-thumb-btn');
            if (firstThumb && !activeGalleryImage.getAttribute('src')) {
                activeGalleryImage.setAttribute('src', firstThumb.getAttribute('data-large-url'));
            }

            galleryThumbBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const largeUrl = btn.getAttribute('data-large-url');
                    
                    // Update active border state on thumbnails
                    galleryThumbBtns.forEach(b => {
                        b.style.borderColor = 'var(--color-border)';
                        b.classList.remove('active');
                    });
                    btn.style.borderColor = 'var(--color-primary)';
                    btn.classList.add('active');

                    // Swap active preview image
                    activeGalleryImage.setAttribute('src', largeUrl);

                    // Auto switch view to photos tab if it isn't active
                    const photosTab = document.querySelector('.gallery-tab-btn[data-view="photos"]');
                    if (photosTab && !photosTab.classList.contains('active')) {
                        photosTab.click();
                    }
                });
            });
        }

    });
})();
