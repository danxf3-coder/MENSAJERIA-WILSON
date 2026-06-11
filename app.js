const WHATSAPP_NUMBER = "5491132797598";

const PURCHASE_LABEL = "Mayorista";

const categories = [
  { id: "all", name: "Todas", group: "Catalogo" },
  { id: "caballero-billeteras", name: "Billeteras", group: "Caballero" },
  { id: "caballero-rinoneras", name: "Rinoneras", group: "Caballero" },
  { id: "caballero-bandoleras", name: "Bandoleras", group: "Caballero" },
  { id: "caballero-pecheras", name: "Pecheras", group: "Caballero" },
  { id: "caballero-camperas", name: "Camperas importadas", group: "Caballero" },
  { id: "caballero-chalecos", name: "Chalecos importados", group: "Caballero" },
  { id: "caballero-afa", name: "Camisetas AFA", group: "Caballero" },
  { id: "Carteras-Damas", name: "Carteras", group: "Dama" },
  { id: "dama-billeteras-grandes", name: "Billeteras grandes", group: "Dama" },
  { id: "dama-billeteras-medianas", name: "Billeteras medianas", group: "Dama" },
  { id: "dama-rinoneras", name: "Rinoneras", group: "Dama" },
  { id: "dama-pecheras", name: "Pecheras", group: "Dama" },
  { id: "dama-neceser", name: "Neceser", group: "Dama" },
  { id: "dama-tote", name: "Tote Bag Grande", group: "Dama" },
  { id: "dama-tarjeteros", name: "Tarjeteros", group: "Dama" },
  { id: "dama-portacelulares", name: "Portacelulares", group: "Dama" },
  { id: "dama-mini-tote", name: "Mini Tote", group: "Dama" },
  { id: "dama-mini-bags", name: "Mini Bags", group: "Dama" },
  { id: "dama-bandoleras", name: "Bandoleras", group: "Dama" },
];

const products = [
  {
    id: 13,
    name: "Neceser corazon 2623",
    code: "2623",
    category: "dama-neceser",
    description: "Neceser con aplique de corazon, brillos y pompón.",
    colors: ["Rosa", "Negro", "Celeste", "Verde claro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/neceser-2623.jpg",
    image: "linear-gradient(135deg, #d6a6a6, #8fd4c9)",
    price: 4500,
    sold: 200,
  },
  {
    id: 14,
    name: "Billetera caballero 0473",
    code: "0473",
    category: "caballero-billeteras",
    description: "Billetera de caballero. Consultar colores disponibles.",
    colors: ["Consultar"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/billetera-caballero-0473.jpg",
    image: "linear-gradient(135deg, #2d211c, #936f56)",
    price: 5000,
    sold: 199,
  },
  {
    id: 15,
    name: "Billetera CARP",
    code: "Rp12",
    category: "caballero-billeteras",
    description: "Billetera CARP con diseño elegante y espacio para tarjetas.",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera%20CARP-Cod.Rp12%20$6500%20.jpeg",
    image: "linear-gradient(135deg, #2d211c, #7b5546)",
    price: 6500,
    sold: 30,
  },
  {
    id: 16,
    name: "Billetera CABJ",
    code: "Bj10",
    category: "caballero-billeteras",
    description: "Billetera CABJ con terminaciones reforzadas y estilo premium.",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera%20CABJ-%20Cod.Bj10-%20$6500.jpeg",
    image: "linear-gradient(135deg, #2d211c, #4b5a66)",
    price: 6500,
    sold: 28,
  },
  {
    id: 17,
    name: "Riñonera Caballero",
    code: "2102",
    category: "caballero-rinoneras",
    description: "Riñonera para caballero, durable y con varios compartimentos.",
    colors: ["Azul", "Verde", "Gris", "Negra"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Riñonera caballero.jpeg",
    image: "linear-gradient(135deg, #2d3c6f, #6b7d82)",
    price: 6500,
    sold: 12,
  },
  {
    id: 18,
    name: "Riñoneras Dama",
    code: "3124",
    category: "dama-rinoneras",
    description: "Riñoneras Dama con diseño elegante y múltiples colores disponibles.",
    colors: ["Dorado", "Rosa", "Blanco", "Celeste", "Negro", "Rosa brillante"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Riñonera Dama- cod 203.jpeg",
    image: "linear-gradient(135deg, #ecb3c8, #f7e9e2)",
    price: 6500,
    sold: 10,
  },
  {
    id: 19,
    name: "Riñonera Militar Caballero",
    code: "3125",
    category: "caballero-rinoneras",
    description: "Riñonera Militar Caballero con diseño táctico y múltiples variantes de camuflaje.",
    colors: ["Negro", "Camuflaje Selva", "Coyote Brown", "Desert Digital", "Camuflaje Urbano"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Riñonera%20militar.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #5a6b68)",
    price: 6500,
    sold: 8,
  },
  {
    id: 20,
    name: "Riñonera V1 Caballero",
    code: "3126",
    category: "caballero-rinoneras",
    description: "Riñonera V1 Caballero con diseño masculino y compartimentos prácticos.",
    colors: ["Negro", "Azul oscuro", "Gris", "Verde"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/RI%C3%91ONERA.jpeg",
    image: "linear-gradient(135deg, #1c1c1c, #4e5f6f)",
    price: 6500,
    sold: 5,
  },
  {
    id: 2 ,
    name: "Tote bag mini Dama",
    code: "216",
    category: "dama-tote",
    description: "Tote bag Dama con estilo fresco y capacidad amplia.",
    colors: ["Celeste", "Negro", "Azul oscuro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/TOTE%20BAG%20%20celeste%20negro%20azul.jpeg",
    image: "linear-gradient(135deg, #7fb8dc, #1f2937)",
    price: 14500,
    sold: 6,
  },
  {
    id: 22,
    name: "TOTE BAG GRANDE DAMA",
    code: "240",
    category: "dama-tote",
    description: "TOTE BAG DAMA con combinación elegante en marrón y negro.",
    colors: ["Marron", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/TOTE%20BAG%20Marron%20y%20Negro.jpeg",
    image: "linear-gradient(135deg, #6c4b33, #14110f)",
    price: 18000,
    sold: 4,
  },
  {
    id: 23,
    name: "TOTE BAG MINI",
    code: "201",
    category: "dama-tote",
    description: "TOTE BAG DAMA en blanco y negro con diseño atemporal.",
    colors: ["Negro", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/TOTEBAG%20blanco%20y%20negro.jpeg",
    image: "linear-gradient(135deg, #111111, #f5f5f5)",
    price: 14500,
    sold: 7,
  },
  {
    id: 24,
    name: "Cartera Luna DAMA",
    code: "101",
    category: "dama-billeteras-grandes",
    description: "Cartera Luna DAMA",
    colors: ["Negro", "Beige", "Blanco", "Vino"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/201-Cartera Luna.jpeg",
    image: "linear-gradient(135deg, #222222, #b98e6b)",
    price: 14500,
    sold: 20,
  },
  {
    id: 25,
    name: "Bandolera 3 cierres DAMA",
    code: "102",
    category: "dama-bandoleras",
    description: "Bandolera- 3 cierres DAMA",
    colors: ["Rojo", "Blanco", "Marron", "Negro", "Violeta", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Bandolera-3 cierres-dama.jpeg",
    image: "linear-gradient(135deg, #8b1f26, #e7d4d8)",
    price: 12000,
    sold: 18,
  },
  {
    id: 26,
    name: "BANDOLERAS DAMA",
    code: "103",
    category: "dama-bandoleras",
    description: "BANDOLERAS DAMA",
    colors: ["Purpura", "Negro", "Beige", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Bandoleras-dama.jpeg",
    image: "linear-gradient(135deg, #5f2b5b, #d6cdd0)",
    price: 17000,
    sold: 14,
  },
  {
    id: 27,
    name: "BILLETERA GRANDE DOBLE CIERRE DAMA",
    code: "104",
    category: "dama-billeteras-grandes",
    description: "BILLETERA GRANDE DOBLE CIERRE DAMA",
    colors: ["Blanco", "Marron", "Violeta", "Negro", "Celeste"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Grande Doble-cierra-dama.jpeg",
    image: "linear-gradient(135deg, #5a4c75, #d7d4ee)",
    price: 5500,
    sold: 22,
  },
  {
    id: 28,
    name: "BILLETERA V2 GRANDE DAMA",
    code: "105",
    category: "dama-billeteras-grandes",
    description: "BILLETERA V2 GRANDE DAMA",
    colors: ["Azul", "Celeste"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Grande-dama-v2.jpeg",
    image: "linear-gradient(135deg, #4c6ba5, #a8c7e9)",
    price: 4000,
    sold: 30,
  },
  {
    id: 29,
    name: "BILLETERA MEDIANA DAMA",
    code: "106",
    category: "dama-billeteras-medianas",
    description: "BILLETERA MEDIANA DAMA",
    colors: ["Rosa", "Negro", "Marron", "Beige", "Azul", "Verde agua"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Mediana- DAMA.jpeg",
    image: "linear-gradient(135deg, #d993be, #9e8ba6)",
    price: 5000,
    sold: 24,
  },
  {
    id: 30,
    name: "BILLETERA PUFFER un solo cierre DAMA",
    code: "107",
    category: "dama-billeteras-grandes",
    description: "BILLETERA PUFFER un solo cierre DAMA",
    colors: ["Violeta", "Rojo", "Dorado", "Rosa", "Negro", "Celeste", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Puffer-un solo cierre-Dama.jpeg",
    image: "linear-gradient(135deg, #6b1c5c, #f0c9d4)",
    price: 4500,
    sold: 18,
  },
  {
    id: 31,
    name: "BILLETERA GRANDE DAMA",
    code: "108",
    category: "dama-billeteras-grandes",
    description: "BILLETERA GRANDE DAMA",
    colors: ["Gris", "Azul", "Amarillo"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera-Grande-DAMA.jpeg",
    image: "linear-gradient(135deg, #5a687d, #e1d58d)",
    price: 4000,
    sold: 16,
  },
  {
    id: 32,
    name: "BILLETERA GRANDE TACHAS DOBLE DAMA",
    code: "109",
    category: "dama-billeteras-grandes",
    description: "BILLETERA GRANDE TACHAS DOBLE DAMA",
    colors: ["Negro", "Blanco", "Beige", "Celeste"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billeteras-Grande-Tachas-doble cierre-Dama.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #c4c6c8)",
    price: 5500,
    sold: 10,
  },
  {
    id: 33,
    name: "BOLSA EBILLA DAMA",
    code: "110",
    category: "Carteras-Damas",
    description: "BOLSA EBILLA DAMA",
    colors: ["Negro", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Bolso-Ebilla-Dama.jpeg",
    image: "linear-gradient(135deg, #3b2f24, #bfa983)",
    price: 14500,
    sold: 10,
  },
  {
    id: 34,
    name: "BOLSOS DAMA",
    code: "111",
    category: "Carteras-Damas",
    description: "BOLSOS DAMA",
    colors: ["Marron", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Bolsos-dama.jpeg",
    image: "linear-gradient(135deg, #4f3d2d, #2b2722)",
    price: 15000,
    sold: 12,
  },
  {
    id: 35,
    name: "CARTERA BOMBOM DAMA",
    code: "112",
    category: "Carteras-Damas",
    description: "CARTERA BOMBOM DAMA",
    colors: ["Rosa", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Bombom-Dama.jpeg",
    image: "linear-gradient(135deg, #c2768b, #3a2b2f)",
    price: 15000,
    sold: 11,
  },
  {
    id: 36,
    name: "CARTERA DAMA",
    code: "113",
    category: "Carteras-Damas",
    description: "CARTERA DAMA",
    colors: ["Blanco", "Rosa", "Marron", "Cafe", "Celeste", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Dama.jpeg",
    image: "linear-gradient(135deg, #e2d7d2, #493d35)",
    price: 13000,
    sold: 14,
  },
  {
    id: 37,
    name: "CARTERA EBILLA DAMA V2",
    code: "114",
    category: "Carteras-Damas",
    description: "CARTERA EBILLA DAMA V2",
    colors: ["Negro", "Blanco", "Vino", "Beige", "Celeste", "Rosa", "Naranja"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Ebilla V2.jpeg",
    image: "linear-gradient(135deg, #2d2b2f, #d7c0c7)",
    price: 13000,
    sold: 13,
  },
  {
    id: 38,
    name: "CARTERA EBILLA DAMA",
    code: "115",
    category: "Carteras-Damas",
    description: "CARTERA EBILLA DAMA",
    colors: ["Marron", "Beige", "Rosa", "Negro", "Cafe"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Ebilla.jpeg",
    image: "linear-gradient(135deg, #654c3c, #d7c2b6)",
    price: 14000,
    sold: 13,
  },
  {
    id: 64,
    name: "BILLETERA AFA",
    code: "140",
    category: "caballero-billeteras",
    description: "billetera caballero",
    colors: ["Unico Color"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera AFA.jpeg",
    image: "linear-gradient(135deg, #2d211c, #7b5546)",
    price: 6500,
    sold: 0,
  },
  {
    id: 65,
    name: "BILLETERA INDEPENDIENTE",
    code: "141",
    category: "caballero-billeteras",
    description: "billetera caballero",
    colors: ["Unico color"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Independiente.jpeg",
    image: "linear-gradient(135deg, #2d211c, #8b6f52)",
    price: 6500,
    sold: 0,
  },
  {
    id: 66,
    name: "BILLETERA RACING",
    code: "142",
    category: "caballero-billeteras",
    description: "Billetera caballero",
    colors: ["Unico color"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera Racing.jpeg",
    image: "linear-gradient(135deg, #1b2a4a, #c72b2b)",
    price: 6500,
    sold: 0,
  },
  {
    id: 67,
    name: "BILLETERA SAN LORENZO",
    code: "143",
    category: "caballero-billeteras",
    description: "Billetera caballero",
    colors: ["Unico color"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Billetera San Lorenzo.jpeg",
    image: "linear-gradient(135deg, #071a3f, #b71c1c)",
    price: 6500,
    sold: 0,
  },
  {
    id: 68,
    name: "BOLSITOS PAÑUELO",
    code: "144",
    category: "dama-bolsitos",
    description: "bolsitos pañuelo dama",
    colors: ["Negro", "Marron", "Cafe"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Bolsitos Pañuelo.jpeg",
    image: "linear-gradient(135deg, #3b2f24, #bfa983)",
    price: 14500,
    sold: 0,
  },
  {
    id: 69,
    name: "CARTERA CADENA DAMA",
    code: "145",
    category: "Carteras-Damas",
    description: "Tira con cadena",
    colors: ["Negro", "Cafe"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Cadena.jpeg",
    image: "linear-gradient(135deg, #1f1f1f, #bdb1a3)",
    price: 14500,
    sold: 0,
  },
  {
    id: 70,
    name: "CARTERA DOBLE EBILLA DAMA",
    code: "146",
    category: "Carteras-Damas",
    description: "cartera con doble ebilla",
    colors: ["Negro", "Blanco", "Rojo"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera doble Ebilla.jpeg",
    image: "linear-gradient(135deg, #4c3b2a, #e8d6cf)",
    price: 14500,
    sold: 0,
  },
  {
    id: 39,
    name: "CARTERA TAPA CON LINEAS DAMA",
    code: "116",
    category: "Carteras-Damas",
    description: "CARTERA TAPA CON LINEAS DAMA",
    colors: ["Marron", "Rosa", "Violeta", "Negro", "Blanco", "Rojo"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Tapa con linea- DAMA.jpeg",
    image: "linear-gradient(135deg, #7d4f5d, #f0d4d8)",
    price: 15000,
    sold: 12,
  },
  {
    id: 40,
    name: "CARTERA TAPA DAMA",
    code: "117",
    category: "Carteras-Damas",
    description: "CARTERA TAPA DAMA",
    colors: ["Negro", "Rosa", "Verde", "Blanco", "Rojo", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera Tapa.jpeg",
    image: "linear-gradient(135deg, #181414, #e5b8b2)",
    price: 13000,
    sold: 12,
  },
  {
    id: 41,
    name: "CARTERA EN FORMA DE I DAMA",
    code: "118",
    category: "Carteras-Damas",
    description: "CARTERA EN FORMA DE I DAMA",
    colors: ["Marron", "Negro", "Azul", "Blanco", "Rosa", "Cafe"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera-Forma I-Dama.jpeg",
    image: "linear-gradient(135deg, #4b3a2d, #c9b8b3)",
    price: 15000,
    sold: 11,
  },
  {
    id: 42,
    name: "CARTERA CON MANIJA DAMA",
    code: "119",
    category: "Carteras-Damas",
    description: "CARTERA CON MANIJA DAMA",
    colors: ["Purpura", "Negro", "Beige", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera-Manija-DAMA.jpeg",
    image: "linear-gradient(135deg, #6a3f5a, #d4c9c3)",
    price: 14000,
    sold: 13,
  },
  {
    id: 43,
    name: "CARTERA MONEDERO DAMA",
    code: "120",
    category: "Carteras-Damas",
    description: "CARTERA MONEDERO DAMA",
    colors: ["Marron", "Rojo", "Blanco", "Negro", "Rosa", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera-monedero-Dama.jpeg",
    image: "linear-gradient(135deg, #5f3c32, #ddc6c1)",
    price: 15000,
    sold: 12,
  },
  {
    id: 44,
    name: "CARTERA V4 DAMA",
    code: "121",
    category: "Carteras-Damas",
    description: "CARTERA V4 DAMA",
    colors: ["Negro", "Marron", "Beige", "Cafe", "Celeste", "Vino", "Rosa", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Cartera-V4-Dama.jpeg",
    image: "linear-gradient(135deg, #3b2e29, #d7b8bf)",
    price: 13000,
    sold: 13,
  },
  {
    id: 45,
    name: "CARTERAS LISAS DAMA",
    code: "122",
    category: "Carteras-Damas",
    description: "CARTERAS LISAS DAMA",
    colors: ["Blanco", "Negro", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Carteras-lisa-Dama.jpeg",
    image: "linear-gradient(135deg, #eeeeee, #4b4840)",
    price: 18000,
    sold: 10,
  },
  {
    id: 46,
    name: "CARTERA MINIBAG DAMA",
    code: "123",
    category: "dama-mini-bags",
    description: "CARTERA MINIBAG DAMA",
    colors: ["Negro", "Beige", "Marron"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Carteras-Minibag-Dama.jpeg",
    image: "linear-gradient(135deg, #665644, #d3c3b4)",
    price: 14000,
    sold: 11,
  },
  {
    id: 47,
    name: "CARTERAS V3 DAMA",
    code: "124",
    category: "Carteras-Damas",
    description: "CARTERAS V3 DAMA",
    colors: ["Rosa", "Marron", "Negro", "Azul", "Blanco", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Carteras-V3- DAMA.jpeg",
    image: "linear-gradient(135deg, #8b5e78, #e2d8e0)",
    price: 15000,
    sold: 9,
  },
  {
    id: 48,
    name: "CARTERAS V4 DAMA",
    code: "125",
    category: "Carteras-Damas",
    description: "CARTERAS V4 DAMA",
    colors: ["Rojo", "Beige", "Marron", "Blanco", "Purpura", "Negro", "Rosa"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Carteras-V4-DAMA.jpeg",
    image: "linear-gradient(135deg, #a43f4d, #e8d9d5)",
    price: 15000,
    sold: 10,
  },
  {
    id: 49,
    name: "CARTERAS V5 DAMA",
    code: "126",
    category: "Carteras-Damas",
    description: "CARTERAS V5 DAMA",
    colors: ["Celeste", "Negro", "Marron", "Beige", "Cafe", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Carteras-V5-Dama.jpeg",
    image: "linear-gradient(135deg, #7d97a2, #dcd3c8)",
    price: 15000,
    sold: 10,
  },
  {
    id: 50,
    name: "BILLETERA FLOR",
    code: "127",
    category: "dama-billeteras-medianas",
    description: "billeteras mediana doble cierre",
    colors: ["Verde", "Negro", "Rosa", "Azul", "Blanco", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Codigo 202-Billeteras medianas doble cierre.jpeg",
    image: "linear-gradient(135deg, #19472a, #d2d7e1)",
    price: 5000,
    sold: 8,
  },
  {
    id: 51,
    name: "MINI BAG EBILLA DAMA",
    code: "128",
    category: "dama-mini-bags",
    description: "MINI BAG EBILLA DAMA",
    colors: ["Marron", "Blanco", "Cafe", "Rosa", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Mini-bag-ebilla.jpeg",
    image: "linear-gradient(135deg, #6d4c3a, #ead8cf)",
    price: 12000,
    sold: 9,
  },
  {
    id: 52,
    name: "MINI BAG DAMA",
    code: "129",
    category: "dama-mini-bags",
    description: "MINI BAG DAMA",
    colors: ["Blanco", "Marron", "Negra", "Cafe", "Rosa"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/MiniBag-Dama.jpeg",
    image: "linear-gradient(135deg, #8b7968, #f0ebe6)",
    price: 12000,
    sold: 8,
  },
  {
    id: 53,
    name: "MORRAL DE BOCA CABALLERO",
    code: "130",
    category: "caballero-pecheras",
    description: "MORRAL DE BOCA CABALLERO",
    colors: ["Unico color"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Morral-boca-Caballero.jpeg",
    image: "linear-gradient(135deg, #3a3a3a, #5a5a5a)",
    price: 12500,
    sold: 7,
  },
  {
    id: 54,
    name: "MORRAL CABALLERO",
    code: "131",
    category: "caballero-pecheras",
    description: "MORRAL CABALLERO",
    colors: ["Verde", "Negra", "Gris", "Azul"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Morral-Hombre.jpeg",
    image: "linear-gradient(135deg, #2d5a3a, #5a7a6a)",
    price: 9000,
    sold: 10,
  },
  {
    id: 55,
    name: "NECESER CORAZON DAMA",
    code: "132",
    category: "dama-neceser",
    description: "NECESER CORAZON DAMA",
    colors: ["Negro", "Verde", "Rosa", "Rojo", "Violeta", "Rosa claro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Neceser-Corazon-dama.jpeg",
    image: "linear-gradient(135deg, #d9a5b3, #1a1a1a)",
    price: 4500,
    sold: 15,
  },
  {
    id: 56,
    name: "NECESER MORRAL DAMA",
    code: "133",
    category: "dama-neceser",
    description: "NECESER MORRAL DAMA",
    colors: ["Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Neceser-morral-dama.jpeg",
    image: "linear-gradient(135deg, #1a1a1a, #3a3a3a)",
    price: 14000,
    sold: 6,
  },
  {
    id: 57,
    name: "PECHERAS CABALLERO",
    code: "134",
    category: "caballero-pecheras",
    description: "PECHERAS CABALLERO",
    colors: ["Azul", "Negro", "Gris"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Pecheras-Caballero.jpeg",
    image: "linear-gradient(135deg, #2a4a8a, #3a4a5a)",
    price: 9000,
    sold: 9,
  },
  {
    id: 58,
    name: "PORTACELULARES MEDIANO DAMA",
    code: "135",
    category: "dama-portacelulares",
    description: "PORTACELULARES MEDIANO DAMA",
    colors: ["Rosa", "Violeta", "Beige", "Rojo", "Celeste", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Porta-celulares- Mediana- DAMA.jpeg",
    image: "linear-gradient(135deg, #d9a5b3, #e8d7d2)",
    price: 8000,
    sold: 11,
  },
  {
    id: 59,
    name: "PORTACELULARES DE GAMUZA DAMA",
    code: "136",
    category: "dama-portacelulares",
    description: "PORTACELULARES DE GAMUZA DAMA",
    colors: ["Negro", "Gris", "Marron", "Rosa", "Beige", "Cafe", "Blanco"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Portacelulares-gamuza-dama.jpeg",
    image: "linear-gradient(135deg, #3a3a3a, #c9b9b0)",
    price: 12000,
    sold: 9,
  },
  {
    id: 60,
    name: "PORTACELULARES V3 DAMA",
    code: "137",
    category: "dama-portacelulares",
    description: "PORTACELULARES V3 DAMA",
    colors: ["Rosa", "Rojo", "Negro", "Violeta", "Celeste", "Beige"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Portacelulares-V3-dama.jpeg",
    image: "linear-gradient(135deg, #d9a5b3, #e8d7d2)",
    price: 8000,
    sold: 10,
  },
  {
    id: 61,
    name: "PORTACELULARES V2 DAMA",
    code: "138",
    category: "dama-portacelulares",
    description: "PORTACELULARES V2 DAMA",
    colors: ["Rosa", "Celeste", "Dorado", "Violeta", "Rojo", "Negro"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/PortacelularesV2-Dama.jpeg",
    image: "linear-gradient(135deg, #c9a5a5, #8a7a9a)",
    price: 8000,
    sold: 10,
  },
  {
    id: 62,
    name: "RIÑONERAS V2 CABALLERO",
    code: "139",
    category: "caballero-rinoneras",
    description: "RIÑONERAS V2 CABALLERO",
    colors: ["Gris", "Verde", "Negro", "Azul"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/RIÑONERAS V2.jpeg",
    image: "linear-gradient(135deg, #5a6a7a, #3a5a4a)",
    price: 6500,
    sold: 8,
  },
  {
    id: 63,
    name: "TARJETEROS DAMA",
    code: "Mor589",
    category: "dama-tarjeteros",
    description: "TARJETEROS DAMA",
    colors: ["Negro", "Marron", "Blanco", "Azul"],
    stock: "Consultar disponibilidad",
    imageUrl: "img/Tarjeteros-Dama.jpeg",
    image: "linear-gradient(135deg, #2a2a2a, #b9a99a)",
    price: 4000,
    sold: 5,
  },
];

let state = {
  category: "all",
  search: "",
  sort: "recent",
  cart: [],
};

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const els = {
  nav: document.querySelector(".main-nav"),
  menuToggle: document.querySelector(".menu-toggle"),
  categoryTabs: document.querySelector("[data-category-tabs]"),
  categoryFilter: document.querySelector("#categoryFilter"),
  searchInput: document.querySelector("#searchInput"),
  sortFilter: document.querySelector("#sortFilter"),
  productGrid: document.querySelector("[data-product-grid]"),
  productCount: document.querySelector("[data-product-count]"),
  resetFilters: document.querySelector("[data-reset-filters]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  cartCounts: document.querySelectorAll("[data-cart-count]"),
  detailModal: document.querySelector("[data-detail-modal]"),
  detail: document.querySelector(".product-detail"),
  customerName: document.querySelector("#customerName"),
  customerNotes: document.querySelector("#customerNotes"),
};

function getCategory(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function productPrice(product) {
  return product.price;
}

function hasPrice(product) {
  return Number.isFinite(productPrice(product));
}

function formatProductPrice(product) {
  return hasPrice(product) ? money.format(productPrice(product)) : "Consultar precio";
}

function productSubtotal(product, quantity) {
  return hasPrice(product) ? productPrice(product) * quantity : 0;
}

function productAlt(product) {
  return `${product.name} R&B mayorista`;
}

function renderProductImage(product, label) {
  if (product.imageUrl) {
    return `<img src="${product.imageUrl}" alt="${productAlt(product)}" loading="lazy" />`;
  }

  return `<span>${label}</span>`;
}

function renderDetailSpecs(product, category) {
  const specs = [
    ["Categoria", category.name],
    ["Material", product.material],
    ["Medidas", product.measures],
    ["Stock", product.stock],
    ["Colores", product.colors.join(", ")],
    ["Precio mayorista", formatProductPrice(product)],
  ];

  return specs
    .filter(([, value]) => value)
    .map(([label, value]) => `<div><strong>${label}</strong><br />${value}</div>`)
    .join("");
}

function renderCategories() {
  els.categoryTabs.innerHTML = categories
    .map(
      (category) => `
      <button class="category-card ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">
        <strong>${category.name}</strong>
        <span>${category.group}</span>
      </button>
    `,
    )
    .join("");

  els.categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category.id}">${category.group} - ${category.name}</option>`)
    .join("");
  els.categoryFilter.value = state.category;
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();
  return products
    .filter((product) => state.category === "all" || product.category === state.category)
    .filter((product) => {
      if (!query) return true;
      return [product.name, product.code, getCategory(product.category).name, product.description]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "low") return (hasPrice(a) ? productPrice(a) : Infinity) - (hasPrice(b) ? productPrice(b) : Infinity);
      if (state.sort === "high") return (hasPrice(b) ? productPrice(b) : -1) - (hasPrice(a) ? productPrice(a) : -1);
      if (state.sort === "popular") return b.sold - a.sold;
      return b.id - a.id;
    });
}

function renderProducts() {
  const items = filteredProducts();
  els.productCount.textContent = `${items.length} producto${items.length === 1 ? "" : "s"} encontrados`;
  els.productGrid.innerHTML = items.length
    ? items.map(renderProductCard).join("")
    : `<div class="empty-state">No encontramos productos con esos filtros.</div>`;
}

function renderProductCard(product) {
  const category = getCategory(product.category);
  return `
    <article class="product-card">
      <button class="product-image${product.id === 13 ? " product-image--large" : ""}" type="button" data-detail="${product.id}" style="background:${product.image}" aria-label="Ver detalle de ${productAlt(product)}">
        ${renderProductImage(product, category.group)}
      </button>
      <div class="product-body">
        <div>
          <div class="tag-row">
            <span class="tag">${category.group}</span>
            <span class="tag">${product.code}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${category.name}. ${product.description}</p>
        </div>
        <div class="price-list" aria-label="Precio mayorista">
          <span>${PURCHASE_LABEL}<strong>${formatProductPrice(product)}</strong></span>
          <span>Stock<strong>${product.stock}</strong></span>
        </div>
        <div class="card-controls">
          <label>
            Cant.
            <input type="number" min="1" value="1" data-card-qty="${product.id}" />
          </label>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-add="${product.id}">Agregar</button>
          <button class="btn btn-secondary" type="button" data-consult="${product.id}">Consultar</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(productId, quantity) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const key = String(productId);
  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ key, productId, quantity });
  }
  renderCart();
  openCart();
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  els.cartCounts.forEach((countEl) => {
    countEl.textContent = count;
  });

  if (!state.cart.length) {
    els.cartItems.innerHTML = `<div class="empty-state">Todavia no agregaste productos.</div>`;
    els.cartTotal.textContent = money.format(0);
    return;
  }

  els.cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      const subtotal = productSubtotal(product, item.quantity);
      return `
        <article class="cart-item">
          <div class="cart-thumb" style="background:${product.image}" aria-hidden="true"></div>
          <div>
            <h3>${product.name}</h3>
            <p>${product.code} · ${PURCHASE_LABEL} · ${formatProductPrice(product)}</p>
            <div class="quantity-row">
              <button class="qty-btn" type="button" data-dec="${item.key}" aria-label="Restar cantidad">−</button>
              <strong>${item.quantity}</strong>
              <button class="qty-btn" type="button" data-inc="${item.key}" aria-label="Sumar cantidad">+</button>
              <span>${hasPrice(product) ? money.format(subtotal) : "Consultar"}</span>
              <button class="remove-btn" type="button" data-remove="${item.key}">Eliminar</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.cartTotal.textContent = money.format(cartTotal());
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + productSubtotal(product, item.quantity);
  }, 0);
}

function openCart() {
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
}

function openDetail(productId) {
  const product = products.find((item) => item.id === productId);
  const category = getCategory(product.category);
  els.detail.innerHTML = `
    <button class="icon-button" type="button" data-close-detail aria-label="Cerrar detalle">×</button>
    <div class="detail-gallery${product.id === 13 ? " detail-gallery--large" : ""}" style="background:${product.image}" role="img" aria-label="${productAlt(product)}">
      ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${productAlt(product)}" />` : `<span>${product.name}</span>`}
    </div>
    <div>
      <p class="eyebrow">${category.group} · ${product.code}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    </div>
    <div class="detail-grid">${renderDetailSpecs(product, category)}</div>
    <div class="card-controls">
      <label>
        Cant.
        <input type="number" min="1" value="1" data-detail-qty />
      </label>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" type="button" data-detail-add="${product.id}">Agregar al carrito</button>
      <button class="btn btn-whatsapp" type="button" data-consult="${product.id}">Consultar por WhatsApp</button>
    </div>
  `;
  els.detailModal.classList.add("open");
  els.detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  els.detailModal.classList.remove("open");
  els.detailModal.setAttribute("aria-hidden", "true");
}

function buildOrderMessage() {
  const customer = els.customerName.value.trim() || "No indicado";
  const notes = els.customerNotes.value.trim() || "Sin aclaraciones";
  const lines = state.cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    const unit = formatProductPrice(product);
    const subtotal = productSubtotal(product, item.quantity);
    return `${index + 1}. Producto: ${product.name}
   Codigo: ${product.code}
   Categoria: ${getCategory(product.category).name}
   Compra: ${PURCHASE_LABEL}
   Cantidad: ${item.quantity}
   Precio unitario: ${unit}
   Subtotal: ${hasPrice(product) ? money.format(subtotal) : "Consultar"}`;
  });

  return `Hola R&B mayorista, quiero hacer una consulta/pedido:

Cliente:
${customer}

Productos:

${lines.join("\n\n")}

Total estimado: ${money.format(cartTotal())}

Aclaraciones:
${notes}

Quedo atento/a para confirmar disponibilidad y formas de entrega.`;
}

function whatsappUrl(message = "Hola R&B mayorista, quiero hacer una consulta.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl();
  });
}

function consultProduct(productId) {
  const product = products.find((item) => item.id === productId);
  const message = `Hola R&B mayorista, quiero consultar por:

Producto: ${product.name}
Codigo: ${product.code}
Categoria: ${getCategory(product.category).name}

Quedo atento/a para confirmar disponibilidad, colores y precio.`;
  window.open(whatsappUrl(message), "_blank", "noopener");
}

document.addEventListener("click", (event) => {
  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = category.dataset.category;
    renderCategories();
    renderProducts();
    document.querySelector("#productos").scrollIntoView({ behavior: "smooth" });
  }

  const detail = event.target.closest("[data-detail]");
  if (detail) openDetail(Number(detail.dataset.detail));

  const add = event.target.closest("[data-add]");
  if (add) {
    const id = Number(add.dataset.add);
    const quantity = Math.max(1, Number(document.querySelector(`[data-card-qty="${id}"]`).value || 1));
    addToCart(id, quantity);
  }

  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) {
    addToCart(
      Number(detailAdd.dataset.detailAdd),
      Math.max(1, Number(document.querySelector("[data-detail-qty]").value || 1)),
    );
    closeDetail();
  }

  const consult = event.target.closest("[data-consult]");
  if (consult) consultProduct(Number(consult.dataset.consult));

  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-close-cart]")) closeCart();
  if (event.target.closest("[data-close-detail]")) closeDetail();

  const inc = event.target.closest("[data-inc]");
  if (inc) {
    const item = state.cart.find((entry) => entry.key === inc.dataset.inc);
    item.quantity += 1;
    renderCart();
  }

  const dec = event.target.closest("[data-dec]");
  if (dec) {
    const item = state.cart.find((entry) => entry.key === dec.dataset.dec);
    item.quantity -= 1;
    if (item.quantity < 1) state.cart = state.cart.filter((entry) => entry.key !== dec.dataset.dec);
    renderCart();
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.cart = state.cart.filter((entry) => entry.key !== remove.dataset.remove);
    renderCart();
  }

  if (event.target.closest("[data-send-order]")) {
    if (!state.cart.length) {
      alert("Agrega productos al carrito antes de enviar el pedido.");
      return;
    }
    window.open(whatsappUrl(buildOrderMessage()), "_blank", "noopener");
  }

  if (event.target.closest("[data-reset-filters]")) {
    state = { ...state, category: "all", search: "", sort: "recent" };
    els.searchInput.value = "";
    els.sortFilter.value = state.sort;
    renderCategories();
    renderProducts();
  }
});

els.menuToggle.addEventListener("click", () => {
  const isOpen = els.nav.classList.toggle("open");
  els.menuToggle.setAttribute("aria-expanded", String(isOpen));
});

els.nav.addEventListener("click", () => {
  els.nav.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
});

els.categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderCategories();
  renderProducts();
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

els.sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

updateWhatsappLinks();
renderCategories();
renderProducts();
renderCart();
