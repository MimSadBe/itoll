import { NextResponse } from 'next/server';
import { Product } from '@/app/lib/types';

const products: Product[] = [
  {
    "id": 713,
    "title": "Xiaomi Poco X7 Pro 5G 512GB 12GB",
    "price": 3190,
    "description": "The Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi Poco X7 Pro 5G 512GB 12GB Xiaomi. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202502\/37934-E76C954B-442F-433C-B63A-DF8D6A8E68AF.jpg_800_0_100.webp"
  },
  {
    "id": 712,
    "title": "Xiaomi Poco X7 Pro 5G 256GB 8GB",
    "price": 3050,
    "description": "The Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi Poco X7 Pro 5G 256GB 8GB Xiaomi. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202502\/37934-E76C954B-442F-433C-B63A-DF8D6A8E68AF.jpg_800_0_100.webp"
  },
  {
    "id": 707,
    "title": "Daria Bond II Lite 5G 256GB 8GB",
    "price": 1520,
    "description": "The Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria Bond II Lite 5G 256GB 8GB Daria. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202502\/81245-FD7741AC-BC68-42B6-BBA8-10F3782A22C9.webp_800_0_100.webp"
  },
  {
    "id": 703,
    "title": "Daria Bond II 5G 512GB 12GB",
    "price": 2699.9,
    "description": "The Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond II 5G 512GB 12GB Daria Bond. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202502\/91164-C77F7637-C636-4600-B5C4-7861D9959119.webp_800_0_100.webp"
  },
  {
    "id": 693,
    "title": "Samsung Galaxy A16 4G 256GB 8GB",
    "price": 1490,
    "description": "The Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy A16 4G 256GB 8GB Samsung Galaxy. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/30181-8287F893-2B30-443C-9798-DF5901F95B09.png_800_0_100.webp"
  },
  {
    "id": 692,
    "title": "Samsung Galaxy A16 4G 128GB 6GB",
    "price": 1250,
    "description": "The Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy A16 4G 128GB 6GB Samsung Galaxy. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/30181-8287F893-2B30-443C-9798-DF5901F95B09.png_800_0_100.webp"
  },
  {
    "id": 632,
    "title": "Samsung 3 Pin Charger 45 Watt",
    "price": 120,
    "description": "The Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3 Pin Charger 45 Watt Samsung 3. This product is very good.",
    "category": {
      "id": 8,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202411\/86716-E763A07B-C7F2-4026-B47E-8168021D9608.jpg_800_0_100.webp"
  },
  {
    "id": 630,
    "title": "Samsung 3 Pin Charger 25 Watt",
    "price": 57,
    "description": "The Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3 Pin Charger 25 Watt Samsung 3. This product is very good.",
    "category": {
      "id": 8,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202411\/40868-2749C230-6BC4-410E-B2FE-5A0E0B2F0E16.jpg_800_0_100.webp"
  },
  {
    "id": 627,
    "title": "Apple Watch SE 2024 44mm Aluminum Sport Band",
    "price": 2040,
    "description": "The Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch SE 2024 44mm Aluminum Sport Band Apple Watch. This product is very good.",
    "category": {
      "id": 6,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202411\/50323-B5453CEF-38BA-42A8-A87C-194D82B54805.jpg_800_0_100.webp"
  },
  {
    "id": 626,
    "title": "Apple Watch SE 2024 40mm Aluminum Sport Band",
    "price": 1790,
    "description": "The Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch SE 2024 40mm Aluminum Sport Band Apple Watch. This product is very good.",
    "category": {
      "id": 6,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202411\/21402-22BE7CC4-DDE8-4731-875B-25679793B652.jpg_800_0_100.webp"
  },
  {
    "id": 625,
    "title": "Apple Watch Series 10 Aluminum 46mm",
    "price": 3490,
    "description": "The Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch Series 10 Aluminum 46mm Apple Watch. This product is very good.",
    "category": {
      "id": 6,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/83742-5C8B8F27-C502-4043-B1AF-CF90B595A4F8.jpg_800_0_100.webp"
  },
  {
    "id": 572,
    "title": "Xiaomi 14T 5G 512GB 12GB",
    "price": 3410,
    "description": "The Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB Xiaomi 14T 5G 512GB 12GB. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/13653-45273933-0259-4338-A67D-9D84DB5D9F38.jpg_800_0_100.webp"
  },
  {
    "id": 564,
    "title": "Xiaomi Poco C75 256GB 8GB",
    "price": 990,
    "description": "The Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB Xiaomi Poco C75 256GB 8GB. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/21515-6EFD552E-0E19-42D3-9C21-16867BEC68FA.jpg_800_0_100.webp"
  },
  {
    "id": 561,
    "title": "SAMSUNG GALAXY BUDS3 PRO (SM-R630)",
    "price": 1030,
    "description": "The SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630) SAMSUNG GALAXY BUDS3 PRO (SM-R630). This product is very good.",
    "category": {
      "id": 10,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/39553-FCDD9867-26A0-450E-BCA9-6017015B24B4.jpg_800_0_100.webp"
  },
  {
    "id": 550,
    "title": "Samsung Galaxy A16 4G 128GB 4GB",
    "price": 1095,
    "description": "The Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy A16 4G 128GB 4GB Samsung Galaxy. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/30181-8287F893-2B30-443C-9798-DF5901F95B09.png_800_0_100.webp"
  },
  {
    "id": 549,
    "title": "Daria Bond 5G 256GB 8GB UAE Edition",
    "price": 1140,
    "description": "The Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria Bond 5G 256GB 8GB UAE Edition Daria. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202410\/87186-4CEB9843-3AA5-4ABD-AF9C-9CABE3CD768B.jpg_800_0_100.webp"
  },
  {
    "id": 531,
    "title": "Xiaomi Redmi Note 14 Pro 5G 512GB 12GB",
    "price": 2790,
    "description": "The Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi Note 14 Pro 5G 512GB 12GB Xiaomi Redmi. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/65237-FFFD5D31-DA80-4163-8D7A-C04FA8F5CFCB.jpg_800_0_100.webp"
  },
  {
    "id": 522,
    "title": "Samsung Galaxy S24 FE 5G 256GB 8GB",
    "price": 3830,
    "description": "The Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung Galaxy S24 FE 5G 256GB 8GB Samsung. This product is very good.",
    "category": {
      "id": 3,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/99964-517EB0AF-C1F5-43B4-983E-7FCC0E4237D7.jpg_800_0_100.webp"
  },
  {
    "id": 518,
    "title": "RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger",
    "price": 169,
    "description": "The RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD Pioneer 65W GaN 3-Port Wall Charger RAVPOWER PD. This product is very good.",
    "category": {
      "id": 8,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/71240-47110029-FDFE-44AA-B467-4957163C58D2.jpg_800_0_100.webp"
  },
  {
    "id": 516,
    "title": "RAVPower Cable RP-CB1031 60W Fast Charging",
    "price": 33,
    "description": "The RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable RP-CB1031 60W Fast Charging RAVPower Cable. This product is very good.",
    "category": {
      "id": 8,
      "name": "product"
    },
    "image": "https:\/\/shop.ir\/images\/202409\/12381-68301B1D-96FF-4762-9FF2-091BFE526341.jpg_800_0_100.webp"
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  let filteredProducts = products;
  if (query) {
    filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }


  const headers = new Headers();
  headers.append('Cache-Control', 's-maxage=60, stale-while-revalidate');

  return NextResponse.json(filteredProducts, { headers });
}