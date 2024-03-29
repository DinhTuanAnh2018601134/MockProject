import React from 'react';
import { Link } from 'react-router-dom';

function CompletePayment() {
    return (
        <div className="w-5/12 mx-auto mt-16">
            <div className="grid grid-flow-row grid-cols-2 place-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span className="text-lg font-semibold text-red-600 cursor-pointer hover:underline">Trở về</span>
                </div>
                <h3 className="text-lg font-bold text-red-600">Hoàn tất</h3>
            </div>
            <div className="px-2 border border-solid shadow-lg rounded-xl">
                <div className="mx-1 my-3 px-3 pb-5 text-lg text-red-600 bg-[#f6f6f6] grid grid-flow-row grid-cols-1 gap-y-3 border border-solid shadow-lg rounded-xl">
                    <h2 className="text-center font-bold">ĐẶT HÀNH THÀNH CÔNG</h2>
                    <p>Mã Đơn Hàng: <b>300070800</b></p>
                    <p>Người Nhận: <b>Tuan Anh</b></p>
                    <p>Số Điện Thoại: <b>0987654321</b></p>
                    <p>Email: <b>anh@gmail.com</b></p>
                    <p>Nhận Sản Phẩm Tại: <b>458 - 460 Hậu Giang, Phường 12, Quận 6, Quận 6, Thành Phố Hồ Chí Minh</b></p>
                    <p>Tổng Tiền: <b>35.990.000 ₫</b></p>
                </div>
                <div className="px-2 mt-3 border border-solid shadow-lg rounded-xl">
                    <div className="p-3 m-2 grid grid-flow-col grid-cols-3 border border-solid rounded-lg">
                        <div className="">
                            <img src="https://image.cellphones.com.vn/200x/media/catalog/product/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611_2.jpg" className="w-3/4" alt="product in cart" />
                        </div>
                        <div className="col-start-2 col-span-2">
                            <p className="font-bold">Samsung Galaxy Z Fold3 5G-Bạc</p>
                            <div className="grid grid-flow-row grid-cols-4">
                                <p className="text-sm text-red-600 font-semibold pt-1">35.990.000 ₫</p>
                                <p className="text-sm text-[#777] line-through font-light pt-1">41.990.000 ₫</p>
                            </div>
                            <p>Giá: 35.990.000 ₫</p>
                            <p>Số Lượng: 1</p>
                            <p>Tổng tiền: 35.990.000 ₫</p>
                        </div>
                    </div>
                </div>
                <div className="my-3 grid grid-flow-col grid-cols-2 gap-x-3 text-sm">
                    <div className="text-center bg-blue-600 text-white font-bold py-2 rounded-xl cursor-pointer">
                        <p>KIỂM TRA ĐƠN HÀNG</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <Link to="/">
                        <div className="bg-red-600 py-2 text-center text-white font-bold rounded-xl cursor-pointer">
                            <p>TIẾP TỤC MUA HÀNG</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CompletePayment;