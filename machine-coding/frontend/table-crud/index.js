$(document).ready(function () {
  let records = [];
  let currentId = null;

  function refreshTable() {
    const tbody = $("#crudTable tbody");
    tbody.empty();
    records.forEach((record, index) => {
      const row = `<tr>
                <td>${index + 1}</td>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td>
                    <button onclick="editRecord(${index})">Edit</button>
                    <button onclick="deleteRecord(${index})">Delete</button>
                </td>
            </tr>`;
      tbody.append(row);
    });
  }

  $("#addRecordBtn").click(function () {
    currentId = null;
    $("#recordForm")[0].reset();
    $("#modal").css("display", "block");
  });

  $("#recordForm").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();

    if (currentId === null) {
      records.push({ name, email });
    } else {
      records[currentId] = { name, email };
    }

    refreshTable();
    $("#modal").css("display", "none");
  });

  $(".close").click(function () {
    $("#modal").css("display", "none");
  });

  window.editRecord = function (index) {
    currentId = index;
    const record = records[index];
    $("#recordId").val(index + 1);
    $("#name").val(record.name);
    $("#email").val(record.email);
    $("#modal").css("display", "block");
  };

  window.deleteRecord = function (index) {
    records.splice(index, 1);
    refreshTable();
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
      $("#modal").css("display", "none");
    }
  };
});
