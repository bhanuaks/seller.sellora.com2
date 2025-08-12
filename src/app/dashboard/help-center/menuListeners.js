import { baseUrl } from "@/Http/helper";


// menuListeners.js
export function attachMenuListeners(containerSelector) {
  const headers = document.querySelectorAll(`${containerSelector} .menu-header_10_7`);
  const subheaders = document.querySelectorAll(`${containerSelector} .submenu-header_10_7`);
  const currentPath = (baseUrl + window.location.pathname + window.location.search + window.location.hash).replace(/([^:]\/)\/+/g, "$1");
;

  const headerClick = (e) => {
    e.stopPropagation();
    const li = e.target.closest('li');
    const active = li.classList.contains('active');

    // Close all parents
    document.querySelectorAll(`${containerSelector} .menu_10_7 > li.active`).forEach(el => {
      el.classList.remove('active');
      const submenu = el.querySelector('ul');
      if (submenu) submenu.style.maxHeight = null;
    });

    // Open clicked parent
    if (!active) {
      li.classList.add('active');
      const submenu = li.querySelector('ul');
      if (submenu) submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  };

  const subClick = (e) => {
    e.stopPropagation();
    const li = e.target.closest('li');
    const submenu = li.querySelector('ul');
    const isActive = li.classList.contains('active');

    // Toggle child menu
    li.classList.toggle('active');
    if (submenu) {
      submenu.style.maxHeight = isActive ? null : submenu.scrollHeight + "px";
    }
  };

  headers.forEach(h => h.addEventListener('click', headerClick));
  subheaders.forEach(s => s.addEventListener('click', subClick));

  
  document.querySelectorAll(`${containerSelector} .menu_10_7 a`).forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      const li = link.closest("li");
      li.classList.add("active");

      // Open submenu if needed
      const submenu = li.closest("ul");
      if (submenu) submenu.style.maxHeight = submenu.scrollHeight + "px";

      // Open parent
      const parentLi = li.closest(".menu_10_7 > li");
      if (parentLi) {
        parentLi.classList.add("active");
        const parentMenu = parentLi.querySelector('ul');
        if (parentMenu) parentMenu.style.maxHeight = parentMenu.scrollHeight + "px";
      }

      const subLi = li.closest(".submenu_10_7 > li");
      subLi.classList.add("active");

       const linkA = subLi.querySelector("a");
      

      const childLi = li.closest(".childmenu_10_7 > li");
      //childLi.classList.add("active");
      if(childLi){
       const linkChildA = childLi.querySelector("a");
      if (linkChildA && childLi.classList.contains("active")) {
        childLi.querySelector("a")?.classList.add("active_a");
      }
    } else {
      if (linkA) {
        linkA.classList.add("active_a");
      }
    }
      


    }
  });

  // Cleanup
  return () => {
    headers.forEach(h => h.removeEventListener('click', headerClick));
    subheaders.forEach(s => s.removeEventListener('click', subClick));
  };
}




/* export function attachMenuListeners(containerSelector) {
  const headers = document.querySelectorAll(`${containerSelector} .menu-header_10_7`);
  const subheaders = document.querySelectorAll(`${containerSelector} .submenu-header_10_7`);

  const headerClick = (e) => {
    e.stopPropagation();
    const li = e.target.closest('li');
    const active = li.classList.contains('active');
    //console.log('okkkkk')
    document.querySelectorAll(`${containerSelector} .menu_10_7 > li.active`)
      .forEach(el => el.classList.remove('active'));
    if (!active) li.classList.add('active');
  };

  const subClick = (e) => {
    e.stopPropagation();
    //console.log('kkkkk')
    e.target.closest('li').classList.toggle('active');
  };

  headers.forEach(h => h.addEventListener('click', headerClick));
  subheaders.forEach(s => s.addEventListener('click', subClick));

  // Cleanup function
  return () => {
    headers.forEach(h => h.removeEventListener('click', headerClick));
    subheaders.forEach(s => s.removeEventListener('click', subClick));
    //console.log('delkkkkk')
  };
}
*/

export function attachMobileMenuListeners(containerSelector) {
  const menuHeaders = document.querySelectorAll(`${containerSelector} .menu-header_10_7`);
  const submenuHeaders = document.querySelectorAll(`${containerSelector} .submenu-header_10_7`);

  // Toggle main parent
  const onMenuHeaderClick = (e) => {
    e.stopPropagation();
    //console.log('kkkkk')
    const li = e.target.closest('li');
    li.classList.toggle('active'); // just toggle
  };

  // Toggle submenu
  const onSubmenuHeaderClick = (e) => {
    e.stopPropagation();
    const li = e.target.closest('li');
    //console.log('okkkk');
    li.classList.toggle('active'); // toggle submenu open/close
  };

  menuHeaders.forEach(h => h.addEventListener('click', onMenuHeaderClick));
  submenuHeaders.forEach(s => s.addEventListener('click', onSubmenuHeaderClick));

  // Cleanup
  return () => {
    menuHeaders.forEach(h => h.removeEventListener('click', onMenuHeaderClick));
    submenuHeaders.forEach(s => s.removeEventListener('click', onSubmenuHeaderClick));
    //console.log('delkkkkkk');
  };
}

export function initAccordion() {
  const container = document.querySelector(".faq-container");
    if(!container) return;
    const clickHandler = (e) => {
      const header = e.target.closest(".accordion-header");
      if (!header) return;

      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");
      const allItems = container.querySelectorAll(".accordion-item");

      const isActive = item.classList.contains("active");
      allItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };

    container.addEventListener("click", clickHandler);
    return () => container.removeEventListener("click", clickHandler);
}


