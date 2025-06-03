
const facil = {
  ex: [
    { titulo: "Banana", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["amarelo", "casca", "carboidratos", "Certo"] },
    { titulo: "BMW", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["320", "X3", "X5", "Muitos cavalos"] },
    { titulo: "Fiat", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["500", "Panda", "De algum país", "Carro"] }
  ]
}

const medio = {
  ex: [
    { titulo: "duro", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["mole", "medio", "molhado", "acertou"] },
    { titulo: "cavalos grandes", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["boi", "cabra", "lebre", "Agnóstico"] }
  ]
}

for (let ex = 1; ex <= 10; ex++) {
  if (ex <= 5) {
    let aleatorio = Math.floor(Math.random() * 3);
    const registro = [];
    if (registro)
    registro.push(aleatorio)
    document.getElementById("ex" + ex).innerHTML = facil.ex[aleatorio].titulo;
    document.getElementById("imagem_ex" + ex).src = facil.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "." + num).innerHTML += facil.ex[aleatorio].resp[num - 1];
    }
  } else if (ex <= 8) {
    let aleatorio = Math.floor(Math.random() * 2);
    document.getElementById("ex" + ex).innerHTML = medio.ex[aleatorio].titulo;
    document.getElementById("imagem_ex" + ex).src = medio.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "." + num).innerHTML += medio.ex[aleatorio].resp[num - 1];
    }
  } else if (ex <= 10) {

  }
}