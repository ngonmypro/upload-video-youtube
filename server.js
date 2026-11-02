const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่าให้ Express ใช้ static files จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// รัน server บนพอร์ต 3002
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
