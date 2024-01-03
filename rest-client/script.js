function refreshData() {
  fetchData();
  Swal.fire({
    icon: "success",
    title: "Data diperbarui!",
    showConfirmButton: false,
    timer: 1500,
  });
}
function fetchData() {
  $.ajax({
    url: "http://localhost:3000/api/status_gempa",
    method: "GET",
    dataType: "json",
    success: function (data) {
      displayData(data);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });
}

// Function to display data
function displayData(data) {
  const gempaInfoDiv = $("#gempaInfo");
  const gempaData = data.Infogempa.gempa;

  const html = `
    <div class="card">
        <div class="card-header d-flex justify-content-between">
        <h5 class="card-title"><i class="fas fa-info-circle"></i> Informasi Gempa</h5>
        <button class="btn btn-outline-secondary btn-sm" onclick="refreshData()"><i class="fas fa-sync-alt"></i> Refresh</button>
        </div>

        <div class="card-body">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${gempaData.Shakemap}" class="img-fluid" alt="Shakemap" />
        <table class="table table-bordered">
            <tbody>
            <tr>
                <td><i class="far fa-calendar-alt"></i></td>
                <th scope="row">Tanggal</th>
                <td>${gempaData.Tanggal}</td>
            </tr>
            <tr>
                <td><i class="far fa-clock"></i></td>
                <th scope="row">Jam</th>
                <td>${gempaData.Jam}</td>
            </tr>
            <tr>
                <td><i class="fas fa-globe"></i></td>
                <th scope="row">Coordinates</th>
                <td>${gempaData.Coordinates}</td>
            </tr>
            <tr>
                <td><i class="fas fa-ruler"></i></td>
                <th scope="row">Magnitude</th>
                <td>${gempaData.Magnitude}</td>
            </tr>
            <tr>
                <td><i class="fas fa-water"></i></td>
                <th scope="row">Kedalaman</th>
                <td>${gempaData.Kedalaman}</td>
            </tr>
            <tr>
                <td><i class="fas fa-map-marker-alt"></i></td>
                <th scope="row">Wilayah</th>
                <td>${gempaData.Wilayah}</td>
            </tr>
            <tr>
                <td><i class="fas fa-exclamation-triangle"></i></td>
                <th scope="row">Potensi</th>
                <td>${gempaData.Potensi}</td>
            </tr>
            <tr>
                <td><i class="fas fa-hand-paper"></i></td>
                <th scope="row">Dirasakan</th>
                <td>${gempaData.Dirasakan}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    `;

  gempaInfoDiv.html(html);
}

$(document).ready(function () {
  setInterval(fetchData, 1000);
});
