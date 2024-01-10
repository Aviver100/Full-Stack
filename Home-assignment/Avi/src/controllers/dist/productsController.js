"use strict";
exports.__esModule = true;
exports.deleteProduct = exports.overwriteProductQuery = exports.overwriteProductBody = exports.updateProductPriceQuery = exports.updateProductPriceBody = exports.getProducts = exports.createProduct = void 0;
// The current products
var products = [];
function createProduct(req, res) {
    try {
        var newProduct_1 = req.body;
        // Basic verification of the input
        if (!newProduct_1.name || !newProduct_1.price) {
            throw new Error("Missing product details to add");
        }
        // Make sure we don't already have a product by this name
        var index = products.findIndex(function (item) { return item.name === newProduct_1.name; });
        if (index !== -1) {
            throw new Error("Item to add already exists");
        }
        console.log("Adding:", newProduct_1);
        // Just add the new Product to the array
        products.push(newProduct_1);
        // Return the new list of products to the client
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.createProduct = createProduct;
function getProducts(req, res) {
    // Just return the list of products to the client
    res.send({ products: products });
}
exports.getProducts = getProducts;
function updateProductPriceBody(req, res) {
    try {
        var _a = req.body, name_1 = _a.name, price = _a.price;
        // Basic verification of the input
        if (!name_1 || !price) {
            throw new Error("Missing product details to update");
        }
        // Find the item to update
        var oldProduct = products.find(function (item) { return item.name === name_1; });
        if (!oldProduct) {
            throw new Error("Item to update not found");
        }
        console.log("Updating (Patch) \"" + oldProduct.name + "\":");
        console.log("Before:", oldProduct);
        // Updates by reference directly inside the array
        oldProduct.price = price;
        console.log("After :", oldProduct);
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.updateProductPriceBody = updateProductPriceBody;
function updateProductPriceQuery(req, res) {
    try {
        var name_2 = req.params.name;
        var price = req.body.price;
        // Basic verification of the input
        if (!name_2 || !price) {
            throw new Error("Missing product details to update");
        }
        // Find the item to update
        var oldProduct = products.find(function (item) { return item.name === name_2; });
        if (!oldProduct) {
            throw new Error("Item to update not found");
        }
        console.log("Updating (Patch) \"" + oldProduct.name + "\":");
        console.log("Before:", oldProduct);
        // Updates by reference directly inside the array
        oldProduct.price = price;
        console.log("After :", oldProduct);
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.updateProductPriceQuery = updateProductPriceQuery;
function overwriteProductBody(req, res) {
    try {
        var newProduct_2 = req.body;
        // Basic verification of the input
        if (!newProduct_2.name || !newProduct_2.price) {
            throw new Error("Missing product details to update");
        }
        // Find the item to update
        var index = products.findIndex(function (item) { return item.name === newProduct_2.name; });
        if (index === -1) {
            throw new Error("Item to replace not found");
        }
        var oldProduct = products.splice(index, 1, newProduct_2);
        // splice() returns an array, in this case with just one item.
        // use oldProduct[0] for the actual item.
        console.log("Updating (Put) \"" + oldProduct[0].name + "\":");
        console.log("Before:", oldProduct[0]);
        console.log("After :", newProduct_2);
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.overwriteProductBody = overwriteProductBody;
function overwriteProductQuery(req, res) {
    try {
        var name_3 = req.params.name;
        var newProduct_3 = req.body;
        // Basic verification of the input
        if (!name_3) {
            throw new Error("Missing old product details to update");
        }
        if (!newProduct_3.name || !newProduct_3.price) {
            throw new Error("Missing new product details for update");
        }
        var index = products.findIndex(function (item) { return item.name === name_3; });
        if (index === -1) {
            throw new Error("Item to replace not found");
        }
        if (name_3 !== newProduct_3.name) {
            // We're updating the name property. Make sure the new name does not already exist.
            var newIndex = products.findIndex(function (item) { return item.name === newProduct_3.name; });
            if (newIndex !== -1) {
                throw "Replacement item already exists";
            }
        }
        var oldProduct = products.splice(index, 1, newProduct_3);
        // splice() returns an array, in this case with just one item.
        // use oldProduct[0] for the actual item.
        console.log("Updating (Put) \"" + oldProduct[0].name + "\":");
        console.log("Before:", oldProduct[0]);
        console.log("After :", newProduct_3);
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.overwriteProductQuery = overwriteProductQuery;
function deleteProduct(req, res) {
    try {
        var name_4 = req.body.name;
        if (!name_4) {
            throw new Error("Missing old product name to delete");
        }
        // Does the product exist?
        var index = products.findIndex(function (item) { return item.name === name_4; });
        if (index === -1) {
            throw new Error("Item to delete not found");
        }
        // splice() returns an array, in this case with just one item.
        // use oldProduct[0] for the actual item.
        var oldProduct = products.splice(index, 1);
        console.log("Deleted:", oldProduct[0]);
        res.send({ products: products });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}
exports.deleteProduct = deleteProduct;
