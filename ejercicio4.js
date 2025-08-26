const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1
console.log(aldeanos[3]);

// 4.2
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4
aldeanos.reverse();
console.log(aldeanos);

// 4.5
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos[indexNarciso] = "Canela";
}
console.log(aldeanos);

// 4.6
console.log(aldeanos[aldeanos.length - 1]);