// Fetch the JSON file
fetch("assets/json/quantity.json")
  .then((response) => response.json())
  .then((data) => {
    // Function to generate HTML
    function generateHTML() {
      let html = "";
      data.imagesAndFolders.forEach((item, index) => {
        html += `
          <div class="col">
            <div class="card h-100">
              <div class="ratio ratio-16x9" data-lang="card${index + 1}/img"></div>
              <div class="card-body">
                <h5 class="card-title" data-lang="card${index + 1}/title"></h5>
                <p class="card-text" data-lang="card${index + 1}/desc"></p>
              </div>
              <div class="card-footer" data-lang="card${index + 1}/btn"></div>
            </div>
          </div>`;
      });
      return html;
    }

    // Insert the generated HTML into the page
    document.querySelector(".row.mb-3.mx-3.row-cols-1.row-cols-md-2.row-cols-lg-3").innerHTML = generateHTML();
  })
  .catch((error) => console.error(`Error: ${error}`));
