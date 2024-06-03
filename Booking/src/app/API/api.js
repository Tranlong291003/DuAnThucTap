const axios = require("axios");

const options = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/static/cities",
  params: {
    country: "vn", // Thay 'it' bằng mã quốc gia của bạn
    page: "0", // Trang kết quả
  },
  headers: {
    "x-rapidapi-key": "9ab7e7d8c6msh509d9359dbb4e69p1b7062jsn79cf091c3469", // Thay 'YOUR_RAPIDAPI_KEY' bằng API key của bạn
    "x-rapidapi-host": "booking-com.p.rapidapi.com",
  },
};

async function getCities() {
  try {
    const response = await axios.request(options);
    const cities = response.data.result; // Lấy danh sách các thành phố từ dữ liệu phản hồi
    cities.forEach((city) => {
      console.log(`ID: ${city.city_id}, Name: ${city.name}`); // In ra ID và tên của mỗi thành phố
    });
  } catch (error) {
    console.error(error);
  }
}

getCities();
