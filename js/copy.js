document.addEventListener("DOMContentLoaded", function () {
  const clickedText = document.querySelectorAll(".copy");
  const messageCopied = document.getElementById("messageCopied");

  clickedText.forEach(function (text) {
    text.addEventListener("click", function () {
      copyToClipboard(text.innerText);
    });
  });

  function copyToClipboard(text) {
    const excludeEmail = text.replace("E-mail", "");
    const formatedText = excludeEmail.replace("Telefone", "").trim();

    const textarea = document.createElement("textarea");
    textarea.value = formatedText;
    document.body.appendChild(textarea);

    console.log(formatedText);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    viewCopiedMessage();
  }

  function viewCopiedMessage() {
    messageCopied.style.display = "block";
    progressBar.style.width = "100%";

    setTimeout(function () {
      messageCopied.style.display = "none";
    }, 3000);

    setTimeout(function () {
      progressBar.style.width = "0%";
    }, 0);
  }
});
