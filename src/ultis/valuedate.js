export const checkIsEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  export const removeClass = (idPrev) => {
    for (let i = 0; i < idPrev.length; i++) {
      const elementPrev = document.getElementById(`${idPrev[i]}`);
      const elementPrevParent = elementPrev.parentNode;
      const elementTempPrev = elementPrevParent.childNodes;
      if (
        elementTempPrev[elementTempPrev.length - 1].nodeName.toLowerCase() ===
        "span"
      ) {
        elementTempPrev[1].removeAttribute("style");
        elementPrevParent.removeChild(
          elementTempPrev[elementTempPrev.length - 1]
        );
      }
    }
  };
  
  export const renderError = (idPrev, idInput, errorMessage) => {
  
    if(!idInput && !errorMessage){
      removeClass(idPrev);
      return;
    }
  
    if (idPrev === undefined) {
      const element = document.getElementById(`${idInput}`);
      element.style.border = "1px solid red";
      element.scrollIntoView({ behavior: "smooth" });
      const parent = element.parentNode;
      const span = document.createElement("span");
      span.className = "text-lg text-red-500 mt-2 absolute top-16";
      span.innerHTML = errorMessage;
  
      const elementTemp = parent.childNodes;
      if (
        elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span"
      ) {
        element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
      }
      parent.appendChild(span);
      return;
    }
  
    if (idPrev.length === 0) {
      const arr = ["name", "phoneNumber", "when", "note"];
      removeClass(arr);
      return;
    }
  
    const element = document.getElementById(`${idInput}`);
    element.style.border = "1px solid red";
    element.scrollIntoView({behavior: "smooth", block: "end"});
    const parent = element.parentNode;
    const span = document.createElement("span");
    span.className = "text-lg text-red-500 mt-2 absolute top-16";
    span.innerHTML = errorMessage;
  
    const elementTemp = parent.childNodes;
    if (elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span") {
      element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
    }
    if (idPrev) {
      removeClass(idPrev);
    }
    
    parent.appendChild(span);
  };
  