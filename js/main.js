const introName = document.querySelectorAll(".intro-banner__svg__path");

for (let i = 0; i < introName.length; i++) {
  console.log(`Letter ${i} is ${introName[i].getTotalLength()}`);
}
