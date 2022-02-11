const xgenDom = document.getElementById('XgenElement');
const htmlTemplate = window.htmlTemplate;
const products = window.products;
const matches = Object.keys(products[0]);


const buildTemplate = (products, template) => {
    products.filter(product => product["is_in_stock"] !== "0").forEach(product => {
        let string = template;
        matches.forEach(match => {
            let productMatch = product[match];
            if (match === 'price' && product.sale_price !== 'None') productMatch = product['sale_price'];
           string = string.replace(new RegExp(`{{${match}}}`, 'g'), productMatch);
        })
    xgenDom.innerHTML += string;
    });
}

buildTemplate(products, htmlTemplate);