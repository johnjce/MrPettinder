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
                    price: "4.50",
                    description: "Harringtons Guinea Pig Optimum Nugget - 2kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Harringtons-Guinea-Pig-Optimum-Nugget-2kg_1.jpg"
                },
                {
                    id: 2,
                    name: "Supreme Gerty Guinea Pig Complete Muesli - 12.5kg",
                    price: "18.00",
                    description: "Supreme Gerty Guinea Pig Complete Muesli - 12.5kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Gerty-Guinea-Pig-Complete-Muesli-12-5kg_1.jpg"
                },
                {
                    id: 3,
                    name: "Supreme Fibafirst Guinea Pig Food - 350g",
                    price: "3.89",
                    description: "Supreme Fibafirst Guinea Pig Food - 350g",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Fibafirst-Guinea-Pig-Food-350g_1.jpg"
                },
                {
                    id: 4,
                    name: "Supreme Science Selective Guinea Pig Food - 3kg",
                    price: "10.30",
                    description: "Supreme Science Selective Guinea Pig Food - 3kg",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Science-Selective-Guinea-Pig-3kg_1.jpg"
                },
                {
                    id: 5,
                    name: "The Parkland Flatpack Run 114cm X 114cm",
                    price: "75.76",
                    description: "The Parkland Flatpack Run 114cm X 114cm",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/The-Parkland-Flatpack-Run-114cm-X-114cm_19761.jpg"
                },
                {
                    id: 6,
                    name: "Flat Pack Welcome Home Hutch 91x39x51cm",
                    price: "42.50",
                    description: "Flat Pack Welcome Home Hutch 91x39x51cm",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Flat-Pack-Welcome-Home-Hutch-91x39x51cm_2871.jpg"
                },
                {
                    id: 7,
                    name: "Apex Run Tongue & Groove Shelter",
                    price: "54.92",
                    description: "Apex Run Tongue & Groove Shelter",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Apex-Run-Tongue-Groove-Shelter_APR48TB.jpg"
                },
                {
                    id: 8,
                    name: "Supreme Science Selective Guinea Pig Food - 350g",
                    price: "2.41",
                    description: "Supreme Science Selective Guinea Pig Food - 350g",
                    imageURL: "http://www.petshop.co.uk/SCA Product Images/Supreme-Science-Selective-Guinea-Pig-350g_1.jpg"
                },
            ]
        },
        {
            category: 'Dogs',
            products: [
                {
                    id: 9,
                    name: "huesos de jamon",
                    price: "29.00",
                    description: "40, size middle",
                    imageURL: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201607/13/00149510203844____1__640x640.jpg"
                },
                {
                    id: "2325501",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875302-center-1",
                    name: "Holiday Tails Snowman Rope Dog Toy",
                    description: "Holiday Tails Snowman Rope Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2325533",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875652-center-1",
                    name: "Holiday Tails Dashing Moose Plush Dog Toy",
                    description: "Holiday Tails Dashing Moose Plush Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2325020",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875011-center-1",
                    name: "Holiday Tails Mistletoe on a Rope Handle Dog Toy",
                    description: "Holiday Tails Mistletoe on a Rope Handle Dog Toy",
                    price: "11.42"
                },
                {
                    id: "812501",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2887514-center-1",
                    name: "KONG Classic Dog Toy",
                    description: "KONG Classic Dog Toy",
                    price: "11.42"
                },
                {
                    id: "13288",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2199914-center-1",
                    name: "KONG Teddy Bear Dog Toy",
                    description: "KONG Teddy Bear Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2326008",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2890254-center-1",
                    name: "Holiday Tails Near and Dear Plush Puppy Paddle Toy",
                    description: "Holiday Tails Near and Dear Plush Puppy Paddle Toy",
                    price: "11.42"
                },
                {
                    id: "24920",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2331719-center-1",
                    name: "KONG Wild Knots Bear Dog Tug Toy",
                    description: "KONG Wild Knots Bear Dog Tug Toy",
                    price: "11.42"
                },
                {
                    id: "15199",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875513-center-1",
                    name: "Nylabone Dura Chew Plus Textured Ring Dog Chew",
                    description: "Nylabone Dura Chew Plus Textured Ring Dog Chew",
                    price: "11.42"
                },
                {
                    id: "2326025",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2763773-center-1",
                    name: "Holiday Tails Out Foxed Puppy Toy Gift Set",
                    description: "Holiday Tails Out Foxed Puppy Toy Gift Set",
                    price: "11.42"
                },
                {
                    id: "92028",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875169-center-1",
                    name: "Nylabone Pink Dental Puppy Bone Chew",
                    description: "Nylabone Pink Dental Puppy Bone Chew",
                    price: "11.42"
                },
                {
                    id: "2325516",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875661-center-1",
                    name: "Holiday Tails Merry Mooseling Plush Dog Toy with Light-Up Ball",
                    description: "Holiday Tails Merry Mooseling Plush Dog Toy with Light-Up Ball",
                    price: "11.42"
                },
                {
                    id: "28622",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2875302-center-1",
                    name: "Air KONG Squeaker Football",
                    description: "Air KONG Squeaker Football",
                    price: "11.42"
                },
                {
                    id: "1611096",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2887442-center-1",
                    name: "Leaps &amp; Bounds Play Plush Avocado Dog Toy",
                    description: "Leaps &amp; Bounds Play Plush Avocado Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2325034",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2926827-center-1",
                    name: "Holiday Tails Tiny Tweed Teddy Flattie Dog Toy",
                    description: "Holiday Tails Tiny Tweed Teddy Flattie Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2325532",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2910091-center-1",
                    name: "Holiday Tails Tweed Teddy Bear Plush Dog Toy",
                    description: "Holiday Tails Tweed Teddy Bear Plush Dog Toy",
                    price: "11.42"
                },
                {
                    id: "2326007",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2910112-center-1",
                    name: "Holiday Tails Hanukkah Pocket Polar Bear Plush Dog Toy",
                    description: "Holiday Tails Hanukkah Pocket Polar Bear Plush Dog Toy",
                    price: "11.42"
                },
                {
                    id: "957002",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2910104-center-1",
                    name: "KONG SqueakAir Tennis Balls Pack of 3",
                    description: "KONG SqueakAir Tennis Balls Pack of 3",
                    price: "11.42"
                },
                {
                    id: "830783",
                    imageURL: "https://petco.scene7.com/is/image/PETCO/2910041-center-1",
                    name: "Leaps &amp; Bounds Playtime Pal Tough Shark Dog Toy",
                    description: "Leaps &amp; Bounds Playtime Pal Tough Shark Dog Toy",
                    price: "11.42"
                }
            ]
        },
        {
            category: 'Cats',
            products: [
                {
                    id: 10,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 15,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 16,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 17,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 18,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                }
            ]
        },
        {
            category: 'Birds',
            products: [
                {
                    id: 11,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 19,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 20,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 21,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 22,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                }
            ]
        },
        {
            category: 'Fish',
            products: [
                {
                    id: 12,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 23,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 24,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 25,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 26,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                }
            ]
        },
        {
            category: 'Reptiles',
            products: [
                {
                    id: 13,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 27,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 28,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 29,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 30,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                }
            ]
        },
        {
            category: 'Rabbits',
            products: [
                {
                    id: 14,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 31,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 32,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 33,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                },
                {
                    id: 34,
                    name: "Product",
                    price: "0",
                    description: "This is only a test product",
                    imageURL: "../../assets/imgs/logo.png"
                }
            ]
        }
    ];
    constructor() { }
    
    clearCart(): any {
        this.cart = [];
    }

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
        const index: number = this.deepIndexOf(this.cart, { "id": id });
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