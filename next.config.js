/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
     reactStrictMode: true,
     experimental:{
       appDir:true
    },
     images: {
          domains: ['moviesapi.ir'], // اضافه کردن دامنه‌های میزبان تصاویر
        },
      
}

module.exports = nextConfig
