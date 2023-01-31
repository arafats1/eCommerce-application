import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const main = async () => {
    
    // try {
    //     await primsa.category.deleteMany();
    //     await primsa.product.deleteMany();
    //     const fakeProducts = randProduct({
    //         length: 1000,
    //     });
    //     for (let index = 0; index < fakeProducts.length; index++) {
    //         const product = fakeProducts[index];
    //         const productAdjective = randProductAdjective();
    //         await primsa.product.upsert({
    //             where: {
    //                 title: `${productAdjective} ${product.title}`,
    //             },
    //             create: {
    //                 title: `${productAdjective} ${product.title}`,
    //                 description: product.description,
    //                 price: product.price,
    //                 image: `${product.image}/tech`,
    //                 quantity: randNumber({ min: 10, max: 100 }),
    //                 category: {
    //                     connectOrCreate: {
    //                         where: {
    //                             name: product.category,
    //                         },
    //                         create: {
    //                             name: product.category,
    //                             createdAt: randBetweenDate({
    //                                 from: new Date("10/06/2020"),
    //                                 to: new Date(),
    //                             }),
    //                         },
    //                     },
    //                 },
    //                 createdAt: randBetweenDate({
    //                     from: new Date("10/07/2020"),
    //                     to: new Date(),
    //                 }),
    //             },
    //             update: {},
    //         });
    //     }
    // } catch (error) {
    //     throw error;
    // }

    
    //  await primsa.category.create({
    //     data: {
    //         name: "Spices",
    //         products: {
    //             create: [
    //                 {
    //                     title: "Turmeric",
    //                     description: "Turmeric is a spice that comes from the root of a plant in the ginger family. It's used in cooking and has been used in traditional medicine for thousands of years.",
    //                     price: "20,000 per Kg",
    //                     image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858596/Spices/Turmeric-PNG-Clipart_f0tujt.png",
    //                     quantity: 10,
    //                 },
    //                 {
    //                     title: "Cinnamon",
    //                     description: "Cinnamon is a spice made from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",
    //                     price: "20,000 per Kg",
    //                     image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858594/Spices/cinamon_sticks_jw8k6c.png",
    //                     quantity: 10,
    //                 }
    //             ]
    //         }
    //     }

       
    // });

    //create products
    // await primsa.product.create({
    //     data: {
    //         title: "Turmeric",
    //         description: "Turmeric is a spice that comes from the root of a plant in the ginger family. It's used in cooking and has been used in traditional medicine for thousands of years.",
    //         price: "20,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858596/Spices/Turmeric-PNG-Clipart_f0tujt.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Cinnamon",
    //         description: "Cinnamon is a spice made from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive.",
    //         price: "10,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675165151/Spices/cina2_c6ayew.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Oregano",
    //         description: "Oregano is a perennial herb with fragrant, aromatic leaves. It is native to the Mediterranean region, but it is now cultivated and used in many other regions as well.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167952/Spices/oregano_ffqkbl.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "White Pepper",
    //         description: "White pepper is a spice made from the dried, fully ripened fruit of the pepper plant. It is used to add a spicy flavor to dishes. White pepper is made from the same plant as black pepper.",
    //         price: "17,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/white_pepper_mdql2b.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Tamarind",
    //         description: "Tamarind is a leguminous tree in the family Fabaceae indigenous to tropical Africa. The genus Tamarindus is a monotypic taxon.",
    //         price: "11,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/Tamarind_jpjfx5.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Nutmeg",
    //         description: "Nutmeg is a seed and spice from the tropical tree Myristica fragrans, native to the Banda Islands in Indonesia. The tree is also known by the names nutmeg mace, mace, and nutmeg tree.",
    //         price: "8,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/nutmeg_mttspf.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Garlic",
    //         description: "Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, and Chinese onion. Garlic is native to Central Asia and northeastern Iran.",
    //         price: "4,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167948/Spices/garlic_krv29r.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Star Anise",
    //         description: "Star anise is the star-shaped fruit of the evergreen tree Illicium verum, native to China. It is used whole or ground as a spice in Chinese, Japanese, Korean, Vietnamese, and Thai cuisines.",
    //         price: "7,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167948/Spices/star_anise_ozqjxw.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Red Chilli",
    //         description: "Red chilli is a spice made from the dried ripe fruit of plants belonging to the genus Capsicum. It is used to add a spicy flavour to dishes. The fruit is used fresh, dried, powdered, or ground into a paste.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167948/Spices/red_chili_mtjeoa.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Ginger",
    //         description: "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice or a folk medicine. It is a herbaceous perennial which grows annual pseudostems (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.",
    //         price: "6,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167947/Spices/ginger_gdxs2j.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Cloves",
    //         description: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. The tree is native to the Moluccas, in Indonesia. The English word clove derives from Dutch klouwen, via Latin clavus, from Ancient Greek κλάβος (klábos), meaning nail.",
    //         price: "8,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/cloves_c3prf4.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "nigella seed",
    //         description: "Nigella sativa, commonly known as black cumin, nigella, nutmeg flower, fennel flower, Roman coriander, or kalonji, is an annual flowering plant in the family Ranunculaceae, native to southwest and Central Asia.",
    //         price: "7,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/nigella_seeds_wvhvrq.webp",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "gooseberry",
    //         description: "Gooseberry is a common name for several species of deciduous shrubs in the genus Ribes in the family Grossulariaceae. The name is also used for the fruit of these plants. The fruit is usually green, yellow, or red, and is often used in jams and jellies.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/gooseberry_el4ozu.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Cardamom",
    //         description: "Cardamom is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. The two genera contain about 30 species, most of which are native to India, Sri Lanka, and other countries in South Asia.",
    //         price: "16,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/cardamom_yzzobp.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Black Pepper",
    //         description: "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, which is usually dried and used as a spice and seasoning. When dried, the fruit is known as a peppercorn. Black pepper is native to south India and is extensively cultivated there and elsewhere in tropical regions.",
    //         price: "10,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167945/Spices/black_pepper_fomrpx.jpg",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // }); 

    // await primsa.product.create({
    //     data: {
    //         title: "Coriander",
    //         description: "Coriander, also known as cilantro or Chinese parsley, is an annual herb in the family Apiaceae. It is also known as dhania or kothmir in South Asia. Coriander is native to regions spanning from southern Europe and North Africa to southwestern Asia.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167945/Spices/coriander_t4ajtj.jpg",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Bay leaves",
    //         description: "Bay leaves are the aromatic leaves of several kinds of laurel. The name is also used for the related trees, which are in the flowering plant genus Laurus. The leaves are used as a spice in cooking, and for fragrance in potpourri.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167945/Spices/bay_mdhm5z.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Cumin",
    //         description: "Cumin is a flowering plant in the family Apiaceae, native from the east Mediterranean to India. It is a herbaceous annual plant, about 50 cm (20 in) tall, with yellow flowers. The seeds are about 2 mm (0.079 in) long, grayish white, with striations.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167945/Spices/cumin_ossk6k.jpg",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });






};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});