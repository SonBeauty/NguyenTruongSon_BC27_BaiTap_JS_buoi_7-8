
// tạo mảng số thực
var realNumbers = []

// xuất mảng số thực ra giao diện
function display(realNumbers) {
    var resultEl = document.getElementById("real")
    var pEl = ``
    for (var i = 0; i < realNumbers.length; i++) {
        pEl += `${realNumbers[i]} `
    }
    resultEl.innerHTML = pEl
}
// lấy giá trị số thực vừa nhập
// thêm giá trị đó vào mảng 
function addRealNumber() {
    var realNumber = +document.getElementById("realNumber").value
    realNumbers.push(realNumber)
    display(realNumbers)
}
//Xét số đó có phải là số nguyên hay không
function integer(realNumbers) {
    var count = 0
    for (var i = 0; i < realNumbers.length; i++) {
        if (Number.isInteger(realNumbers[i]) == true) {
            count++
        }
    }
    // Xuát kết quả ra giao diện
    document.getElementById("integer").style.display = "block"
    document.getElementById("txtInteger").innerHTML = "Có " + count + " Số nguyên"
}