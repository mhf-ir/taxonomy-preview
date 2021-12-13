const loadTrees = async () => {
  window.iptcTreeNumbers = 0;
  window.iabTreeNumbers = 0;
  window.googleNumbers = 0;
  const a = new Promise((resolve) => {
    $.ajax({
      url: "./data/iptc_tree.json",
      success(data) {
        window.iptcTree = $("#iptcTree").tree({
          data: data,
          autoOpen: 0,
          dragAndDrop: false,
          onCreateLi: function (node, $li) {

            // $li.find(".jqtree-element").append(`
            //     <a href="#node-${node.id}" class="edit" data-node-id="${node.id}">🖊️<a>
            //   `);
            window.iptcTreeNumbers += 1;
          },
        });
        resolve(true);
      },
    });
  });
  const b = new Promise((resolve) => {
    $.ajax({
      url: "./data/iab_tree.json",
      success(data) {
        window.iabTree = $("#iabTree").tree({
          data: data,
          autoOpen: 0,
          dragAndDrop: false,
          onCreateLi: function (node, $li) {
            // $li.find(".jqtree-element").append(`
            //     <a href="#node-${node.id}" class="edit" data-node-id="${node.id}">🖊️<a>
            //   `);
            window.iabTreeNumbers += 1;
          },
        });
        resolve(true);
      },
    });
  });
  const c = new Promise((resolve) => {
    $.ajax({
      url: "./data/google_tree.json",
      success(data) {
        window.googleTree = $("#googleTree").tree({
          data: data,
          autoOpen: 0,
          dragAndDrop: false,
          onCreateLi: function (node, $li) {
            // $li.find(".jqtree-element").append(`
            //     <a href="#node-${node.id}" class="edit" data-node-id="${node.id}">🖊️<a>
            //   `);
            window.googleNumbers += 1;
          },
        });
        resolve(true);
      },
    });
  });
  await Promise.all([a, b, c]);
  setTimeout(() => {
    $('#iptcTreeNumbers').html(window.iptcTreeNumbers);
    $('#iabTreeNumbers').html(window.iabTreeNumbers);
    $('#googleNumbers').html(window.googleNumbers);
  }, 2000);

};

(async () => {
  await loadTrees();
})();
