// thêm number vào mảng numbers
function addNumber() {
    var number = +document.getElementById("number").value
    numbers.push(number)
    display(numbers)
}
// khai báo mảng numbers
var numbers = []

// hiện mảng ra giao diện
function display(numbers) {
    document.getElementById("xuatMang").style.display = "block"
    var resultEl = document.getElementById("result")
    var pEl = ``
    for (var i = 0; i < numbers.length; i++) {
        pEl += `${numbers[i]} `
    }
    resultEl.innerHTML = pEl
}

//Bài 1: tổng số dương
function sum(numbers) {
    var sum = 0
    // sử dụng vòng lặp xét từng phần tử trong mảng
    for (var i = 0; i < numbers.length; i++) {
        // nếu số thứ i trong mảng lớn hơn 0 thì + dồn
        if (numbers[i] > 0) {
            sum += numbers[i]
        }
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("xuatKQ").style.display = "block"
    document.getElementById("txtXuatKQ").innerHTML = sum
}

//B2: Đếm số dương
function countPositiveInteger(numbers) {
    // tạo biến đếm
    var count = 0
    for (var i = 0; i < numbers.length; i++) {
        // nếu phần tử lớn hơn 0 tăng biến đếm
        if (numbers[i] > 0) {
            count++
        }
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = "Có " + count + " số nguyên dương"
}

// B3: Tìm số nhỏ nhất
function min(numbers) {
    // gán biến min cho số đầu tiên trong mảng
    var min = numbers[0]

    //Xét các phần tử trong mảng
    for (var i = 0; i < numbers.length; i++) {
        // nếu có phần tử nhỏ hơn min thì gán giá trị phần tử đó cho min
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("resultEl").style.display = "block"
    document.getElementById("kq").innerHTML = "Số bé nhất là: " + min
}

//B4: Tìm số dương nhỏ nhất
function nhoNhatDuong(numbers) {
    var nhoNhat
    for (var i = 0; i < numbers.length; i++) {
        // xét các phần tử lớn hơn 0
        if (numbers[i] > 0) {
            nhoNhat = numbers[i];
            break;

        }
    }

    for (var i = 0; i < numbers.length; i++) {
        // Xét điều kiện
        if (numbers[i] < nhoNhat && numbers[i] > 0) {
            nhoNhat = numbers[i]
        }
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("display").style.display = "block"
    document.getElementById("ketQua").innerHTML = "Số dương nhỏ nhất là: " + nhoNhat
}

// B5: Tìm số chẵn cuối cùng
function soChan(numbers) {
    // tạo biến số giá trị mặc định là 1
    var evenNumber = -1
    for (var i = 0; i < numbers.length; i++) {
        // xét điều kiện chia hết cho 2 là số chẵn
        if (numbers[i] % 2 == 0) {
            evenNumber = numbers[i]
        }
    }

    // xét trường hợp không có số chẵn
    if (evenNumber == -1) {
        document.getElementById("endEven").style.display = "block"
        document.getElementById("txtendEven").innerHTML = "không có số chẵn" + evenNumber
        return -1
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("endEven").style.display = "block"
    document.getElementById("txtendEven").innerHTML = "Số chẵn cuối cùng: " + evenNumber
}

//B6: Đổi chỗ
function doiCho(numbers) {
    // tạo biến index lấy vị trí người dùng muốn đổi chỗ
    var index_1 = document.getElementById("index_1").value
    var index_2 = document.getElementById("index_2").value

    // tạo biến
    // gán giá trị số có vị trí [index_2] cho biến
    var tmp = numbers[index_2]
    // gán giá trị phần tử vị trí [index_1] cho index[2]
    numbers[index_2] = numbers[index_1]
    //gán giá trị của biến cho index[1] (biến mang giá trị của index_2 lúc đầu)
    numbers[index_1] = tmp

    //  Xuất kết quả ra giao diện
    document.getElementById("doiCho").style.display = "block"
    document.getElementById("txtdoiCho").innerHTML = numbers
}

//B7: Xếp tăng dần
function tangDan(numbers) {
    // sử dụng hàm sort trong JS
    numbers.sort()

    //  Xuất kết quả ra giao diện
    document.getElementById("tangDan").style.display = "block"
    document.getElementById("txttangDan").innerHTML = numbers
}

// B8: Tim số nguyên tố đầu tiên
function soNguyenTo(numbers) {
    //tạo Biến đúng sai
    var n = true;
    //tạo biến chứa số nguyên tố
    var prime = -1
    for (var i = 0; i < numbers.length; i++) {

        // Nếu bé hơn 2 tức là không phải số nguyên tố
        if (numbers[i] < 2) {
            n = false;
            // Xét nếu phần tử có giá trị = 2 và 3 là số nguyên tố
        } else if (numbers[i] == 2) {
            n = true
        } else if (numbers[i] == 3) {
            n = true
        } else {
            // lặp từ 2 tới numbers[i]-1
            for (var j = 2; j < numbers[i] - 1; j++) {
                // nếu chia hết thì không phải số nguyên tố
                if (numbers[i] % j == 0) {
                    n = false;
                    // chỉ cần phát hiện trường hợp chia hết thì thoát vòng lặp
                    break;
                }
                // nếu không chia hết thì là số nguyên tố 
                n = true
            }

        }

        // Kiểm tra biến n
        if (n == true) {
            prime = numbers[i]
            // tìm được số nguyên tố đầu tiên thì thoát vòng lặp
            break;
        }
    }
    //  Xuất kết quả ra giao diện
    document.getElementById("nguyenTo").style.display = "block"
    document.getElementById("txtnguyenTo").innerHTML = "số nguyên tố đầu tiên: "  + prime
}


// B10: so sánh số lượng phần tử số âm và số dương trong mảng
function soSanh(numbers) {
    // tạo biến đếm số lượng
    var soDuong = 0
    var soAm = 0

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            soDuong++
        }
        if (numbers[i] < 0) {
            soAm++
        }
    }

    //  Xuất kết quả ra giao diện
    document.getElementById("soSanh").style.display = "block"
    if (soDuong > soAm) {
        document.getElementById("txtsoSanh").innerHTML = "Số dương nhiều hơn số âm"
    }
    if (soDuong < soAm) {
        document.getElementById("txtsoSanh").innerHTML = "Số dương ít hơn số âm"
    }
    if (soDuong === soAm) {
        document.getElementById("txtsoSanh").innerHTML = "Số dương trong mảng bằng số âm"
    }
}