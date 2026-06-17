import type { TechItem } from "@type/tech_stack";

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "frontend" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "frontend" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF", category: "frontend" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", category: "frontend" },
  { name: "Electron", icon: "https://cdn.simpleicons.org/electron/47848F", category: "frontend" },
  { name: "PyQt", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Python_and_Qt.svg/1280px-Python_and_Qt.svg.png", category: "frontend" },
  { name: "LVGL", icon: "https://cdn.simpleicons.org/lvgl/FF6F00", category: "frontend" },

  // Backend
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8", category: "backend" },
  { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E", category: "backend" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF", category: "backend" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", category: "backend" },

  // Computer Vision and Machine Learning
  { name: "YOLO", icon: "https://cdn.simpleicons.org/yolo/FFFFFF", category: "computer_vision" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/FFFFFF", category: "computer_vision" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", category: "computer_vision" },
  { name: "InsightFace", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyfM9AaIRngH2KdH0_vOaD5QvqQ7Y8w7z2FSDIhyX7-3vUoJv8FgbAM91&s=10", category: "computer_vision" },

  // Database
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", category: "database" },
  { name: "InfluxDB", icon: "https://cdn.simpleicons.org/influxdb/22ADF0", category: "database" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", category: "database" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", category: "database" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "database" },

  // DevOps
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "devops" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "devops" },
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/FF7139", category: "devops" },
  { name: "PyInstaller", icon: "https://cdn.simpleicons.org/python/3776AB", category: "devops" },
  { name: "Inno Setup", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Inno_Setup_icon.png", category: "devops" },

  // Embedded board & SBC
  { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D", category: "board" },
  { name: "ESP32 Series", icon: "https://cdn.simpleicons.org/espressif/FFFFFF", category: "board" },
  { name: "STM32", icon: "https://cdn.simpleicons.org/stmicroelectronics/009639", category: "board" },
  { name: "Raspberry Pi Series", icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A", category: "board" },
  { name: "NVIDIA Jetson Nano", icon: "https://cdn.simpleicons.org/nvidia/76B900", category: "board" },
  { name: "Teensy 4.1", icon: "https://www.sparkfun.com/media/.renditions/wysiwyg/EcosystemPages/Teensy/teensy-logo-600.png?format=webply", category: "board" },

  // Protocol & Network
  { name: "MQTT", icon: "https://cdn.simpleicons.org/mqtt/FFFFFF", category: "protocol" },
  { name: "HTTP", icon: "https://cdn.simpleicons.org/http/FFFFFF", category: "protocol" },
  { name: "WebSocket", icon: "https://www.svgrepo.com/show/354553/websocket.svg", category: "protocol" },
  { name: "Bluetooth", icon: "https://cdn.simpleicons.org/bluetooth/FFFFFF", category: "protocol" },
  { name: "SPI", icon: "https://cdn.simpleicons.org/spi/FFFFFF", category: "protocol" },
  { name: "I2C", icon: "https://cdn.simpleicons.org/i2c/FFFFFF", category: "protocol" },
  { name: "UART", icon: "https://cdn.simpleicons.org/uart/FFFFFF", category: "protocol" },
  { name: "LoRa", icon: "https://cdn.simpleicons.org/lora/FFFFFF", category: "protocol" },
  { name: "ESP-NOW", icon: "https://cdn.simpleicons.org/espressif/FFFFFF", category: "protocol" },
  { name: "CAN", icon: "https://cdn.simpleicons.org/can/FFFFFF", category: "protocol" },

  // Tools
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC", category: "tools" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", category: "tools" },
  { name: "Onshape", icon: "https://play-lh.googleusercontent.com/FC2Fq5RUyreXP8aSxJ7mIbmvu6Ft9O7KXVMr2ENP9mQNrhWCaTpUbUbJVnGaeYIUaWFsjksQfilHnwQ3Te3D", category: "tools" },
  { name: "EasyEDA", icon: "https://cdn.simpleicons.org/easyeda/FFFFFF", category: "tools" },
  { name: "KiCad", icon: "https://cdn.simpleicons.org/kicad/FFFFFF", category: "tools" },
  { name: "Bambu Studio", icon: "https://cdn-forum.bambulab.com/original/3X/c/d/cdcf93eda20dae5eae18a529ea1745c777978592.png", category: "tools" },
  { name: "Candle", icon: "https://stat.ameba.jp/user_images/20201209/21/danakim0408/d2/7d/p/o0837086914864059365.png", category: "tools" },
  { name: "FlatCAM", icon: "https://pbs.twimg.com/profile_images/589128937772601344/2iEusFnc.png", category: "tools" },
];
