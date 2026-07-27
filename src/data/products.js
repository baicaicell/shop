// 商品数据（模拟后端数据）
export const products = [
  {
    id: 1,
    name: "无线蓝牙耳机",
    price: 99,
    category: "数码",
    image: "/images/product1.jpg",
    desc: "高品质无线蓝牙耳机，续航时间长，音质清晰。",
  },
  {
    id: 2,
    name: "运动休闲鞋",
    price: 199,
    category: "服饰",
    image: "/images/product2.jpg",
    desc: "轻便舒适的运动鞋，适合日常运动和休闲穿着。",
  },
  {
    id: 3,
    name: "保温水杯",
    price: 49,
    category: "生活",
    image: "/images/product3.jpg",
    desc: "304不锈钢保温杯，24小时保温，方便携带。",
  },
  {
    id: 4,
    name: "笔记本电脑",
    price: 3999,
    category: "数码",
    image: "/images/product4.jpg",
    desc: "轻薄便携笔记本电脑，适合学习和办公使用。",
  },
  {
    id: 5,
    name: "纯棉T恤",
    price: 59,
    category: "服饰",
    image: "/images/product5.jpg",
    desc: "100%纯棉材质，透气舒适，多种颜色可选。",
  },
  {
    id: 6,
    name: "台灯",
    price: 79,
    category: "生活",
    image: "/images/product6.jpg",
    desc: "LED护眼台灯，三档亮度调节，适合学习使用。",
  },
];

// 根据id获取商品
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
