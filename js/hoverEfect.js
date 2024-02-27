document.querySelectorAll(".infos li a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    // Altera a cor de todos os links, exceto o link atualmente em hover
    document.querySelectorAll(".infos li a").forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.style.color = "#999"; // Cor dos outros links
      }
    });
  });

  link.addEventListener("mouseout", () => {
    // Retorna a cor dos outros links para a cor padrão quando o mouse sai do link
    document.querySelectorAll(".infos li a").forEach((otherLink) => {
      otherLink.style.color = "#555"; // Cor padrão dos links
    });
  });
});
