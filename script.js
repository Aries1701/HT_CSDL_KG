document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([21.0285, 105.8542], 13); // Hà Nội
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  const locations = [
    {
      "name": "Trường THPT Đồng Yên",
      "lat": 22.2103049,
      "lng": 104.7874852,
      "address": "Thôn Đồng Kem, Xã Đồng Yên, Đồng Yên, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.4,
      "type": "THPT",
      "ward":"Bắc Quang",
      "phone": "0912795208"
    },
    {
      "name": "Trường THPT Hùng An",
      "lat": 22.3401633,
      "lng": 104.8749631,
      "address": "8VQG+X2R, Hùng An, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.6,
      "type": "THPT",
      "ward":"Bắc Quang",
      "phone": "0914626950"
    },
    {
      "name": "Trường THPT Kim Ngọc",
      "lat": 22.43239258754683,
      "lng": 104.93491663800512,
      "address": "CWJM+VX8, Kim Ngọc, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.1,
      "type": "THPT",
      "ward":"Bắc Quang",
      "phone": "0834316692"
    },
    {
      "name": "Trường THCS&THPT Liên Hiệp",
      "lat": 22.39739993,
      "lng": 105.035306,
      "address": "92VM+2JX, Liên Hiệp, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.1,
      "type": "THCS&THPT",
      "ward":"Bắc Quang",
      "phone": "0949103686"
    },
    {
      "name": "Trường PTDT NT Bắc Quang",
      "lat": 22.39725611,
      "lng": 104.8230861,
      "address": "107 QL2, TT. Việt Quang, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.1,
      "type": "PTDT NT",
      "ward":"Bắc Quang",
      "phone": "0915836025"
    },
    {
      "name": "Trường THPT Việt Vinh",
      "lat": 22.41120141,
      "lng": 104.8066162,
      "address": "CR64+CJ5, QL2, TT. Việt Quang, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 3.9,
      "type": "THPT",
      "ward":"Bắc Quang",
      "phone": "0948666319"
    },
    {
      "name": "Trường THPT Tân Quang",
      "lat": 22.47984532,
      "lng": 104.8661401,
      "address": "Tân Quang, Bắc Quang, Hà Giang, Việt Nam",
      "rating": 4.3,
      "type": "THPT",
      "ward":"Bắc Quang",
      "phone": "0919924916"
    },
    {
      "name": "Trường THPT Quang Bình",
      "lat": 22.40433648,
      "lng": 104.5876068,
      "address": "CH3Q+M2G, TT, Quang Bình, Hà Giang, Việt Nam",
      "rating": 4.1,
      "type": "THPT",
      "ward":"Quang Bình",
      "phone": "0915836025"
    },
    {
      "name": "Trường THPT Xuân Giang",
      "lat": 22.32195122496482,
      "lng": 104.6671175171055,
      "address": "Xuân Giang, Quang Bình, Hà Giang, Việt Nam",
      "rating": 4.6,
      "type": "THPT",
      "ward":"Quang Bình",
      "phone": "0944049646"
    },
    {
      "name": "Trường THCS&THPT Nà Chì",
      "lat": 22.51427026,
      "lng": 104.5090109,
      "address": "Nà Chi, Xín Mần, Hà Giang, Việt Nam",
      "rating": 4.8,
      "type": "THCS&THPT",
      "ward":"Xín Mần",
      "phone": "0838521009"
    },
    {
      "name": "Trường THPT Xín Mần",
      "lat": 22.68301426,
      "lng": 104.4656038,
      "address": "MFJ7+5XV, Cốc Pài, Xín Mần, Hà Giang, Việt Nam",
      "rating": 3.5,
      "type": "THPT",
      "ward":"Xín Mần",
      "phone": "0942167202"
    },
    {
      "name": "Trường THCS&THPT Xín Mần",
      "lat": 22.74092975,
      "lng": 104.4959906,
      "address": "PFQW+5J6, Xín Mần, Hà Giang, Việt Nam",
      "rating": 4.6,
      "type": "THCS&THPT",
      "ward":"Xín Mần",
      "phone": "0916641202"
    },
    {
      "name": "Trường THPT Hoàng Su Phì",
      "lat": 22.73647247,
      "lng": 104.6748544,
      "address": "PMPG+G24, Tụ Nhân, Hoàng Su Phì, Hà Giang, Việt Nam",
      "rating": 3.7,
      "type": "THPT",
      "ward":"Hoàng Su Phì",
      "phone": "0918259074"
    },
    {
      "name": "Trường THPT Thông Nguyên",
      "lat": 22.56219953,
      "lng": 104.7407492,
      "address": "HP6R+R75, Thông Nguyên, Hoàng Su Phì, Hà Giang, Việt Nam",
      "rating": 4.8,
      "type": "THPT",
      "ward":"Hoàng Su Phì",
      "phone": "0941034789"
    },
    {
      "name": "Trường THPT Việt Lâm",
      "lat": 22.62831236,
      "lng": 104.9616015,
      "address": "JXH6+6MC, QL2, TT. NT Việt Lâm, Vị Xuyên, Hà Giang, Việt Nam",
      "rating": 4.2,
      "type": "THPT",
      "ward":"Vị Xuyên",
      "phone": "0363896888"
    },
    {
      "name": "Trường THPT Vị Xuyên",
      "lat": 22.66672408,
      "lng": 104.9804603,
      "address": "MX8J+J58, Đường Yết Kiêu, TT Vị Xuyên, Thị xã Hà Giang, Hà Giang, Việt Nam",
      "rating": 4.0,
      "type": "THPT",
      "ward":"Vị Xuyên",
      "phone": "0839129168"
    },
    {
      "name": "Trường THCS&THPT Linh Hồ",
      "lat": 22.70611962,
      "lng": 105.0528919,
      "address": "P343+956, Linh Hồ, Vị Xuyên, Hà Giang, Việt Nam",
      "rating": 3.7,
      "type": "THCS&THPT",
      "ward":"Vị Xuyên",
      "phone": "0912009648"
    },
    {
      "name": "Trường THCS&THPT Phương Tiến",
      "lat": 22.86506748,
      "lng": 104.9207273,
      "address": "Km 9, Phương Tiến, Vị Xuyên, Hà Giang, Việt Nam",
      "rating": 4.2,
      "type": "THCS&THPT",
      "ward":"Vị Xuyên",
      "phone": "0919019619"
    },
    {
      "name": "Trường PTDT NT Yên Minh",
      "lat": 23.1182394,
      "lng": 105.1546046,
      "address": "45C7+5C2, TT. Yên Minh, Yên Minh, Hà Giang, Việt Nam",
      "rating": 4.4,
      "type": "PTDT NT",
      "ward":"Yên Minh",
      "phone": "0912802046"
    },
    {
      "name": "Trung GDTX-HN tỉnh",
      "lat": 22.82592525,
      "lng": 104.9868244,
      "address": "RXCP+WHH, P. Minh Khai, Hà Giang, Việt Nam",
      "rating": 3.7,
      "type": "GDTX",
      "ward":"Minh Khai",
      "phone": "0914057672"
    },
    {
      "name": "Trường CĐSP Hà Giang",
      "lat": 22.73647247,
      "lng": 104.6748544,
      "address": "RX7J+2CH, P. Nguyễn Trãi, Hà Giang, Việt Nam",
      "rating": 4.3,
      "type": "CĐSP",
      "ward":"Nguyễn Trãi",
      "phone": "0915273989"
    },
  ];

  let userPosition = null; // Lưu vị trí người dùng
  let routeLine = null; // Để lưu trữ đường đi vẽ trên bản đồ
  const locationList = document.getElementById("location-list");

  // Hiển thị tất cả các marker
  const markers = locations.map((location) => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);

    // Thêm tooltip hiển thị tên địa điểm
    marker.bindTooltip(location.name, {
      permanent: true, // Hiển thị cố định
      direction: "top", // Vị trí trên marker
      offset: [0, -10], // Dịch tooltip lên trên marker
    });

    // Thêm thông tin chi tiết vào pop-up
    marker.bindPopup(`
      <b>${location.name}</b><br>
      ${location.address}<br>
      ⭐ ${location.rating} <br>
      📞 ${location.phone}<br>

      <button class="route-button" onclick="getRoute(${location.lat}, ${location.lng})"> 📍 Chỉ đường </button>
    `);

    return marker;
  });

  // Hiển thị danh sách địa điểm
  function updateLocationList(filteredLocations) {
    locationList.innerHTML = "";
    filteredLocations.forEach((location) => {
      const originalIndex = locations.indexOf(location); // Lấy chỉ mục thực sự từ mảng gốc
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${location.name}</strong><br>
        ${location.address}<br>
        ⭐ ${location.rating}
        <button onclick="focusMap(${originalIndex})">Xem trên bản đồ</button>
      `;
      locationList.appendChild(li);
    });
  }

  updateLocationList(locations);

  // Lọc địa điểm
  document.getElementById("filter-btn").addEventListener("click", () => {

    const schoolFilter = document.getElementById("school-select").value;
const wardFilter = document.getElementById("ward-select").value;

let filteredLocations = locations.filter((loc) => {
  let matches = true;

  if (wardFilter !== "") {
    matches = matches && loc.ward === wardFilter;
  }

  if (schoolFilter !== "") {
    matches = matches && loc.type === schoolFilter;
  }

  return matches;
});


    // Cập nhật danh sách và ẩn marker không cần thiết
    updateLocationList(filteredLocations);
    markers.forEach((marker, index) => {
      const location = locations[index];
      // Kiểm tra xem địa điểm này có nằm trong kết quả lọc hay không
      if (filteredLocations.includes(location)) {
        marker.setOpacity(1); // Hiện marker
        marker.getTooltip().setOpacity(1); //Hiện tooltip
      } else {
        marker.setOpacity(0); // Ẩn marker (không cần xóa khỏi bản đồ)
        marker.getTooltip().setOpacity(0); // Ẩn tooltip
      }
    });

  });

  // Lấy vị trí người dùng
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        L.marker([userPosition.lat, userPosition.lng], {
          icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            iconSize: [45, 45],
          }),
        })

          .addTo(map)
          .bindPopup('<div style="font-weight: bold; font-size: 17px; color: #333;">Bạn đang ở đây!</div>')
          .openPopup();
        map.setView([userPosition.lat, userPosition.lng], 17);
        if (nearbyRepairPoints.length > 0) {
          nearbyRepairPoints.forEach(async point => {
            // Lấy địa chỉ từ Nominatim
            const address = await getAddressFromCoordinates(point.lat, point.lng);

            // Đánh dấu từng điểm sửa xe với địa chỉ từ OpenStreetMap
            L.marker([point.lat, point.lng]).addTo(map)
              .bindPopup(`<b>${point.name}</b><br>Địa chỉ: ${address}<br><button onclick="getRoute(${userLat}, ${userLng}, ${point.lat}, ${point.lng})">Tìm đường</button>`);
          });

          // Phóng to để hiển thị cả vị trí người dùng và các điểm sửa xe gần nhất
          map.setView([userLat, userLng], 14);
        } else {
          alert("Không tìm thấy điểm sửa xe nào trong bán kính 10km.");
        }
      },
      (error) => {
        console.error("Lỗi định vị: ", error.message);
      }
    );
  } else {
    alert("Trình duyệt không hỗ trợ định vị GPS.");
  }

  // Hàm lấy tuyến đường từ OSRM API
  async function drawRoute(userLat, userLng, destLat, destLng) {
    const url = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${destLng},${destLat}?overview=full&geometries=geojson&steps=true`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0].geometry.coordinates;
        const latLngs = route.map(coord => [coord[1], coord[0]]);

        // Xóa đường cũ nếu có
        if (routeLine) {
          map.removeLayer(routeLine);
        }

        // Vẽ đường đi mới
        routeLine = L.polyline(latLngs, {
          color: 'blue',          // Màu xanh dương
          weight: 7,              // Độ dày của đường
          opacity: 0.6,           // Độ mờ (0.6 là 60% hiển thị)
          lineJoin: 'round',      // Các góc tròn mềm mại
          lineCap: 'round',       // Đầu và đuôi đường tròn đẹp 


        }).addTo(map);


        map.fitBounds(routeLine.getBounds());

        // Tính khoảng cách giữa hai điểm
        const distance = getDistance(userLat, userLng, destLat, destLng).toFixed(2); // khoảng cách tính được (km)

        // Hiển thị khoảng cách trong popup của tuyến đường
        routeLine.bindPopup(`<b>Khoảng cách: ${distance} km</b>`).openPopup();
      } else {
        alert("Không tìm thấy đường đi.");
      }
    } catch (error) {
      console.error("Lỗi khi vẽ đường:", error);
      alert("Đã xảy ra lỗi khi lấy dữ liệu tuyến đường.");
    }
    map.on('click', () => {
      if (routeLine) {
        map.removeLayer(routeLine); // xóa chỉ đường khi ấn vào bản đồ
        routeLine = null;
      }
    });

  }

  // Hàm tập trung bản đồ vào vị trí
  window.focusMap = (index) => {
    const location = locations[index];
    map.setView([location.lat, location.lng], 15);
    markers[index].openPopup();
  };

  // Tính khoảng cách giữa hai điểm (Haversine Formula)
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Khoảng cách (km)
  }
  // Chỉ đường từ vị trí người dùng
  window.getRoute = (lat, lng) => {
    if (!userPosition) {
      alert("Vui lòng cho phép truy cập vị trí của bạn để sử dụng tính năng chỉ đường.");
      return;
    }
    drawRoute(userPosition.lat, userPosition.lng, lat, lng);
  };

  // Xóa tuyến đường hiện tại (nếu cần)
  window.clearRoute = () => {
    if (routeLine) {
      map.removeLayer(routeLine);
      routeLine = null;
    }
  };
});