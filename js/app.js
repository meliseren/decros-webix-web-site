// Main
webix.ready(async () => {
    if (!webix.env.touch && webix.env.scrollSize)
        webix.CustomScroll.init();

    // Footer Start
    const createFooter = () => {
        const footerContact = {
            css: "footer-contact",
            minWidth: 300,
            rows: [
                {
                    view: "button",
                    label: "CONTACT"
                },
                {
                    view: "button",
                    type: "icon",
                    icon: "fa-solid fa-location-dot",
                    label: "Bayraklı İzmir Türkiye"
                },
                {
                    view: "button",
                    type: "icon",
                    icon: "fa-solid fa-phone",
                    label: "+90 232 464 44 50"
                },
                {
                    view: "button",
                    type: "icon",
                    icon: "fa-solid fa-fax",
                    label: "+90 232 463 91 25"
                },
                {
                    view: "button",
                    type: "icon",
                    icon: "fa-solid fa-envelope",
                    label: "info@decros.com.tr"
                }
            ]
        }

        const copyright = {
            css: "footer-copyright",
            minWidth: 300,
            rows: [
                {
                    view: "button",
                    type: "image",
                    image: "img/decros-logo.png",
                    css: "header-logo"
                },
                {
                    view: "button",
                    css: "copyright",
                    label: "All rights reserved. © Decros 2023"
                }
            ]
        }

        return {
            view: "layout",
            type: "space",
            id: "footerid",
            css: "footer",
            rows: [
                {
                    type: "space",
                    responsive: "footerid",
                    cols: [
                        // {gravity:0.05},
                        footerContact,
                        copyright
                        // {gravity:0.05}
                    ]
                }
            ]
        }
    }
    // Footer End

    const footer = createFooter();

    // Sub Page Content Functions
    const logo = createLogo();
    const about = createAbout();
    const product = createProduct();
    const catalogue = createCatalogue();
    const contact = createContact();
    const search = createSearch();

    webix.ui({
        view: "scrollview",
        body: {
            rows: [
                {
                    cols: [
                        {
                            view: "tabbar",
                            id: "tabbar",
                            multiview: true,
                            options: [
                                { value: "<img src='https://solgar.com.tr/assets/images/logo-75.png' style='width: 90px'>", id: "logo" },
                                { value: "Home", id: "logo" },
                                { value: "About", id: "about" },
                                { value: "Product", id: "product" },
                                { value: "Catalogue", id: "catalogue" },
                                { value: "Contact", id: "contact" }
                            ],
                        },
                        search
                    ]
                },
                {
                    animate: {
                        type: "show"
                    },
                    cells: [
                        { id: "logo", rows: [logo] },
                        { id: "home" },
                        { id: "about", rows: [about] },
                        { id: "product", rows: [product] },
                        { id: "catalogue", rows: [catalogue] },
                        { id: "contact", rows: [contact] }
                    ]
                },
                footer
            ]

        }
    })
})

// Sub Page Logo and Home Start
const createLogo = () => {
    // Banner Start
    const createBanner = () => {
        return {
            view: "carousel",
            id: "bannerCarousel",
            css: "banner",
            borderless: true,
            cols: [
                { css: "image", template: img, data: { src: "img/slider_1.1.jpg", title: "Image 1" } },
                { css: "image", template: img, data: { src: "img/slider_1.2.jpg", title: "Image 2" } },
                { css: "image", template: img, data: { src: "img/slider_1.3.jpg", title: "Image 3" } },
                { css: "image", template: img, data: { src: "img/slider_1.4.jpg", title: "Image 4" } },
            ],
            height: 800,
            navigation: {
                items: false
            }
        };
        function img(obj) {
            return '<img src="' + obj.src + '" class="content" ondragstart="return false"/>';
        }

    }
    // Banner End

    // Home Page Product Start
    const createHomeProduct = () => {
        return {
            view: "layout",
            css: "product-layout",
            rows: [
                {
                    view: "label",
                    label: "PRODUCT",
                    autoheight: true,
                    css: "product-title"
                },
                {
                    type: "space",
                    css: "product-items",
                    id: "productid",
                    rows: [
                        {
                            type: "space",
                            responsive: "productid",
                            css: "product-space",
                            cols: [
                                {
                                    view: "button",
                                    css: "product-btn",
                                    type: "imageTop",
                                    autoheight: true,
                                    image: "img/slider_1.1.jpg",
                                    label: "PROCELAIN",
                                    minWidth: 600,
                                    minHeight: 600,
                                    maxHeight: 600,
                                    height: 500
                                },
                                {
                                    view: "button",
                                    css: "product-btn",
                                    type: "imageTop",
                                    autoheight: true,
                                    image: "img/slider_1.2.jpg",
                                    label: "NATURAL STONE",
                                    minWidth: 600,
                                    minHeight: 600,
                                    maxHeight: 600,
                                    height: 500
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
    // Home Page Product End

    // Home Page Catalogue Start
    const createHomeCatalogue = () => {
        return {
            view: "layout",
            rows: [
                {
                    view: "label",
                    label: "CATALOGUE",
                    css: "catalogue-title"
                },
                {
                    height: 30
                },
                {
                    cols: [
                        { gravity: 0.05 },
                        {
                            view: "carousel",
                            css: "catalogue-carousel",
                            cols: [
                                {
                                    rows: [
                                        {
                                            view: "button",
                                            type: "image",
                                            image: "img/catalogue1.png",
                                            css: "catalogue-btn",
                                            height: 220
                                        },
                                        {
                                            view: "button",
                                            label: "Natural Stone",
                                            css: "catalogue-label-btn",
                                            height: 70
                                        }
                                    ]
                                },
                                {
                                    rows: [
                                        {
                                            view: "button",
                                            type: "image",
                                            image: "img/catalogue2.png",
                                            css: "catalogue-btn",
                                            height: 220
                                        },
                                        {
                                            view: "button",
                                            label: "PROCELAIN AND CERAMIC",
                                            css: "catalogue-label-btn",
                                            height: 70
                                        }
                                    ]
                                },
                                {
                                    rows: [
                                        {
                                            view: "button",
                                            type: "image",
                                            image: "img/catalogue1.png",
                                            css: "catalogue-btn",
                                            height: 220
                                        },
                                        {
                                            view: "button",
                                            label: "Natural Stone",
                                            css: "catalogue-label-btn",
                                            height: 70
                                        }
                                    ]
                                },
                                {
                                    rows: [
                                        {
                                            view: "button",
                                            type: "image",
                                            image: "img/catalogue2.png",
                                            css: "catalogue-btn",
                                            height: 220
                                        },
                                        {
                                            view: "button",
                                            label: "PROCELAIN AND CERAMIC",
                                            css: "catalogue-label-btn",
                                            height: 70
                                        }
                                    ]
                                }
                            ],
                            navigation: {
                                type: "side",
                                items: false
                            }
                        },
                        { gravity: 0.05 },
                    ]
                }
            ]
        };
    }
    // Home Page Catalogue End

    // Home Page Content Functions
    const banner = createBanner();
    const homeProduct = createHomeProduct();
    const homeCatalogue = createHomeCatalogue();

    return {
        rows: [
            banner,
            homeProduct,
            homeCatalogue
        ]
    }
}
// Sub Page Logo End

// Sub Page About Start
const createAbout = () => {

    return {
        rows: [
            { height: 60 },
            {
                cols: [
                    {
                        template: "<span><b>WELCOME TO DECROS</b><br><br><br>With headquarters in İzmir, <b>Decros</b> provides superior natural stone, porcelain, glass mosaic products and services in the construction, architectural and design industries, serving both the domestic and international sectors.<br><br><b>Decros</b> brings a fresh and innovative approach to natural stone and porcelain industry, acting as whole concept provider to wholesalers and project owner. Our goal is to exceed the expectations of every client by offering outstanding customer service, increased flexibility, and greater value, thus offer a wider range of natural stone, porcelain, glass and improve the business of our clients. Our associates are distinguished by their functional and technical expertise combined with their hands-on experience, thereby ensuring that our clients receive the superior quality products and designs with a professional and cost-effective service.<br><br>Unlike other producers, Decros gives service not only as a producer but also as a design and consulting company. We pride ourselves that our ERP and CRM systems allows us to provide individual needs to clients and effective production process and quality control.</span>"
                        , height: 300
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "img/cat2.jpeg"
                    }
                ]
            },
            { height: 60 },
            {
                cols: [
                    {
                        view: "button",
                        type: "image",
                        image: "img/cat5.jpeg"
                    },
                    {
                        template: "<span>We have warehouses, showrooms and offices in New Jersey, Hamburg, İzmir and factories at Afyon and Denizli. With the help of our multi location establishment, we can provide local services for USA and European Union countries.<br><br>Our logistic solutions and the ability combine containers consisting of many different products, even in very small quantities from Turkey (we have more than 100 registered designs and individual tailor made solutions) enables us to serve as a one stop shop for all your natural stone and porcelain needs.<br><br>Our number one commitment is to our customers; 'We strive to bring them the highest quality material and design in the shortest period of time possible, and to make every project with Decros a pleasurable experience.'</span>"
                        , height: 200
                    }
                ]
            },
            { height: 60 }
        ]
    }
}
// Sub Page About End

// Sub Page Product Start
const createProduct = () => {
    const procelain = {
        view: "label",
        label: "procelain"
    }
    const natural = {
        view: "label",
        label: "natural"
    }

    const createProductSubPage = {
        rows: [
            {
                cols: [
                    {
                        view: "tabbar",
                        id: "tabbarProduct",
                        multiview: true,
                        options: [
                            {value: "PROCELAIN", id: "procelain"},
                            {value: "NATURAL", id: "natural"}
                        ]
                    }
                ]
            },
            {
                animate: {
                    type: "show"
                },
                cells: [
                    {id:"procelain", rows: [procelain]},
                    {id:"natural", rows: [natural]}
                ]
            }
        ]

    }
    return createProductSubPage
}
// Sub Page Product Start End

// Sub Page Catalogue Start
const createCatalogue = () => {
    return {
        rows: [
            {
                cols: [
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue1.png" },
                            { template: "<span>NATURAL STONE<br>GENERAL CATALOGUE</span>" },
                            { view: "button", value: "Download" },
                        ]
                    },
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue2.png" },
                            { template: "<span>PROCELAIN AND<br>CERAMIC GENERAL<br>CATALOGUE</span>" },
                            { view: "button", value: "Download" },
                        ]
                    },
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue3.png" },
                            { template: "<span>TILEBOOK</span>" },
                            { view: "button", value: "Download" },
                        ]
                    },
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue4.png" },
                            { template: "<span>NATURAL STONES,<br>MOULDINGS AND<br>GARDEN PRODUCTS</span>" },
                            { view: "button", value: "Download" },
                        ]
                    }
                ]
            },
            {
                cols: [
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue1.png" },
                            { template: "<span>NATURAL STONE<br>GENERAL CATALOGUE</span>" },
                            { view: "button", value: "Download" },
                        ]
                    },
                    {
                        rows: [
                            { view: "button", type: "image", image: "img/catalogue2.png" },
                            { template: "<span>PROCELAIN AND<br>CERAMIC GENERAL<br>CATALOGUE</span>" },
                            { view: "button", value: "Download" },
                        ]
                    },
                    {

                    },
                    {

                    }
                ]
            }
        ]
    }
}
// Sub Page Catalogue End

// Sub Page Contact Start
const createContact = () => {
    return {
        rows: [
            {
                cols: [
                    { template: '<span><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.0840007353245!2d27.342908315415603!3d38.46262197964004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97a6416a3d995%3A0x9b05bdae0ad7da72!2zQW5rYXJhIEFzZmFsdMSxIENkLiBObzoyMiwgMzU3MzAgS2VtYWxwYcWfYSBPc2IvS2VtYWxwYcWfYS_EsHptaXI!5e0!3m2!1str!2str!4v1624562657281!5m2!1str!2str" width="550" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></span>' },
                    {
                        height: 460,
                        rows: [
                            {
                                view: "button",
                                label: "CONTACT"
                            },
                            {
                                view: "button",
                                type: "icon",
                                icon: "fa-solid fa-location-dot",
                                label: "Bayraklı İzmir Türkiye"
                            },
                            {
                                view: "button",
                                type: "icon",
                                icon: "fa-solid fa-phone",
                                label: "+90 232 464 44 50"
                            },
                            {
                                view: "button",
                                type: "icon",
                                icon: "fa-solid fa-fax",
                                label: "+90 232 463 91 25"
                            },
                            {
                                view: "button",
                                type: "icon",
                                icon: "fa-solid fa-envelope",
                                label: "info@decros.com.tr"
                            }
                        ]
                    }
                ]
            },
            {
                rows: [
                    {
                        view: "text",
                        label: "NAME", labelAlign: 'right'
                    },
                    {
                        view: "text",
                        label: "EMAIL", labelAlign: 'right'
                    },
                    {
                        view: "text",
                        label: "PHONE", labelAlign: 'right'
                    },
                    {
                        view: "text",
                        label: "SUBJECT", labelAlign: 'right'
                    },
                    {
                        view: "textarea",
                        label: "MASSAGE", labelAlign: 'right'
                    },
                    {
                        margin: 5, cols: [
                            { view: "button", value: "SEND MASSAGE" }
                        ]
                    }
                ]
            }
        ]
    }
}
// Sub Page Contact End

// Sub Page Search Start
const createSearch = () => {
    return {
        view: "search",
        placeholder: "Search...",
        width: 300
    }
}
// Sub Page Search End