const products = [
    {
      id: 2,
      title: "Polov jo'shmisanmi?",
      rating: 4.9,
      reviews: 689,
      monthly_price: "145 so‘m/oyiga",
      price: "145.000 som",
      discount: "Fezot",
      image: "3.png",
      description: "Polov jo'shmisanmi? pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 3,
      title: "Erakak aytdimi...",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "4.png",
      description: "Erkak aytdimi bajaradi, bajarmadimi demak u hazilashgan pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id:4,
      title: "Erakak aytdimi...",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "5.png",
      description: "Erkak aytdimi bajaradi, bajarmadimi demak u hazilashgan pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 5,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "6.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 6,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "7.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 7,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "8.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 8,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "9.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 9,
      title: "Polov jo'shmisanmi?",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "10.png",
      description: "Polov jo'shmisanmi?! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 10,
      title: "Polov jo'shmisanmi?",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "11.png",
      description: "Polov jo'shmisanmi?! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 11,
      title: "Malades onanib tetay 🫶",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "12.png",
      description: "Malades onanib tetay 🫶 pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 12,
      title: "Opasi jilli 🐑",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "13.png",
      description: "Opasi jilli 🐑 pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 13,
      title: "Opasi jilli 🐑",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "145.000 so'm",
      discount: "Super narx",
      image: "14.png",
      description: "Opasi jilli 🐑 pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 14,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "160.000 so'm",
      discount: "Super narx",
      image: "15.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 15,
      title: "Polov jo'shmisanmi?",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "160.000 so'm",
      discount: "Super narx",
      image: "16.png",
      description: "Polov jo'shmisanmi?! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
    {
      id: 16,
      title: "Tankaaa",
      rating: 4.9,
      reviews: 689,
      monthly_price: "Yangi",
      price: "160.000 so'm",
      discount: "Super narx",
      image: "17.png",
      description: "Tankaaa! pechati tushirilgan, har kun uchun oversize futbolka. Tana uchun yoqimli 92% paxta va 8% poliuretan tolali matodan tashkil topgan, bu aynan siz hohlaganizdan 😊"
    },
  ];
  