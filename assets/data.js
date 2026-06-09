/**
 * ProductCatalog
 * Central database registry representing categories and products for BadgeStore Australia.
 * Compatible with Node.js during compilation and client-side scripts.
 */
const ProductCatalog = {
    "categories": {
        "name-badges": {
            "slug": "name-badges",
            "name": "Name Badges",
            "metaTitle": "Buy Custom Name Badges Online | BadgeStore Australia",
            "metaDesc": "Shop Custom Name Badges in Australia. Variety of materials including laser engraved metals, acrylic doming, and sustainable hardwoods. Fast shipping and no minimum orders.",
            "heading": "Shop Custom Name Badges",
            "desc": "At BadgeStore, we design and manufacture commercial identification name badges for clinics, cafes, events, and businesses throughout Australia. Choose from laser-engraved polymers, crystal-clear acrylic doming, or sustainable hardwoods.",
            "breadcrumbs": [
                "Home",
                "Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "rectangle-name-badge-full-colour",
                    "name": "Rectangle Name Badge Full Colour",
                    "priceRange": "$9.00 - $15.00",
                    "basePrice": 15,
                    "imgClass": "bg-soft-red",
                    "textPreview": "REDCROSS STAFF"
                },
                {
                    "id": "rectangle-name-badge-laser-engraved",
                    "name": "Rectangle Name Badge Laser Engraved",
                    "priceRange": "$8.50 - $14.00",
                    "basePrice": 14,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "ALEXANDER M."
                },
                {
                    "id": "acrylic-domed-name-badge",
                    "name": "Acrylic Domed Name Badge",
                    "priceRange": "$10.50 - $17.50",
                    "basePrice": 17.5,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "DR. HELEN WEST"
                },
                {
                    "id": "reusable-printed-name-badge",
                    "name": "Reusable Printed Rectangle Badge",
                    "priceRange": "$7.50 - $12.50",
                    "basePrice": 12.5,
                    "imgClass": "bg-soft-red",
                    "textPreview": "STAFF MEMBER"
                },
                {
                    "id": "walnut-hardwood-engraved-badge",
                    "name": "Walnut Hardwood Engraved Badge",
                    "priceRange": "$9.50 - $16.00",
                    "basePrice": 16,
                    "imgClass": "bg-warm-wood",
                    "textPreview": "FOREST CAFE"
                }
            ]
        },
        "desk-plates": {
            "slug": "desk-plates",
            "name": "Desk Plates",
            "metaTitle": "Custom Desk Name Plates | BadgeStore Australia",
            "metaDesc": "Professional engraved desk name plates. Acrylic, solid timber, and aluminium channel options. Fast Australia-wide delivery.",
            "heading": "Shop Desk Name Plates",
            "desc": "Make a professional first impression with our premium custom desk plates. Perfect for reception areas, executive suites, and corporate offices. Choose from sleek acrylic stands, solid mahogany wedges, or modern anodised aluminium tracks.",
            "breadcrumbs": [
                "Home",
                "Desk Plates"
            ],
            "filterGroups": [
                {
                    "title": "Plate Material",
                    "options": [
                        "Acrylic Plate",
                        "Metal Insert",
                        "Wooden Panel"
                    ]
                },
                {
                    "title": "Base Style",
                    "options": [
                        "Aluminium Channel",
                        "Mahogany Timber Base",
                        "Clear Acrylic Stand"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Desk Plate Vibe & Base Guide",
                "headers": [
                    "Base Style",
                    "Material Composition",
                    "Vibe Vibe",
                    "Standard Size Size"
                ],
                "rows": [
                    [
                        "Aluminium Track",
                        "Anodised Metal Channel",
                        "Modern, Corporate & Sleek",
                        "200mm x 50mm"
                    ],
                    [
                        "Solid Timber Wedge",
                        "Mahogany/Oak Wedge Block",
                        "Classic, Warm & Executive",
                        "210mm x 60mm"
                    ],
                    [
                        "Acrylic Stand",
                        "Clear Polished Perspex Stand",
                        "Minimalist, Contemporary & Clean",
                        "180mm x 45mm"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are the name inserts interchangeable in the metal tracks?",
                    "a": "Yes. Our aluminium channel tracks are designed so that the engraved name plate slides out easily. You can order replacement inserts independently without buying a new metal base."
                },
                {
                    "q": "Do you offer double-sided desk plates?",
                    "a": "Yes, we can print or engrave on both sides of acrylic or timber plates if you need the name visible from both the front and back of a counter or service desk."
                },
                {
                    "q": "What font sizes are standard on desk plates?",
                    "a": "We typically print the employee's main name in 24pt bold, and their job title or department below in 14pt regular, ensuring clean legibility."
                }
            ],
            "products": [
                {
                    "id": "aluminium-channel-desk-plate",
                    "name": "Aluminium Channel Desk Plate",
                    "priceRange": "$18.00 - $29.00",
                    "basePrice": 29,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "RECEPTION DESK"
                },
                {
                    "id": "mahogany-wedge-desk-plate",
                    "name": "Mahogany Wedge Desk Plate",
                    "priceRange": "$24.00 - $39.00",
                    "basePrice": 39,
                    "imgClass": "bg-warm-wood",
                    "textPreview": "MANAGING DIRECTOR"
                },
                {
                    "id": "acrylic-stand-desk-plate",
                    "name": "Acrylic Stand Desk Plate",
                    "priceRange": "$15.00 - $25.00",
                    "basePrice": 25,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "CONSULTANT"
                }
            ]
        },
        "metal-plaques": {
            "slug": "metal-plaques",
            "name": "Metal Plaques",
            "metaTitle": "Engraved Metal Plaques & Signage | BadgeStore",
            "metaDesc": "Premium engraved brass, stainless steel, and aluminium plaques. Commemorative plaques, corporate signage, and door plates.",
            "heading": "Shop Engraved Metal Plaques",
            "desc": "Commemorate achievements and mark corporate spaces with our heavy-duty engraved metal plaques. Available in marine-grade stainless steel, high-polished traditional brass, and durable anodised aluminium.",
            "breadcrumbs": [
                "Home",
                "Metal Plaques"
            ],
            "filterGroups": [
                {
                    "title": "Metal Type",
                    "options": [
                        "Stainless Steel",
                        "Polished Brass",
                        "Anodised Aluminium"
                    ]
                },
                {
                    "title": "Mounting Style",
                    "options": [
                        "Corner Screw Holes",
                        "Adhesive Backing",
                        "Wooden Mount Plate"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Metal Plaque Materials Comparison",
                "headers": [
                    "Metal Type",
                    "Weather Resistance",
                    "Look & Gloss",
                    "Primary Application"
                ],
                "rows": [
                    [
                        "Stainless Steel",
                        "Excellent (Marine Grade 316)",
                        "Industrial, Sleek & Silver",
                        "Outdoor Memorials & Exterior Corporate Signage"
                    ],
                    [
                        "Polished Brass",
                        "Moderate (Requires sealing)",
                        "Classic Bright Gold Gloss",
                        "Indoor Honors & Boardroom Dedications"
                    ],
                    [
                        "Anodised Aluminium",
                        "High (No rusting)",
                        "Matte Silver / Gold",
                        "Door Numbers & Machine Serial Labelling"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Do plaques come with pre-drilled screw holes?",
                    "a": "Yes, we can add pre-drilled holes at all four corners by default. Alternatively, you can select double-sided outdoor adhesive tape or request a solid wooden backboard mount."
                },
                {
                    "q": "How do I maintain the shine on brass plaques outdoors?",
                    "a": "Outdoor brass will naturally oxidise over time. To preserve its high gloss, we apply a protective clear coat, but periodic polishing with specialized metal cleaner is recommended for high-exposure plaques."
                },
                {
                    "q": "Can you engrave complex custom graphics onto stainless steel?",
                    "a": "Yes! Our laser engraving machinery uses ceramic coating markings to burn detailed designs and corporate logos with high resolution onto the metal surfaces."
                }
            ],
            "products": [
                {
                    "id": "stainless-steel-outdoor-plaque",
                    "name": "Stainless Steel Outdoor Plaque",
                    "priceRange": "$80.00 - $120.00",
                    "basePrice": 120,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "COMMEMORATIVE"
                },
                {
                    "id": "polished-brass-honours-plaque",
                    "name": "Polished Brass Honours Plaque",
                    "priceRange": "$95.00 - $145.00",
                    "basePrice": 145,
                    "imgClass": "bg-brushed-gold",
                    "textPreview": "FOUNDER'S HALL"
                },
                {
                    "id": "anodised-aluminium-door-plaque",
                    "name": "Anodised Aluminium Door Plaque",
                    "priceRange": "$55.00 - $95.00",
                    "basePrice": 95,
                    "imgClass": "bg-soft-red",
                    "textPreview": "CONFERENCE ROOM"
                }
            ]
        },
        "id-cards": {
            "slug": "id-cards",
            "name": "ID Cards",
            "metaTitle": "Custom Staff ID Cards & Lanyards | BadgeStore",
            "metaDesc": "Print high-quality employee photo ID cards, barcode passes, and custom branded lanyards. Security passes with safety breakaway clips.",
            "heading": "Shop Custom ID Cards & Accessories",
            "desc": "Ensure facility security and uniform professional presentation with our printed credit-card-sized ID passes. We supply barcodes, photo printing, safety breakaway lanyards, and protective clip accessories.",
            "breadcrumbs": [
                "Home",
                "ID Cards"
            ],
            "filterGroups": [
                {
                    "title": "ID Accessories",
                    "options": [
                        "Printed Lanyards",
                        "ID Card Shells",
                        "Badge Holder Clips"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "ID Card Vibe & Options",
                "headers": [
                    "Card Type",
                    "Printing Configuration",
                    "Security Feature",
                    "Default Attachment"
                ],
                "rows": [
                    [
                        "Photo ID Pass",
                        "Single or Double Sided Full Color",
                        "Photo & Barcode ID",
                        "Custom Printed Fabric Lanyard"
                    ],
                    [
                        "Access Keycard",
                        "Chip Embedded Coding",
                        "RFID Proximity",
                        "Retractable Reel Badge Clip"
                    ],
                    [
                        "Visitor Badge",
                        "Paper Card Shell",
                        "Temporary Bar Stamp",
                        "Crocodile Clip Pin Strap"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are breakaway safety clips standard on your ID lanyards?",
                    "a": "Yes! Safety breakaway buckles are integrated at the neck on all our lanyards. In medical, industrial, or retail work settings, this snaps open instantly if the cord is pulled, avoiding choking risks."
                },
                {
                    "q": "What dimensions are the custom ID cards?",
                    "a": "Our ID cards match standard CR80 credit card specifications (85.6mm x 54mm) with 0.76mm thickness, fitting all standard wallets, badge holders, and card swipe machines."
                },
                {
                    "q": "Can we order ID cards with custom variable barcodes?",
                    "a": "Yes, we can print sequential numbering, custom QR codes, or barcodes (Code 39, Code 128) synchronized with your business databases."
                }
            ],
            "products": [
                {
                    "id": "standard-employee-photo-id",
                    "name": "Standard Employee Photo ID",
                    "priceRange": "$5.00 - $8.00",
                    "basePrice": 8,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "STAFF ID PASS"
                },
                {
                    "id": "barcode-rfid-access-card",
                    "name": "Barcode RFID Access Card",
                    "priceRange": "$6.00 - $9.00",
                    "basePrice": 9,
                    "imgClass": "bg-soft-red",
                    "textPreview": "ACCESS PASS"
                },
                {
                    "id": "custom-printed-lanyard",
                    "name": "Custom Printed Lanyard",
                    "priceRange": "$2.50 - $4.50",
                    "basePrice": 4.5,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "LANYARD"
                }
            ]
        },
        "lapel-pins": {
            "slug": "lapel-pins",
            "name": "Lapel Pins",
            "metaTitle": "Custom Branded Lapel Pins | BadgeStore Australia",
            "metaDesc": "Design custom enamel lapel pins. Soft enamel 3D textured, hard enamel polished, and die-struck pins. No minimum order limits.",
            "heading": "Shop Custom Lapel Pins",
            "desc": "Reward team milestones, identify membership roles, or launch custom marketing lines with our bespoke lapel pins. We offer textured 3D soft enamel, flat polished hard enamel, and classic die-struck metal finishes.",
            "breadcrumbs": [
                "Home",
                "Lapel Pins"
            ],
            "filterGroups": [
                {
                    "title": "Pin Type",
                    "options": [
                        "Soft Enamel",
                        "Hard Enamel",
                        "Die Struck Metal"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Lapel Pin Style Differences",
                "headers": [
                    "Pin Style",
                    "Finish Feel",
                    "Durability",
                    "Detail Level Capacity"
                ],
                "rows": [
                    [
                        "Soft Enamel",
                        "Textured / Recessed Paint Finish",
                        "High",
                        "Excellent for Complex Outlines"
                    ],
                    [
                        "Hard Enamel",
                        "Smooth / Polished Flat Glass",
                        "Outstanding (Scratch Proof)",
                        "Best for Bold & Minimalist Logos"
                    ],
                    [
                        "Die Struck",
                        "Solid Metal 3D relief",
                        "Very High",
                        "Classic Elegance / No color paint"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "What is the difference between soft enamel and hard enamel custom pins?",
                    "a": "Soft enamel pins are baked after paint fills, leaving recessed colored wells below the raised metal lines for a textured feel. Hard enamel pins are overfilled and polished completely flat with the metal, creating a glass-like finish."
                },
                {
                    "q": "What clasp types are available?",
                    "a": "We offer traditional metal butterfly clutches, rubber clutches (ideal for wearing next to the skin), and magnetic pinless backings for garment safety."
                },
                {
                    "q": "What is the standard turnaround time for custom lapel pins?",
                    "a": "Because lapel pins require unique mold strikes and detailed hand-painting, production takes 10-15 business days from final proof approval."
                }
            ],
            "products": [
                {
                    "id": "soft-enamel-custom-pin",
                    "name": "Soft Enamel Custom Pin",
                    "priceRange": "$2.00 - $3.50",
                    "basePrice": 3.5,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "SOFT ENAMEL"
                },
                {
                    "id": "hard-enamel-premium-pin",
                    "name": "Hard Enamel Premium Pin",
                    "priceRange": "$2.50 - $4.00",
                    "basePrice": 4,
                    "imgClass": "bg-brushed-gold",
                    "textPreview": "HARD ENAMEL"
                },
                {
                    "id": "die-struck-metallic-pin",
                    "name": "Die Struck Metallic Pin",
                    "priceRange": "$1.80 - $3.00",
                    "basePrice": 3,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "DIE STRUCK"
                }
            ]
        },
        "badge-machines": {
            "slug": "badge-machines",
            "name": "Badge Machines",
            "metaTitle": "Button Badge Making Machines & Parts | BadgeStore",
            "metaDesc": "Professional button badge press machines. Heavy-duty circular dies (25mm, 32mm, 57mm) and blank button components.",
            "heading": "Shop Button Badge Machines",
            "desc": "Start making your own custom promotional pins and buttons! Our heavy-duty steel badge press machines are built for high output and continuous service. Available with interchangeable circular dies and matching parts.",
            "breadcrumbs": [
                "Home",
                "Badge Machines"
            ],
            "filterGroups": [
                {
                    "title": "Die Size",
                    "options": [
                        "25mm Die Set",
                        "32mm Die Set",
                        "57mm Die Set"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Badge Machine Models & Outputs",
                "headers": [
                    "Die Size",
                    "Vibe Vibe",
                    "Hourly Output",
                    "Best Application"
                ],
                "rows": [
                    [
                        "25mm Die Press",
                        "Compact / Mini Buttons",
                        "Approx. 150-200 badges",
                        "Band Pins, Novelties & Small Logos"
                    ],
                    [
                        "32mm Die Press",
                        "Medium Standard",
                        "Approx. 150-200 badges",
                        "School Activities & Campaign Buttons"
                    ],
                    [
                        "57mm Die Press",
                        "Large Statement",
                        "Approx. 100-150 badges",
                        "Photo Badges & Employee ID Tags"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are the machine die cutters interchangeable?",
                    "a": "Yes, our BadgeStore professional line allows you to purchase different size dies (25mm, 32mm, 57mm) and swap them onto the same press frame using simple alignment pins."
                },
                {
                    "q": "What components are included in the starter kits?",
                    "a": "Starter kits include the heavy-duty metal badge press, a circular die, a rotary circle paper cutter, and 100 sets of blank metal badge components (front shell, plastic mylar film, pin backplate)."
                },
                {
                    "q": "Is it easy to press badges? Do we need electricity?",
                    "a": "No electricity is needed! Our button maker uses a manual lever mechanical press. With standard printed paper and a simple two-stroke press, anyone can easily make badges."
                }
            ],
            "products": [
                {
                    "id": "starter-badge-machine-25mm",
                    "name": "25mm Badge Machine Starter Kit",
                    "priceRange": "$199.00 - $299.00",
                    "basePrice": 299,
                    "imgClass": "bg-soft-red",
                    "textPreview": "25MM PRESS"
                },
                {
                    "id": "pro-badge-machine-57mm",
                    "name": "57mm Pro Badge Machine Kit",
                    "priceRange": "$249.00 - $399.00",
                    "basePrice": 399,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "57MM PRESS"
                },
                {
                    "id": "blank-pin-components-100pack",
                    "name": "Blank Pin Components (100 Pack)",
                    "priceRange": "$15.00 - $25.00",
                    "basePrice": 25,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "BLANK PARTS"
                }
            ]
        },
        "pet-tags": {
            "slug": "pet-tags",
            "name": "Pet Tags",
            "metaTitle": "Engraved Pet ID Tags | BadgeStore Australia",
            "metaDesc": "Engraved brass and aluminium pet tags. Bone, round, and heart-shaped custom tags for dogs and cats. Split ring attachment included.",
            "heading": "Shop Engraved Pet ID Tags",
            "desc": "Keep your pets safe and easily identifiable with our durable, deeply engraved pet tags. Made from corrosion-resistant solid brass and lightweight anodised aluminium. Includes split rings for direct collar mounting.",
            "breadcrumbs": [
                "Home",
                "Pet Tags"
            ],
            "filterGroups": [
                {
                    "title": "Tag Material",
                    "options": [
                        "Solid Brass",
                        "Anodised Aluminium"
                    ]
                },
                {
                    "title": "Tag Shape",
                    "options": [
                        "Bone Shape",
                        "Classic Circle",
                        "Heart Shape"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Pet Tag Material Comparison Chart",
                "headers": [
                    "Material Type",
                    "Available Shapes",
                    "Durability Scale",
                    "Relative Weight"
                ],
                "rows": [
                    [
                        "Solid Brass",
                        "Round / Bone / Heart",
                        "Outstanding (Corrosion Proof)",
                        "Heavy-duty (Best for large dogs)"
                    ],
                    [
                        "Anodised Aluminium",
                        "Round / Bone / Heart",
                        "Very High (Scratch Proof)",
                        "Lightweight (Best for cats/small dogs)"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Is the pet tag engraving double-sided?",
                    "a": "Yes. We typically engrave the pet's name on the front face, and owner contact details (phone, street address) on the back face."
                },
                {
                    "q": "Does the tag come with collar attachment hardware?",
                    "a": "Yes, every custom pet tag includes a high-tensile steel split key ring for secure attachment to any collar D-ring."
                },
                {
                    "q": "What size font is used on pet tags?",
                    "a": "We scale the font dynamically to maximize space, ensuring phone numbers are deeply engraved and highly legible for anyone who finds your pet."
                }
            ],
            "products": [
                {
                    "id": "solid-brass-bone-pet-tag",
                    "name": "Solid Brass Bone Pet Tag",
                    "priceRange": "$8.00 - $12.00",
                    "basePrice": 12,
                    "imgClass": "bg-brushed-gold",
                    "textPreview": "FIDO"
                },
                {
                    "id": "anodised-aluminium-round-pet-tag",
                    "name": "Anodised Aluminium Round Pet Tag",
                    "priceRange": "$6.00 - $9.00",
                    "basePrice": 9,
                    "imgClass": "bg-soft-red",
                    "textPreview": "ROVER"
                }
            ]
        },
        "acrylic-dome-name-badges": {
            "slug": "acrylic-dome-name-badges",
            "parent": "name-badges",
            "name": "Acrylic Dome Name Badges",
            "metaTitle": "Acrylic Name Badges Australia, Melbourne, Perth, Sydney| Acrylic Domed Name Badges &amp; Tags| BadgeStore",
            "metaDesc": "Great options for acrylic name badges at great prices. Make your own custom magnetic name badges incuding acrylic name badges. Great for work, home, clubs or items. Get our magnetic name badges in Australia, with regular deliveries of our magnetic name badges to Melbourne, Perth, Sydney and Brisbane.",
            "heading": "Acrylic Dome Name Badges",
            "desc": "Acrylic Name Badges Australia, Melbourne, Perth, Sydney| Acrylic Domed Name Badges &amp; Tags| BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-size: 10px;\" title=\"Acrylic domed name badges\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/domed-name-badges-narrow.jpg\" alt=\"Acrylic domed name badges\" width=\"500\" height=\"432\">\r\n          </h1>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #00ff00;\">\r\n              <span style=\"color: #000000;\">\r\n                <br>We can also provide custom made name badges with clear acrylic doming. These badges can be either laser engraved on one of our many incredible looking materials or printed in full colour. Acrylic doming adds another layer of class to create a professional, prestige look to any custom made name badge. The acrylic doming layer is crystal clear and is high gloss in appearance. </span>\r\n            </span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n            <br>\r\n            <span>Prices can be viewed on the product page below</span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Learn more about acrylic domed name badges</strong>\r\n            <br>To learn more about our product range, get in touch with our attentive staff today by calling 1300 862 367, or emailing at admin@badgestore.com.au\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Available Colours</strong>\r\n          </p>\r\n          <p>\r\n            <img class=\"__mce_add_custom__\" title=\"white-black.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-black.jpg\" alt=\"White - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Bright Green\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-bright-green.jpg\" alt=\"White - Bright Green\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Sky Blue\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-sky-blue.jpg\" alt=\"White - Sky Blue\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Red - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-red-black.jpg\" alt=\"White - Red - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Black - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/black-white.jpg\" alt=\"Black - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-gold-black.jpg\" alt=\"Brushed Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Black - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/black-gold.jpg\" alt=\"Black - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Antique Gold - Red\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/antique-gold-red.jpg\" alt=\"Antique Gold - Red\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Gold - Blue\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-gold-blue.jpg\" alt=\"Brushed Gold - Blue\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Stainless - Silver\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-stainless-silver.jpg\" alt=\"Brushed Stainless - Silver\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Canary - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/canary-black.jpg\" alt=\"Canary - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Celestial Blue - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/celestial-blue-gold.jpg\" alt=\"Celestial Blue - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"China Blue - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/china-blue-white.jpg\" alt=\"China Blue - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Copper Penny - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/copper-penny-black.jpg\" alt=\"Copper Penny - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Digicam Desert Storm - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/digicam-desert-store-black.jpg\" alt=\"Digicam Desert Storm - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Digicam Navy - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/digicam-navy-white.jpg\" alt=\"Digicam Navy - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Smoke Grey - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/grey-white.jpg\" alt=\"Smoke Grey - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Harbour Grey - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/harbour-grey-white.jpg\" alt=\"Harbour Grey - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Kelly Green - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/kelly-green-black.jpg\" alt=\"Kelly Green - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Nickel Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/nickel-black.jpg\" alt=\"Nickel Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Vibrant Orange - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/orange-black.jpg\" alt=\"Vibrant Orange - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Port Wine - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/port-wine-gold.jpg\" alt=\"Port Wine - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Purple - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/purple-white.jpg\" alt=\"Purple - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Ribbon Pink - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/ribbon-pink-white.jpg\" alt=\"Ribbon Pink - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Rose Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/rose-gold-black.jpg\" alt=\"Rose Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Sky Blue - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/sky-blue-white.jpg\" alt=\"Sky Blue - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Sky Blue - Yellow\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/sky-blue-yellow.jpg\" alt=\"Sky Blue - Yellow\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Stainless Steel - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/stainless-black.jpg\" alt=\"Stainless Steel - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Stainless Steel - Red\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/stainless-red.jpg\" alt=\"Stainless Steel - Red\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Tangerine - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/tangerine-white.jpg\" alt=\"Tangerine - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Copper - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-copper-black.jpg\" alt=\"Textured Copper - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-gold-black.jpg\" alt=\"Textured Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Nickel - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-nickel-black.jpg\" alt=\"Textured Nickel - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Stainless - Silver\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-stainless-silver.jpg\" alt=\"Textured Stainless - Silver\" width=\"80\" height=\"80\">&nbsp;\r\n          </p>\r\n          <p style=\"text-align: center;\">&nbsp;&nbsp; <br>&nbsp; <strong>Clip Styles&nbsp;</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">\r\n            <h2>Acrylic Name Badges</h2>\r\n            <p>Enhance your business’s customer experience with the right acrylic name badges. At Badge Store, we customise magnetic name badges to match your business’s branding and make your customer’s lives easier. With the right acrylic name badges, you create a professional atmosphere throughout your workplace.</p>\r\n            <h2>Why use acrylic name badges in Australia?</h2>\r\n            <p>Acrylic is an ideal material for supporting clear lettering and your brand’s designs. Acrylic doming also provides a sense of prestige, making them ideal for almost any setting.</p>\r\n            <p>On a practical level, using custom magnetic name badges that are made from acrylic is hygienic. They’re easy to wipe down, making them ideal for healthcare settings, restaurants, and other such environments.</p>\r\n            <p>While remaining entirely cost-effective, these custom badges support bright colours. As such, if you’re looking for magnetic name badges in Melbourne that won’t blow through your budget, acrylic is the way forward.</p>\r\n            <h2>Acrylic name badges that are durable</h2>\r\n            <p>In addition to looking professional, acrylic name badges are durable. They stand the test of time without losing their shine, making acrylic your go-to material when you want magnetic name badges that’ll go the extra mile.</p>\r\n            <p>Using acrylic for your magnetic name badges in Australia also allows you to achieve a shape that matches your brand. If you prefer smooth-round edges over sharp rectangular designs, we can make it happen.</p>\r\n            <h2>Reasons to choose badge store for your name badges</h2>\r\n            <p>At Badge Store, we use high-end lasering techniques to engrave your badges. While paying close attention to the smaller details, we aim for a refined finish that shows your brand at its best. We also work to tight deadlines, so we can produce your badge order at record speed and have your order with you swiftly.</p>\r\n            <p>If you want to learn more about our acrylic name badges or if you want to place an order, call <strong>1300 862 637</strong> or email <a href=\"mailto:admin@badgestore.com.au\">admin@badgestore.com.au</a>. </p>\r\n          </div>\r\n          <p style=\"text-align: center;\">\r\n            <strong>\r\n              <span>Choose Below for more information or to order.</span>\r\n            </strong>\r\n          </p>\r\n          <h1 style=\"text-align: center;\">\r\n            <strong>\r\n              <span>Acrylic Dome Name Badges</span>\r\n            </strong>\r\n          </h1>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Acrylic Dome Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "acrylic-domed-name-badge",
                    "name": "Acrylic Domed Name Badge",
                    "priceRange": "$10.50 - $17.50",
                    "basePrice": 17.5,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "DR. HELEN WEST"
                }
            ]
        },
        "custom-framed-name-badges": {
            "slug": "custom-framed-name-badges",
            "parent": "name-badges",
            "name": "Custom Framed Name Badges",
            "metaTitle": "Buy Online Custom Framed Name Badges Australia | BadgeStore",
            "metaDesc": "Our framed name badges are the same as our standard full name badges with the exception that they are mounted in a plastic frame. Our frames are available in three colours. Get in touch with our attentive staff today by calling 1300 862 367!",
            "heading": "Custom Framed Name Badges",
            "desc": "Buy Online Custom Framed Name Badges Australia | BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">\r\n            <img class=\"__mce_add_custom__\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/framed-badge-narrow.jpg\" alt=\"Framed Name Badges\" width=\"500\" height=\"289\">\r\n          </h1>\r\n          <p style=\"text-align: center;\">Our framed name badges are the same as our standard full name badges with the exception that they are mounted in a plastic frame. The frame adds an attractive border to the badge for a bolder appearance, the same a picture frame does to a painting. Not only does the frame add a border to the badge, but it also makes the badge stronger and more rigid. The frames are available in three colours. All Black &amp; Black with a Gold rim.</p>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n            <br>\r\n            <span>Prices can be viewed on the product page below</span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Have any questions about framed name badges?</strong>\r\n            <br>To learn more about our product range, get in touch with our attentive staff today by calling 1300 862 367, or emailing at admin@badgestore.com.au\r\n          </p>\r\n          <h1 style=\"text-align: center;\">\r\n            <span style=\"font-size: medium; color: #000000;\">Custom Framed Name Badges</span>\r\n          </h1>\r\n          <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp; <strong>Clip Styles&nbsp;</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">\r\n            <strong>\r\n              <span>Choose Below for more information or to order.</span>\r\n            </strong>\r\n          </div>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Custom Framed Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "reusable-printed-name-badge",
                    "name": "Reusable Printed Rectangle Badge",
                    "priceRange": "$7.50 - $12.50",
                    "basePrice": 12.5,
                    "imgClass": "bg-soft-red",
                    "textPreview": "STAFF MEMBER"
                }
            ]
        },
        "hardwood-engraved-badges": {
            "slug": "hardwood-engraved-badges",
            "parent": "name-badges",
            "name": "Hardwood Engraved Badges",
            "metaTitle": "Hardwood Engraved Badges",
            "metaDesc": "Hardwood Engraved Badges - Eco Friendly badges",
            "heading": "Hardwood Engraved Badges",
            "desc": "Hardwood Engraved Badges",
            "categoryDescHtml": "<p style=\"text-align: center;\">\r\n            <strong>Custom Engraved Hardwood Name Badges for Australia</strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">At BadgeStore we now make custom engraved hardwood names badges for businesses, schools and other organisations throughout Australia.&nbsp;</p>\r\n          <p style=\"text-align: center;\">Available in Walnut and Mahogany. These laminates are constructed of five single-ply, high quality hardwood layers that are laminated together for added strength dimensional stability.</p>\r\n          <p style=\"text-align: center;\">Engraved at 600dpi, ensures that you get sharp text &amp; high-quality logos. <br>For bulk orders, order the required quantity and upload your artwork/name list from the order form. Note: images and logos should be in black &amp; white only, with no shading. </p>\r\n          <p style=\"text-align: center;\">&nbsp;</p>\r\n          <p style=\"text-align: center;\">Available in 3 common sizes, small, medium and large. Other sized available on request. <br>\r\n            <br>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Available Colours</strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <img class=\"__mce_add_custom__\" title=\"Hardwood Name Badges\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/mixed-hardwood-namebadge2.jpg\" alt=\"Hardwood Name Badges\" width=\"610\" height=\"450\">\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Clip types available</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">Standard sizes available are,&nbsp;64mm x 20mm (small),&nbsp;70mm x 23mm (standard),&nbsp;80mm x 30mm (large)</div>\r\n          <p style=\"text-align: center;\">\r\n            <br>If you require further information on our custom engraved name badges and tags, or would like to make an enquiry regarding logos, pricing, design or anything else, please get in contact with our helpful staff today. We can be reached by calling 1300 862 637 or by email at admin@badgestore.com.au.\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Choose a shape below for pricing or to order.</strong>\r\n          </p>\r\n          <h1 style=\"text-align: center;\">\r\n            <strong>Hardwood Timber Engraved Name Badges Australia</strong>\r\n          </h1>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Hardwood Engraved Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "walnut-hardwood-engraved-badge",
                    "name": "Walnut Hardwood Engraved Badge",
                    "priceRange": "$9.50 - $16.00",
                    "basePrice": 16,
                    "imgClass": "bg-warm-wood",
                    "textPreview": "FOREST CAFE"
                }
            ]
        },
        "metal-name-badges": {
            "slug": "metal-name-badges",
            "parent": "name-badges",
            "name": "Metal Name Badges",
            "metaTitle": "Metal Name Badges Australia, Melbourne, Sydney | BadgeStore",
            "metaDesc": "Our metal name badges are laser engraved to give you a badge that has clean sharp text and logos that looks great.",
            "heading": "Metal Name Badges",
            "desc": "Metal Name Badges Australia, Melbourne, Sydney | BadgeStore",
            "categoryDescHtml": "<div style=\"text-align: center;\">\r\n            <div style=\"text-align: center;\">\r\n              <h1>Metal Name Badges</h1>\r\n              <img class=\"__mce_add_custom__\" title=\"Metal Name Badges\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/metal-name-badges.jpg\" alt=\"Metal Name Badges\" width=\"358\" height=\"360\">\r\n            </div>\r\n            <div style=\"text-align: center;\">\r\n              <p>Our aluminium badges are available in many colours. <br>\r\n                <br>\r\n                <strong>Gloss Gold, Gloss Green, Gloss Red, Gloss Blue, Matt Bronze, White, Brushed Silver &amp; Brushed Gold.</strong>\r\n                <br>\r\n                <br>We can print your design in any colour on these badges. <br>\r\n                <br>As these badges are made from aluminium, not only look great, but they are extremely durable. <br>\r\n                <br>\r\n                <br>\r\n              </p>\r\n              <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n              <br>\r\n              <span>Prices can be viewed on the product page below</span>\r\n            </div>\r\n            <div style=\"text-align: center;\">&nbsp;</div>\r\n            <div style=\"text-align: center;\">\r\n              <strong>The badge size is 76mm x 25mm and are available with a variety of clips.</strong>\r\n            </div>\r\n            <div style=\"text-align: center;\">&nbsp;</div>\r\n            <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n              <tbody>\r\n                <tr align=\"center\" valign=\"middle\">\r\n                  <td style=\"width: 25%;\">\r\n                    <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                  </td>\r\n                  <td style=\"width: 25%;\">\r\n                    <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                  </td>\r\n                  <td style=\"width: 25%;\">\r\n                    <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                  </td>\r\n                  <td>\r\n                    <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                  </td>\r\n                </tr>\r\n                <tr align=\"center\" valign=\"middle\">\r\n                  <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                  <td style=\"width: 25%;\">\r\n                    <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                  </td>\r\n                  <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                  <td>\r\n                    <p>\r\n                      <span>This is similar to the bulldog clip with the</span>\r\n                      <br>\r\n                      <span>advantage of being able to be turned.</span>\r\n                      <br>\r\n                      <span>This lets you clip your name badge</span>\r\n                      <br>\r\n                      <span>to your pocket, or turn the clip to</span>\r\n                      <br>\r\n                      <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div style=\"text-align: center;\">&nbsp;</div>\r\n            <div style=\"text-align: center;\">&nbsp;</div>\r\n            <div style=\"text-align: center;\">\r\n              <strong>Choose Below for more information or to order.</strong>\r\n            </div>\r\n          </div>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Metal Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "rectangle-name-badge-laser-engraved",
                    "name": "Rectangle Name Badge Laser Engraved",
                    "priceRange": "$8.50 - $14.00",
                    "basePrice": 14,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "ALEXANDER M."
                }
            ]
        },
        "reusable-name-badges": {
            "slug": "reusable-name-badges",
            "parent": "name-badges",
            "name": "Reusable Name Badges",
            "metaTitle": "Reusable Name Badges Australia | BadgeStore",
            "metaDesc": "We offer cost-effective reusable name tags for employees. We print your company name and logo directly on the badge using the latest digital UV Printing techniques.",
            "heading": "Reusable Name Badges",
            "desc": "Reusable Name Badges Australia | BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">Reusable Name Badges</h1>\r\n          <p style=\"text-align: center;\">\r\n            <img class=\"__mce_add_custom__\" title=\"Reusable name badges\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/reusable-name-badges-narrow.jpg\" alt=\"Reusable name badges\" width=\"500\" height=\"358\">\r\n            <br>\r\n            <br>\r\n            <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n            <br>Prices can be viewed on the product page below\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #000000;\">Our reusable name badges are perfect if you have a high turnover in staff. We print your company name and logo directly on the badge using the latest digital UV Printing techniques. Printed in full colour at up to 1440dpi ensures that you get razor sharp text &amp; photo quality images. The reusable badges have a slide out paper area for you to print and insert your own names. This allows you to change the name as often as you need without the need to purchase more badges.</span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Our reusable name badges are available with a choice of clips.&nbsp;</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">\r\n            <strong>Choose Below for more information or to order.</strong>\r\n          </div>\r\n          <p>&nbsp;</p>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Reusable Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "reusable-printed-name-badge",
                    "name": "Reusable Printed Rectangle Badge",
                    "priceRange": "$7.50 - $12.50",
                    "basePrice": 12.5,
                    "imgClass": "bg-soft-red",
                    "textPreview": "STAFF MEMBER"
                }
            ]
        },
        "snap-badges": {
            "slug": "snap-badges",
            "parent": "name-badges",
            "name": "Snap Badges",
            "metaTitle": "Buy Online Snap Badges Australia |Custom Snap Badges | BadgeStore",
            "metaDesc": "We provide Snap Badge custom made name badge in which you can use any photo or message with these snap-in badges. Our &quot;Snap Badges&quot; as the name states are badges that are housed in a special frame that &quot;Snaps Together&quot;. Call us today!",
            "heading": "Snap Badges - Look like acrylic domed but cheaper",
            "desc": "Buy Online Snap Badges Australia |Custom Snap Badges | BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">\r\n            <img class=\"__mce_add_custom__\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/snap-badge-narrow.jpg\" alt=\"Snap Badge\" width=\"500\" height=\"328\">&nbsp;\r\n          </h1>\r\n          <p style=\"text-align: center;\">Our \"Snap Badges\" as the name states are badges that are housed in a special frame that \"Snaps Together\". These badges have the appearance of an Acrylic Domed Badges but are less expensive. These badges are printed or engraved the same as our standard badges but are mounted in a frame with a clear lens to give the badge the appearance of being domed. The frame also adds a black border to the badge for a bolder appearance and also makes it more durable than a standard badge.</p>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n            <br>\r\n            <span>Prices can be viewed on the product page below</span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Have any questions about framed name badges?</strong>\r\n            <br>To learn more about our product range, get in touch with our attentive staff today by calling 1300 862 367, or emailing at admin@badgestore.com.au\r\n          </p>\r\n          <h1 style=\"text-align: center;\">\r\n            <span style=\"font-size: medium; color: #000000;\">Snap Badges - Look like acrylic domed but cheaper</span>\r\n          </h1>\r\n          <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp; <strong>Clip Styles&nbsp;</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p style=\"text-align: center;\">\r\n            <strong style=\"font-size: 10px;\">\r\n              <br>Choose Below for more information or to order. </strong>\r\n          </p>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Snap Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "reusable-printed-name-badge",
                    "name": "Reusable Printed Rectangle Badge",
                    "priceRange": "$7.50 - $12.50",
                    "basePrice": 12.5,
                    "imgClass": "bg-soft-red",
                    "textPreview": "STAFF MEMBER"
                }
            ]
        },
        "engraved-name-badges": {
            "slug": "engraved-name-badges",
            "parent": "name-badges",
            "name": "Engraved Name Badges",
            "metaTitle": "Custom Engraved Name Badges Australia |Order Online Engraved Name Tags With Logo | BadgeStore",
            "metaDesc": "BadgeStore has been proud to supply only the most exceptional quality custom engraved name tags and badges for businesses, schools and other organizations throughout Australia. Our custom laser engraved name badges and tags are engraved using the latest laser engravers. Call us today on 1300 862 637 to request a quote!",
            "heading": "Engraved Name Badges",
            "desc": "Custom Engraved Name Badges Australia |Order Online Engraved Name Tags With Logo | BadgeStore",
            "categoryDescHtml": "<p style=\"text-align: center;\">\r\n            <strong style=\"font-size: 2em;\">\r\n              <img class=\"__mce_add_custom__\" title=\"Laser engraved Badges - 30 Colours to choose from\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/mixed-laser-badges.jpg\" alt=\"Laser engraved Badges - 30 Colours to choose from\" width=\"500\" height=\"383\">\r\n            </strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Custom Engraved Name Badges and Tags for Australia</strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">For many years, BadgeStore has been proud to supply only the most exceptional quality custom engraved names tags and badges for businesses, schools and other organisations throughout Australia. Our service is perfect for creating modern and pleasing designs on engraved badges, that may be paired with logos, names, roles, and more. Bring your staff and customers together with custom engraved name badges and more.</p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Our custom laser engraved name badges and tags are engraved using the latest laser engravers.</strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">Engraved at 600dpi, ensures that you get razor sharp text &amp; high-quality logos. Think of the possibilities to create truly unique engraved name tags to represent your business or company’s logo. For bulk orders, order the required quantity and upload your artwork/name list from the order form. Note: images and logos should be in black &amp; white only, with no shading.</p>\r\n          <p style=\"text-align: center;\">These custom badges are made from a special dual layer plastic that when engraved by laser, the laser removes the top colour to reveal the colour of the second layer. &nbsp;This creates a great looking two colour badge. A large array of over 30 colours are available including brushed finished metal look, textured surfaces and plain colours. See the swatches below for the colour choices.&nbsp;</p>\r\n          <p style=\"text-align: center;\">Available in 3 common sizes, small, medium and large. Other sized available on request.</p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Available Colours</strong>\r\n          </p>\r\n          <p>\r\n            <img class=\"__mce_add_custom__\" title=\"white-black.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-black.jpg\" alt=\"White - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Bright Green\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-bright-green.jpg\" alt=\"White - Bright Green\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Sky Blue\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-sky-blue.jpg\" alt=\"White - Sky Blue\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"White - Red - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/white-red-black.jpg\" alt=\"White - Red - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Black - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/black-white.jpg\" alt=\"Black - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-gold-black.jpg\" alt=\"Brushed Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Black - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/black-gold.jpg\" alt=\"Black - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Antique Gold - Red\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/antique-gold-red.jpg\" alt=\"Antique Gold - Red\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Gold - Blue\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-gold-blue.jpg\" alt=\"Brushed Gold - Blue\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Brushed Stainless - Silver\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/brushed-stainless-silver.jpg\" alt=\"Brushed Stainless - Silver\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Canary - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/canary-black.jpg\" alt=\"Canary - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Celestial Blue - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/celestial-blue-gold.jpg\" alt=\"Celestial Blue - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"China Blue - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/china-blue-white.jpg\" alt=\"China Blue - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Copper Penny - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/copper-penny-black.jpg\" alt=\"Copper Penny - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Digicam Desert Storm - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/digicam-desert-store-black.jpg\" alt=\"Digicam Desert Storm - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Digicam Navy - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/digicam-navy-white.jpg\" alt=\"Digicam Navy - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Smoke Grey - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/grey-white.jpg\" alt=\"Smoke Grey - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Harbour Grey - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/harbour-grey-white.jpg\" alt=\"Harbour Grey - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Kelly Green - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/kelly-green-black.jpg\" alt=\"Kelly Green - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Nickel Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/nickel-black.jpg\" alt=\"Nickel Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Vibrant Orange - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/orange-black.jpg\" alt=\"Vibrant Orange - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Port Wine - Gold\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/port-wine-gold.jpg\" alt=\"Port Wine - Gold\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Purple - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/purple-white.jpg\" alt=\"Purple - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Ribbon Pink - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/ribbon-pink-white.jpg\" alt=\"Ribbon Pink - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Rose Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/rose-gold-black.jpg\" alt=\"Rose Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Sky Blue - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/sky-blue-white.jpg\" alt=\"Sky Blue - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Sky Blue - Yellow\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/sky-blue-yellow.jpg\" alt=\"Sky Blue - Yellow\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Stainless Steel - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/stainless-black.jpg\" alt=\"Stainless Steel - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Stainless Steel - Red\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/stainless-red.jpg\" alt=\"Stainless Steel - Red\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Tangerine - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/tangerine-white.jpg\" alt=\"Tangerine - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Copper - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-copper-black.jpg\" alt=\"Textured Copper - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Gold - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-gold-black.jpg\" alt=\"Textured Gold - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Nickel - Black\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-nickel-black.jpg\" alt=\"Textured Nickel - Black\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" style=\"font-family: -webkit-standard;\" title=\"Textured Stainless - Silver\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/textured-stainless-silver.jpg\" alt=\"Textured Stainless - Silver\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"patriot blue white\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/patriot-blue-white.jpg\" alt=\"patriot blue white\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"Red - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/red-white.gif\" alt=\"Red - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"Kelly Green - White\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/kelly-green-white.jpg\" alt=\"Kelly Green - White\" width=\"80\" height=\"80\">\r\n            <img class=\"__mce_add_custom__\" title=\"Black - Yellow\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/black-yellow.jpg\" alt=\"Black - Yellow\" width=\"80\" height=\"80\">\r\n          </p>\r\n          <p style=\"text-align: center;\">&nbsp; <span style=\"font-size: medium;\">\r\n              <strong>Engraved Name Badges Australia</strong>\r\n            </span>\r\n          </p>\r\n          <p style=\"text-align: center;\">&nbsp;</p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Clip types available</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">&nbsp;</div>\r\n          <div style=\"text-align: center;\">Standard sizes available are,&nbsp;64mm x 20mm (small),&nbsp;70mm x 23mm (standard),&nbsp;80mm x 30mm (large)</div>\r\n          <p style=\"text-align: center;\">\r\n            <br>If you require further information on our custom engraved name badges and tags, or would like to make an enquiry regarding logos, pricing, design or anything else, please get in contact with our helpful staff today. We can be reached by calling 1300 862 637 or by email at admin@badgestore.com.au.\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Choose a shape below for pricing or to order.</strong>\r\n          </p>\r\n          <h1 style=\"text-align: center;\">\r\n            <strong>\r\n              <strong>Engraved Name Badges</strong>\r\n            </strong>\r\n          </h1>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Engraved Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "rectangle-name-badge-laser-engraved",
                    "name": "Rectangle Name Badge Laser Engraved",
                    "priceRange": "$8.50 - $14.00",
                    "basePrice": 14,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "ALEXANDER M."
                }
            ]
        },
        "full-colour-name-badges": {
            "slug": "full-colour-name-badges",
            "parent": "name-badges",
            "name": "Full Colour Name Badges",
            "metaTitle": "Order Online Full Colour Name Badges Australia | Full Colour Name Badges | BadgeStore",
            "metaDesc": "Choose from our range of full colour plastic name badges! Our full-colour name badges are printed directly on the badge using the latest digital UV Printing techniques. Call us today on 1300 862 637 to request a quote!",
            "heading": "Full Colour Name Badges",
            "desc": "Order Online Full Colour Name Badges Australia | Full Colour Name Badges | BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">Full Colour Name Badges</h1>\r\n          <h1 style=\"text-align: center;\">\r\n            <strong style=\"font-size: 2em;\">\r\n              <img class=\"__mce_add_custom__\" title=\"Full Colour Name Badges\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/colour-name-badges-narrow.jpg\" alt=\"Full Colour Name Badges\" width=\"500\" height=\"362\">\r\n            </strong>\r\n          </h1>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Benefits of full-colour name badges</strong>\r\n            <br>Any part of a uniform represents the business or organisation that issued it, right down to name tags. At BadgeStore, we have many years of experience in the industry and can work with our clients to create a design that best suits the desired image for their organisation. It is a personal choice, but a widely popular option is our full-colour name badges. <br>Our full-colour name badges are printed directly on the badge using the latest digital UV Printing techniques. This ensures that the badge won't delaminate like some cheaper badges printed with paper labels do. Printed in full colour at 1440dpi ensures that you get razor sharp text &amp; photo quality images. Think of the possibilities to create genuinely unique business name badges or company name badges. To order, enter the details for the name badge in the form below and click \"ADD TO CART\". If you are ordering multiple badges, enter the total quantity of name badges and attach your artwork/name list in the upload section in the form below.\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"color: #ff0000;\">BULK DISCOUNTS AVAILABLE</span>\r\n            <br>\r\n            <span>Prices can be viewed on the product page below</span>\r\n          </p>\r\n          <p style=\"text-align: center;\">\r\n            <strong>Learn more about full-colour name badges</strong>\r\n            <br>To learn more about our product range, get in touch with our attentive staff today by calling 1300 862 367, or emailing at admin@badgestore.com.au <strong>&nbsp;</strong>\r\n          </p>\r\n          <p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp; <strong>Clip Styles&nbsp;</strong>\r\n          </p>\r\n          <table style=\"width: 100%; background-color: #ffffff; border-color: #ebde13; border-style: solid; border-width: 3px;\" border=\"3\" cellspacing=\"6\" cellpadding=\"6\" align=\"center\">\r\n            <tbody>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-pin.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg\" alt=\"clip-pin.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"magnet-clip-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg\" alt=\"magnet-clip-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td style=\"width: 25%;\">\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" title=\"clip-bulldog-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg\" alt=\"clip-bulldog-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n                <td>\r\n                  <img class=\"__mce_add_custom__ fr-fic fr-dii\" style=\"text-align: start;\" title=\"clip-swivel-sample.jpg\" src=\"https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg\" alt=\"clip-swivel-sample.jpg\" width=\"150\" height=\"170\">\r\n                </td>\r\n              </tr>\r\n              <tr align=\"center\" valign=\"middle\">\r\n                <td style=\"width: 25%;\">This is the most common clip.</td>\r\n                <td style=\"width: 25%;\">\r\n                  <p>The magnetic clip lets you attach your <br>badge to any part of your clothing without <br>piercing your clothing. </p>\r\n                </td>\r\n                <td style=\"width: 25%;\">This is the best choice for shirt pockets.</td>\r\n                <td>\r\n                  <p>\r\n                    <span>This is similar to the bulldog clip with the</span>\r\n                    <br>\r\n                    <span>advantage of being able to be turned.</span>\r\n                    <br>\r\n                    <span>This lets you clip your name badge</span>\r\n                    <br>\r\n                    <span>to your pocket, or turn the clip to</span>\r\n                    <br>\r\n                    <span>90 degrees to clip it elsewhere.&nbsp;</span>\r\n                  </p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p style=\"text-align: center;\">&nbsp;</p>\r\n          <div style=\"text-align: center;\">\r\n            <strong>\r\n              <span>Choose Below for more information or to order.</span>\r\n            </strong>\r\n          </div>",
            "breadcrumbs": [
                "Home",
                "Name Badges",
                "Full Colour Name Badges"
            ],
            "filterGroups": [
                {
                    "title": "Badge Material",
                    "options": [
                        "Engraved Acrylic",
                        "Domed Polyurethane",
                        "Sustainable Wood",
                        "Premium Alloy Metals",
                        "Reusable Layouts"
                    ]
                },
                {
                    "title": "Fastening Backing",
                    "options": [
                        "Neodymium Magnet",
                        "Safety Pin Back",
                        "Crocodile Badge Clip"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Name Badge Material Comparison Guide",
                "headers": [
                    "Material Type",
                    "Finish Vibe",
                    "Durability Factor",
                    "Best Suited For"
                ],
                "rows": [
                    [
                        "Engraved Polymer",
                        "Matte / 2-Tone Contrasting",
                        "High (4-5 Years)",
                        "Retail, Medical & Service Uniforms"
                    ],
                    [
                        "Acrylic Domed",
                        "Glossy 3D Protective Lens",
                        "Very High (5+ Years)",
                        "Corporate Sales & Premium Hospitality"
                    ],
                    [
                        "Sustainable Wood",
                        "Natural Timber Grain Texture",
                        "Moderate (2-3 Years)",
                        "Eco-Boutiques, Cafes & Organic Brands"
                    ],
                    [
                        "Anodised Metal",
                        "Brushed Metallic Reflective",
                        "Very High (5+ Years)",
                        "Executive Boardrooms & Hotel Receptions"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "How do I choose between magnetic and safety pin fasteners?",
                    "a": "Neodymium magnetic backings are highly recommended as they clamp securely to shirts and suit jackets without leaving pinholes or tearing fibers. Safety pins are a reliable, low-cost traditional option for workers without pacemakers."
                },
                {
                    "q": "Can we order just a single name badge for a new hire?",
                    "a": "Yes! We have no minimum order quantities at BadgeStore. You can order a single replacement name tag at standard prices whenever you add team members."
                },
                {
                    "q": "What design formats are accepted for uploading business logos?",
                    "a": "We accept high-resolution vector files like SVG, AI, and PDF for absolute printing crispness. Standard high-quality PNG and JPG files are also accepted."
                }
            ],
            "products": [
                {
                    "id": "rectangle-name-badge-full-colour",
                    "name": "Rectangle Name Badge Full Colour",
                    "priceRange": "$9.00 - $15.00",
                    "basePrice": 15,
                    "imgClass": "bg-soft-red",
                    "textPreview": "REDCROSS STAFF"
                }
            ]
        },
        "australian-made-badge-machines": {
            "slug": "australian-made-badge-machines",
            "parent": "badge-machines",
            "name": "Australian Made Badge Machines",
            "metaTitle": "Choose BadgeStore for Australian-made Button Badge Machines. Enjoy local craftsmanship, fast shipping across Australia, and premium quality for all your custom badge needs.",
            "metaDesc": "Buy custom Australian Made Badge Machines online from BadgeStore. High quality and quick delivery Australia-wide.",
            "heading": "Australian Made",
            "desc": "Choose BadgeStore for Australian-made Button Badge Machines. Enjoy local craftsmanship, fast shipping across Australia, and premium quality for all your custom badge needs.",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">Australian Made</h1>",
            "breadcrumbs": [
                "Home",
                "Badge Machines",
                "Australian Made Badge Machines"
            ],
            "filterGroups": [
                {
                    "title": "Die Size",
                    "options": [
                        "25mm Die Set",
                        "32mm Die Set",
                        "57mm Die Set"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Badge Machine Models & Outputs",
                "headers": [
                    "Die Size",
                    "Vibe Vibe",
                    "Hourly Output",
                    "Best Application"
                ],
                "rows": [
                    [
                        "25mm Die Press",
                        "Compact / Mini Buttons",
                        "Approx. 150-200 badges",
                        "Band Pins, Novelties & Small Logos"
                    ],
                    [
                        "32mm Die Press",
                        "Medium Standard",
                        "Approx. 150-200 badges",
                        "School Activities & Campaign Buttons"
                    ],
                    [
                        "57mm Die Press",
                        "Large Statement",
                        "Approx. 100-150 badges",
                        "Photo Badges & Employee ID Tags"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are the machine die cutters interchangeable?",
                    "a": "Yes, our BadgeStore professional line allows you to purchase different size dies (25mm, 32mm, 57mm) and swap them onto the same press frame using simple alignment pins."
                },
                {
                    "q": "What components are included in the starter kits?",
                    "a": "Starter kits include the heavy-duty metal badge press, a circular die, a rotary circle paper cutter, and 100 sets of blank metal badge components (front shell, plastic mylar film, pin backplate)."
                },
                {
                    "q": "Is it easy to press badges? Do we need electricity?",
                    "a": "No electricity is needed! Our button maker uses a manual lever mechanical press. With standard printed paper and a simple two-stroke press, anyone can easily make badges."
                }
            ],
            "products": [
                {
                    "id": "starter-badge-machine-25mm",
                    "name": "25mm Badge Machine Starter Kit",
                    "priceRange": "$199.00 - $299.00",
                    "basePrice": 299,
                    "imgClass": "bg-soft-red",
                    "textPreview": "25MM PRESS"
                }
            ]
        },
        "imported-badge-machines": {
            "slug": "imported-badge-machines",
            "parent": "badge-machines",
            "name": "Imported Badge Machines",
            "metaTitle": "Looking for premium imported Button Badge Machines? BadgeStore Australia offers multi-press badge makers with free tools and components, start creating badges with ease today.",
            "metaDesc": "Buy custom Imported Badge Machines online from BadgeStore. High quality and quick delivery Australia-wide.",
            "heading": "Imported",
            "desc": "Looking for premium imported Button Badge Machines? BadgeStore Australia offers multi-press badge makers with free tools and components, start creating badges with ease today.",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">Imported</h1>",
            "breadcrumbs": [
                "Home",
                "Badge Machines",
                "Imported Badge Machines"
            ],
            "filterGroups": [
                {
                    "title": "Die Size",
                    "options": [
                        "25mm Die Set",
                        "32mm Die Set",
                        "57mm Die Set"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "Badge Machine Models & Outputs",
                "headers": [
                    "Die Size",
                    "Vibe Vibe",
                    "Hourly Output",
                    "Best Application"
                ],
                "rows": [
                    [
                        "25mm Die Press",
                        "Compact / Mini Buttons",
                        "Approx. 150-200 badges",
                        "Band Pins, Novelties & Small Logos"
                    ],
                    [
                        "32mm Die Press",
                        "Medium Standard",
                        "Approx. 150-200 badges",
                        "School Activities & Campaign Buttons"
                    ],
                    [
                        "57mm Die Press",
                        "Large Statement",
                        "Approx. 100-150 badges",
                        "Photo Badges & Employee ID Tags"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are the machine die cutters interchangeable?",
                    "a": "Yes, our BadgeStore professional line allows you to purchase different size dies (25mm, 32mm, 57mm) and swap them onto the same press frame using simple alignment pins."
                },
                {
                    "q": "What components are included in the starter kits?",
                    "a": "Starter kits include the heavy-duty metal badge press, a circular die, a rotary circle paper cutter, and 100 sets of blank metal badge components (front shell, plastic mylar film, pin backplate)."
                },
                {
                    "q": "Is it easy to press badges? Do we need electricity?",
                    "a": "No electricity is needed! Our button maker uses a manual lever mechanical press. With standard printed paper and a simple two-stroke press, anyone can easily make badges."
                }
            ],
            "products": [
                {
                    "id": "pro-badge-machine-57mm",
                    "name": "57mm Pro Badge Machine Kit",
                    "priceRange": "$249.00 - $399.00",
                    "basePrice": 399,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "57MM PRESS"
                },
                {
                    "id": "blank-pin-components-100pack",
                    "name": "Blank Pin Components (100 Pack)",
                    "priceRange": "$15.00 - $25.00",
                    "basePrice": 25,
                    "imgClass": "bg-gloss-acrylic",
                    "textPreview": "BLANK PARTS"
                }
            ]
        },
        "lanyards-clips-accessories": {
            "slug": "lanyards-clips-accessories",
            "parent": "id-cards",
            "name": "Lanyards, Clips & Accessories",
            "metaTitle": "Lanyards, Clips and Accessories | BadgeStore",
            "metaDesc": "We offer a range of lanyard, clips and accessories which can be used for your ID cards.",
            "heading": "Lanyards, Clips &amp; Accessories",
            "desc": "Lanyards, Clips and Accessories | BadgeStore",
            "categoryDescHtml": "<h1 style=\"text-align: center;\">\r\n            <span style=\"font-size: small;\">Lanyards, Clips &amp; Accessories</span>\r\n          </h1>\r\n          <p style=\"text-align: center;\">\r\n            <span style=\"font-size: small;\">We also supply lanyards, id clips, pouches etc.</span>\r\n          </p>",
            "breadcrumbs": [
                "Home",
                "ID Cards",
                "Lanyards, Clips & Accessories"
            ],
            "filterGroups": [
                {
                    "title": "ID Accessories",
                    "options": [
                        "Printed Lanyards",
                        "ID Card Shells",
                        "Badge Holder Clips"
                    ]
                }
            ],
            "comparisonGuide": {
                "title": "ID Card Vibe & Options",
                "headers": [
                    "Card Type",
                    "Printing Configuration",
                    "Security Feature",
                    "Default Attachment"
                ],
                "rows": [
                    [
                        "Photo ID Pass",
                        "Single or Double Sided Full Color",
                        "Photo & Barcode ID",
                        "Custom Printed Fabric Lanyard"
                    ],
                    [
                        "Access Keycard",
                        "Chip Embedded Coding",
                        "RFID Proximity",
                        "Retractable Reel Badge Clip"
                    ],
                    [
                        "Visitor Badge",
                        "Paper Card Shell",
                        "Temporary Bar Stamp",
                        "Crocodile Clip Pin Strap"
                    ]
                ]
            },
            "faqs": [
                {
                    "q": "Are breakaway safety clips standard on your ID lanyards?",
                    "a": "Yes! Safety breakaway buckles are integrated at the neck on all our lanyards. In medical, industrial, or retail work settings, this snaps open instantly if the cord is pulled, avoiding choking risks."
                },
                {
                    "q": "What dimensions are the custom ID cards?",
                    "a": "Our ID cards match standard CR80 credit card specifications (85.6mm x 54mm) with 0.76mm thickness, fitting all standard wallets, badge holders, and card swipe machines."
                },
                {
                    "q": "Can we order ID cards with custom variable barcodes?",
                    "a": "Yes, we can print sequential numbering, custom QR codes, or barcodes (Code 39, Code 128) synchronized with your business databases."
                }
            ],
            "products": [
                {
                    "id": "custom-printed-lanyard",
                    "name": "Custom Printed Lanyard",
                    "priceRange": "$2.50 - $4.50",
                    "basePrice": 4.5,
                    "imgClass": "bg-brushed-silver",
                    "textPreview": "LANYARD"
                }
            ]
        }
    },
    "products": {
        "rectangle-name-badge-full-colour": {
            "id": "rectangle-name-badge-full-colour",
            "name": "Rectangle Name Badge Full Colour",
            "metaTitle": "Rectangle Name Badge Full Colour | Buy Custom Name Badges | BadgeStore",
            "metaDesc": "Configure and buy full-colour custom printed name badges. Features crystal-clear finishes, standard size 75x25mm, neodymium magnetic backings. Made in Australia.",
            "sku": "BAS-REC-FC",
            "priceRange": "$9.00 - $15.00",
            "basePrice": 15,
            "categorySlug": "full-colour-name-badges",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 15
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 12.5
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 9.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 7.5
                }
            ],
            "description": "Our custom full colour name tags are constructed using high-quality impact-resistant acrylic sheets. Colors and complex logos are printed using cutting-edge UV-cured inks directly onto the substrate, ensuring crisp text registration and resistance to fading over time. Polyurethane doming layers can be optioned to provide a protective, raised gloss visual magnifying lens.",
            "specs": [
                [
                    "Dimensions Size",
                    "75mm x 25mm (Standard corporate size)"
                ],
                [
                    "Base Substrate",
                    "Impact-Resistant Hard Acrylic Base"
                ],
                [
                    "Fastener Options",
                    "Double Rare-Earth Neodymium Backplate (Magnet) / Safety Pin"
                ],
                [
                    "Printing UV Ink",
                    "Direct UV-curable industrial flatbed print"
                ],
                [
                    "Production Time",
                    "2 - 4 Business Days from artwork approval"
                ]
            ],
            "configuratorType": "badge",
            "faqs": [
                {
                    "q": "Is the print scratch-resistant?",
                    "a": "Yes, our UV-cured inks are highly durable. If you select the domed upgrade, a polyurethane layer is added that self-heals from minor scratches."
                },
                {
                    "q": "Can we have individual names printed?",
                    "a": "Absolutely! We specialize in custom variable text printing, allowing a unique name and title on each badge."
                },
                {
                    "q": "Where are these badges made?",
                    "a": "All of our name badges are custom designed and manufactured in Adelaide, South Australia."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/152/764/rectangle-printed-colour-name-badge__98643.1775710278.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/products/152/764/rectangle-printed-colour-name-badge__98643.1775710278.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-bulldog-sample.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-swivel-sample.jpg"
            ]
        },
        "rectangle-name-badge-laser-engraved": {
            "id": "rectangle-name-badge-laser-engraved",
            "name": "Rectangle Name Badge Laser Engraved",
            "metaTitle": "Rectangle Name Badge Laser Engraved | Buy Custom Name Badges | BadgeStore",
            "metaDesc": "Configure and buy custom laser-engraved name badges. 2-ply acrylic material with high contrast letters. Quick shipping.",
            "sku": "BAS-REC-LE",
            "priceRange": "$8.50 - $14.00",
            "basePrice": 14,
            "categorySlug": "engraved-name-badges",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 14
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 11.9
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 9.5
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 6.9
                }
            ],
            "description": "Classic laser-engraved name badges. Made using high-grade 2-ply engraving plastic, the laser burns away the face layer to reveal a contrasting letter color underneath. Waterproof, highly durable, and perfect for retail environments.",
            "specs": [
                [
                    "Dimensions Size",
                    "75mm x 25mm (Standard corporate size)"
                ],
                [
                    "Base Substrate",
                    "2-Ply Laser-Markable Polymer Plate"
                ],
                [
                    "Fastener Options",
                    "Neodymium Magnetic Backing or Traditional Safety Pin"
                ],
                [
                    "Engraving Method",
                    "Precision CO2 Laser engraving"
                ],
                [
                    "Production Time",
                    "2 - 3 Business Days from approval"
                ]
            ],
            "configuratorType": "badge",
            "faqs": [
                {
                    "q": "What color combinations are available?",
                    "a": "Our most popular choices are Brushed Silver with Black text, Brushed Gold with Black text, and Black with White text."
                },
                {
                    "q": "Will the text fade or wear off?",
                    "a": "No, because the text is physically etched/engraved into the material layers, it cannot fade, rub off, or peel."
                },
                {
                    "q": "Can we add borders?",
                    "a": "Yes, you can toggle the outer engraved border option in our customization form."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/182/773/rectangle-laser-engraved-badges__79952.1710636454.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/products/182/773/rectangle-laser-engraved-badges__79952.1710636454.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/223/751/square-laser-engraved-badges__36894.1710422140.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/225/758/round-laser-engraved-badges__85249.1710092475.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg"
            ]
        },
        "acrylic-domed-name-badge": {
            "id": "acrylic-domed-name-badge",
            "name": "Acrylic Domed Name Badge",
            "metaTitle": "Acrylic Domed Name Badge | Custom Logo Badges | BadgeStore",
            "metaDesc": "Shop premium domed custom name badges. High gloss protective polyurethane lens covering full colour prints.",
            "sku": "BAS-REC-AD",
            "priceRange": "$10.50 - $17.50",
            "basePrice": 17.5,
            "categorySlug": "acrylic-dome-name-badges",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 17.5
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 14.9
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 12
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 9.5
                }
            ],
            "description": "The ultimate corporate uniform badge. We print your design in full color, then coat it with a thick layer of premium polyurethane resin. This creates a glossy 3D dome that magnifies the layout and protects it from scratches.",
            "specs": [
                [
                    "Dimensions Size",
                    "75mm x 25mm"
                ],
                [
                    "Coating Shield",
                    "Liquid Polyurethane dome layer"
                ],
                [
                    "Fastener Options",
                    "Magnetic Backplate or Safety Pin"
                ],
                [
                    "Artwork Print",
                    "High-definition digital printing"
                ],
                [
                    "Production Time",
                    "3 - 5 Business Days"
                ]
            ],
            "configuratorType": "badge",
            "faqs": [
                {
                    "q": "Does the resin dome turn yellow over time?",
                    "a": "No, we use only high-grade UV-stable polyurethane that remains crystal clear and yellow-resistant for years."
                },
                {
                    "q": "Is the dome flexible or hard?",
                    "a": "It is a semi-flexible dome that self-heals from dents and resists shattering under impact."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/167/772/domed-name-badges__47873.1558936353.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/products/167/772/domed-name-badges__47873.1558936353.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg"
            ]
        },
        "reusable-printed-name-badge": {
            "id": "reusable-printed-name-badge",
            "name": "Reusable Printed Name Badge",
            "metaTitle": "Reusable Printed Name Badge | Corporate Staff Tags | BadgeStore",
            "metaDesc": "Buy reusable name badges with printable insert channels. Perfect for high staff rotation environments.",
            "sku": "BAS-REC-RU",
            "priceRange": "$7.50 - $12.50",
            "basePrice": 12.5,
            "categorySlug": "snap-badges",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 12.5
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 9.9
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 7.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 5.5
                }
            ],
            "description": "An economical option for businesses with high staff turnover. We print your permanent company logo at the side, leaving a slot channel in the middle. You can print staff names on paper tags or standard label makers and slide them in.",
            "specs": [
                [
                    "Dimensions Size",
                    "75mm x 30mm"
                ],
                [
                    "Insert Channel",
                    "Standard 12mm insert channel"
                ],
                [
                    "Fastener Options",
                    "Magnetic backing or pin clip"
                ],
                [
                    "Front Shield",
                    "Clear plastic slide cover plate"
                ],
                [
                    "Production Time",
                    "2 - 3 Business Days"
                ]
            ],
            "configuratorType": "badge",
            "faqs": [
                {
                    "q": "Do you supply templates for printing the inserts?",
                    "a": "Yes, we offer downloadable Microsoft Word and Excel printing template sheets for easy staff updates."
                },
                {
                    "q": "Does the insert slip out during work?",
                    "a": "No, a clear plastic cover plate snaps securely over the channel to lock the paper insert in place."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/216/763/reusable-name-badges-group__91170.1710367898.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/products/216/763/reusable-name-badges-group__91170.1710367898.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/239/861/Reusable-metal-name-badge-name-front__32907.1710398432.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/202/774/framed-badge__76837.1558942034.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/magnet-clip-sample.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/clip-pin.jpg"
            ]
        },
        "walnut-hardwood-engraved-badge": {
            "id": "walnut-hardwood-engraved-badge",
            "name": "Walnut Hardwood Engraved Badge",
            "metaTitle": "Walnut Hardwood Engraved Badge | Eco Badges | BadgeStore",
            "metaDesc": "Custom eco-friendly name badges made from natural walnut hardwood. Laser engraved logo and details.",
            "sku": "BAS-REC-WD",
            "priceRange": "$9.50 - $16.00",
            "basePrice": 16,
            "categorySlug": "hardwood-engraved-badges",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 16
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 13.5
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 10.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 8.5
                }
            ],
            "description": "Crafted from natural walnut hardwoods, these badges give a warm, organic feel to your uniforms. Logos and employee names are deeply laser-engraved. Each badge showcases unique wood grains and is finished with an eco-safe wax coating.",
            "specs": [
                [
                    "Dimensions Size",
                    "75mm x 25mm (Thickness: 3mm)"
                ],
                [
                    "Wood Material",
                    "Sustainable Walnut Hardwood Veneer"
                ],
                [
                    "Fastener Options",
                    "Neodymium Magnetic Backplate (highly recommended to avoid wood split)"
                ],
                [
                    "Finish Protective",
                    "Natural organic plant wax coating"
                ],
                [
                    "Production Time",
                    "3 - 5 Business Days"
                ]
            ],
            "configuratorType": "badge",
            "faqs": [
                {
                    "q": "Is the wood waterproof?",
                    "a": "The wood is protected by natural oils and wax, making it splash-resistant. However, it should not be submerged in water or run through a washing machine."
                },
                {
                    "q": "Does the grain pattern differ?",
                    "a": "Yes, as each badge is cut from natural timber, the grain patterns and color tones vary slightly, making every badge unique."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/249/913/walnut__14484.1706833222.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/original/products/249/913/walnut__14484.1706833222.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/252/917/cherry__21113.1706833430.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/251/915/maple__67671.1779632712.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/248/912/Mahogany-badge__37131.1779555479.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/247/887/Bamboo-hardwood-namebadge__29769.1685690689.jpg"
            ]
        },
        "aluminium-channel-desk-plate": {
            "id": "aluminium-channel-desk-plate",
            "name": "Aluminium Channel Desk Plate",
            "metaTitle": "Aluminium Channel Desk Plate | Office Desk Signs | BadgeStore",
            "metaDesc": "Shop customizable aluminium track desk name plates. Slides out easily. Professional office signs.",
            "sku": "BAS-DP-AL",
            "priceRange": "$18.00 - $29.00",
            "basePrice": 29,
            "categorySlug": "desk-plates",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 29
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 24.5
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 19.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 15.5
                }
            ],
            "description": "A sleek desk plate featuring an anodised aluminium track frame and an engraved dynamic slide-in acrylic plate. Fits standard reception desks and office environments.",
            "specs": [
                [
                    "Dimensions Size",
                    "200mm x 50mm"
                ],
                [
                    "Frame Base",
                    "Anodised Aluminium Channel"
                ],
                [
                    "Insert Plate",
                    "Engraved 2-Ply acrylic sheet"
                ],
                [
                    "Track Colors",
                    "Satin Silver or Matte Gold"
                ],
                [
                    "Production Time",
                    "2 - 3 Business Days"
                ]
            ],
            "configuratorType": "desk-plate",
            "faqs": [
                {
                    "q": "Can I buy replacement inserts?",
                    "a": "Yes, the metal track base is reusable. You can order replacement inserts when titles or staff change."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/132/809/aframe-silver-black-prod__99171.1771673380.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/132/809/aframe-silver-black-prod__99171.1771673380.jpg"
            ]
        },
        "mahogany-wedge-desk-plate": {
            "id": "mahogany-wedge-desk-plate",
            "name": "Mahogany Wedge Desk Plate",
            "metaTitle": "Mahogany Wedge Desk Plate | Executive Desk Signs | BadgeStore",
            "metaDesc": "Shop solid mahogany block wedge desk name plates. Beautiful deep engravings. Classic executive styling.",
            "sku": "BAS-DP-MH",
            "priceRange": "$24.00 - $39.00",
            "basePrice": 39,
            "categorySlug": "desk-plates",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 39
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 34
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 28.5
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 22
                }
            ],
            "description": "A premium solid mahogany wedge block plate with polished brass or silver engraved plates mounted on the front slant, projecting a timeless executive weight.",
            "specs": [
                [
                    "Dimensions Size",
                    "210mm x 60mm x 50mm"
                ],
                [
                    "Base Block",
                    "Solid Genuine Mahogany Hardwood"
                ],
                [
                    "Metal Plate",
                    "Engraved Anodised Brass or Aluminium Plate"
                ],
                [
                    "Finish Coating",
                    "High gloss timber lacquer shield"
                ],
                [
                    "Production Time",
                    "3 - 5 Business Days"
                ]
            ],
            "configuratorType": "desk-plate",
            "faqs": [
                {
                    "q": "What wood options are available?",
                    "a": "We offer rich Mahogany as standard, and Cherrywood or Walnut on request."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/250/911/wood_acrylic_desk_name_plates__79540.1687325763.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/250/911/wood_acrylic_desk_name_plates__79540.1687325763.jpg"
            ]
        },
        "acrylic-stand-desk-plate": {
            "id": "acrylic-stand-desk-plate",
            "name": "Acrylic Stand Desk Plate",
            "metaTitle": "Acrylic Stand Desk Plate | Office Signage | BadgeStore",
            "metaDesc": "Minimalist clear acrylic block desk name plates. Laser engraved clean lettering.",
            "sku": "BAS-DP-AC",
            "priceRange": "$15.00 - $25.00",
            "basePrice": 25,
            "categorySlug": "desk-plates",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 25
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 21
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 17.5
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 13
                }
            ],
            "description": "A modern, minimalist clear acrylic block desk name plate. Crafted from 10mm thick cell-cast acrylic with diamond-polished edges.",
            "specs": [
                [
                    "Dimensions Size",
                    "180mm x 45mm x 15mm"
                ],
                [
                    "Material Acrylic",
                    "Cell-Cast Clear Poly(methyl methacrylate)"
                ],
                [
                    "Engraving Method",
                    "Frosted reverse laser etching"
                ],
                [
                    "Edge Polish",
                    "Precision diamond polished shine"
                ],
                [
                    "Production Time",
                    "2 - 4 Business Days"
                ]
            ],
            "configuratorType": "desk-plate",
            "faqs": [
                {
                    "q": "Is the text transparent?",
                    "a": "No, the laser engraving frosts the acrylic, rendering a white lettering style that is clean and readable."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/234/837/desk-name-plate-black-2__84380.1653986693.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/234/837/desk-name-plate-black-2__84380.1653986693.jpg"
            ]
        },
        "stainless-steel-outdoor-plaque": {
            "id": "stainless-steel-outdoor-plaque",
            "name": "Stainless Steel Outdoor Plaque",
            "metaTitle": "Stainless Steel Outdoor Plaque | Business Signs | BadgeStore",
            "metaDesc": "Heavy-duty outdoor grade engraved stainless steel plaques. Waterproof and weather resistant.",
            "sku": "BAS-PL-SS",
            "priceRange": "$80.00 - $120.00",
            "basePrice": 120,
            "categorySlug": "metal-plaques",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 120
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 105
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 90
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 75
                }
            ],
            "description": "Marine-grade 316 stainless steel plaque, cut to size and engraved. Highly resistant to coastal salt spray and harsh sunlight. Perfect for exterior walls and outdoor memorials.",
            "specs": [
                [
                    "Metal Grade",
                    "316 Marine Grade Stainless Steel (Thickness: 1.5mm)"
                ],
                [
                    "Engraving Tech",
                    "Ceramic chemical marking laser bonding"
                ],
                [
                    "Mounting Details",
                    "Corner pre-drilled holes for screws"
                ],
                [
                    "Standard Dimensions",
                    "A4 Size (297mm x 210mm)"
                ],
                [
                    "Production Time",
                    "4 - 7 Business Days"
                ]
            ],
            "configuratorType": "plaque",
            "faqs": [
                {
                    "q": "Will this steel rust outside?",
                    "a": "No, our 316 marine-grade steel is highly resistant to rusting and pitting, even in coastal areas."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/244/868/stainless-steel__82099.1772622503.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/244/868/stainless-steel__82099.1772622503.jpg"
            ]
        },
        "polished-brass-honours-plaque": {
            "id": "polished-brass-honours-plaque",
            "name": "Polished Brass Honours Plaque",
            "metaTitle": "Polished Brass Honours Plaque | Commemorative | BadgeStore",
            "metaDesc": "Traditional high-gloss polished brass commemorative honours plaques. Deep engraving.",
            "sku": "BAS-PL-PB",
            "priceRange": "$95.00 - $145.00",
            "basePrice": 145,
            "categorySlug": "metal-plaques",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 145
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 129
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 115
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 90
                }
            ],
            "description": "A traditional high-gloss polished brass honours plaque. Deeply rotary engraved and color-filled with black enamel paint. Ideal for school halls and boardroom walls.",
            "specs": [
                [
                    "Material Alloy",
                    "Polished Engraving CZ120 Brass Plate"
                ],
                [
                    "Engraving Type",
                    "Deep mechanical rotary engraving"
                ],
                [
                    "Color Fills",
                    "Industrial grade black enamel fill"
                ],
                [
                    "Standard Dimensions",
                    "300mm x 200mm"
                ],
                [
                    "Production Time",
                    "5 - 8 Business Days"
                ]
            ],
            "configuratorType": "plaque",
            "faqs": [
                {
                    "q": "Does the brass tarnish indoors?",
                    "a": "We apply a clear baked lacquer coating to seal the brass and prevent tarnishing. Polish only with a dry microfiber cloth."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/anodiz-kelly.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/anodiz-kelly.jpg"
            ]
        },
        "anodised-aluminium-door-plaque": {
            "id": "anodised-aluminium-door-plaque",
            "name": "Anodised Aluminium Door Plaque",
            "metaTitle": "Anodised Aluminium Door Plaque | Office Door Signs | BadgeStore",
            "metaDesc": "Custom engraved anodised aluminium door plaques. No rust, sleek and professional signs.",
            "sku": "BAS-PL-AA",
            "priceRange": "$55.00 - $95.00",
            "basePrice": 95,
            "categorySlug": "metal-plaques",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 95
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 82.5
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 69.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 49
                }
            ],
            "description": "Sleek and professional door plaques made of lightweight anodised aluminium. Laser engraved to reveal a contrasting white/silver text mark.",
            "specs": [
                [
                    "Material Type",
                    "Anodised Aluminium alloy (Thickness: 1.0mm)"
                ],
                [
                    "Engraving Tech",
                    "CO2 Laser ablation etching"
                ],
                [
                    "Mounting Details",
                    "High-tack double sided adhesive backing tape"
                ],
                [
                    "Standard Dimensions",
                    "200mm x 100mm"
                ],
                [
                    "Production Time",
                    "2 - 4 Business Days"
                ]
            ],
            "configuratorType": "plaque",
            "faqs": [
                {
                    "q": "Is the adhesive tape durable?",
                    "a": "Yes, we apply heavy-duty 3M adhesive tape that bonds securely to wood, painted walls, and glass doors."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/245/867/aluminium-plaque__35451.1685493065.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/245/867/aluminium-plaque__35451.1685493065.jpg"
            ]
        },
        "standard-employee-photo-id": {
            "id": "standard-employee-photo-id",
            "name": "Standard Employee Photo ID",
            "metaTitle": "Standard Employee Photo ID | Corporate ID Cards | BadgeStore",
            "metaDesc": "Print custom plastic photo ID cards. Standard CR80 credit card dimensions. High quality prints.",
            "sku": "BAS-ID-ST",
            "priceRange": "$5.00 - $8.00",
            "basePrice": 8,
            "categorySlug": "id-cards",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 8
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 6.9
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 5.5
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 3.9
                }
            ],
            "description": "High-definition custom printed plastic employee photo ID cards. Features full-color double-sided layout printing on standard credit-card-sized PVC shells.",
            "specs": [
                [
                    "Card Size",
                    "CR80 (85.6mm x 54mm) standard size"
                ],
                [
                    "Material PVC",
                    "Premium gloss white PVC base"
                ],
                [
                    "Printing Tech",
                    "Dye-sublimation retransfer high-definition"
                ],
                [
                    "Accessories Included",
                    "Clear plastic slot protective holder"
                ],
                [
                    "Production Time",
                    "2 - 3 Business Days"
                ]
            ],
            "configuratorType": "id-card",
            "faqs": [
                {
                    "q": "Can we print barcodes on the back?",
                    "a": "Yes, we support double-sided printing and can output unique barcodes or QR codes on either face."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/122/775/id-card-prod-image__34014.1558944927.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/122/775/id-card-prod-image__34014.1558944927.jpg"
            ]
        },
        "barcode-rfid-access-card": {
            "id": "barcode-rfid-access-card",
            "name": "Barcode RFID Access Card",
            "metaTitle": "Barcode RFID Access Card | Security Badges | BadgeStore",
            "metaDesc": "Print access control proximity RFID cards. Compatible with leading terminal readers.",
            "sku": "BAS-ID-RF",
            "priceRange": "$6.00 - $9.00",
            "basePrice": 9,
            "categorySlug": "id-cards",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 9
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 7.9
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 6.5
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 4.9
                }
            ],
            "description": "Printed security proximity cards containing embedded RFID microchips. Programmed and printed with employee photos and identification details.",
            "specs": [
                [
                    "Card Size",
                    "CR80 standard credit card thickness"
                ],
                [
                    "Chip Type",
                    "Mifare 13.56MHz or EM4100 125KHz chip"
                ],
                [
                    "Printing Tech",
                    "Retransfer thermal pigment layer printing"
                ],
                [
                    "Compatible System",
                    "Leading access reader scanners"
                ],
                [
                    "Production Time",
                    "3 - 5 Business Days"
                ]
            ],
            "configuratorType": "id-card",
            "faqs": [
                {
                    "q": "Do you configure the chip codes?",
                    "a": "We print variable numbers matching your database and can encode basic sectors if hex keys are supplied."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/id-card-500x500.jpeg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/id-card-500x500.jpeg"
            ]
        },
        "custom-printed-lanyard": {
            "id": "custom-printed-lanyard",
            "name": "Custom Printed Lanyard",
            "metaTitle": "Custom Printed Lanyard | Badge Accessories | BadgeStore",
            "metaDesc": "Buy custom branded lanyards. Safety breakaway clip, fabric layout printing, robust metal hooks.",
            "sku": "BAS-ID-LN",
            "priceRange": "$2.50 - $4.50",
            "basePrice": 4.5,
            "categorySlug": "lanyards-clips-accessories",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 4.5
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 3.5
                },
                {
                    "min": 50,
                    "max": 99,
                    "price": 2.9
                },
                {
                    "min": 100,
                    "max": 9999,
                    "price": 1.8
                }
            ],
            "description": "Premium corporate lanyards printed with company branding. Made from comfortable woven polyester, equipped with safety breakaway neck attachments and metal trigger hooks.",
            "specs": [
                [
                    "Width Band",
                    "15mm or 20mm woven flat polyester"
                ],
                [
                    "Safety Feature",
                    "Safety plastic breakaway snap neck buckle"
                ],
                [
                    "Clasp Hook",
                    "Heavy duty steel alligator or trigger swivel hook"
                ],
                [
                    "Print Layout",
                    "Continuous step-and-repeat dye sublimation"
                ],
                [
                    "Production Time",
                    "10 - 12 Business Days"
                ]
            ],
            "configuratorType": "id-card",
            "faqs": [
                {
                    "q": "Is the breakaway clip mandatory?",
                    "a": "We strongly recommend it for workplace health and safety compliance, but it can be removed on request."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/208/825/Metal-Name_badges__52519.1711086326.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/208/825/Metal-Name_badges__52519.1711086326.jpg"
            ]
        },
        "soft-enamel-custom-pin": {
            "id": "soft-enamel-custom-pin",
            "name": "Soft Enamel Custom Pin",
            "priceRange": "$2.00 - $3.50",
            "basePrice": 3.5,
            "categorySlug": "lapel-pins",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 24,
                    "price": 3.5
                },
                {
                    "min": 25,
                    "max": 99,
                    "price": 2.9
                },
                {
                    "min": 100,
                    "max": 499,
                    "price": 2.2
                },
                {
                    "min": 500,
                    "max": 9999,
                    "price": 1.5
                }
            ],
            "description": "Textured, detailed custom lapel pins. Liquid paint fills are baked inside metal borders, resulting in recessed color wells that create a premium 3D layout.",
            "specs": [
                [
                    "Pin Sizes",
                    "20mm / 25mm / 30mm Custom Shapes"
                ],
                [
                    "Core Metal",
                    "Stamped Iron or Zinc Alloy base"
                ],
                [
                    "Clasp Type",
                    "Metal butterfly clutch or garment-safe magnet"
                ],
                [
                    "Color Fill",
                    "Bespoke soft liquid enamel paint"
                ],
                [
                    "Production Time",
                    "10 - 15 Business Days"
                ]
            ],
            "configuratorType": "lapel-pin",
            "faqs": [
                {
                    "q": "Can we have custom shapes?",
                    "a": "Yes, our custom pins are stamped to match the custom boundary outline of your logo design."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/1.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/1.jpg"
            ]
        },
        "hard-enamel-premium-pin": {
            "id": "hard-enamel-premium-pin",
            "name": "Hard Enamel Premium Pin",
            "priceRange": "$2.50 - $4.00",
            "basePrice": 4,
            "categorySlug": "lapel-pins",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 24,
                    "price": 4
                },
                {
                    "min": 25,
                    "max": 99,
                    "price": 3.2
                },
                {
                    "min": 100,
                    "max": 499,
                    "price": 2.5
                },
                {
                    "min": 500,
                    "max": 9999,
                    "price": 1.9
                }
            ],
            "description": "High-end flat-polished enamel pins. Overfilled with enamel paint and polished down flush with the metallic border, creating a scratch-resistant glass-like finish.",
            "specs": [
                [
                    "Pin Sizes",
                    "20mm / 25mm / 30mm"
                ],
                [
                    "Core Metal",
                    "Die-Struck Solid Brass plate"
                ],
                [
                    "Clasp Type",
                    "Premium rubber clutch or safety magnet clasp"
                ],
                [
                    "Finish Polish",
                    "Flush polished mirror shine finish"
                ],
                [
                    "Production Time",
                    "12 - 15 Business Days"
                ]
            ],
            "configuratorType": "lapel-pin",
            "faqs": [
                {
                    "q": "Is hard enamel more durable than soft enamel?",
                    "a": "Yes, hard enamel pins are polished flat, preventing dirt accumulation and offering higher scratch resistance."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/4.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/4.jpg"
            ]
        },
        "die-struck-metallic-pin": {
            "id": "die-struck-metallic-pin",
            "name": "Die Struck Metallic Pin",
            "priceRange": "$1.80 - $3.00",
            "basePrice": 3,
            "categorySlug": "lapel-pins",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 24,
                    "price": 3
                },
                {
                    "min": 25,
                    "max": 99,
                    "price": 2.4
                },
                {
                    "min": 100,
                    "max": 499,
                    "price": 1.9
                },
                {
                    "min": 500,
                    "max": 9999,
                    "price": 1.2
                }
            ],
            "description": "Traditional solid metal pins with 3D raised detailing. Features sandblasted backgrounds and high-polished borders for premium contrast without paint fills.",
            "specs": [
                [
                    "Pin Sizes",
                    "20mm / 25mm / 30mm"
                ],
                [
                    "Metal Finish",
                    "Polished Gold, Antique Silver, or Copper"
                ],
                [
                    "Detailing",
                    "3D relief raised metal design stamp"
                ],
                [
                    "Clasp Type",
                    "Butterfly clutch metal clasp"
                ],
                [
                    "Production Time",
                    "10 - 14 Business Days"
                ]
            ],
            "configuratorType": "lapel-pin",
            "faqs": [
                {
                    "q": "Can we have an antique metal finish?",
                    "a": "Yes, we offer antique silver, bronze, and copper styling to add a heritage look."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/5.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/product_images/uploaded_images/5.jpg"
            ]
        },
        "starter-badge-machine-25mm": {
            "id": "starter-badge-machine-25mm",
            "name": "25mm Badge Machine Starter Kit",
            "priceRange": "$199.00 - $299.00",
            "basePrice": 299,
            "categorySlug": "australian-made-badge-machines",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 2,
                    "price": 299
                },
                {
                    "min": 3,
                    "max": 9,
                    "price": 269
                },
                {
                    "min": 10,
                    "max": 9999,
                    "price": 249
                }
            ],
            "description": "Heavy-duty circular button maker kit. Includes a solid steel badge press, an interchangeable 25mm die cutter mould, and 100 sets of blank metal badge components.",
            "specs": [
                [
                    "Press Frame",
                    "Heavy-duty cast-iron lever press"
                ],
                [
                    "Die Size",
                    "Interchangeable 25mm circular mould set"
                ],
                [
                    "Starter Parts",
                    "100 front shells, mylar covers, and pins included"
                ],
                [
                    "Cutter Tool",
                    "Rotary circular paper cutter blade set"
                ],
                [
                    "Production Output",
                    "Press up to 200 circular buttons per hour"
                ]
            ],
            "configuratorType": "badge-machine",
            "faqs": [
                {
                    "q": "Can we use regular printed paper?",
                    "a": "Yes, standard 80gsm copy paper or thin photo paper works perfectly."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/253/918/img_0103-edit__96402.1780992421.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/253/918/img_0103-edit__96402.1780992421.jpg"
            ]
        },
        "pro-badge-machine-57mm": {
            "id": "pro-badge-machine-57mm",
            "name": "57mm Pro Badge Machine Kit",
            "priceRange": "$249.00 - $399.00",
            "basePrice": 399,
            "categorySlug": "imported-badge-machines",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 2,
                    "price": 399
                },
                {
                    "min": 3,
                    "max": 9,
                    "price": 349
                },
                {
                    "min": 10,
                    "max": 9999,
                    "price": 299
                }
            ],
            "description": "An enterprise-grade button maker kit for large 57mm pins, photo badges, and custom campaign buttons. Solid steel build ensures output longevity.",
            "specs": [
                [
                    "Press Frame",
                    "Cast iron and slide track guide base"
                ],
                [
                    "Die Size",
                    "57mm circular die mould set"
                ],
                [
                    "Kit Parts",
                    "250 blank button component sets included"
                ],
                [
                    "Cutter Tool",
                    "Adjustable heavy circular desk cutter"
                ],
                [
                    "Production Output",
                    "Press approx. 120-150 large buttons per hour"
                ]
            ],
            "configuratorType": "badge-machine",
            "faqs": [
                {
                    "q": "Can we swap dies on this machine?",
                    "a": "Yes, the slide track frame lets you swap between 25mm, 32mm, and 57mm dies easily."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/255/927/badge-a-minit-multipress-1__98437.1712660915.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/255/927/badge-a-minit-multipress-1__98437.1712660915.jpg"
            ]
        },
        "blank-pin-components-100pack": {
            "id": "blank-pin-components-100pack",
            "name": "Blank Pin Components (100 Pack)",
            "priceRange": "$15.00 - $25.00",
            "basePrice": 25,
            "categorySlug": "imported-badge-machines",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 4,
                    "price": 25
                },
                {
                    "min": 5,
                    "max": 19,
                    "price": 19.9
                },
                {
                    "min": 20,
                    "max": 9999,
                    "price": 15
                }
            ],
            "description": "A refill pack containing 100 circular button badge component sets. Fits standard badge press moulds.",
            "specs": [
                [
                    "Pack Size",
                    "100 complete sets per box"
                ],
                [
                    "Components",
                    "Metal front shells, plastic mylar sheets, pin backplates"
                ],
                [
                    "Diameter Size",
                    "Available in 25mm, 32mm, or 57mm options"
                ],
                [
                    "Material Type",
                    "Stamped tinplate and safety steel pins"
                ],
                [
                    "Production Time",
                    "1 - 2 Business Days dispatch"
                ]
            ],
            "configuratorType": "badge-machine",
            "faqs": [
                {
                    "q": "Are these compatible with third-party machines?",
                    "a": "They are designed to fit standard Australian-sized circular die cutters."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/236/812/snap-badge-prod__64087.1710952269.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/236/812/snap-badge-prod__64087.1710952269.jpg"
            ]
        },
        "solid-brass-bone-pet-tag": {
            "id": "solid-brass-bone-pet-tag",
            "name": "Solid Brass Bone Pet Tag",
            "priceRange": "$8.00 - $12.00",
            "basePrice": 12,
            "categorySlug": "pet-tags",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 12
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 9.9
                },
                {
                    "min": 50,
                    "max": 9999,
                    "price": 7.9
                }
            ],
            "description": "Premium pet tag cut into a classic bone shape. Deeply engraved on solid brass, ensuring names and numbers remain readable under active outdoor play.",
            "specs": [
                [
                    "Shape Profile",
                    "Bone Shape Cutout"
                ],
                [
                    "Core Metal",
                    "Solid CZ120 leaded brass plate (Thickness: 1.5mm)"
                ],
                [
                    "Engraving Type",
                    "Double-sided deep diamond drag scratching"
                ],
                [
                    "Collar Link",
                    "15mm tempered steel split key ring"
                ],
                [
                    "Production Time",
                    "1 - 2 Business Days dispatch"
                ]
            ],
            "configuratorType": "pet-tag",
            "faqs": [
                {
                    "q": "How many lines of text can be engraved on the back?",
                    "a": "We can fit up to 3 lines of contact details (e.g., phone, house number, street) on the reverse face."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/146/780/pet-tags-bone__66809.1780990245.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/146/780/pet-tags-bone__66809.1780990245.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/230/786/pet-tags-heart__07024.1710616271.jpg"
            ]
        },
        "anodised-aluminium-round-pet-tag": {
            "id": "anodised-aluminium-round-pet-tag",
            "name": "Anodised Aluminium Round Pet Tag",
            "priceRange": "$6.00 - $9.00",
            "basePrice": 9,
            "categorySlug": "pet-tags",
            "priceBrackets": [
                {
                    "min": 1,
                    "max": 9,
                    "price": 9
                },
                {
                    "min": 10,
                    "max": 49,
                    "price": 7.9
                },
                {
                    "min": 50,
                    "max": 9999,
                    "price": 5.9
                }
            ],
            "description": "Ultra-lightweight round pet identification tags made from anodised aluminium. Laser engraved to burn off the colored layer, leaving high-contrast text.",
            "specs": [
                [
                    "Shape Profile",
                    "Round Circle Cutout"
                ],
                [
                    "Core Metal",
                    "Anodised Scratch-Proof Aluminium (Thickness: 1.0mm)"
                ],
                [
                    "Engraving Type",
                    "Variable laser engraving on front and back"
                ],
                [
                    "Collar Link",
                    "15mm tempered steel split key ring"
                ],
                [
                    "Production Time",
                    "1 - 2 Business Days"
                ]
            ],
            "configuratorType": "pet-tag",
            "faqs": [
                {
                    "q": "Is it suitable for cats?",
                    "a": "Yes, these aluminium tags are extremely lightweight (under 2 grams), making them ideal for small dogs and cats."
                }
            ],
            "image": "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/229/783/pet-tags-round__80351.1710421132.jpg",
            "gallery": [
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/229/783/pet-tags-round__80351.1710421132.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/231/789/pet-tags-star__73028.1710735795.jpg",
                "https://cdn11.bigcommerce.com/s-5ghsl7hcw4/images/stencil/500x500/products/232/792/pet-tags-cat-__79321.1710564130.jpg"
            ]
        }
    }
};

// Isomorphic Export compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProductCatalog;
} else {
    window.ProductCatalog = ProductCatalog;
}
