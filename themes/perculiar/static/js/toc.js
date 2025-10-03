<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".menu-items li").forEach(function (li) {
            let childMenu = li.querySelector(".menu-children");
            if (childMenu) {
                li.classList.add("has-children");
                let link = li.querySelector("a");

                link.addEventListener("click", function (e) {
                    e.preventDefault(); // Prevent jump
                    li.classList.toggle("open");
                    childMenu.style.display = childMenu.style.display === "block" ? "none" : "block";
                });
            }
        });

    // Highlight current page link (by URL match)
    let currentUrl = window.location.pathname;
    document.querySelectorAll(".custom-menu a").forEach(a => {
      if (a.getAttribute("href") === currentUrl) {
        a.classList.add("active");
      }
    });
  });
</script>
