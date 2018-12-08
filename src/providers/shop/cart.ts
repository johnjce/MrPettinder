import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    private cart = [];
    private productList = [
        {
            category: 'Rodents',
            expanded: true,
            products: [
                {
                    id: 1,
                    name: "Harringtons Guinea Pig Optimum Nugget - 2kg",
                    price:"4.50",
                    description: "Harringtons Guinea Pig Optimum Nugget - 2kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Harringtons-Guinea-Pig-Optimum-Nugget-2kg_1.jpg"
                },
                {
                    id: 2,
                    name: "Supreme Gerty Guinea Pig Complete Muesli - 12.5kg",
                    price:"18.00",
                    description: "Supreme Gerty Guinea Pig Complete Muesli - 12.5kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Gerty-Guinea-Pig-Complete-Muesli-12-5kg_1.jpg"
                },
                {
                    id: 3,
                    name: "Supreme Fibafirst Guinea Pig Food - 350g",
                    price:"3.89",
                    description: "Supreme Fibafirst Guinea Pig Food - 350g",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Fibafirst-Guinea-Pig-Food-350g_1.jpg"
                },
                {
                    id: 4,
                    name: "Supreme Science Selective Guinea Pig Food - 3kg",
                    price:"10.30",
                    description: "Supreme Science Selective Guinea Pig Food - 3kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Science-Selective-Guinea-Pig-3kg_1.jpg"
                },
                {
                    id: 5,
                    name: "The Parkland Flatpack Run 114cm X 114cm",
                    price:"75.76",
                    description: "The Parkland Flatpack Run 114cm X 114cm",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/The-Parkland-Flatpack-Run-114cm-X-114cm_19761.jpg"
                },
                {
                    id: 6,
                    name: "Flat Pack Welcome Home Hutch 91x39x51cm",
                    price:"42.50",
                    description: "Flat Pack Welcome Home Hutch 91x39x51cm",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Flat-Pack-Welcome-Home-Hutch-91x39x51cm_2871.jpg"
                },
                {
                    id: 7,
                    name: "Apex Run Tongue & Groove Shelter",
                    price:"54.92",
                    description: "Apex Run Tongue & Groove Shelter",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Apex-Run-Tongue-Groove-Shelter_APR48TB.jpg"
                },
                {
                    id: 8,
                    name: "Supreme Science Selective Guinea Pig Food - 350g",
                    price:"2.41",
                    description: "Supreme Science Selective Guinea Pig Food - 350g",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Science-Selective-Guinea-Pig-350g_1.jpg"
                },
            ]
        },
        {
            category: 'perros',
            products: [
                {
                    id: 5,
                    name: "huesos de jamon",
                    price: "29.00",
                    description: "40, size middle",
                    imageURL: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201607/13/00149510203844____1__640x640.jpg"
                }
            ]
        },
        {
            category: 'gatos',
            products: [
                {
                    id: 6,
                    name: "TecTake game tree",
                    price: "110.60",
                    description: "With this extravagant TecTake game tree, the kittens of the house can enjoy themselves as dwarfs. Adventures and fun without limits thanks to its multiple levels that offer tubes, camitas, platforms to make you curious, etc.",
                    imageURL: "https://cdn.tectake.es/media/catalog/product/cache/1/small_image/1472x/0dc2d03fe217f8c83829496872af24a0/4/0/402742-4.jpg"
                }
            ]
        }
    ];
    constructor() { }

    getProducts() {
        return this.productList;
    }

    getCart() {
        return this.cart;
    }

    addProduct(product) {
        this.cart.push(product);
    }

    removeProduc(id) {
        const index: number = this.deepIndexOf(this.cart,{"id":id});
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }

    deepIndexOf(arr, obj) {
        return arr.findIndex(function (cur) {
            return Object.keys(obj).every(function (key) {
            return obj[key] === cur[key];
            });
        });
    }
}