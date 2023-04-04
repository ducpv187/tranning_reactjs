/** @EVENT_LOOP */
// đồng bộ là chạy lần lượt từ trên xuống dưới

function setup1() {
  console.log(1);
  console.log(2);
  console.log(3);
}

setup1();

// kết quả : 1 -> 2 -> 3

// bất đồng bộ ( không đồng bộ ) -> chạy lần lượt nhưng mà kết quả không lần lượt
function setup2() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);
}

setup2();
// ví dụ : 1 -> 3 ->2

// -----> setTimeout là 1 hàm bất đồng bộ.
// Rút ra là :   hàm đồng bộ bộ chạy xong thì mới tới bất đồng bộ.

/** @PROMISE_lời_hứa */

function promise1() {
  return new Promise((resolve, reject) => {
    const check = true;
    if (check) {
      resolve(100);
    } else {
      reject(200);
    }
  });
}
// promise1();
// -> 3 trang thais:  pending, fulfilled , rejected

/** @PROMISE_xử_lý_lời_hứa */
function setup3() {
  console.log(1);

  promise1()
    .then((result1) => {
      console.log('ket qua then 1:  ', result1);
    })
    .then((result2) => {
      console.log('ket qua then 2:  ', result2);
      return 300;
    })
    .then((result3) => {
      console.log('ket qua then 3:  ', result3);
    });
  // .catch((error) => {
  //   console.log(2222, error);
  // });
}
// -> 1 ->  promise ('Thanh cong 2')  ->  3
setup3();

// -> 1 -> 3  -> Thanh cong 1

/** @PROMISE_ASYNC_AWAIT_Xử_lý_bất_đồng_bộ_để_thành_đồng_bộ */
async function setup5() {
  return 5;
}
//cach 1:
await setup5().then((result) => console.log(result));

//cach 2:
const resultAwait = await setup5().then((result) => 10);
async function setup6() {
  return async function () {
    return 10;
  };
}
const resultAwait1 = await setup6();
const res = await resultAwait1();
console.log(resultAwait);

async function test() {
  async function setupTest() {
    return 5;
  }
  const result = await setupTest();
}

//
async function testAsync() {
  return 5;
}
const ketQua = await testAsync();
